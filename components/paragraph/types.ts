import { MotionValue, UseScrollOptions } from 'motion/react';

export type OffsetTuple = NonNullable<UseScrollOptions['offset']>;

export type ParagraphAnimationMode = 'scroll' | 'loader' | 'none';

export interface ParagraphProps {
  text?: string;
  children?: React.ReactNode;
  mode?: ParagraphAnimationMode;
  isAnimate?: boolean;
  className?: string;
  showMarkers?: boolean;
  offset?: OffsetTuple;
  staggerDelay?: number;
}

export interface WordProps {
  word: string;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
}

export interface LoaderWordProps {
  word: string;
  index: number;
  isLoaded: boolean;
  staggerDelay?: number;
}

export interface ScrollMarkersProps {
  progressText: MotionValue<string>;
  offset?: OffsetTuple;
}
