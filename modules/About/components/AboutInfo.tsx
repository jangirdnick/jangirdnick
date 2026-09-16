import Paragraph from '../../../components/paragraph/Paragraph';
import Button from '../../../components/Button';
import SectionHeading from '../../../components/SectionHeading';
import Link from 'next/link';

export default function AboutInfo() {
  return (
    // section = thematic content: who Nick is + his background story
    <section
      aria-label="About Jangir D Nick"
      className="w-full p-4 space-y-12 md:p-12 md:pb-20 md:space-y-24"
    >
      {/* Bio introduction */}
      <div className="space-y-12 p-2">
        <Paragraph
          text={`Hi, I'm Nandlal Jangid – also called Nick. As a DevOps & Cloud Engineer, I design and build websites
          that stand out and perform top.`}
          className="max-md:text-[7vw]! tracking-[-0.04em]!"
        />

        <Link href={'/contact'}>
          <Button>Contact opnemen</Button>
        </Link>
      </div>

      {/* Background story */}
      <div className="border-t border-b border-gray-300 py-8 flex justify-between max-md:flex-col max-md:gap-6">
        <header>
          <SectionHeading title="What I did then" />
        </header>

        {/* article = self-contained biography / origin story */}
        <article
          aria-label="Nick's career origin story"
          className="w-full md:w-[70%] grid md:grid-cols-2 gap-8"
        >
          <p className="text-xs xl:text-base text-foreground/60 tracking-[-0.01em]">
            With a background as a failed YouTuber, I spent years from 2019 to 2023 building
            multiple channels, facing copyright strikes and even a permanent channel deletion due to
            guideline issues. That challenging journey taught me resilience and pushed me to
            discover web development, which became the turning point of my career.
          </p>

          <p className="text-xs xl:text-base text-foreground/60 tracking-[-0.01em]">
            I taught myself through carefully selected YouTube channels, started freelancing in web
            development, invested in courses, a laptop, and essential tools, and later focused on
            full-stack skills with the help of AI. Today I work as a DevOps Cloud Engineer—without
            formal company experience, yet having independently handled almost every task that
            defines the role.
          </p>
        </article>
      </div>
    </section>
  );
}
