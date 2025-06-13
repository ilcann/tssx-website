import { Link as RouterLink } from "react-router";
import type { ReactNode } from "react";

type HeaderLinkProps = {
  to: string;
  onClick: (section: string) => void;
  children: ReactNode;
  variant?: "default" | "cta";
  className?: string;
};

const HeaderLink = ({
  to,
  onClick,
  children,
  variant = "default",
  className = "",
}: HeaderLinkProps) => {
  const baseClasses =
    "text-md px-3 py-2 rounded-md font-medium transition-colors duration-200";
  const defaultClasses =
    "text-neutral-200 hover:text-amber-400 hover:bg-neutral-800 cursor-pointer";
  const ctaClasses =
    "bg-amber-700 text-white hover:bg-amber-800 cursor-pointer";

  const classes = `${baseClasses} ${
    variant === "cta" ? ctaClasses : defaultClasses
  } ${className}`;

  return (
    <RouterLink
      to={to}
      onClick={() => {
        onClick(to);
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      }}
      className={classes}
    >
      {children}
    </RouterLink>
  );
};

export default HeaderLink;
