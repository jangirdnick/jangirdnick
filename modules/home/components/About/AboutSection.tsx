import SectionHeading from '../../../../components/SectionHeading';
import Paragraph from '../../../../components/paragraph/Paragraph';
import Button from '../../../../components/Button';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="w-full">
      <div className="p-6 py-16 lg:px-12 xl:py-28 flex flex-col gap-8 2xl:gap-10 tracking-[-0.04em]">
        <SectionHeading />

        <div>
          <Paragraph
            offset={['start 0.85', 'start 0.3']}
            text="I create thoughtful digital experiences that go beyond simply looking good. 
            I design and build modern, personalized websites that reflect my skills, creativity, and passion for the web."
          />
        </div>

        <div>
          <Link href={'/about'}>
            <Button />
          </Link>
        </div>
      </div>
    </section>
  );
}
