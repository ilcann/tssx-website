import { useEffect, useState } from "react";

const useHoverDevice = () => {
  const [isHoverable, setIsHoverable] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    setIsHoverable(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsHoverable(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isHoverable;
};

export default useHoverDevice;