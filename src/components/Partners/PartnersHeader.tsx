import { useTranslation } from 'react-i18next';
import { AnimatedTitle } from '@/components/Shared';

const PartnersHeader = () => {
  const { t } = useTranslation('partners');
  
  return (
    <AnimatedTitle
      title={t('title')}
      description={t('description')}
    />
  );
};

export default PartnersHeader; 