import RouterLink from "./RouterLink";

type LogoProps = {
  onClick?: () => void;
};

const Logo = ({ onClick }: LogoProps) => {
  return (
    <RouterLink to="/" className="logo" onClick={onClick}>
      <img
        src="/img/tssx/tssx-light-logo.png"
        alt="TSS-X Logo"
      />
    </RouterLink>
  );
};

export default Logo;