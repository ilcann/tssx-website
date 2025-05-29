import { Link as RouterLink } from "react-router";

type HeaderLinkProps = {
  to: string;
  onClick: (section: string) => void;
  children: React.ReactNode;
};

const HeaderLink = ({ to, onClick, children }: HeaderLinkProps) => {
  const baseClasses = `px-3 py-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200 font-medium text-sm`;

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
