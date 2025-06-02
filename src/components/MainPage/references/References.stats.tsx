import AnimatedStat from "@/components/ui/AnimatedStat";
import { Users, Award, Code, BarChart4 } from "lucide-react";

const ReferenceStats = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
    <AnimatedStat icon={<Users className="size-6" />} value="15+" label="Team Members" />
    <AnimatedStat icon={<Award className="size-6" />} value="10+" label="Years Experience" />
    <AnimatedStat icon={<Code className="size-6" />} value="100+" label="Projects Delivered" />
    <AnimatedStat icon={<BarChart4 className="size-6" />} value="98%" label="Client Satisfaction" />
  </div>
);

export default ReferenceStats;