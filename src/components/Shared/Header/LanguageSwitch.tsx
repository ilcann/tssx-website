import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router";
import { Globe } from "lucide-react";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { pathname, search, hash } = useLocation();

  const currentLang = i18n.language.startsWith("tr") ? "tr" : "en";
  const nextLang    = currentLang === "tr" ? "en" : "tr";

  const handleToggleLanguage = () => {
    // 1) i18next dili güncelle
    i18n.changeLanguage(nextLang);

    // 2) URL'deki ilk segmenti değiştir -> "/tr/..."  →  "/en/..."
    const segments = pathname.split("/");      // ["", "tr", "hakkimizda"]
    // Eğer path "/" ise (["",""]) => ['', '', ''] hali oluşacağı için koruyucu
    if (segments.length > 1 && (segments[1] === "tr" || segments[1] === "en")) {
      segments[1] = nextLang;
    } else {
      // Dil öneki yoksa başa ekle
      segments.splice(1, 0, nextLang);
    }
    const newPath = segments.join("/") || `/${nextLang}`;

    // 3) Arama parametreleri ve hash'i koruyarak yönlendir
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
