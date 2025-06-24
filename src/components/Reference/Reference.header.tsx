import { AnimatedTitle } from '@/components/Shared';
import { useTranslation } from "react-i18next";

export default function ReferenceHeader() {
  const { t } = useTranslation('references');

  return (
    <AnimatedTitle
      title={t('title')}
      description={t('description')}
      className='px-6'
    />
  );
}