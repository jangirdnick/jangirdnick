import { FormFieldsPeops } from '../types';

export const FormFields: FormFieldsPeops[] = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'What is your name?',
    placeholder: 'John Doe',
  },
  {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'What is your email address?',
    placeholder: 'hello@nickdev.space',
  },
  {
    id: 'subject',
    name: 'subject',
    type: 'text',
    label: 'What is your subject?',
    placeholder: 'Project inquiry or subject',
  },
];
