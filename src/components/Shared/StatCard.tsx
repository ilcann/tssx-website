import type { ReactNode } from "react";
import StatCounter from "@/components/ui/StatCounter";

interface StatCardProps {
  variant?: "centered" | "inline"; // default: centered
  icon: ReactNode;
  title: string;
  description?: string; // only for inline
  value?: string;       // only for centered
}

const StatCard = ({
  variant = "centered",
  icon,
  title,
  description,
  value,
}: StatCardProps) => {
  if (variant === "inline") {
    return (
      <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-100 flex items-start">
        <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mr-4 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h4 className="font-bold text-neutral-900 mb-1">{title}</h4>
          <p className="text-sm text-neutral-600">{description}</p>
        </div>
      </div>
    );
  }

  // Default: centered
  return (
    <div className="bg-neutral-50 rounded-lg p-4 text-center flex flex-col items-center">
      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-2">
        {icon}
      </div>
      <div className="text-2xl font-bold text-neutral-900">
        <StatCounter value={value || ""} enableScrollSpy={true} />
      </div>
      <div className="text-neutral-600 text-sm">{title}</div>
    </div>
  );
};

export default StatCard;