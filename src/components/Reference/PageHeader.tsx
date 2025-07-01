import { useTranslation } from 'react-i18next';
import AnimatedTitle from '../Shared/AnimatedTitle';
import AnimatedStat from '../ui/AnimatedStat';
import { Award, BarChart4, Code, Users } from "lucide-react";

const PageHeader = () => {
  const { t } = useTranslation('references');
  
  return (
    <section id='references-header'>
      <div className='section-content'>
        <AnimatedTitle
          title={t('title')}
          description={t('description')}
          className='px-6'
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedStat icon={<Users className="size-6" />} value="15+" label={t("stats.team")} />
            <AnimatedStat icon={<Award className="size-6" />} value="10+" label={t("stats.experience")} />
            <AnimatedStat icon={<Code className="size-6" />} value="100+" label={t("stats.projects")} />
            <AnimatedStat icon={<BarChart4 className="size-6" />} value="98%" label={t("stats.satisfaction")} />
        </div>
      </div>
    </section>
  );
};

export default PageHeader;