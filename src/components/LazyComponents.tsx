import { lazy } from "react";

// Lazy load heavy components
export const LazyFAQSection = lazy(() => import("./MainPage/FAQSection"));
export const LazyContactSection = lazy(() => import("./MainPage/ContactSection"));
export const LazyTestimonials = lazy(() => import("./MainPage/testimonials/Testimonials"));
