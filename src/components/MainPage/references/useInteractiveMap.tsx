import { useEffect } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import type { CountryFeature, CountryGroup } from "@/types/reference";
import { referenceLocations } from "@/staticComponents/reference";

export const useInteractiveMap = (
  mapRef: React.RefObject<SVGSVGElement | null>,
  tooltipRef: React.RefObject<HTMLDivElement | null>,
  mapGroupRef: React.MutableRefObject<SVGGElement | null>
) => {
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
                  <h4 class="text-amber-700 font-bold text-lg mb-2">${
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
  }, [mapRef, tooltipRef, mapGroupRef]);
};