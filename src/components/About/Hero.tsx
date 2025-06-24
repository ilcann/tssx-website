import { useTranslation } from 'react-i18next';
import AnimatedTitle from '../Shared/AnimatedTitle';

const Hero = () => {
  const { t } = useTranslation('about');
  
  return (
    <AnimatedTitle
      title={t('title')}
      description={t('description')}
      className='px-6'
    />
  );
};

export default Hero;