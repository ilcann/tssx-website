import { useTranslation } from "react-i18next";

const ContactSales = () => {
  const { t } = useTranslation();
  return (
    <div className="text-sm text-white space-x-2 px-4">
      <span className="font-semibold">{t("contact_sales_label")}</span>
      <a
        href="mailto:sales@tss-x.com"
        className="underline hover:text-amber-400 transition-colors duration-200"
      >
        info@tss-x.com
      </a>
    </div>
  );
};

export default ContactSales;