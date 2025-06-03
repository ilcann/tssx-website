import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Load critical CSS first
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router";
import LoadingPage from "./components/ui/LoadingPage.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <Suspense fallback={<LoadingPage />}>
            <App />
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
