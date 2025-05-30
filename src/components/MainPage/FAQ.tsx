import { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import { ChevronDown, ChevronUp } from "lucide-react";

export type FAQItemProps = {
  question: string;
  answer: string;
  isLast?: boolean;
  isOpen: boolean;
  onToggle: () => void;
};

export const FAQItem = ({
  question,
  answer,
  isLast = false,
  isOpen,
  onToggle,
}: FAQItemProps) => {
  return (
    <div className={`${!isLast ? "border-b border-neutral-200" : ""}`}>
      <button
        className="flex items-center justify-between w-full text-left py-5 px-6 focus:outline-none hover:bg-neutral-50 transition-colors duration-200"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label={`${isOpen ? "Collapse" : "Expand"} FAQ: ${question}`}
      >
        <h3 className="text-lg font-medium text-neutral-800">{question}</h3>
        <span className="flex-shrink-0 text-amber-700">
          {isOpen ? (
            <ChevronUp className="size-5" />
          ) : (
            <ChevronDown className="size-5" />
          )}
        </span>
      </button>
      <SlideDown className={"my-slidedown"} closed={!isOpen}>
        <div className="px-6 pb-5 text-neutral-600 bg-neutral-50">
          <p>{answer}</p>
        </div>
      </SlideDown>
    </div>
  );
};

export type FAQProps = {
  items: Omit<FAQItemProps, "isLast" | "isOpen" | "onToggle">[];
  title?: string;
  subtitle?: string;
  className?: string;
};

const FAQ = ({ items, title, subtitle, className = "" }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`max-w-3xl mx-auto ${className}`}>
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">{title}</h2>
          {subtitle && <p className="text-neutral-600">{subtitle}</p>}
        </div>
      )}
      <div className="border border-neutral-200 rounded-lg bg-white shadow-sm overflow-hidden">
        {items.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isLast={index === items.length - 1}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
