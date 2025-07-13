import { slugs, type Lang, type PageKey } from "@/routes/slugs";

export default function buildPath(
  lng: Lang,            // "tr" | "en"  … (başka bir dil eklenirse liste genişler)
  page: PageKey,        // "about" | "partners" | "contact" | …  
  extra: string | string[] = []
) {
  // 1) Dil + slug’dan temel yol
  const base = `/${lng}/${slugs[lng][page]}`;

  // 2) İsteğe bağlı `extra` varsa devamına ekle
  return extra.length
    ? `${base}/${Array.isArray(extra) ? extra.join("/") : extra}`
    : base;
}