import CurrentTime from '@/components/CurrentTime';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-end text-white overflow-hidden">
      <div className="w-full h-full">
        <Image
          src={'https://ik.imagekit.io/ey4pcsgfy/section/nick-about-hero-section.webp'}
          alt="About Image"
          width={700}
          height={700}
          className="w-full h-full object-cover md:pt-10 max-md:pb-32 scale-[1.45] md:scale-[1.15] lg:scale-[1.5] brightness-[1.1]"
          priority
        />
      </div>

      <div className="absolute bottom-0 w-full flex items-end justify-between p-4 md:p-6 font-helveticaMediumItalic tracking-[-0.04em]">
        <div className="pl-2 max-md:pb-5">
          <h1 className="text-[16vw] lg:text-9xl">About</h1>
        </div>

        <div className="flex flex-col items-end bg-foreground text-gray-300 p-2.5 rounded-lg text-xs md:text-base">
          <CurrentTime />
          <p className="uppercase">Best, The india</p>
        </div>
      </div>
    </section>
  );
}
