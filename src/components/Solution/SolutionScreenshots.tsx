import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import SpecialText from "@/components/ui/SpecialText";
import AnimatedText from "@/components/ui/AnimatedText";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import type { DetailedSolution } from "@/types/solution";

interface SolutionScreenshotsProps {
  solution: DetailedSolution;
}

const SolutionScreenshots = ({ solution }: SolutionScreenshotsProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  if (!solution.screenshots || solution.screenshots.length === 0) {
    return null;
  }

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    if (direction === "prev") {
      setSelectedImage(
        selectedImage === 0
          ? solution.screenshots!.length - 1
          : selectedImage - 1
      );
    } else {
      setSelectedImage(
        selectedImage === solution.screenshots!.length - 1
          ? 0
          : selectedImage + 1
      );
    }
  };

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index));
  };

  return (
    <>
      <section className="py-20 animate-section bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SpecialText
                id="screenshots-title"
                className="text-3xl font-bold mb-6 text-neutral-900"
              >
                <AnimatedText text="Product Screenshots" />
              </SpecialText>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
                See our {solution.title.toLowerCase()} solutions in action with
                real product interfaces and dashboards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <PlaceholderImage />
                    <Maximize2 className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-6 w-6" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {screenshot.title}
                    </h3>
                    <p className="text-sm text-neutral-600 line-clamp-3">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors z-10"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          <button
            onClick={() => navigateImage("next")}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors z-10"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          {/* Image Container */}
          <div className="max-w-5xl max-h-[80vh] w-full">
            {imageErrors.has(selectedImage) ? (
              <div className="bg-white rounded-lg p-8">
                <PlaceholderImage />
              </div>
            ) : (
              <img
                src={solution.screenshots[selectedImage].url}
                alt={solution.screenshots[selectedImage].title}
                className="w-full h-full object-contain rounded-lg"
                onError={() => handleImageError(selectedImage)}
              />
            )}

            {/* Image Info */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">
                {solution.screenshots[selectedImage].title}
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {solution.screenshots[selectedImage].description}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {selectedImage + 1} of {solution.screenshots.length}
              </p>
            </div>
          </div>

          {/* Click outside to close */}
          <div className="absolute inset-0 -z-10" onClick={closeLightbox} />
        </div>
      )}
    </>
  );
};

export default SolutionScreenshots;
