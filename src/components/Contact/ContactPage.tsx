import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactPage = () => {
  return (
    <div className="grid grid-cols-2 w-full">
      <div id="left-side" className="col-span-1 h-full flex flex-col gap-4 p-4">
        <ContactInfo />
      </div>
      <div
        id="right-side"
        className="col-span-1 h-full flex flex-col w-full gap-4 p-4"
      >
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
