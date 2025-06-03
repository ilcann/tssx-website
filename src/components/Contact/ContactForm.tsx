import { useRef, useState } from "react";
import SpecialText from "../ui/SpecialText";
import AnimatedText from "../ui/AnimatedText";
import {
  MailIcon,
  MessageCircleIcon,
  PhoneIcon,
  Send,
  UserIcon,
} from "lucide-react";
import Input from "../ui/Input";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    role: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is incomplete. Please check your environment variables."
        );
      }

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        {
          publicKey: publicKey,
        }
      );
      console.log("Email sent successfully:", result);
      setSubmitStatus("success");
    } catch (error: unknown) {
      console.error("Error sending email:", error);

      let errorMessage =
        "Failed to send message. Please try again or contact us directly.";

      if (error && typeof error === "object" && "text" in error) {
        const errorText = (error as { text?: string }).text;
        if (
          errorText?.includes(
            "The user account which was used to submit this request does not have the right to send mail"
          )
        ) {
          errorMessage =
            "Email service configuration issue. Please contact us directly at info@tss-x.com";
        } else if (errorText?.includes("Invalid 'To' address")) {
          errorMessage =
            "Email configuration error. Please contact us directly.";
        }
      } else if (
        error &&
        typeof error === "object" &&
        "status" in error &&
        (error as { status?: number }).status === 422
      ) {
        errorMessage = "Please check all required fields and try again.";
      }

      setSubmitStatus("error");
      setErrorMessage(errorMessage);
    } finally {
      setFormData({
        fullName: "",
        workEmail: "",
        role: "",
        phone: "",
        service: "",
        message: "",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start h-full w-full">
      <div className="text-center w-full max-w-lg">
        <SpecialText className="text-4xl font-bold">
          <AnimatedText text="Contact Form" />
        </SpecialText>
        <p className="text-lg text-neutral-600 font-medium mb-8">
          Please fill out the form below and we'll get back to you.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full bg-gradient-to-br from-white to-neutral-50/50 rounded-3xl shadow-xl border border-neutral-100 p-8 space-y-6 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
          id="contact-form"
        >
          {/* Full Name Field */}
          <div className="group">
            <Input
              label="Full Name"
              leftIcon={UserIcon}
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="group">
            <Input
              label="Work Email Address"
              leftIcon={MailIcon}
              type="email"
              id="workEmail"
              name="workEmail"
              value={formData.workEmail}
              onChange={handleChange}
              placeholder="Enter your work email address"
              required
            />
          </div>

          {/* Role Field */}
          <div className="group">
            <Input
              label="Role"
              leftIcon={UserIcon}
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Enter your role"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="group">
            <Input
              label="Phone Number"
              leftIcon={PhoneIcon}
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Service Field */}
          <div className="group">
            <Input
              label="Service"
              leftIcon={MessageCircleIcon}
              type="text"
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              placeholder="What service are you interested in?"
              required
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2 group">
            <label
              htmlFor="message"
              className="flex items-center gap-2 text-sm font-semibold text-neutral-700 group-focus-within:text-amber-600 transition-colors duration-200"
            >
              <div className="p-1 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm">
                <MessageCircleIcon className="w-3 h-3" />
              </div>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={10}
              className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-200 resize-vertical bg-white/80 backdrop-blur-sm hover:bg-white focus:bg-white shadow-sm hover:shadow-md focus:shadow-lg"
              placeholder="Please describe your inquiry in detail..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
            } text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 group`}
            id="contact-form-button"
          >
            <Send
              className={`w-4 h-4 ${
                isSubmitting ? "animate-spin" : "group-hover:translate-x-0.5"
              } transition-transform duration-200`}
            />
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="text-green-600 text-center font-medium bg-green-50 p-3 rounded-lg border border-green-200">
              ✅ Message sent successfully! We'll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="text-red-600 text-center font-medium bg-red-50 p-3 rounded-lg border border-red-200">
              ❌ {errorMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
