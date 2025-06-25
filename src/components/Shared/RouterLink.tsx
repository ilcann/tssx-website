import { Link, type LinkProps, useLocation } from "react-router";
import type { MouseEvent } from "react";

const RouterLink = (props: LinkProps) => {
  const location = useLocation();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === props.to) {
      // Aynı path'e tıklanıyorsa scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Orijinal onClick varsa onu da çağır
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return <Link {...props} onClick={handleClick} />;
};

export default RouterLink;