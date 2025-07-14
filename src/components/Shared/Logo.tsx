import { useTranslation } from "react-i18next";
import RouterLink from "./RouterLink";

type LogoProps = {
  onClick?: () => void;
};

const Logo = ({ onClick }: LogoProps) => {
  const { i18n } = useTranslation(); // +++
  const lang = i18n.language.startsWith("tr") ? "tr" : "en"; // +++
  const homePath = `/${lang}`;

  return (
    <RouterLink to={homePath} className="logo" onClick={onClick}>
      <img
        src="/img/tssx/tssx-light-logo.png"
        alt="TSS-X Logo"
      />
    </RouterLink>
  );
};

export default Logo;
