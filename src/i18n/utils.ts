import { defaultLang, locales, type Locale } from "./config";

export function getLangFromUrl(url: URL): Locale {
  const seg = url.pathname.split("/").filter(Boolean)[0];
  return locales.includes(seg as Locale) ? (seg as Locale) : defaultLang;
}

/** Drop a leading locale segment, returning the canonical (en) path. */
export function stripLocale(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length && locales.includes(parts[0] as Locale)) parts.shift();
  return "/" + parts.join("/");
}

/** Build a locale-specific URL from a canonical path, e.g. ("/guides", "fr") -> "/fr/guides". */
export function localizedPath(canonicalPath: string, lang: Locale): string {
  const clean = canonicalPath.replace(/^\/+|\/+$/g, "");
  const prefix = lang === defaultLang ? "" : `/${lang}`;
  return (prefix + (clean ? `/${clean}` : "")) || "/";
}
