import { RouterLink } from "@/components/Shared";
import { type ReactNode } from "react";

type NavItemProps = {
  to: string;
  label?: string;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
};

const NavItem = ({
  to,
  label,
  icon,
  onClick,
  className,
}: NavItemProps) => {
  return (
    <li className={`nav-item${className ? ` ${className}` : ""}`}>
      <RouterLink to={to} className="nav-clickable" onClick={onClick}>
        {icon && <span>{icon}</span>}
        {label && <span>{label}</span>}
      </RouterLink>
    </li>
  );
};

export default NavItem;
