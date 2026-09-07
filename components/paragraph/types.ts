import { MotionValue, UseScrollOptions } from "motion/react";

export type OffsetTuple = NonNullable<UseScrollOptions["offset"]>;

export interface ParagraphProps {
  text: string;
  isAnimate?: boolean;
  className?: string;
  showMarkers?: boolean;
  offset?: OffsetTuple;
}

export interface WordProps {
  word: string;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
}

export interface ScrollMarkersProps {
  progressText: MotionValue<string>;
  offset?: OffsetTuple;
}
