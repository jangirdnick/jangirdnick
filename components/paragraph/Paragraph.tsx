'use client';

import { useRef, useMemo, Suspense } from 'react';
import { useScroll, useTransform } from 'motion/react';
import { ParagraphProps, ParagraphAnimationMode } from './types';
import { parseWords, calculateWordRange } from './utils';
import { Word, LoaderWord } from './Word';
import { ScrollMarkers } from './ScrollMarkers';
import { usePageLoader } from '@/components/loader/PageLoader';

function ParagraphContent({
  text,
  children,
  mode,
  isAnimate = true,
  className = '',
  showMarkers = false,
  offset = ['start 0.9', 'start 0.25'],
  staggerDelay = 0.1,
}: ParagraphProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLoaded } = usePageLoader();

  // Extract raw string content from either `text` prop or `children`
  const rawContent =
    typeof children === 'string'
      ? children
      : text || (typeof children === 'number' ? String(children) : '');

  // Resolve effective animation mode:
  // Explicit `mode` prop takes precedence ('scroll' | 'loader' | 'none').
  // If `mode` is omitted, fallback to legacy `isAnimate` (true -> 'scroll', false -> 'none').
  const effectiveMode: ParagraphAnimationMode = mode ?? (isAnimate ? 'scroll' : 'none');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
  });

  const progressText = useTransform(scrollYProgress, (v) => `${Math.round(v * 100)}%`);

  // Memoize word parsing so text is not split on every re-render
  const words = useMemo(() => parseWords(rawContent), [rawContent]);

  return (
    <div
      ref={containerRef}
      className={`relative text-[8vw] md:text-[5vw] lg:text-4xl xl:text-5xl 2xl:text-6xl max-md:w-full xl:w-[90%] 2xl:w-[83%] leading-[1.2] tracking-[-0.02em] ${className} overflow-hidden`}
    >
      {effectiveMode === 'scroll' && showMarkers && (
        <ScrollMarkers progressText={progressText} offset={offset} />
      )}

      {effectiveMode === 'scroll' &&
        words.map((word, index) => (
          <Word
            key={`${index}-${word}`}
            word={word}
            index={index}
            progress={scrollYProgress}
            range={calculateWordRange(index, words.length)}
          />
        ))}

      {effectiveMode === 'loader' &&
        words.map((word, index) => (
          <LoaderWord
            key={`${index}-${word}`}
            word={word}
            index={index}
            isLoaded={isLoaded}
            staggerDelay={staggerDelay}
          />
        ))}

      {effectiveMode === 'none' && (children ?? text)}
    </div>
  );
}

export default function Paragraph(props: ParagraphProps) {
  const content =
    typeof props.children === 'string'
      ? props.children
      : props.text || (typeof props.children === 'number' ? String(props.children) : '');

  return (
    <Suspense
      fallback={
        <div className={`text-5xl w-3/4 leading-[1.3] opacity-0 ${props.className || ''}`}>
          {content}
        </div>
      }
    >
      <ParagraphContent {...props} />
    </Suspense>
  );
}
