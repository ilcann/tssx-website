type Props = {
  titleRef: React.Ref<HTMLHeadingElement>;
  subtitleRef: React.Ref<HTMLHeadingElement>;
};

const HeroTitle = ({ titleRef, subtitleRef }: Props) => (
  <div className="text-4xl md:text-6xl font-bold text-white mb-8">
    <h2 ref={titleRef} className="text-white text-shadow-2xl">
      Build Your Future
    </h2>
    <span className="text-3xl text-white/80 font-light italic text-shadow-2xl">
      with
    </span>
    <h2 ref={subtitleRef} className="text-white mt-2 text-shadow-2xl">
      Smart Solutions
    </h2>
  </div>
);

export default HeroTitle;
