import { type ReactNode } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router";
import clsx from "clsx";

type CTAButtonProps = {
  children: ReactNode;
  type?: "primary" | "secondary";
  icon?: ReactNode;
  className?: string;
  scrollTo?: string; // for in-page scroll
  to?: string;       // for internal route (e.g. /contact)
  href?: string;     // for external link
  onClick?: () => void;
};

const CTAButton = ({
  children,
  type = "primary",
  icon,
  className = "",
  scrollTo,
  to,
  href,
  onClick,
}: CTAButtonProps) => {
  const baseClass = type === "primary"
    ? "cta-button-primary"
    : "cta-button-secondary";

  const combinedClass = clsx(baseClass, className);

  // Scroll button
  if (scrollTo) {
    return (
      <ScrollLink
        to={scrollTo}
        smooth
        duration={800}
        offset={-10}
        className={combinedClass}
      >
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </ScrollLink>
    );
  }

  // Internal routing
  if (to) {
    return (
      <RouterLink to={to} className={combinedClass}>
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </RouterLink>
    );
  }

  // External link
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClass}>
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </a>
    );
  }

  // Fallback: button
  return (
    <button onClick={onClick} className={combinedClass}>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default CTAButton;