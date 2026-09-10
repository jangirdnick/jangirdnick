'use client';

import { useRef, useMemo, Suspense } from 'react';
import { useScroll, useTransform } from 'motion/react';
import { ParagraphProps } from './types';
import { parseWords, calculateWordRange } from './utils';
import { Word } from './Word';
import { ScrollMarkers } from './ScrollMarkers';

function ParagraphContent({
  text,
  isAnimate = true,
  className = '',
  showMarkers = false,
  offset = ['start 0.9', 'start 0.25'],
}: ParagraphProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
  });

  const progressText = useTransform(scrollYProgress, (v) => `${Math.round(v * 100)}%`);

  // Memoize word parsing so text is not split on every re-render
  const words = useMemo(() => parseWords(text), [text]);

  return (
    <div
      ref={containerRef}
      className={`relative text-[8vw] md:text-[5vw] lg:text-4xl xl:text-5xl 2xl:text-6xl max-md:w-[95%] xl:w-[90%] 2xl:w-[83%]  leading-[1.2] tracking-[-0.02em] ${className} overflow-hidden`}
    >
      {showMarkers && <ScrollMarkers progressText={progressText} offset={offset} />}
      {isAnimate
        ? words.map((word, index) => (
            <Word
              key={`${index}-${word}`}
              word={word}
              index={index}
              progress={scrollYProgress}
              range={calculateWordRange(index, words.length)}
            />
          ))
        : text}
    </div>
  );
}

export default function Paragraph(props: ParagraphProps) {
  return (
    <Suspense
      fallback={
        <div className={`text-5xl w-3/4 leading-[1.3] opacity-0 ${props.className || ''}`}>
          {props.text}
        </div>
      }
    >
      <ParagraphContent {...props} />
    </Suspense>
  );
}
