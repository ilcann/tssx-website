export type CaseStudyProps = {
    title: string;
    subtitle: string;
    description: string;
    points: Array<{
      label: string;
      value: string;
    }>;
  };