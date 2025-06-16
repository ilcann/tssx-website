import { useTranslation } from 'react-i18next';

const PartnersHeader = () => {
  const { t } = useTranslation();
  
  return (
    <div className="w-full max-w-xl bg-white/80 rounded-2xl shadow-xl p-10 mb-10 flex flex-col gap-4">
      <h1 className="text-5xl font-extrabold text-amber-700 mb-2 text-left">{t('partners_title')}</h1>
      <p className="text-lg md:text-xl text-neutral-700 text-left">
        {t('partners_header_description')}
      </p>
    </div>
  );
};

export default PartnersHeader; 