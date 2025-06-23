import PageHero from '../Shared/HeroSection';
import { useTranslation } from "react-i18next";

export default function ReferenceHeader() {
  const { t } = useTranslation('references');

  return (
    <PageHero
      title={t('title')}
      description={t('description')}
    />
  );
}