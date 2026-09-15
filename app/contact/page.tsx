import Image from 'next/image';
import Link from '../../components/Link';
import ContactForm from '../../modules/contact/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Jangir d nick | Web Design & Development',
  description:
    'Have an idea, question, or project? Get in touch with Jangir d nick for web design, development, and branding services. Quick response guaranteed.',
};

export default function page() {
  return (
    <>
      <section className="w-full min-h-screen lg:h-screen px-4 md:px-6 xl:px-12 pt-28 md:pt-32 lg:pt-36 pb-8 lg:pb-12 tracking-[-0.04em] flex flex-col justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 xl:gap-12 items-stretch h-full">
          <div className="w-full space-y-6">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl xl:text-6xl font-medium">
                  — Together one
                  <br />
                  project starten?
                </h1>
              </div>

              <div>
                <p className="w-full lg:w-4/5 text-lg lg:text-base xl:text-lg text-foreground/80">
                  An idea, a question, a project or just spar? Send me a message. I respond quickly,
                  like to think along and don&apos;t promise standard copy-paste answer.
                </p>
              </div>
            </div>

            <div className="flex items-end gap-3 pt-4">
              <div className="w-24 h-24 lg:w-24 lg:h-24 xl:w-28 xl:h-28 overflow-hidden shrink-0">
                <Image
                  src="https://ik.imagekit.io/ey4pcsgfy/avatar/jangirdnick-passport.webp"
                  alt="Nick"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-base md:text-lg leading-none space-y-1">
                <div>
                  <p className="text-foreground/70 text-base">Say hai!</p>
                </div>

                <Link href="mailto:Hello@nickdev.space" className="text-lg!">
                  Hello@nickdev.space
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full h-full">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
