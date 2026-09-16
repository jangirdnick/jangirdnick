export type ExperiencesType = {
  id: number;
  title: string;
  subtitle: string;
};

// Contact Page

export interface FormData {
  name: string;
  email: string;
  subject: string;
  description: string;
}

export interface FormFieldsPeops {
  id: string;
  name: keyof FormData;
  type: string;
  label: string;
  placeholder: string;
}
