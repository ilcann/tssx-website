import { Zap } from "lucide-react";
import { SectionLabel } from "@/components/Shared";
import { useTranslation } from "react-i18next";

const PageHeader = () => {
    const { t } = useTranslation('contact');

    return (
        <section id="contact-header">
            <div className="section-content">
                <div className="vertical-stack mx-auto  items-center gap-block max-w-xs md:max-w-xl xl:max-w-3xl">
                    <SectionLabel icon={<Zap className="size-4" />}>{t('label')}</SectionLabel>
                    <div className="vertical-stack gap-element items-center">
                        <h1 className="title-hero text-center mb-element">
                            {t('title.part1')} <span className="text-amber-500">{t('title.part2')} </span>{t('title.part3')}
                        </h1>
                        <p className="text-body text-center w-2/3 md:w-full text-white/80">
                            {t('description')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageHeader;