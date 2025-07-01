import { useRef } from "react";
import { RefreshCcw, ZoomIn, ZoomOut } from "lucide-react";
import { useInteractiveMap } from "./useInteractiveMap";
import { useTranslation } from 'react-i18next';
import ReferencesClientList from "./ReferencesClientList";

const ReferenceMap = () => {
  const { t } = useTranslation('references');
  const mapRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const mapGroupRef = useRef<SVGGElement | null>(null);

  useInteractiveMap(mapRef, tooltipRef, mapGroupRef);

  return (
    <section id="map">
      <div className="section-content">
        <div className="content-box">
          <div className="vertical-stack">
            <div className="map-container max-w-5xl w-full mx-auto relative rounded-lg overflow-hidden">
              <svg id="world-map" height="450px" ref={mapRef}></svg>
              <div id="map-tooltip" ref={tooltipRef} className="map-tooltip fixed z-50 pointer-events-none bg-white/80 backdrop-blur border border-amber-200 shadow-lg rounded-lg text-neutral-900 px-4 py-2 transition-all" style={{minWidth: '220px', maxWidth: '280px', display: 'none'}}></div>
              <div className="absolute top-4 right-4 flex flex-col space-y-2 z-10">
                <button id="zoom-in" className="bg-white/80 hover:bg-amber-700/90 text-neutral-900 hover:text-white w-10 h-10 rounded-full flex items-center justify-center shadow transition-colors focus:outline-none">
                  <ZoomIn className="size-5" />
                </button>
                <button id="zoom-reset" className="bg-white/80 hover:bg-amber-700/90 text-neutral-900 hover:text-white w-10 h-10 rounded-full flex items-center justify-center shadow transition-colors focus:outline-none">
                  <RefreshCcw className="size-5" />
                </button>
                <button id="zoom-out" className="bg-white/80 hover:bg-amber-700/90 text-neutral-900 hover:text-white w-10 h-10 rounded-full flex items-center justify-center shadow transition-colors focus:outline-none">
                  <ZoomOut className="size-5" />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center gap-8 max-w-xl mx-auto">
              <div className="flex items-center">
                <span className="inline-block size-4 rounded-sm border-1 bg-white/80 mr-2"></span>
                <span className="text-neutral-600">{t('map.other_countries')}</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block size-4 rounded-sm bg-amber-700 mr-2"></span>
                <span className="text-neutral-600">{t('map.client_locations')}</span>
              </div>
            </div>
            <ReferencesClientList />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ReferenceMap;