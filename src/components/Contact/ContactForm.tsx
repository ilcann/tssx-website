import { useState } from "react";
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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    role: "",
    phone: "",
    service: "",
    message: "",
  });

  // Unified handler for all form inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Debug: Show that values are changing
    console.log(`Field ${name} changed to:`, value);
    console.log("Full form data:", { ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(formData);
    } catch (error) {
      console.error(error);
    } finally {
      setFormData({
        fullName: "",
        workEmail: "",
        role: "",
        phone: "",
        service: "",
        message: "",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-12 w-full">
      <div className="text-center">
        <SpecialText className="text-4xl font-bold">
          <AnimatedText text="Contact Form" />
        </SpecialText>
        <p className="text-lg text-gray-500 my-8">
          Please fill out the form below and we'll get back to you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 space-y-6"
          id="contact-form"
        >
          {/* Full Name Field */}
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

          {/* Email Field */}
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

          {/* Role Field */}

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

          {/* Phone Field */}
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

          {/* Service Field */}
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

          {/* Message Field */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="flex items-center gap-2 text-sm font-medium text-gray-700"
            >
              <MessageCircleIcon className="w-4 h-4 text-amber-600" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 resize-vertical"
              placeholder="Please describe your inquiry in detail..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            id="contact-form-button"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
