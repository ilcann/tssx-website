import { Link as RouterLink } from "react-router";

type HeaderLinkProps = {
  to: string;
  onClick: (section: string) => void;
  children: React.ReactNode;
};

const HeaderLink = ({ to, onClick, children }: HeaderLinkProps) => {
  const baseClasses = `text-md px-3 py-2 rounded-md text-neutral-200 hover:text-amber-400 hover:bg-neutral-800 transition-colors duration-200 font-medium`;

  return (
    <RouterLink
      to={to}
      onClick={() => {
        onClick(to);
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      }}
      className={baseClasses}
    >
      {children}
    </RouterLink>
  );
};

export default HeaderLink;
