"use client";

import Image from "next/image";
import NavDesktop from "@/modules/home/components/nav/NavDesktop";
import { motion, useScroll, useTransform } from "motion/react";


export default function HomeSection() {

  const { scrollY } = useScroll();

  const heroImageY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroImageScale = useTransform(scrollY, [0, 1000], [1.2, 1.35]);

  const heroTextY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroTextOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  const watermarkY = useTransform(scrollY, [0, 800], [0, 330]);
  const watermarkX = useTransform(scrollY, [0, 800], [-20, 24]);

  const rotateY = useTransform(scrollY, [0, 800], [55, 0]);
  const rotateX = useTransform(scrollY, [0, 800], [-10, 0]);

  return (
    <section className="relative h-screen w-full flex bg-[#0F0A02] overflow-hidden">
      <NavDesktop />

      {/* Hero Image with Parallax & Scale */}
      <motion.div
        style={{ y: heroImageY }}
        className="hero-image-wraper w-full h-full overflow-hidden brightness-[0.9]"
      >
        <motion.div style={{ scale: heroImageScale }} className="w-full h-full">
          <Image
            src="https://ik.imagekit.io/ey4pcsgfy/Images/jangirdnick.webp"
            alt="hero-image"
            height={1800}
            width={1000}
            className="w-full h-full object-top object-contain -ml-3"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Hero Copy with Parallax Translate & Fade Out */}
      <motion.div
        style={{ y: heroTextY, opacity: heroTextOpacity }}
        className="absolute top-1/3 left-1/3 -translate-y-1/3 -translate-x-1/3 text-white text-2xl tracking-[-0.95] font-helveticaMediumItalic"
      >
        <h1 className="">Web design, -development &amp; cloud deployment</h1>
        <h1 className="">voor growing businesses that production ready</h1>
        <h1 className="text-[#e6b766] font-HelveticaNeueRoman">
          Guided by performance, security &amp; stability
        </h1>
      </motion.div>

      {/* NICK Watermark with Multi-Axis Parallax */}
      <motion.div
        style={{ y: watermarkY, x: watermarkX }}
        className="absolute bottom-[30%] left-2 perspective-dramatic1"
      >
        <motion.h1
          style={{ rotateX, rotateY }}
          className="text-9xl text-white tracking-[-0.95] font-helveticaMediumItalic scale-y-[0.95]"
        >
          NICK
        </motion.h1>
      </motion.div>
    </section>
  )
}
