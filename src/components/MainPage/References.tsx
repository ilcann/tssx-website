import { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import {
  Info,
  RefreshCcw,
  ZoomIn,
  ZoomOut,
  Users,
  ExternalLink,
  Award,
  Code,
  BarChart4,
} from "lucide-react";
import type { CountryFeature, CountryGroup } from "../../types/reference";
import { Link } from "react-router";
import AnimatedStat from "@/components/ui/AnimatedStat";
import SpecialText from "@/components/ui/SpecialText";
import AnimatedText from "@/components/ui/AnimatedText";
import ClientSlider from "@/components/Reference/ClientSlider";
import { referenceLocations } from "@/staticComponents/reference";
import DecorativeBackground from "@/components/ui/DecorativeBackground";

const References = () => {
  const mapRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const mapGroupRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Convert reference data to the format needed for the map
    const clientCountries: Record<string, CountryGroup> = {
      "792": {
        name: "Türkiye",
        clients:
          referenceLocations
            .find((loc) => loc.country === "Türkiye")
            ?.clients.map((c) => c.name) || [],
      },
      "784": {
        name: "UAE",
        clients:
          referenceLocations
            .find((loc) => loc.country === "UAE")
            ?.clients.map((c) => c.name) || [],
      },
      "682": {
        name: "Saudi Arabia",
        clients:
          referenceLocations
            .find((loc) => loc.country === "Saudi Arabia")
            ?.clients.map((c) => c.name) || [],
      },
      "634": {
        name: "Qatar",
        clients:
          referenceLocations
            .find((loc) => loc.country === "Qatar")
            ?.clients.map((c) => c.name) || [],
      },
      "400": {
        name: "Jordan",
        clients:
          referenceLocations
            .find((loc) => loc.country === "Jordan")
            ?.clients.map((c) => c.name) || [],
      },
      "807": {
        name: "Macedonia",
        clients:
          referenceLocations
            .find((loc) => loc.country === "Macedonia")
            ?.clients.map((c) => c.name) || [],
      },
    };

    // Get container dimensions
    const mapContainer = document.querySelector(".map-container");
    if (!mapContainer) return;

    const width = mapContainer.clientWidth;
    const height = mapContainer.clientHeight;

    // Create a zoom behavior with proper typing
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 8])
      .on("zoom", (event) => {
        if (!mapGroupRef.current) return;
        const transform = event.transform;
        d3.select(mapGroupRef.current).attr("transform", transform.toString());
      });

    // Create SVG
    const svg = d3
      .select<SVGSVGElement, unknown>(mapRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .call(zoom);

    // Add background for the ocean
    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "#0F172A");

    // Create a group for map elements that will be transformed during zoom
    const mapGroup = svg.append<SVGGElement>("g");

    // Store the reference to the group
    mapGroupRef.current = mapGroup.node();

    // Mercator projection with optimal center
    const projection = d3
      .geoMercator()
      .center([130, 0])
      .scale(width / 4)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath(projection);
    const tooltip = d3.select(tooltipRef.current);

    // Load and process the TopoJSON data
    fetch("/world-110m.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((topoData) => {
        // Handle possible null country data
        if (!topoData || !topoData.objects || !topoData.objects.countries) {
          console.error("Invalid TopoJSON data format");
          return;
        }

        // Use topojson with type suppression - two-step cast to satisfy TypeScript
        const countries = (
          topojson.feature(topoData, topoData.objects.countries) as unknown as {
            features: CountryFeature[];
          }
        ).features;

        // Draw each country
        mapGroup
          .selectAll<SVGPathElement, unknown>("path")
          .data(countries)
          .join("path")
          // @ts-expect-error - Necessary for d3.js path generator
          .attr("d", path)
          .attr("fill", function (d) {
            // Cast the 'd' parameter to our CountryFeature type
            const feature = d as CountryFeature;
            // Get country code either from id or properties name
            const countryCode = feature.id;
            const countryName = feature.properties && feature.properties.name;

            // Check if this is a client country
            const isClientById = clientCountries[countryCode] ? true : false;
            const isClientByName =
              countryName &&
              Object.values(clientCountries).some(
                (c) => c.name === countryName
              );

            return isClientById || isClientByName ? "#FF6B00" : "#ffffff";
          })
          .attr("stroke", "#333333")
          .attr("stroke-width", 0.3)
          .attr("opacity", function (d) {
            // Cast the 'd' parameter to our CountryFeature type
            const feature = d as CountryFeature;
            const countryCode = feature.id;
            const countryName = feature.properties && feature.properties.name;
            const isClientById = clientCountries[countryCode] ? true : false;
            const isClientByName =
              countryName &&
              Object.values(clientCountries).some(
                (c) => c.name === countryName
              );

            return isClientById || isClientByName ? 1 : 0.7;
          })
          .style("cursor", function (d) {
            // Cast the 'd' parameter to our CountryFeature type
            const feature = d as CountryFeature;
            const countryCode = feature.id;
            const countryName = feature.properties && feature.properties.name;
            const isClientById = clientCountries[countryCode] ? true : false;
            const isClientByName =
              countryName &&
              Object.values(clientCountries).some(
                (c) => c.name === countryName
              );

            return isClientById || isClientByName ? "pointer" : "default";
          })
          .style("transition", "fill 0.3s ease, opacity 0.3s ease")
          // @ts-expect-error - Necessary for event handling with correct types
          .on("mouseenter", function (event, d) {
            // Cast the 'd' parameter to our CountryFeature type
            const feature = d as CountryFeature;
            // Get country code and name
            const countryCode = feature.id;
            const countryName = feature.properties && feature.properties.name;

            // Find client data either by ID or by name
            let clientData = clientCountries[countryCode];
            if (!clientData && countryName) {
              // Try to find by name
              Object.keys(clientCountries).forEach((key) => {
                if (clientCountries[key].name === countryName) {
                  clientData = clientCountries[key];
                }
              });
            }

            if (!clientData) return;

            // Highlight the hovered country
            d3.select(this).attr("fill", "#ff8534").attr("opacity", 1);

            // Show tooltip with country name and clients
            tooltip
              .html(
                `<div class="bg-neutral-900/95 p-4 rounded-lg shadow-lg border border-amber-500/20">
                  <h4 class="text-amber-500 font-bold text-lg mb-2">${
                    clientData.name
                  }</h4>
                  <ul class="space-y-1">
                    ${clientData.clients
                      .map(
                        (c) =>
                          `<li class="text-white text-sm flex items-center"><span class="mr-2 text-amber-300">•</span> ${c}</li>`
                      )
                      .join("")}
                  </ul>
                </div>`
              )
              .style("opacity", 1)
              .style("transform", "translateY(0)");
          })
          .on("mousemove", function (event) {
            // Position tooltip near cursor
            const containerRect = mapContainer.getBoundingClientRect();
            const x = event.clientX - containerRect.left;
            const y = event.clientY - containerRect.top;

            // Ensure tooltip stays within the container
            let tooltipX = x + 15;
            if (tooltipX + 280 > containerRect.width) {
              tooltipX = x - 290;
            }

            tooltip.style("left", `${tooltipX}px`).style("top", `${y - 20}px`);
          })
          // @ts-expect-error - Necessary for event handling with correct types
          .on("mouseleave", function (event, d) {
            // Cast the 'd' parameter to our CountryFeature type
            const feature = d as CountryFeature;
            // Get country code and name
            const countryCode = feature.id;
            const countryName = feature.properties && feature.properties.name;

            // Find client data either by ID or by name
            let clientData = clientCountries[countryCode];
            if (!clientData && countryName) {
              // Try to find by name
              Object.keys(clientCountries).forEach((key) => {
                if (clientCountries[key].name === countryName) {
                  clientData = clientCountries[key];
                }
              });
            }

            if (!clientData) return;

            // Restore original color
            d3.select(this).attr("fill", "#FF6B00");

            // Hide tooltip
            tooltip.style("opacity", 0).style("transform", "translateY(5px)");
          });

        // Default transform that properly focuses on Turkey and Middle East
        const defaultTransform = d3.zoomIdentity
          .translate(width / 4, height / 3)
          .scale(2.5);

        // Set up zoom controls
        document.getElementById("zoom-in")?.addEventListener("click", () => {
          svg.transition().duration(300).call(zoom.scaleBy, 1.5);
        });

        document.getElementById("zoom-out")?.addEventListener("click", () => {
          svg.transition().duration(300).call(zoom.scaleBy, 0.75);
        });

        document.getElementById("zoom-reset")?.addEventListener("click", () => {
          // Return to the default view focused on Turkey instead of resetting completely
          svg.transition().duration(500).call(zoom.transform, defaultTransform);
        });

        // Initial focus
        setTimeout(() => {
          svg
            .transition()
            .duration(1000)
            .call(zoom.transform, defaultTransform);
        }, 100);
      })
      .catch((error) => {
        console.error("Error loading the map data:", error);
        if (mapContainer instanceof HTMLElement) {
          mapContainer.innerHTML = `<div class="flex items-center justify-center h-full bg-gray-800 text-white p-4 rounded-lg">
              <p>Sorry, we couldn't load the interactive map. Please try again later.</p>
            </div>`;
        }
      });

    // Close tooltips when clicking elsewhere
    const clickHandler = (e: Event) => {
      const target = e.target as Element;
      if (!target.closest("svg") || target.tagName !== "path") {
        tooltip.style("opacity", 0).style("transform", "translateY(5px)");
      }
    };

    document.addEventListener("click", clickHandler);

    // Cleanup
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  // Stats are calculated directly in the StatCounter components

  return (
    <DecorativeBackground
      variant="dark"
      className="py-24 bg-gradient-to-b from-neutral-900 to-neutral-950"
    >
      <section id="references">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SpecialText
              id="references-special-text"
              className="text-4xl font-bold mb-6 text-white"
            >
              <AnimatedText text="Our References" />
            </SpecialText>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
            <span className="text-lg text-neutral-300 leading-relaxed">
              Globally <AnimatedText text="trusted solution partners" /> across
              multiple countries
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <AnimatedStat
              icon={<Users className="size-6" />}
              value="15+"
              label="Team Members"
            />
            <AnimatedStat
              icon={<Award className="size-6" />}
              value="10+"
              label="Years Experience"
            />
            <AnimatedStat
              icon={<Code className="size-6" />}
              value="100+"
              label="Projects Delivered"
            />
            <AnimatedStat
              icon={<BarChart4 className="size-6" />}
              value="98%"
              label="Client Satisfaction"
            />
          </div>
          {/* Interactive Reference Map */}
          <div className="mb-16 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-center mb-6 text-white">
              Global Client Network
            </h3>
            <div className="map-container h-[450px] mx-auto max-w-5xl relative rounded-lg overflow-hidden">
              <svg id="world-map" ref={mapRef} className="w-full h-full"></svg>
              <div
                id="map-tooltip"
                ref={tooltipRef}
                className="map-tooltip"
              ></div>

              {/* Map Controls */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2 z-10">
                <button
                  id="zoom-in"
                  className="bg-black/40 hover:bg-amber-600/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors focus:outline-none"
                  title="Zoom in"
                  aria-label="Zoom in on map"
                >
                  <ZoomIn className="size-5" />
                </button>
                <button
                  id="zoom-reset"
                  className="bg-black/40 hover:bg-amber-600/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors focus:outline-none"
                  title="Reset view"
                  aria-label="Reset map view"
                >
                  <RefreshCcw className="size-5" />
                </button>
                <button
                  id="zoom-out"
                  className="bg-black/40 hover:bg-amber-600/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors focus:outline-none"
                  title="Zoom out"
                  aria-label="Zoom out on map"
                >
                  <ZoomOut className="size-5" />
                </button>
              </div>
            </div>

            <div className="text-center text-neutral-400 mt-4 mb-2 flex items-center justify-center">
              <Info className="size-5 mr-1 text-amber-500" />
              <p>Hover or tap on highlighted countries to see our clients</p>
            </div>

            {/* Map Legend */}
            <div className="flex items-center justify-center gap-8 max-w-xl mx-auto">
              <div className="flex items-center">
                <span className="inline-block size-4 rounded-sm bg-white/80 mr-2"></span>
                <span className="text-neutral-300">Other Countries</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block size-4 rounded-sm bg-amber-500 mr-2"></span>
                <span className="text-neutral-300">Client Locations</span>
              </div>
            </div>
          </div>

          {/* Client locations grid */}
          <div className="w-full">
            <div className="container w-full flex flex-col items-center justify-center mx-auto px-4 mb-8">
              <SpecialText
                id="references-special-text"
                className="text-2xl font-bold text-center text-white mb-2"
              >
                <AnimatedText text="Trusted by Leading Organizations" />
              </SpecialText>

              <span className="text-center text-neutral-600">
                Our clients across the globe trust us with their IT infrastructure
              </span>
            </div>
            <ClientSlider />
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Growing List of Satisfied Clients
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Experience the same level of exceptional service and innovative
              solutions that have helped organizations across the globe transform
              their IT infrastructure.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-amber-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-amber-50 transition-colors shadow-lg"
            >
              Contact Us Today
              <ExternalLink className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </section>
    </DecorativeBackground>
  );
};

export default References;
