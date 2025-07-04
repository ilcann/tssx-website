import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LazySection = ({ children, fallback }: LazySectionProps) => {
  const { t } = useTranslation();
  
  const defaultFallback = (
    <div className="min-h-[60vh] flex items-center justify-center bg-neutral-50">
      <div className="text-center">
        <Loader2 className="h-6 w-6 animate-spin mx-auto mb-4 text-amber-700" />
        <p className="text-neutral-600">{t("loading")}</p>
      </div>
    </div>
  );

  return <Suspense fallback={fallback || defaultFallback}>{children}</Suspense>;
};

export default LazySection;
