import { useState } from 'react';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

export type FAQItemProps = {
  question: string;
  answer: string;
};

export const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-none">
      <button
        className="flex items-center justify-between w-full text-left py-4 px-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-primary">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-primary">
          {isOpen ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
        </span>
      </button>
      <SlideDown className={'my-slidedown'} closed={!isOpen}>
        <div className="pb-4 px-2 text-primary">
          <p>{answer}</p>
        </div>
      </SlideDown>
    </div>
  );
};

export type FAQProps = {
  items: FAQItemProps[];
  title?: string;
  subtitle?: string;
  className?: string;
};

const FAQ = ({ items, title, subtitle, className = '' }: FAQProps) => {
  return (
    <div className={`rounded-lg p-6 ${className}`}>
      {title && <h2 className="text-2xl font-bold text-primary mb-2">{title}</h2>}
      {subtitle && <p className="text-primary mb-6">{subtitle}</p>}
      <div className="divide-y rounded-lg bg-white shadow-sm">
        {items.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ; 