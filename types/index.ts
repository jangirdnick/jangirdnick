export type ExperiencesType = {
  id: number;
  title: string;
  subtitle: string;
};

// Contact Page

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  description: string;
}

export type FormData = ContactFormData;

export interface FormFieldsProps {
  id: string;
  name: keyof ContactFormData;
  type: string;
  label: string;
  placeholder: string;
}

export type FormFieldsPeops = FormFieldsProps;
