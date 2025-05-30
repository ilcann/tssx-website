type FAQItemData = {
  question: string;
  answer: string;
};

const faqItems: FAQItemData[] = [
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

export default faqItems;
