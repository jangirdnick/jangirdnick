import Image from 'next/image';
import Link from '../../components/Link';
import ContactForm from '../../modules/contact/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Jangir D Nick — share an idea, question, project, or hiring brief. Full-stack and cloud engineering for growing businesses. Fast, thoughtful replies.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Jangir D Nick',
    description:
      'An idea, a question, a project, or a hire? Message Jangir D Nick for web development, cloud, and product engineering.',
    url: 'https://nickdev.space/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Jangir D Nick',
    description:
      'An idea, a question, a project, or a hire? Message Jangir D Nick for web development, cloud, and product engineering.',
  },
};
export default function ContactPage() {
  return (
    <>
      <section className=" relative w-full min-h-screen lg:h-screen px-4 md:px-6 xl:px-12 pt-28 md:pt-32 lg:pt-36 pb-8 lg:pb-12 tracking-[-0.04em] flex flex-col justify-center">
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
                  A role, a build, a question, or a rough idea? Drop a message. I get back soon,
                  think alongside you, and keep the conversation real—not scripted.
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

            <div className=" absolute left-[-25%] bottom-[-25%] xl:left-[-20%] xl:bottom-[-20%] 2xl:left-[-15%] 2xl:bottom-[-15%] hidden lg:block">
              <div className="w-100 h-100 border-50 xl:border-60 2xl:border-80 border-gray-200 outline-50 xl:outline-60 2xl:outline-80 outline-gray-100  rounded-full" />
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
