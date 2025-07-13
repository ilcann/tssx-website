import enSlugs from '@/locales/en/slugs.json';
import trSlugs from '@/locales/tr/slugs.json';

export const slugs = {
  en: enSlugs,
  tr: trSlugs,
} as const;

export type Lang = keyof typeof slugs;
export type PageKey = keyof typeof slugs.en;