import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

type HeaderLinkProps = {
  to: string;
  activeSection: string;
  onClick: (section: string) => void;
  children: React.ReactNode;
};

const HeaderLink = ({
  to,
  activeSection,
  onClick,
  children,
}: HeaderLinkProps) => {
  const isPageRoute = to.startsWith("/");

  const baseClasses = `relative group overflow-hidden px-3 py-2 rounded-full transition-all duration-500 ${
    activeSection === to
      ? "text-amber-600 bg-amber-100/50 font-bold"
      : "text-black hover:text-amber-600 hover:bg-amber-50/50"
  }`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
    </>
  );

  if (isPageRoute) {
    // Use React Router Link for page navigation
    return (
      <RouterLink to={to} onClick={() => onClick(to)} className={baseClasses}>
        {content}
      </RouterLink>
    );
  }

  // Use React Scroll Link for section scrolling
  return (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={-40}
      duration={800}
      onClick={() => onClick(to)}
      className={baseClasses}
    >
      {content}
    </ScrollLink>
  );
};

export default HeaderLink;
