import { forwardRef } from "react";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const HeroCTA = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  
  return (
    <div ref={ref} className="flex justify-center">
      <Link
        to="solutions"
        smooth={true}
        duration={800}
        offset={-10}
        className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium flex items-center hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
      >
        <span>{t("hero_cta")}</span>
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
});

export default HeroCTA;