import { lazy } from "react";

// Lazy load heavy components
export const LazyFAQSection = lazy(() => import("./MainPage/FAQSection"));
export const LazyContactSection = lazy(() => import("./Shared/ContactBanner"));
export const LazyTestimonials = lazy(() => import("./MainPage/testimonials/Testimonials"));
