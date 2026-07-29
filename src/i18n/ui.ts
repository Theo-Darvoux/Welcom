

import { defaultLang, type Locale } from "./config";
import { en, developerName, developerLink, type LocaleTranslation, type Translation } from "./locales/en";
import { de } from "./locales/de";
import { fr } from "./locales/fr";
import { es } from "./locales/es";
import { ptBR } from "./locales/pt-BR";
import { zhCN } from "./locales/zh-CN";
import { zhTW } from "./locales/zh-TW";
import { hi } from "./locales/hi";
import { vi } from "./locales/vi";
import { ar } from "./locales/ar";

export { developerName, developerLink };

const dictionaries: Record<Locale, LocaleTranslation> = {
  en,
  fr,
  es,
  de,
  "pt-BR": ptBR,
  "zh-CN": zhCN,
  "zh-TW": zhTW,
  hi,
  vi,
  ar,
};

function deepMerge<T>(target: T, source: any): T {
  if (!source || typeof source !== "object") return target;
  if (!target || typeof target !== "object") return source;
  const result: any = Array.isArray(target) ? [...target] : { ...target };
  for (const key of Object.keys(source)) {
    const targetVal = (target as any)[key];
    const sourceVal = source[key];
    if (sourceVal !== undefined) {
      if (
        typeof sourceVal === "object" &&
        sourceVal !== null &&
        !Array.isArray(sourceVal) &&
        typeof targetVal === "object" &&
        targetVal !== null &&
        !Array.isArray(targetVal)
      ) {
        result[key] = deepMerge(targetVal, sourceVal);
      } else {
        result[key] = sourceVal;
      }
    }
  }
  return result;
}

export function useTranslations(lang: Locale): Translation {
  const dict = dictionaries[lang];
  if (lang === defaultLang || !dict) return en;
  return deepMerge(en, dict);
}

export type { Translation };
