import React from "react";

type BubblesProps = {
  count?: number;
  maxSize?: number;
  minSize?: number;
  zIndex?: number;
};

/**
 * Animated bubbles component that creates a floating bubble effect
 * Can be used as a background element in various sections
 */
const Bubbles: React.FC<BubblesProps> = ({
  count = 40,
  maxSize = 80,
  minSize = 20,
  zIndex = 10,
}) => {
  return (
    <div
      className={`bubbles absolute inset-0 overflow-hidden pointer-events-none z-${zIndex}`}
    >
      {[...Array(count)].map((_, i) => {
        // Create varied and dynamic bubbles
        const size = Math.random() * (maxSize - minSize) + minSize;
        const speedFactor = Math.random() * 0.7 + 0.3; // Speed variation

        return (
          <div
            key={i}
            className="bubble absolute rounded-full animate-float-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${(Math.random() * 10 + 8) / speedFactor}s`,
              animationDelay: `${Math.random() * 8}s`,
              opacity: Math.random() * 0.4 + 0.2,
              bottom: "-10px",
              transform: `scale(${Math.random() * 0.4 + 0.8})`,
              border:
                size > 50
                  ? "2px solid rgba(255, 255, 255, 0.5)"
                  : "1px solid rgba(255, 255, 255, 0.4)",
            }}
          />
        );
      })}
    </div>
  );
};

export default Bubbles;
