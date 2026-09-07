"use client";

import { memo } from "react";
import { motion, useTransform } from "motion/react";
import { WordProps } from "./types";

/**
 * Individual Word component with bottom-to-top overflow mask animation.
 * Wrapped in React.memo to avoid unnecessary re-renders.
 */
export const Word = memo(function Word({
  word,
  index,
  progress,
  range,
}: WordProps) {
  const y = useTransform(progress, range, ["100%", "0%"]);

  const isHighlighted = index === 14 || index === 15 || index === 22;

  return (
    <span className="inline-block overflow-hidden align-bottom mr-[0.25em] py-[0.05em] my-[-0.05em]">
      <motion.span
        style={{ y }}
        className={`inline-block ${isHighlighted ? "text-orange-600" : ""}`}
      >
        {word}
      </motion.span>
    </span>
  );
});
