import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

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
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Parse the value string to extract numerical value and any prefix/suffix
    const parseValue = (val: string) => {
      // Handle percentage values
      if (val.includes("%")) {
        const numVal = parseFloat(val.replace("%", ""));
        setEnd(numVal);
        setSuffix("%");
        return;
      }

      // Handle values with + symbol
      if (val.includes("+")) {
        const numVal = parseFloat(val.replace("+", ""));
        setEnd(numVal);
        setPrefix("+");
        return;
      }

      // Handle fraction values like 24/7
      if (val.includes("/")) {
        setSuffix("");
        setPrefix("");
        return val;
      }

      // Handle values with units like "Min." or similar
      const matches = val.match(/^(\d+(?:\.\d+)?)\s*(.*)$/);
      if (matches) {
        const [, numPart, unit] = matches;
        setEnd(parseFloat(numPart));
        setSuffix(unit ? ` ${unit.trim()}` : "");
        return;
      }

      // Default case - just a number
      setEnd(parseFloat(val) || 0);
    };

    parseValue(value);
    
    // Show the final value immediately on initial load
    setIsVisible(true);
  }, [value]);

  // Special case for fractions like 24/7
  if (value.includes("/")) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {!isVisible ? (
        // Show the final value immediately
        <>{prefix}{end}{suffix}</>
      ) : (
        <>
          {prefix}
          <CountUp
            start={0}
            end={end}
            duration={duration}
            delay={delay}
            enableScrollSpy={enableScrollSpy && !hasAnimated}
            scrollSpyDelay={100}
            scrollSpyOnce={true}
            onEnd={() => setHasAnimated(true)}
            preserveValue={true}
            redraw={false}
          />
          {suffix}
        </>
      )}
    </span>
  );
};

export default StatCounter;
