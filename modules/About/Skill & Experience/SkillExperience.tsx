'use client';

import { useRef, useEffect, useState, useSyncExternalStore } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import Button from '../../../components/Button';
import Link from 'next/link';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../data/experiences';
import Paragraph from '../../../components/paragraph/Paragraph';
import SectionHeading from '../../../components/SectionHeading';

const subscribeMobile = (callback: () => void) => {
  const mq = window.matchMedia('(max-width: 767px)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
};

const getMobileSnapshot = () => window.matchMedia('(max-width: 767px)').matches;
const getMobileServerSnapshot = () => false;

export default function SkillExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState<number>(0);
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
        setScrollDistance(distance);
      }
    };

    updateDistance();
    const timer = setTimeout(updateDistance, 150);

    const resizeObserver = new ResizeObserver(updateDistance);
    if (trackRef.current) resizeObserver.observe(trackRef.current);

    window.addEventListener('resize', updateDistance);
    return () => {
      clearTimeout(timer);
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Mobile पर scroll trigger जल्दी खत्म होे ताकि section बहुत लंबी न लगे
    offset: isMobile ? ['start start', 'end 0.6'] : ['start start', 'end 0.4'],
  });

  const rawX = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
  const x = useSpring(rawX, { damping: 40, stiffness: 100, mass: 0.2 });

  return (
    // Mobile पर 220vh काफी है — desktop पर 320vh
    <section
      ref={containerRef}
      className="relative h-[220vh] md:h-[320vh] w-full tracking-[-0.04em]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col">
        {/* ── Header area ─────────────────────────────────────────── */}
        <div className="relative px-4 md:px-12 pt-10 md:pt-14 pb-0 flex-none">
          {/* Top row: label + CTA */}
          <div className="relative z-10 flex flex-col gap-4 md:gap-8 mb-4 md:mb-8">
            <SectionHeading title="Skill &amp; Experience" />

            <Paragraph
              text="What I Do timeline"
              offset={['start 0.99', 'start 0.7']}
              className="tracking-[-0.04em]!"
            />

            {/* CTA — mobile पर hide, desktop पर show */}
            <div className="hidden md:block">
              <Link href="/work">
                <Button>View my work</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Cards track ─────────────────────────────────────────── */}
        {/* Mobile: items-center + कम padding; Desktop: items-center + ज़्यादा padding */}
        <div className="relative z-10 flex-1 min-h-0 flex items-center max-md:pb-6">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-4 md:gap-5 w-max px-6 md:px-28"
          >
            {experiences.map((item, index) => (
              <ExperienceCard
                key={item.id}
                item={item}
                index={index}
                total={experiences.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
