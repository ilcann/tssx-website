import { ContactForm, Meta, PageHeader } from "@/components/Contact/"
import { ContactBanner } from "@/components/Shared";

const Contact = () => {
  return (
    <>
      <Meta />
      <main className="app-content">
        <PageHeader />
        <ContactForm />
        <ContactBanner/>
      </main>
    </>
  )
}

export default Contact;
