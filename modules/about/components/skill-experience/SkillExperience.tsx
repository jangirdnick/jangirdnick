'use client';

import { useRef, useEffect, useSyncExternalStore } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import Button from '../../../../components/Button';
import Link from 'next/link';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../../../../data/experiences';
import Paragraph from '../../../../components/paragraph/Paragraph';
import SectionHeading from '../../../../components/SectionHeading';
import {
  subscribeMobile,
  getMobileSnapshot,
  getMobileServerSnapshot,
} from '../../../../lib/useIsMobile';

export default function SkillExperience() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  // useMotionValue instead of useState — useTransform reactively tracks motion values,
  // not plain JS variables. With useState, useTransform's output range was locked to
  // the initial value (0) and never updated when the loader finished.
  const scrollDistanceMV = useMotionValue(0);
  const isMobile = useSyncExternalStore(
    subscribeMobile,
    getMobileSnapshot,
    getMobileServerSnapshot
  );

  useEffect(() => {
    const updateDistance = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const distance = Math.max(0, trackWidth - viewportWidth + 64);
        scrollDistanceMV.set(distance);
      }
    };

    updateDistance();
    // Short delay for initial render
    const timer1 = setTimeout(updateDistance, 150);
    // Longer delay to run AFTER PageLoader finishes its exit animation (~500ms total)
    const timer2 = setTimeout(updateDistance, 800);

    const resizeObserver = new ResizeObserver(updateDistance);
    if (trackRef.current) resizeObserver.observe(trackRef.current);
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    window.addEventListener('resize', updateDistance);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateDistance);
    };
  }, [scrollDistanceMV]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isMobile ? ['start start', 'end 0.6'] : ['start start', 'end 0.4'],
  });

  // useTransform now uses scrollDistanceMV (a motion value) as the multiplier
  // so the output range updates reactively when the loader releases the layout
  const rawX = useTransform(
    [scrollYProgress, scrollDistanceMV],
    ([progress, distance]: number[]) => progress * -distance
  );
  const x = useSpring(rawX, { damping: 40, stiffness: 100, mass: 0.2 });

  return (
    // section = thematic region: Skills & Experience
    <section
      ref={containerRef}
      aria-label="Skills and experience"
      className="relative h-[220vh] md:h-[320vh] w-full tracking-[-0.04em]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col">
        {/* ── Header area ─────────────────────────────────────────── */}
        <header className="relative px-4 md:px-12 pt-10 md:pt-14 pb-0 flex-none">
          {/* Top row: label + CTA */}
          <div className="relative z-10 flex flex-col gap-4 md:gap-8 mb-4 md:mb-8">
            <SectionHeading title="Skill &amp; Experience" />

            <Paragraph
              text="What I Do timeline"
              offset={['start 0.99', 'start 0.7']}
              className="tracking-[-0.04em]!"
            />

            {/* CTA — mobile hide, desktop show */}
            <div className="hidden md:block">
              <Link href="/work">
                <Button>View my work</Button>
              </Link>
            </div>
          </div>
        </header>

        {/* ── Cards track ─────────────────────────────────────────── */}
        <div className="relative z-10 flex-1 min-h-0 flex items-center max-md:pb-6">
          {/* ul = unordered list of skill cards */}
          <motion.ul
            ref={trackRef}
            style={{ x }}
            role="list"
            aria-label="Skills list"
            className="flex gap-4 md:gap-5 w-max px-6 md:px-28 list-none"
          >
            {experiences.map((item, index) => (
              // li wraps each skill card
              <li key={item.id}>
                <ExperienceCard
                  item={item}
                  index={index}
                  total={experiences.length}
                  scrollYProgress={scrollYProgress}
                />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
