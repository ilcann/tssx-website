import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { InputBox } from "../Shared";
import { useTranslation } from "react-i18next";
import { CheckCircle, XCircle, Send, Loader2 } from "lucide-react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  solution: string;
  message: string;
};

const INITIAL_STATE: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  jobTitle: "",
  solution: "",
  message: "",
};

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const { t } = useTranslation('contact');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus("error");
      return;
    }

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );
      console.log("Email sent successfully:", result.text);
      setSubmitStatus("success");
      setFormData(INITIAL_STATE);
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

    return (
        <section id="contact-form">
            <div className="section-content xl:max-w-7xl">
                <form ref={formRef} onSubmit={handleSubmit} className="vertical-stack gap-block">
                    <fieldset className="vertical-stack gap-element">
                        <h3 className="title-sub mb-element">{t(`form.sections.contact`)}</h3>
                        <div className="form-grid gap-element">
                            <InputBox
                                name="firstName"
                                placeholder={t("form.fields.firstName")}
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <InputBox
                                name="lastName"
                                placeholder={t("form.fields.lastName")}
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                            <InputBox
                                name="email"
                                type="email"
                                placeholder={t("form.fields.email")}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <InputBox
                                name="phone"
                                type="tel"
                                placeholder={t("form.fields.phone")}
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </fieldset>

                    <fieldset className="vertical-stack gap-element">
                        <h3 className="title-sub mb-element">{t('form.sections.company')}</h3>
                        <div className="form-grid gap-element">
                            <InputBox
                                name="company"
                                placeholder={t("form.fields.company")}
                                value={formData.company}
                                onChange={handleChange}
                            />
                            <InputBox
                                name="jobTitle"
                                placeholder={t("form.fields.jobTitle")}
                                value={formData.jobTitle}
                                onChange={handleChange}
                            />
                        </div>
                    </fieldset>
                    <fieldset className="vertical-stack gap-element">
                        <h3 className="title-sub mb-element">{t("form.sections.details")}</h3>
                        <div className="vertical-stack gap-element">
                            <InputBox
                                name="solution"
                                placeholder={t("form.fields.solution")}
                                value={formData.solution}
                                onChange={handleChange}
                            />
                            <textarea
                                name="message"
                                placeholder={t("form.fields.message")}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="input-box text-body p-element resize-y rounded-xl min-h-32 md:min-h-48 xl:min-h-64"
                            />
                        </div>
                    </fieldset>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="cta-button-primary p-element text-btn inline-flex items-center justify-center gap-2 self-center w-full md:w-[50%]"
                    >
                    {isSubmitting ? (
                        <>
                        {t('form.sending')}
                        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                        </>
                    ) : (
                        <>
                        {t('form.submit')}
                        <Send className="w-4 h-4" aria-hidden="true" />
                        </>
                    )}
                    </button>

                    {submitStatus === "success" && 
                        <p className="text-body">
                            <CheckCircle className="w-4 h-4" aria-hidden="true" /> 
                            {t('form.successMessage')}
                        </p>
                    }
                    {submitStatus === "error" && 
                        <p className="text-body">
                            <XCircle className="w-4 h-4" aria-hidden="true" />
                            {t('form.errorMessage')}
                        </p>
                    }
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
