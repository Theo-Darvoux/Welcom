

export const defaultLang = "en" as const;

export const locales = [
  "en",
  "fr",
  "es",
  "de",
  "pt-BR",
  "zh-CN",
  "zh-TW",
  "hi",
  "vi",
  "ar",
] as const;

export type Locale = (typeof locales)[number];

export interface LocaleMeta {
  
  label: string;
  
  flag: string;
  
  dir: "ltr" | "rtl";
  
  htmlLang: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: { label: "English", flag: "gb", dir: "ltr", htmlLang: "en" },
  fr: { label: "Français", flag: "fr", dir: "ltr", htmlLang: "fr" },
  es: { label: "Español", flag: "es", dir: "ltr", htmlLang: "es" },
  de: { label: "Deutsch", flag: "de", dir: "ltr", htmlLang: "de" },
  "pt-BR": { label: "Português", flag: "pt", dir: "ltr", htmlLang: "pt-BR" },
  "zh-CN": { label: "简体中文", flag: "cn", dir: "ltr", htmlLang: "zh-CN" },
  "zh-TW": { label: "繁體中文", flag: "tw", dir: "ltr", htmlLang: "zh-TW" },
  hi: { label: "हिन्दी", flag: "in", dir: "ltr", htmlLang: "hi" },
  vi: { label: "Tiếng Việt", flag: "vn", dir: "ltr", htmlLang: "vi" },

  ar: { label: "العربية", flag: "sa", dir: "rtl", htmlLang: "ar" },
};

export const prefixedLocales = locales.filter(
  (l): l is Exclude<Locale, typeof defaultLang> => l !== defaultLang,
);
