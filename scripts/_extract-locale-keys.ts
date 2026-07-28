/**
 * i18n key extractor — called by i18n-audit.mjs via tsx.
 * Usage: tsx scripts/_extract-locale-keys.ts <localeName>
 * Outputs a JSON array of dotted key paths to stdout.
 */

import { en } from "../src/i18n/locales/en";
import { fr } from "../src/i18n/locales/fr";
import { es } from "../src/i18n/locales/es";
import { de } from "../src/i18n/locales/de";
import { ptBR } from "../src/i18n/locales/pt-BR";
import { zhCN } from "../src/i18n/locales/zh-CN";
import { zhTW } from "../src/i18n/locales/zh-TW";
import { hi } from "../src/i18n/locales/hi";
import { vi } from "../src/i18n/locales/vi";
import { ar } from "../src/i18n/locales/ar";

const locales: Record<string, object> = {
  en, fr, es, de, "pt-BR": ptBR, "zh-CN": zhCN, "zh-TW": zhTW, hi, vi, ar,
};

function flattenKeys(obj: object, prefix = ""): string[] {
  const result: string[] = [];
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) {
      result.push(...flattenKeys(v as object, path));
    } else {
      result.push(path);
    }
  }
  return result;
}

const localeName = process.argv[2];
if (!localeName || !locales[localeName]) {
  console.error(`Unknown locale: ${localeName}`);
  process.exit(1);
}

const keys = flattenKeys(locales[localeName]);
console.log(JSON.stringify(keys));
