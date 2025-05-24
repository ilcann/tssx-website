import { ArrowRightIcon, CodeIcon } from "lucide-react";
import CountUp from "react-countup";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import Bubbles from "../components/ui/Bubbles";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative bg-amber-600 min-h-[85vh] flex items-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-64 h-64 rounded-full bg-orange-400 -top-20 -left-20 blur-3xl opacity-60 animate-pulse"></div>
        <div
          className="absolute w-64 h-64 rounded-full bg-orange-300 bottom-20 -right-20 blur-3xl opacity-60 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-56 h-56 rounded-full bg-orange-200 top-1/3 left-1/4 blur-3xl opacity-40 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute w-64 h-64 rounded-full bg-orange-400 -bottom-20 left-1/3 blur-3xl opacity-60 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Add bubble animation with customizable props */}
      <Bubbles count={50} maxSize={100} minSize={20} zIndex={10} />

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-20">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Tag line */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 shadow-md border border-white/30 transition-transform hover:scale-105">
            <CodeIcon className="text-white mr-2 size-4" />
            <h1 className="text-white font-medium text-sm tracking-wide">
              Intelligent Automation & Development
            </h1>
          </div>

          <div className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            <h2 className="text-glow text-white tracking-tight drop-shadow-lg animate-fadeIn">
              Automate Your Future
            </h2>
            <span className="text-3xl text-white/80 font-light italic">
              with
            </span>
            <h2
              className="text-glow text-white tracking-tight drop-shadow-lg mt-2 animate-fadeIn"
              style={{ animationDelay: "0.5s" }}
            >
              Smart Code Solutions
            </h2>

            <div className="text-base md:text-lg text-white mt-6 mb-8 font-medium leading-relaxed max-w-3xl mx-auto">
              Experience the power of{" "}
              <span className="font-semibold text-white relative inline-block">
                intelligent automation
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/40 rounded-full"></span>
              </span>{" "}
              and development tools that streamline your workflow, enhance
              productivity, and accelerate digital transformation. Our
              cutting-edge solutions combine{" "}
              <span className="font-semibold text-white relative inline-block">
                AI-driven automation
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/40 rounded-full"></span>
              </span>{" "}
              with robust development frameworks.
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-center">
              <div
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20 transform transition-all hover:scale-105 hover:bg-white/20 animate-float"
                style={{ animationDelay: "0s" }}
              >
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <p className="text-white/90 font-medium text-base">
                  Automation Accuracy
                </p>
              </div>
              <div
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20 transform transition-all hover:scale-105 hover:bg-white/20 animate-float"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="text-3xl font-bold text-white mb-1">
                  <CountUp
                    start={0}
                    end={500}
                    duration={2.5}
                    suffix="+"
                    enableScrollSpy={!hasAnimated}
                    scrollSpyOnce={true}
                    onEnd={() => setHasAnimated(true)}
                    preserveValue={true}
                    redraw={false}
                  />
                </div>
                <p className="text-white/90 font-medium text-base">
                  Development Tools
                </p>
              </div>
              <div
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20 transform transition-all hover:scale-105 hover:bg-white/20 animate-float"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <p className="text-white/90 font-medium text-base">
                  Continuous Integration
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="solutions"
                smooth={true}
                duration={800}
                offset={-70}
                className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-orange-600/30 transform hover:scale-105 flex items-center group relative overflow-hidden"
              >
                <span className="relative z-10">Explore Solutions</span>
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animated dots overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
        <div className="absolute w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>
    </section>
  );
};

export default Hero;
