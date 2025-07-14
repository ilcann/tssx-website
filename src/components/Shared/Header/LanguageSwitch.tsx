import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router";
import { Globe } from "lucide-react";
import { slugs } from "@/routes/slugs";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { pathname, search, hash } = useLocation();

  const currentLang = i18n.language.startsWith("tr") ? "tr" : "en";
  const nextLang = currentLang === "tr" ? "en" : "tr";

  const handleToggleLanguage = () => {
    i18n.changeLanguage(nextLang);

    const segments = pathname.split("/"); // ["", "en", "solutions", "observability"]

    // Dil öneki varsa güncelle, yoksa başa ekle
    if (segments.length > 1 && (segments[1] === "tr" || segments[1] === "en")) {
      segments[1] = nextLang;
    } else {
      segments.splice(1, 0, nextLang);
    }

    // Çözümler sayfasıysa slug'ları da çevir
    const currentSlugs = slugs[currentLang];
    const nextSlugs = slugs[nextLang];

    if (
      segments[2] === currentSlugs.solutions &&
      segments[3] // örn: observability
    ) {
      const currentSolutionSlug = segments[3];

      // slug'ı karşılık gelen key ile eşleştir
      const matchedEntry = Object.entries(currentSlugs.solutionList).find(
        ([, val]) => val === currentSolutionSlug
      );

    if (matchedEntry) {
      const [solutionKey] = matchedEntry;

      if (solutionKey in nextSlugs.solutionList) {
        // çözüm: type assertion ile
        segments[2] = nextSlugs.solutions;
        segments[3] = nextSlugs.solutionList[solutionKey as keyof typeof nextSlugs.solutionList];
      }
    }
    }

    const newPath = segments.join("/") || `/${nextLang}`;
    navigate(newPath + search + hash, { replace: true });
  };

  return (
    <button
      onClick={handleToggleLanguage}
      className="nav-clickable inline-flex items-center gap-1 uppercase text-xs"
      title={`Switch to ${nextLang.toUpperCase()}`}
    >
      <span>{currentLang}</span>
      <Globe size={16} />
    </button>
  );
}
