import { CodeIcon } from "lucide-react";
import { forwardRef } from "react";

const HeroTagline = forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
    className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6 border border-white/30"
  >
    <CodeIcon className="text-white mr-2 size-4" />
    <h1 className="text-white font-medium text-sm">
      Smart Solutions for Your Future
    </h1>
  </div>
));

export default HeroTagline;