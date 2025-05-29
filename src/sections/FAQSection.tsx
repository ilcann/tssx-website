import FAQ from "@/components/FAQ";
import type { FAQItemProps } from "@/components/FAQ";
import SpecialText from "@/components/ui/SpecialText";

const FAQSection = () => {
  // FAQ data
  const faqItems: FAQItemProps[] = [
    {
      question: "What IT infrastructure solutions do you offer?",
      answer:
        "We offer a comprehensive range of IT infrastructure solutions including Hybrid Cloud Provisioning, AIOps Observability, Compliance Management, Patch Management, Business Process Automation, Threat & Vulnerability Management, Configuration Management, Endpoint Management, and IT Security Automation.",
    },
    {
      question: "How can your automation solutions help my business?",
      answer:
        "Our automation solutions streamline complex workflows, reduce manual intervention, and enable consistent, error-free processes across your IT infrastructure. This leads to increased operational efficiency, reduced costs, improved compliance, and allows your team to focus on strategic initiatives rather than routine tasks.",
    },
    {
      question:
        "What experience does your team have in IT infrastructure management?",
      answer:
        "Our team consists of experienced professionals with backgrounds from Istanbul Technical University who have worked in diverse roles such as System Engineers, Principal Consultants, Managers, and Directors at prominent companies. We have extensive experience in application, database, server, storage, network, and security infrastructure management.",
    },
    {
      question:
        "Do you provide compliance management for specific industry standards?",
      answer:
        "Yes, our Infrastructure Compliance Management solutions help businesses adhere to global security benchmarks like PCI-DSS, CIS, DISA, SOX, and HIPAA across Unix, Linux, and Windows environments. We automate compliance checks and provide instant remediation for unmatched compliance.",
    },
    {
      question: "What are the performance benefits of your solutions?",
      answer:
        "Our solutions provide significant performance improvements, including 2 minutes faster provision time, 100% regulatory compliance, 94% of vulnerabilities fixed within 12 weeks, and patching that requires only 1 person-day per month with 999% success rate.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 bg-gradient-to-b from-amber-50/50 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-100 rounded-full opacity-30 transform translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-200 rounded-full opacity-20 transform -translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-amber-200 rounded-full opacity-10 transform -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SpecialText>
            <h2 className="text-4xl font-bold mb-6 text-neutral-900">
              Frequently Asked Questions
            </h2>
          </SpecialText>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Get answers to the most common questions about our{" "}
            <span className="text-amber-600 font-semibold">
              IT infrastructure solutions
            </span>
          </p>
        </div>

        <div className="max-w-4xl shadow-none mx-auto">
          <FAQ items={faqItems} className="mb-8" />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
