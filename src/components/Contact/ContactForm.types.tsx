export type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    jobTitle: string;
    solution: string;
    message: string;
};

export const INITIAL_STATE: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  jobTitle: "",
  solution: "",
  message: "",
};
