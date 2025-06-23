import { useTranslation } from 'react-i18next';
import PageHero from '../Shared/HeroSection';

const Hero = () => {
  const { t } = useTranslation('about');
  
  return (
    <PageHero
      title={t('title')}
      description={t('description')}
    />
  );
};

export default Hero;