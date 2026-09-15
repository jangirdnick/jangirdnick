import { ChangeEvent } from 'react';

export interface FormTextAreaProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  rows?: number;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

export function FormTextArea({
  id,
  name,
  label,
  placeholder,
  value,
  rows = 4,
  required = true,
  onChange,
  className = '',
}: FormTextAreaProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <label htmlFor={id} className="block text-base md:text-lg text-foreground/90 font-normal">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-foreground/20 focus:border-foreground transition-colors py-2 px-0 text-base md:text-lg outline-none resize-none placeholder:text-foreground/30 text-foreground/80"
      />
    </div>
  );
}
