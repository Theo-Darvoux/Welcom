/**
 * i18n audit — uses Node.js --experimental-strip-types (Node 22.6+) to import
 * TypeScript locale files directly without a build step.
 *
 * Checks:
 *  1. Missing keys  — keys in `en` absent from another locale
 *  2. Extra keys    — keys in a locale not present in `en` (stale/orphaned)
 *  3. Unused keys   — keys defined in `en` but never referenced in src/**
 *
 * Usage: node --experimental-strip-types scripts/i18n-audit.mjs
 */

import { readFileSync, readdirSync } from "fs";
import { resolve, join } from "path";

const ROOT = resolve(import.meta.dirname, "..");
const LOCALES_DIR = join(ROOT, "src/i18n/locales");
const SRC_DIR = join(ROOT, "src");

// ── Helpers ───────────────────────────────────────────────────────────────────

function flattenKeys(obj, prefix = "") {
  const result = [];
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) {
      result.push(...flattenKeys(v, path));
    } else {
      result.push(path);
    }
  }
  return result;
}

// Map locale file name → named export identifier
const EXPORT_MAP = {
  "en": "en", "fr": "fr", "es": "es", "de": "de",
  "pt-BR": "ptBR", "zh-CN": "zhCN", "zh-TW": "zhTW",
  "hi": "hi", "vi": "vi", "ar": "ar",
};

async function getKeys(localeName) {
  const filePath = join(LOCALES_DIR, `${localeName}.ts`);
  const exportId = EXPORT_MAP[localeName];
  try {
    const mod = await import(filePath);
    const obj = mod[exportId] ?? mod.default;
    if (!obj) return null;
    return new Set(flattenKeys(obj));
  } catch (e) {
    console.error(`  ⚠️  Error loading ${localeName}: ${e.message.split("\n")[0]}`);
    return null;
  }
}

/** Walk src/ and collect all referenced translation key paths. */
function collectUsedKeys() {
  const used = new Set();
  const exts = [".astro", ".tsx", ".ts", ".js"];

  function walk(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!["node_modules", ".astro", "locales", ".git", "dist"].some(x => entry.name === x)) {
          walk(full);
        }
      } else if (exts.some(e => entry.name.endsWith(e))) {
        const content = readFileSync(full, "utf8");

        // t("key.sub") or t('key.sub')
        const strRe = /\bt\(\s*["'`]([^"'`\n]+)["'`]\s*\)/g;
        let m;
        while ((m = strRe.exec(content)) !== null) used.add(m[1]);

        // t.section.key property-access chains (e.g. t.nav.home)
        const chainRe = /\bt\.([a-zA-Z_$][a-zA-Z0-9_$.]*)/g;
        while ((m = chainRe.exec(content)) !== null) {
          const path = m[1].replace(/\.$/, "");
          if (path && !path.startsWith("(")) used.add(path);
        }
      }
    }
  }
  walk(SRC_DIR);
  return used;
}

// ── Main ─────────────────────────────────────────────────────────────────────

const LOCALE_NAMES = readdirSync(LOCALES_DIR)
  .filter(f => f.endsWith(".ts") && !f.startsWith("."))
  .map(f => f.replace(".ts", ""))
  .sort();

console.log("🔍  Loading locale files...\n");

const enKeys = await getKeys("en");
if (!enKeys) {
  console.error("❌  Could not load en.ts — aborting.");
  process.exit(1);
}
console.log(`📖  en.ts — ${enKeys.size} total leaf keys\n`);

// ── 1. Missing / extra keys per locale ───────────────────────────────────────
console.log("═".repeat(62));
console.log("  MISSING / EXTRA KEYS  (compared to en)");
console.log("═".repeat(62));

let totalMissing = 0;
let totalExtra = 0;

for (const name of LOCALE_NAMES) {
  if (name === "en") continue;
  const localeKeys = await getKeys(name);

  if (!localeKeys) {
    console.log(`\n⚠️  ${name} — skipped (parse error)`);
    continue;
  }

  const missing = [...enKeys].filter(k => !localeKeys.has(k));
  const extra   = [...localeKeys].filter(k => !enKeys.has(k));

  totalMissing += missing.length;
  totalExtra += extra.length;

  if (missing.length === 0 && extra.length === 0) {
    console.log(`\n✅  ${name.padEnd(8)} — all ${localeKeys.size} keys match en`);
  } else {
    console.log(`\n🌐  ${name}  (${localeKeys.size} keys)`);
    if (missing.length) {
      console.log(`   ❌ Missing (${missing.length}):`);
      missing.slice(0, 60).forEach(k => console.log(`      - ${k}`));
      if (missing.length > 60) console.log(`      … and ${missing.length - 60} more`);
    }
    if (extra.length) {
      console.log(`   ➕ Extra/stale (${extra.length}):`);
      extra.slice(0, 20).forEach(k => console.log(`      + ${k}`));
      if (extra.length > 20) console.log(`      … and ${extra.length - 20} more`);
    }
  }
}

// ── 2. Unused keys ───────────────────────────────────────────────────────────
console.log("\n" + "═".repeat(62));
console.log("  UNUSED i18n KEYS  (defined in en, never referenced in src)");
console.log("═".repeat(62));

const usedKeys = collectUsedKeys();
console.log(`\n  Found ${usedKeys.size} key references across source files.\n`);

const unusedLeaves = [...enKeys].filter(key => {
  return ![...usedKeys].some(used =>
    used === key ||
    used.startsWith(key + ".") ||
    key.startsWith(used + ".")
  );
});

if (unusedLeaves.length === 0) {
  console.log("  ✅  All keys appear to be referenced in source files.");
} else {
  console.log(`  ⚠️  ${unusedLeaves.length} potentially unused leaf keys:`);
  unusedLeaves.slice(0, 80).forEach(k => console.log(`     - ${k}`));
  if (unusedLeaves.length > 80) console.log(`     … and ${unusedLeaves.length - 80} more`);
}

// ── Summary ───────────────────────────────────────────────────────────────────
console.log("\n" + "═".repeat(62));
console.log("  SUMMARY");
console.log("═".repeat(62));
console.log(`  en keys total:              ${enKeys.size}`);
console.log(`  Missing across locales:     ${totalMissing}`);
console.log(`  Extra/stale across locales: ${totalExtra}`);
console.log(`  Potentially unused in src:  ${unusedLeaves.length}`);
console.log("");
