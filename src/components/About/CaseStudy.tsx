import type { CaseStudyProps } from "@/types/about";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Check } from "lucide-react";

const CaseStudy = ({
  title,
  subtitle,
  description,
  points,
}: CaseStudyProps) => {
  return (
    <Card className="bg-white rounded-xl overflow-hidden shadow-lg border border-neutral-200 transition-all duration-300 hover:shadow-xl group">
      <div className="absolute w-full h-1 bg-gradient-to-r from-amber-500 to-amber-600 top-0 left-0 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      <CardHeader className="p-8">
        <div className="text-amber-600 font-medium text-sm uppercase tracking-wider mb-2">
          {title}
        </div>
        <CardTitle className="text-2xl font-bold text-neutral-900 mb-4">
          {subtitle}
        </CardTitle>
        <CardDescription className="text-neutral-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8 pt-0">
        <ul className="space-y-4">
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-start bg-neutral-50 p-4 rounded-lg"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full mt-0.5 mr-4 flex-shrink-0">
                <Check className="text-amber-600 size-5" />
              </div>
              <div>
                <span className="text-amber-600 font-semibold block mb-1">
                  {point.label}
                </span>
                <span className="text-neutral-600 text-sm">{point.value}</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default CaseStudy;
