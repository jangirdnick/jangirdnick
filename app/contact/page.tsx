import Image from 'next/image';
import Link from '../../components/Link';
import ContactForm from '../../modules/contact/components/ContactForm';
import { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import Paragraph from '../../components/paragraph/Paragraph';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Jangir D Nick — share an idea, question, project, or hiring brief. Full-stack and cloud engineering for growing businesses. Fast, thoughtful replies.',
  alternates: {
    canonical: 'https://nickdev.space/contact',
  },
  openGraph: {
    title: 'Contact | Jangir D Nick',
    description:
      'An idea, a question, a project, or a hire? Message Jangir D Nick for web development, cloud, and product engineering.',
    url: 'https://nickdev.space/contact',
    type: 'website',
    images: [
      {
        url: 'https://ik.imagekit.io/ey4pcsgfy/avatar/jangirdnick-passport.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Jangir D Nick',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Jangir D Nick',
    description:
      'An idea, a question, a project, or a hire? Message Jangir D Nick for web development, cloud, and product engineering.',
    images: ['https://ik.imagekit.io/ey4pcsgfy/avatar/jangirdnick-passport.webp'],
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://nickdev.space/contact#contactpage',
  url: 'https://nickdev.space/contact',
  name: 'Contact Jangir D Nick',
  description:
    'Contact Jangir D Nick for web development, cloud engineering, or product collaboration.',
  inLanguage: 'en-US',
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://nickdev.space/#person',
    name: 'Jangir D Nick',
    email: 'Hello@nickdev.space',
    url: 'https://nickdev.space',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'Hello@nickdev.space',
      contactType: 'professional inquiries',
      availableLanguage: ['English'],
    },
  },
};

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={contactSchema} />
      <section
        aria-label="Contact information and form"
        className="relative w-full min-h-screen lg:h-screen px-4 md:px-6 xl:px-12 pt-28 md:pt-32 lg:pt-36 pb-8 lg:pb-12 tracking-[-0.04em] flex flex-col justify-center"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 xl:gap-12 items-stretch h-full">
          <div className="w-full space-y-6">
            <div className="space-y-6">
              <div>
                <h1 className="w-[90%] md:w-[60%] xl:w-[80%]">
                  <Paragraph mode="loader" className="text-4xl! xl:text-6xl! font-medium!">
                    — Together one project starten?
                  </Paragraph>
                </h1>
              </div>

              <div>
                <Paragraph
                  mode="loader"
                  text="A role, a build, a question, or a rough idea? Drop a message. I get back soon,
                  think alongside you, and keep the conversation real—not scripted."
                  className="w-full lg:w-4/5! text-lg! lg:text-base! xl:text-lg! text-foreground/80!"
                />
              </div>
            </div>

            <address className="flex items-end gap-3 pt-4 not-italic">
              <div className="w-24 h-24 lg:w-24 lg:h-24 xl:w-28 xl:h-28 overflow-hidden shrink-0">
                <Image
                  src="https://ik.imagekit.io/ey4pcsgfy/avatar/jangirdnick-passport.webp?tr=w-300,q-80"
                  alt="Jangir D Nick — Full-Stack & Cloud Engineer"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                  priority
                  unoptimized
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
            </address>

            <div
              aria-hidden="true"
              className="absolute left-[-25%] bottom-[-25%] xl:left-[-20%] xl:bottom-[-20%] 2xl:left-[-15%] 2xl:bottom-[-15%] hidden lg:block"
            >
              <div className="w-100 h-100 border-50 xl:border-60 2xl:border-80 border-gray-200 outline-50 xl:outline-60 2xl:outline-80 outline-gray-100  rounded-full" />
            </div>
          </div>

          <div className="w-full h-full">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
