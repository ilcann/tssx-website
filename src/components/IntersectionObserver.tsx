import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
}

const IntersectionObserver = ({ 
  children, 
  fallback, 
  rootMargin = '100px',
  threshold = 0.1 
}: IntersectionObserverProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  const defaultFallback = (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-pulse bg-neutral-200 h-8 w-48 rounded mx-auto mb-4"></div>
        <div className="animate-pulse bg-neutral-100 h-4 w-32 rounded mx-auto"></div>
      </div>
    </div>
  );

  return (
    <div ref={ref}>
      {isVisible ? children : (fallback || defaultFallback)}
    </div>
  );
};

export default IntersectionObserver; 