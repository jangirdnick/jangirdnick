import React from 'react';

export interface SectionHeadingProps {
  title?: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  title = 'Recognizable',
  icon,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {icon ? (
        icon
      ) : (
        <div className="-mt-1">
          <svg
            className="fill-orange-600 w-3 h-3 lg:w-2.5 lg:h-2.5 xl:w-3 xl:h-3 2xl:w-4 2xl:h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
          </svg>
        </div>
      )}

      <div>
        <h3 className="font-helveticaMediumItalic uppercase text-[3.6vw] md:text-[2vw] lg:text-xs xl:text-sm 2xl:text-base">
          {title}
        </h3>
      </div>
    </div>
  );
}
