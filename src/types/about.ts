export type CaseStudyProps = {
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  description: string;
  image?: string;
  points: Array<{
    label: string;
    value: string;
  }>;
};
