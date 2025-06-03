import type { ReactNode } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router";

type FooterLinkProps = {
  href: string;
  children: ReactNode;
  isExternal?: boolean;
};

const FooterLink = ({
  href,
  children,
  isExternal = false,
}: FooterLinkProps) => {
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-amber-700 transition-colors duration-300"
      >
        {children}
      </a>
    );
  }

  // Check if it's a page route (starts with /) or a scroll target (starts with #)
  const isPageRoute = href.startsWith("/");
  const isScrollTarget = href.startsWith("#");

  if (isPageRoute) {
    return (
      <RouterLink
        to={href}
        className="hover:text-amber-700 transition-colors duration-300 cursor-pointer"
      >
        {children}
      </RouterLink>
    );
  }

  if (isScrollTarget) {
    return (
      <ScrollLink
        to={href.replace("#", "")}
        href={href}
        smooth={true}
        duration={800}
        offset={-40}
        className="hover:text-amber-700 transition-colors duration-300 cursor-pointer"
      >
        {children}
      </ScrollLink>
    );
  }

  // Fallback for other types of links
  return (
    <a
      href={href}
      className="hover:text-amber-700 transition-colors duration-300"
    >
      {children}
    </a>
  );
};

export default FooterLink;
