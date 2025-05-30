import { lazy } from "react";

// Lazy load heavy components
export const LazyReferences = lazy(() => import("./MainPage/ReferencesSection"));
export const LazyFAQSection = lazy(() => import("./MainPage/FAQSection"));
