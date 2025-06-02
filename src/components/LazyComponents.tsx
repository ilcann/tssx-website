import { lazy } from "react";

// Lazy load heavy components

export const LazyReferences = lazy(() => import("./MainPage/references/References"));
export const LazyFAQSection = lazy(() => import("./MainPage/FAQSection"));
export const LazyContactSection = lazy(() => import("./MainPage/ContactSection"));
export const LazyPartners = lazy(() => import("./MainPage/PartnersSection"));
export const LazySolutions = lazy(() => import("./MainPage/solutions/Solutions"));
export const LazyTestimonials = lazy(() => import("./MainPage/testimonials/Testimonials"));
