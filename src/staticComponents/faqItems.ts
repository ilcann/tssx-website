type FAQItemData = {
  question: string;
  answer: string;
};

const faqItems: FAQItemData[] = [
  {
    question: "What IT infrastructure solutions do you offer?",
    answer:
      "We offer a comprehensive range of IT infrastructure solutions, including: Business and IT Automation, Observability, Asset Management and Infrastructure Dependency Mapping, Vulnerability and Patch Management, IT Compliance Management and Remediation, Privileged Access Management, Identity and Access Management",
  },
  {
    question: "How can your automation solutions help my business?",
    answer:
      "Our automation solutions are designed to: Significantly reduce manual efforts—from days to minutes, Establish well-defined and standardized business workflows, Minimize vulnerabilities and security findings, Enable faster and standardized provisioning of infrastructure services, Ensure infrastructure is compliance-ready",
  },
  {
    question:
      "What experience does your team have in IT infrastructure management?",
    answer:
      "Our team brings extensive experience from both the customer and consultancy sides. Members have held engineering, managerial, and director roles, and have successfully delivered dozens of projects across more than 10 countries. Our expertise spans various sectors, including telecommunications, banking, energy, and the public sector.",
  },
  {
    question: "How can your Observability solutions help my business?",
    answer:
      "We take a consultative approach rather than recommending tools on day one. Our process begins with a detailed assessment to understand your unique observability needs. Based on the findings, we collaboratively define the best-fit approach and select the most suitable tools. This ensures that you gain complete visibility into the processes that matter most to your business.",
  },
  {
    question: "What is your project approach?",
    answer:
      "From day one, our team focuses on understanding your business needs and identifying existing gaps. Upon completing the assessment, we deliver a tailored solution architecture and implementation roadmap that addresses your requirements within a defined timeline.",
  },
];

export default faqItems;
