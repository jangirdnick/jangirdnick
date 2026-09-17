import SectionHeading from '../../../components/SectionHeading';
import Image from 'next/image';
import { certificates } from '../../../data/certificates';

export default function Certificates() {
  return (
    // section = thematic grouping: certifications
    <section
      aria-label="Certifications"
      className="w-full px-4 md:px-12 pt-20 md:pt-80 xl:pt-100 pb-32 flex flex-col items-center justify-center gap-6"
    >
      <header className="flex flex-col items-center text-center gap-6">
        <SectionHeading title="Certificates" />
        <h2 className="text-[8.8vw] md:text-[6.5vw] lg:text-[5vw] 2xl:text-7xl tracking-[-0.04em] max-2xl:leading-none">
          From idea to online <br /> experience
        </h2>
      </header>

      {/* ul = unordered list of certificate items */}
      <ul className="w-full grid md:grid-cols-3 gap-6 list-none" role="list">
        {certificates.map((certificate, i) => (
          <li key={i}>
            {/* figure = image + caption — correct for certificate images */}
            <figure
              className={`w-full h-[70vw] md:h-[25vw] xl:h-100 m-0 ${
                i === 0 ? 'bg-background' : i === 1 ? 'bg-[#151D1D]' : 'bg-orange-700'
              }`}
            >
              <Image
                src={certificate.img}
                alt={certificate.alt}
                width={500}
                height={500}
                className="w-full h-full object-contain"
              />
              <figcaption className="sr-only">{certificate.title}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
