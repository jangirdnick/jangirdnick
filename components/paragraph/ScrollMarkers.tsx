"use client";

import { memo } from "react";
import { motion } from "motion/react";
import { ScrollMarkersProps } from "./types";
import { parseViewportPercent } from "./utils";

/**
 * Visual debug markers indicating scroll animation trigger boundaries and live progress.
 * Wrapped in React.memo for optimal rendering performance.
 */
export const ScrollMarkers = memo(function ScrollMarkers({
  progressText,
  offset = ["start 0.9", "start 0.25"],
}: ScrollMarkersProps) {
  const startStr = (offset[0] as string) || "start 0.9";
  const endStr = (offset[1] as string) || "start 0.25";

  const startPercent = parseViewportPercent(startStr, 90);
  const endPercent = parseViewportPercent(endStr, 25);

  return (
    <>
      {/* Viewport Start Marker */}
      <div
        style={{ top: `${startPercent}%` }}
        className="fixed left-0 right-0 border-t-2 border-dashed border-green-500 z-50 pointer-events-none flex items-center justify-between px-4 text-xs font-mono text-green-400 bg-black/80 py-1 transition-all"
      >
        <span className="font-bold">
          START MARKER ({startStr} → {startPercent.toFixed(0)}%)
        </span>
        <span className="flex items-center gap-1">
          Scroll Progress:{" "}
          <motion.span className="font-bold text-white">
            {progressText}
          </motion.span>
        </span>
      </div>

      {/* Viewport End Marker */}
      <div
        style={{ top: `${endPercent}%` }}
        className="fixed left-0 right-0 border-t-2 border-dashed border-red-500 z-50 pointer-events-none flex items-center justify-between px-4 text-xs font-mono text-red-400 bg-black/80 py-1 transition-all"
      >
        <span className="font-bold">
          END MARKER ({endStr} → {endPercent.toFixed(0)}%)
        </span>
      </div>

      {/* Element Progress Badge */}
      <div className="absolute -top-7 right-0 text-xs font-mono text-yellow-400 bg-yellow-950/80 border border-yellow-600/50 px-2 py-0.5 rounded pointer-events-none flex items-center gap-2">
        <span>[Paragraph Element]</span>
        <span>
          Progress:{" "}
          <motion.span className="text-white font-bold">
            {progressText}
          </motion.span>
        </span>
      </div>
    </>
  );
});
