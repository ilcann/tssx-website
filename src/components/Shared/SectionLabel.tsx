import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

export default function SectionLabel({
  children,
  icon,
  className = "",
}: Props) {
  return (
    <span className={`section-label p-element-sm text-label ${className}`}>
      {icon}
      {children}
    </span>
  );
}
