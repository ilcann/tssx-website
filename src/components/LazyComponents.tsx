import { lazy } from 'react';

// Lazy load heavy components
export const LazyReferences = lazy(() => import('../sections/References'));
export const LazyDetailedSolutions = lazy(() => import('../sections/DetailedSolutions'));
export const LazyAbout = lazy(() => import('../sections/About')); 