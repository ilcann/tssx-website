import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router";

type HeaderLinkProps = {
  to: string;
  onClick: (section: string) => void;
  children: React.ReactNode;
};

const HeaderLink = ({ to, onClick, children }: HeaderLinkProps) => {
  const isPageRoute = to.startsWith("/");

  const baseClasses = `relative px-3 py-2 rounded-full transition-all duration-300 text-neutral-700 hover:text-amber-600 hover:bg-amber-50 font-medium`;

  const content = <span>{children}</span>;

  if (isPageRoute) {
    // Use React Router Link for page navigation
    return (
      <RouterLink 
        to={to} 
        onClick={() => {
          onClick(to);
          // Always scroll to top when navigating to a page
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 100);
        }} 
        className={baseClasses}
      >
        {content}
      </RouterLink>
    );
  }

  // Use React Scroll Link for section scrolling
  return (
    <ScrollLink
      to={to}
      spy={false}
      smooth={true}
      offset={-80}
      duration={800}
      onClick={() => onClick(to)}
      className={baseClasses}
      isDynamic={true}
      ignoreCancelEvents={true}
    >
      {content}
    </ScrollLink>
  );
};

export default HeaderLink;
