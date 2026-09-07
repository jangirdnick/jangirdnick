"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Button from "../../../../components/Button";
import Link from "next/link";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.99, 1]);

  return (
    <footer
      ref={containerRef}
      className="relative h-150 w-full"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      <div className="fixed bottom-0 left-0 right-0 w-full bg-foreground text-background overflow-hidden -z-10 px-12">
        <motion.div
          style={{ y, opacity, scale }}
          className="w-full h-full flex flex-col gap-16"
        >
          <div className="flex items-center gap-4 pt-8">
            <div className="w-40 h-40 bg-red-900"></div>

            <div>
              <p className="text-7xl">
                Ready to
                <br />
                fall on—?
              </p>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-sm text-background/60 space-y-40">

            <Button label="Hello@nickdev.space" className="bg-background! text-foreground! text-xl!" />

            <div className="flex items-center justify-between tracking-[-0.04em]">
              <p>© {new Date().getFullYear()} - Nick</p>


              <div>
                <p className="text-sm text-background">SOCIALS</p>
                <div className="flex gap-6">
                  <Link href={'/'}>Twitter / X</Link>
                  <Link href={'/'}>GitHub</Link>
                  <Link href={'/'}>LinkedIn</Link>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </footer>
  );
}
