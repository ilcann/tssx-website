import { useRef } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { type SolutionCardProps } from "./Solutions.constants"
import { ArrowRight, Check } from "lucide-react";
import { useSolutionCardAnimation } from "./Solution.card.animations";
import { useParams } from "react-router";
import { slugs } from "@/routes/slugs";


const SolutionCard = ({
  slug,
  icon,
  title,
  subtitle,
  tools,
  index = 0,
}: SolutionCardProps & { index?: number }) => {
  const { t, i18n } = useTranslation("home");
  const { lng } = useParams();
  const lang = lng === "tr" || lng === "en" ? lng : i18n.language.startsWith("tr") ? "tr" : "en";

  const cardRef = useRef<HTMLAnchorElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const toolsRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useSolutionCardAnimation({
    index,
    cardRef,
    headerRef,
    iconRef,
    titleRef,
    subtitleRef,
    toolsRef,
    buttonRef
  });

  return (
    <Link
      to={`/${lang}/${slugs[lang].solutions}/${slug[lang]}`}
      ref={cardRef}
      className="solutionCard group"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="solutionCard-header" ref={headerRef}>
        <div className="solutionCard-hoverOverlay" />
        <div className="solutionCard-header-iconContainer" ref={iconRef}>
          {icon}
        </div>
      </div>

      <div className="solutionCard-content">
        <div className="flex flex-col gap-2">
          <h3 className="solutionCard-title" ref={titleRef}>{t(title)}</h3>
          <p className="solutionCard-subtitle" ref={subtitleRef}>{t(subtitle)}</p>
        </div>
        <ul className="solutionCard-toolList" ref={toolsRef}>
          {tools.map((tool, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 flex items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <Check className="w-3 h-3" strokeWidth={3} />
              </div>
              <p className="text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors duration-200">
                {t(tool)}
              </p>
            </li>
          ))}
        </ul>
        <button ref={buttonRef} className="solutionCard-cta">
          <span className="solutionCard-cta-text">Learn More</span>
          <span className="solutionCard-cta-icon">
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </span>
        </button>
      </div>
    </Link>
  );
};

export default SolutionCard;
