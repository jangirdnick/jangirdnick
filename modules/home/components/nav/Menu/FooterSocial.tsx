import React from 'react';
import { socialLinks } from '../../../data/SocialLinks';
import Link from '../../../../../components/Link';

export default function FooterSocial({
  className,
  className2,
}: {
  className?: string;
  className2?: string;
}) {
  return (
    <div className={`flex flex-col gap-1 text-background ${className}`}>
      <div>
        <p className="text-sm 2xl:text-base tracking-[-0.04em] uppercase">Socials</p>
      </div>
      <div className={`flex flex-wrap gap-4 text-xs md:text-sm ${className2}`}>
        {socialLinks.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="text-background/50 hover:text-background transition-colors max-md:text-base"
          >
            {s.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
