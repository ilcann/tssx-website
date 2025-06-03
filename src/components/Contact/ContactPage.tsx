import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full py-12 max-w-7xl mx-auto px-4">
      <div className="flex flex-col h-full">
        <ContactInfo />
      </div>
      <div className="flex flex-col h-full">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
