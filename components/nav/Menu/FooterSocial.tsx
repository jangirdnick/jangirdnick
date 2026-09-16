import { socialLinks } from '../../../data/SocialLinks';
import Link from '../../Link';

export default function FooterSocial({
  className,
  className2,
}: {
  className?: string;
  className2?: string;
}) {
  return (
    // nav = social links navigation (secondary site links)
    <nav aria-label="Social links" className={`flex flex-col gap-1 text-background ${className}`}>
      <div>
        <h4 className="text-sm 2xl:text-base tracking-[-0.04em] uppercase">Socials</h4>
      </div>
      <ul className={`flex flex-wrap gap-4 text-xs md:text-sm list-none ${className2}`}>
        {socialLinks.map((s) => (
          <li key={s.label}>
            <Link
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-background/50 hover:text-background transition-colors max-md:text-base"
            >
              {s.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
