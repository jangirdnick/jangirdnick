import { ChangeEvent } from 'react';

export interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export function FormInput({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  value,
  required = true,
  onChange,
  className = '',
}: FormInputProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <label htmlFor={id} className="block text-lg text-foreground/90 font-normal">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-foreground/20 focus:border-foreground transition-colors py-2 px-0 text-lg outline-none placeholder:text-foreground/30 text-foreground/80"
      />
    </div>
  );
}
