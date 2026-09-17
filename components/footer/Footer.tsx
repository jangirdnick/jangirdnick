import Button from '../Button';
import Image from 'next/image';
import FooterSocial from '../nav/Menu/FooterSocial';
import FooterAnimated from './FooterAnimated';

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="relative max-md:h-[150vw] md:h-130 max-xl:h-100 2xl:h-150 w-full"
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
    >
      <div className="fixed bottom-0 left-0 right-0 w-full bg-foreground text-background overflow-hidden -z-10 px-4 md:px-12">
        <FooterAnimated>
          <div className="flex items-end justify-between pb-10 pt-24">
            <div className="flex items-center gap-4">
              <div className="w-22 h-22 lg:h-24 lg:w-24 xl:w-32 xl:h-32 2xl:w-40 2xl:h-40">
                <Image
                  src="https://ik.imagekit.io/ey4pcsgfy/avatar/jangirdnick-passport.webp"
                  alt="Jangir D Nick avatar"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                {/* h2 = primary call-to-action heading inside the footer */}
                <h2 className="text-[10vw] md:text-5xl xl:text-6xl 2xl:text-7xl max-md:leading-none max-md:pt-1">
                  Ready to
                  <br />
                  fall on—?
                </h2>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-sm text-background/60 space-y-20 xl:space-y-30">
            {/* address = machine-readable contact info (email) */}
            <address className="not-italic">
              <Button
                label="Hello@nickdev.space"
                className="bg-background! text-foreground! text-xl md:text-sm! xl:text-lg! 2xl:text-xl!"
              />
            </address>

            <div className="flex md:items-end justify-between tracking-[-0.04em] text-sm md:text-[11px] xl:text-xs 2xl:text-sm max-md:flex-col-reverse max-md:gap-20">
              <div className="flex items-center gap-16 2xl:gap-22 max-md:justify-between md:pb-1">
                <p className="text-background/60">© 2026 - Nick</p>
                <p>Privacy Policy</p>
              </div>

              <FooterSocial
                className="max-md:scale-[1] max-lg:scale-[0.95] max-xl:scale-[0.8] scale-[0.9]"
                className2="max-md:flex-col text-xl lg:text-xs! gap-1.5! tracking-[-0.01em]"
              />
            </div>
          </div>
        </FooterAnimated>
      </div>
    </footer>
  );
}
