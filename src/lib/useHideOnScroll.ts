import { useEffect } from "react";

export default function useHideOnScroll({
  elementRef,
  disabled = false,
}: {
  elementRef: React.RefObject<HTMLElement | null>;
  disabled?: boolean;
}) {
  useEffect(() => {
    if (disabled) return;

    let lastScrollY = window.scrollY;
    const element = elementRef.current;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const scrollDown = currentScrollY > lastScrollY;

      if (element) {
        element.style.transform = scrollDown ? "translateY(-100%)" : "translateY(0)";
        element.style.opacity = scrollDown ? "0" : "1";
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeader);
      if (element) {
        element.style.transform = "translateY(0)";
        element.style.opacity = "1";
      }
    };
  }, [elementRef, disabled]);
}