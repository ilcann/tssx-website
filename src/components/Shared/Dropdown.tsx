import {
  useState,
  type ReactNode,
  createContext,
  useContext,
} from "react";
import { ChevronDown } from "lucide-react";
import { RouterLink } from "@/components/Shared";
import { useHoverDevice } from "@/lib";

// Tipler
type DropdownContextType = {
  closeDropdown: () => void;
};

type DropdownProps = {
  label?: string;
  icon?: ReactNode;
  children?: React.ReactNode;
  className?: string;
};

type DropdownItemProps = {
  to: string;
  label?: string;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
};



// Dropdown Context
const DropdownContext = createContext<DropdownContextType | null>(null);

const useDropdown = () => {
  const ctx = useContext(DropdownContext);
  if (!ctx) throw new Error("DropdownItem must be used inside Dropdown");
  return ctx;
};

// Dropdown Ana Bileşeni
export const Dropdown = ({
  label,
  icon,
  children,
  className,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const isHoverable = useHoverDevice();

  const closeDropdown = () => setOpen(false);

  const hoverProps = isHoverable
    ? {
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
      }
    : {};

  const clickProps = !isHoverable
    ? {
        onClick: () => setOpen((prev) => !prev),
      }
    : {};

  return (
    <li
      className={`nav-item group relative${className ? ` ${className}` : ""}`}
      {...hoverProps}
    >
      <button className="nav-clickable cursor-pointer" {...clickProps}>
        {icon && <span>{icon}</span>}
        {label && <span>{label}</span>}
        <ChevronDown className="w-6 h-6 transform transition-transform duration-300 group-hover:rotate-180" />
      </button>
      {open && (
        <ul className="dropdown-menu">
          <DropdownContext.Provider value={{ closeDropdown }}>
            {children}
          </DropdownContext.Provider>
        </ul>
      )}
    </li>
  );
};

// DropdownItem Bileşeni
export const DropdownItem = ({
  to,
  label,
  icon,
  className,
  onClick,
}: DropdownItemProps) => {
  const { closeDropdown } = useDropdown();

  const handleClick = () => {
    if (onClick) onClick();
    closeDropdown();
  };

  return (
    <li className={`dropdown-item${className ? ` ${className}` : ""}`}>
      <RouterLink to={to} className="nav-clickable" onClick={handleClick}>
        {icon && <span>{icon}</span>}
        {label && <span>{label}</span>}
      </RouterLink>
    </li>
  );
};