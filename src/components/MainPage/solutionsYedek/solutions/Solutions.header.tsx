import { useTranslation } from "react-i18next";
import { AnimatedTitle } from '@/components/Shared'

const SolutionsHeader = () => {
  const { t } = useTranslation();
  
  return (
    <AnimatedTitle
      title={t('solutions_header')}
      description={t('solutions_description')}
      size="sm"
    />
  );
};


export default SolutionsHeader;