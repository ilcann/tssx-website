import { useEffect, useState, useRef } from "react";
import { CountUp } from "countup.js";

interface StatCounterProps {
  value: string;
  enableScrollSpy?: boolean;
  duration?: number;
  delay?: number;
}

const StatCounter = ({
  value,
  enableScrollSpy = false,
  duration = 2,
  delay = 0,
}: StatCounterProps) => {
  const [end, setEnd] = useState<number>(0);
  const [suffix, setSuffix] = useState<string>("");
  const [prefix, setPrefix] = useState<string>("");
  const countUpRef = useRef<HTMLSpanElement>(null);
  const countUpInstance = useRef<CountUp | null>(null);

  useEffect(() => {
    const parseValue = (val: string) => {
      if (val.includes("%")) {
        setEnd(parseFloat(val.replace("%", "")));
        setSuffix("%");
        setPrefix("");
        return;
      }
      if (val.includes("+")) {
        setEnd(parseFloat(val.replace("+", "")));
        setPrefix("+");
        setSuffix("");
        return;
      }
      if (val.includes("/")) {
        setPrefix("");
        setSuffix("");
        return;
      }
      const matches = val.match(/^(\d+(?:\.\d+)?)\s*(.*)$/);
      if (matches) {
        const [, numPart, unit] = matches;
        setEnd(parseFloat(numPart));
        setSuffix(unit ? ` ${unit.trim()}` : "");
        setPrefix("");
        return;
      }
      setEnd(parseFloat(val) || 0);
      setPrefix("");
      setSuffix("");
    };

    parseValue(value);
  }, [value]);

  useEffect(() => {
    if (countUpRef.current && end > 0) {
      // Clean up previous instance
      if (countUpInstance.current) {
        countUpInstance.current = null;
      }

      const startAnimation = () => {
        if (countUpRef.current) {
          // Create new CountUp instance
          countUpInstance.current = new CountUp(countUpRef.current, end, {
            startVal: 0,
            duration: duration,
            enableScrollSpy: enableScrollSpy,
            scrollSpyOnce: true,
          });

          // Start the animation
          if (!countUpInstance.current.error) {
            countUpInstance.current.start();
          } else {
            console.error('CountUp error:', countUpInstance.current.error);
            // Fallback to static display
            if (countUpRef.current) {
              countUpRef.current.textContent = end.toString();
            }
          }
        }
      };

      // Apply delay if specified
      if (delay > 0) {
        setTimeout(startAnimation, delay * 1000);
      } else {
        startAnimation();
      }
    }

    return () => {
      if (countUpInstance.current) {
        countUpInstance.current = null;
      }
    };
  }, [end, duration, delay, enableScrollSpy]);

  if (value.includes("/")) {
    return <span>{value}</span>;
  }

  return (
    <span>
      {prefix}
      <span ref={countUpRef} />
      {suffix}
    </span>
  );
};

export default StatCounter;
