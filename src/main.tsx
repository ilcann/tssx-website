import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/index.css"; // Load critical CSS first
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router";
import LoadingPage from "./components/ui/LoadingPage.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.ts";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <Suspense fallback={<LoadingPage />}>
              <App />
            </Suspense>
          </I18nextProvider>
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
