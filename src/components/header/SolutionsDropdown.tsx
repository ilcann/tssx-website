import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router";
import { solutionsDropdown } from "@/staticComponents/solutionsDropdown";

type Props = {
  variant?: "desktop" | "mobile";
  onLinkClick?: () => void;
  label: string;
};

const SolutionsDropdown = ({
  variant = "desktop",
  onLinkClick,
  label,
}: Props) => {
  const [open, setOpen] = useState(false);

  if (variant === "desktop") {
    return (
      <div className="relative group">
        <button className="flex items-center rounded-md gap-1 px-3 py-2 text-md font-medium text-neutral-200 hover:text-amber-400 transition-colors duration-200 hover:bg-neutral-800 cursor-pointer">
          {label}
          <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
        </button>

        <div className="absolute left-0 top-full p-2 w-[300px] bg-neutral-900 rounded-md shadow-xl hidden group-hover:block z-50">
          <ul className="flex flex-col">
            {solutionsDropdown.map(({ to, label, sub }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="block px-4 py-3 rounded-md text-neutral-200 hover:text-amber-400 hover:bg-neutral-800 transition-colors duration-200"
                >
                  <div className="text-sm font-semibold">{label}</div>
                  <div className="text-xs text-neutral-400">{sub}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Mobile variant
  return (
    <div className="flex flex-col w-full">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left px-3 py-2 rounded-md text-md font-medium text-neutral-200 hover:text-amber-400 hover:bg-neutral-800 transition-colors duration-200"
      >
        <span>{label}</span>
        {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      {open && (
        <ul className="mt-2 flex flex-col gap-2 pl-4">
          {solutionsDropdown.map(({ to, label, sub }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={onLinkClick}
                className="block px-4 py-3 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
              >
                <div className="text-sm font-semibold">{label}</div>
                <div className="text-xs text-neutral-400">{sub}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SolutionsDropdown;
