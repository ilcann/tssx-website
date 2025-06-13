import { useState, useEffect, useRef } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const languages = [
  { code: "tr", label: "Türkçe" },
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "hi", label: "हिन्दी" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const changeLang = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-sm text-neutral-200 hover:text-amber-400 hover:bg-neutral-800 transition-colors duration-200 font-medium cursor-pointer"
        aria-label="Language"
      >
        <Globe size={16} />
        <ChevronDown size={14} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-neutral-900 rounded shadow-lg ring-1 ring-white/10 z-20">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLang(lang.code)}
              className={clsx(
                "w-full text-left px-4 py-2 text-sm text-neutral-200 hover:text-amber-400 hover:bg-neutral-800 transition-colors duration-200 font-medium cursor-pointer",
                i18n.language === lang.code && "bg-neutral-800"
              )}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
