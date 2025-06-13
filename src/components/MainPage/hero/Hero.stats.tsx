import { forwardRef } from "react";
import AnimatedStat from "../../ui/AnimatedStat";
import { CodeIcon, BotIcon, ServerIcon } from "lucide-react";

const HeroStats = forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
    className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10 max-w-4xl mx-auto text-white mt-10"
  >
    <AnimatedStat
      value="100+"
      label="Projects Delivered"
      icon={<CodeIcon className="size-6" />}
    />
    <AnimatedStat
      value="98%"
      label="Success Rate"
      icon={<BotIcon className="size-6" />}
    />
    <AnimatedStat
      value="24/7"
      label="Continuous Support"
      icon={<ServerIcon className="size-6" />}
    />
  </div>
));

export default HeroStats;
