import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { createContext, useContext } from "react";
import { RouterLink } from "@/components/Shared"

type AccordionContextType = {
  closeAccordion: () => void;
};

type AccordionProps = {
  label?: string;
  icon?: ReactNode;
  children?: React.ReactNode;
};

type AccordionItemProps = {
  to: string;
  label?: string;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

const useAccordion = () => {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("DropdownItem must be used inside Dropdown");
  return ctx;
};

export const Accordion = ({
  label,
  icon,
  children,
}: AccordionProps ) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeAccordion = () => setIsOpen(false);

  return (
    <li className="accordion-menu">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`nav-clickable py-4 justify-between
          ${isOpen ? 'text-amber-700' : ''}
          border-b border-neutral-700`
        }
      >
        {icon && <span>{icon}</span>}
        {label && <span>{label}</span>}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {isOpen && (
        <ul className="nav-list p-4 flex-col">
            <AccordionContext.Provider value={{ closeAccordion }}>
                {children}
            </AccordionContext.Provider>
        </ul>
      )}
    </li>
  );
};

export const AccordionItem = ({
  to,
  label,
  icon,
  className,
  onClick,
}: AccordionItemProps) => {
  const { closeAccordion } = useAccordion();

  const handleClick = () => {
    if (onClick) onClick();
    closeAccordion();
  };

  return (
    <li className={`accordion-item${className ? ` ${className}` : ""}`}>
      <RouterLink to={to} className="nav-clickable" onClick={handleClick}>
        {icon && <span>{icon}</span>}
        {label && <span>{label}</span>}
      </RouterLink>
    </li>
  );
};