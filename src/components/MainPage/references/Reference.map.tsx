import { useRef } from "react";
import { Info, RefreshCcw, ZoomIn, ZoomOut } from "lucide-react";
import { useInteractiveMap } from "./useInteractiveMap";

const ReferenceMap = () => {
  const mapRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const mapGroupRef = useRef<SVGGElement | null>(null);

  useInteractiveMap(mapRef, tooltipRef, mapGroupRef);

  return (
    <div className="mb-16 rounded-xl p-6 overflow-hidden">
      <div className="map-container h-[450px] mx-auto max-w-5xl relative rounded-lg overflow-hidden">
        <svg id="world-map" ref={mapRef} className="w-full h-full"></svg>
        <div id="map-tooltip" ref={tooltipRef} className="map-tooltip"></div>

        <div className="absolute top-4 right-4 flex flex-col space-y-2 z-10">
          <button id="zoom-in" className="bg-black/40 hover:bg-amber-700/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors focus:outline-none">
            <ZoomIn className="size-5" />
          </button>
          <button id="zoom-reset" className="bg-black/40 hover:bg-amber-700/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors focus:outline-none">
            <RefreshCcw className="size-5" />
          </button>
          <button id="zoom-out" className="bg-black/40 hover:bg-amber-700/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors focus:outline-none">
            <ZoomOut className="size-5" />
          </button>
        </div>
      </div>

      <div className="text-center text-neutral-600 mt-4 mb-2 flex items-center justify-center">
        <Info className="size-5 mr-1 text-amber-700" />
        <p>Hover or tap on highlighted countries to see our clients</p>
      </div>

      <div className="flex items-center justify-center gap-8 max-w-xl mx-auto">
        <div className="flex items-center">
          <span className="inline-block size-4 rounded-sm bg-white/80 mr-2"></span>
          <span className="text-neutral-600">Other Countries</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block size-4 rounded-sm bg-amber-700 mr-2"></span>
          <span className="text-neutral-600">Client Locations</span>
        </div>
      </div>
    </div>
  );
};

export default ReferenceMap;