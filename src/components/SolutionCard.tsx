import type { ReactNode } from "react";

export interface SolutionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const SolutionCard = ({ title, description, icon }: SolutionCardProps) => {
  return (
    <div className="h-full relative cursor-pointer">
      <div className="relative w-full h-full overflow-hidden bg-white rounded-xl shadow-lg border border-neutral-200 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group">
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
        
        {/* Card content */}
        <div className="p-6 flex flex-col items-center relative z-10">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-100 mb-4 text-amber-600 group-hover:bg-white transition-colors duration-300">
            {icon}
          </div>
          
          <h3 className="text-xl font-bold text-center text-neutral-900 group-hover:text-white transition-colors duration-300 mb-4">
            {title}
          </h3>
          
          <p className="text-sm text-neutral-600 text-center leading-relaxed group-hover:text-white transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard; 