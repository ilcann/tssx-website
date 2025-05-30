import type { ReactNode } from "react";
import { Link } from "react-scroll";

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

  return (
    <Link
      to={href.replace("#", "")}
      smooth={true}
      duration={800}
      offset={-40}
      className="hover:text-amber-700 transition-colors duration-300 cursor-pointer"
    >
      {children}
    </Link>
  );
};

export default FooterLink;
