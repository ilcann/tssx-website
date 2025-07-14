// src/AppRoutes.tsx
import { Routes, Route, Navigate } from "react-router";
import { lazy } from "react";
import LangLayout  from "@/components/LangLayout";
import HomePage    from "@/pages/MainPage";
import { slugs } from "./slugs";

const About        = lazy(() => import("@/pages/About"));
const Contact      = lazy(() => import("@/pages/Contact"));
const References   = lazy(() => import("@/pages/References"));
const PartnersPage = lazy(() => import("@/pages/Partners"));
const Solution     = lazy(() => import("@/pages/Solution"));

export default function AppRoutes() {
  return (
    <Routes>
      {/* kök → İngilizce */}
      <Route path="/" element={<Navigate to="/en" replace />} />

      {/* === Dil layout'u ================================================= */}
      <Route path=":lng" element={<LangLayout />}>
        {/* /tr  veya  /en */}
        <Route index element={<HomePage />} />

        {/* statik sayfalar (her slug için ayrı satır) */}
        <Route path={slugs.tr.about}      element={<About />} />
        <Route path={slugs.en.about}      element={<About />} />

        <Route path={slugs.tr.contact}    element={<Contact />} />
        <Route path={slugs.en.contact}    element={<Contact />} />

        <Route path={slugs.tr.references} element={<References />} />
        <Route path={slugs.en.references} element={<References />} />

        <Route path={slugs.tr.partners}   element={<PartnersPage />} />
        <Route path={slugs.en.partners}   element={<PartnersPage />} />

        {/* dinamik çözüm sayfası */}
        <Route
          path={`${slugs.tr.solutions}/:slug`}
          element={<Solution />}
        />
        <Route
          path={`${slugs.en.solutions}/:slug`}
          element={<Solution />}
        />
      </Route>
    </Routes>
  );
}
