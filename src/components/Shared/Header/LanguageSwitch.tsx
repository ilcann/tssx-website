import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LanguageSwitch = () => {
  const { i18n } = useTranslation("common");

  const currentLang = i18n.language === "tr" ? "tr" : "en";
  const nextLang = currentLang === "tr" ? "en" : "tr";

  const handleToggleLanguage = () => {
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={handleToggleLanguage}
      className="nav-clickable inline-flex gap-1 uppercase text-xs"
      title={`Switch to ${nextLang.toUpperCase()}`}
    >
      <span>{currentLang}</span>
      <Globe size={16} />
    </button>
  );
};

export default LanguageSwitch;