import { milestones } from "@/staticComponents/about";
import SpecialText from "../ui/SpecialText";
import AnimatedText from "../ui/AnimatedText";

const Timeline = () => {
  return (
    <div className="relative mt-16">
      <SpecialText
        id="about-our-journey"
        className="text-2xl font-bold text-neutral-900 mb-8 text-center"
      >
        <AnimatedText text="Our Journey" />
      </SpecialText>
      <div className="absolute h-full w-0.5 bg-amber-200 left-1/2 transform -translate-x-1/2 top-12 z-0"></div>

      <div className="relative z-10">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`flex mb-12 items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div
              className={`w-1/2 ${
                index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
              }`}
            >
              <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                <div className="text-amber-700 font-bold text-lg">
                  {milestone.year}
                </div>
                <h4 className="text-neutral-900 font-bold mb-2">
                  {milestone.title}
                </h4>
                <p className="text-neutral-600 text-sm">
                  {milestone.description}
                </p>
              </div>
            </div>

            <div className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center z-10 flex-shrink-0">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>

            <div className="w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
