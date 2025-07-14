import { Outlet, useParams, Navigate } from "react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { Lang } from "@/routes/slugs";

export default function LangLayout() {
  const { lng } = useParams<{ lng?: Lang }>();
  const { i18n } = useTranslation();

  // 1) Dil geçerli mi?
  const invalidLang = lng !== "tr" && lng !== "en";

  // 2) URL'deki dil ile i18next senkron
  useEffect(() => {
    if (!invalidLang && lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [invalidLang, lng, i18n]);

  // 3) JSX aşamasında karar
  if (invalidLang) {
    return <Navigate to="/tr" replace />;
  }

  return <Outlet />;
}
