import SectionHeading from '../../components/SectionHeading';

import Image from 'next/image';

const certifieates = [
  { img: 'https://ik.imagekit.io/ey4pcsgfy/section/nick-certificate1.webp', alt: 'Certificate 1' },
  { img: 'https://ik.imagekit.io/ey4pcsgfy/section/nick-certificate-2.webp', alt: 'Certificate 2' },
  // { img: '', alt: 'Certificate 3' },
];

export default function Certificates() {
  return (
    <section className="w-full px-6 md:px-12 pt-20 md:pt-80 xl:pt-100 pb-32 flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center text-center gap-6">
        <SectionHeading title="Certificates" />
        <h2 className="text-[8.8vw] md:text-[6.5vw] lg:text-[5vw] 2xl:text-7xl tracking-[-0.04em] max-2xl:leading-none">
          From idea to online <br /> experience
        </h2>
      </div>

      <div className="w-full grid md:grid-cols-3 gap-6">
        {certifieates.map((certificate, i) => (
          <div
            key={i}
            className={`w-full h-[70vw] md:h-[25vw] xl:h-100 
          ${i === 0 ? 'bg-background' : i === 1 ? 'bg-[#151D1D]' : 'bg-orange-700'}`}
          >
            <Image
              src={certificate.img}
              alt={certificate.alt}
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
