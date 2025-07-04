import { useTranslation } from "react-i18next";

type Props = {
  titleRef: React.Ref<HTMLHeadingElement>;
  subtitleRef: React.Ref<HTMLHeadingElement>;
};

const HeroTitle = ({ titleRef, subtitleRef }: Props) => {
  const { t } = useTranslation();
  
  return (
    <div className="title-hero-main text-white mb-8">
      <h2 ref={titleRef} className="text-white text-shadow-2xl">
        {t("hero_title_1")}<br/>
      </h2>
      <h2 ref={subtitleRef} className="text-white mt-2 text-shadow-2xl">
        {t("hero_title_2")}
      </h2>
    </div>
  );
};

export default HeroTitle;
