"use client";

import React, { useState } from "react";
import { motion, type HTMLMotionProps } from "motion/react";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  label?: string;
  children?: React.ReactNode
}

export default function Button({
  label = "More about me",
  children,
  onClick,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const content = children || label;

  return (
    <motion.button
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      whileHover={
        disabled
          ? undefined
          : {
            scale: [1, 1.05, 0.9, 1.02, 1],
            transition: { duration: 0.6, ease: "easeOut" },
          }
      }
      whileTap={disabled ? undefined : { scale: 0.92 }}
      className={`group relative text-lg inline-flex items-center justify-center rounded-full bg-foreground text-background px-7 py-3.5 cursor-pointer overflow-hidden border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {/* ── Text & Icon Roll-Up Container ─────────────────────────── */}
      <div className="relative z-10 flex items-center gap-3 overflow-hidden h-6">
        {/* Default Slot (Rolls Up Out) */}
        <motion.div
          animate={{ y: isHovered ? "-100%" : "0%" }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="flex items-center gap-3"
        >
          <span className="font-helveticaMedium  tracking-wide">
            {content}
          </span>
          <svg
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="shrink-0"
          >
            <path d="M10.9999 2.04938L11 4.06188C7.05371 4.55396 4 7.92036 4 12C4 16.4183 7.58172 20 12 20C13.8487 20 15.5509 19.3729 16.9055 18.3199L18.3289 19.7428C16.605 21.1536 14.4014 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81468 5.94662 2.55115 10.9999 2.04938ZM21.9506 13.0001C21.7509 15.0111 20.9555 16.8468 19.7433 18.3283L18.3199 16.9055C19.1801 15.799 19.756 14.4606 19.9381 12.9999L21.9506 13.0001ZM13.0011 2.04948C17.725 2.51902 21.4815 6.27589 21.9506 10.9999L19.9381 11C19.4869 7.38162 16.6192 4.51364 13.001 4.062L13.0011 2.04948Z" />
          </svg>
        </motion.div>

        {/* Hovered Slot (Rolls Up In from Below) */}
        <motion.div
          animate={{ y: isHovered ? "-100%" : "0%" }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="absolute left-0 top-full flex items-center gap-3 text-white mt-0.5"
        >
          <span className="font-helveticaMedium tracking-wide">
            {content}
          </span>
          <svg
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="shrink-0"
          >
            <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z" />
          </svg>
        </motion.div>
      </div>

      {/* ── Morphing Background Liquid Bubble Fill ────────────────── */}
      <motion.div
        initial={{ top: "101%", borderTopLeftRadius: "100%", borderTopRightRadius: "100%" }}
        animate={
          isHovered
            ? {
              top: "0%",
              borderTopLeftRadius: ["100%", "40%", "0%"],
              borderTopRightRadius: ["100%", "40%", "0%"],
            }
            : {
              top: "101%",
              borderTopLeftRadius: "100%",
              borderTopRightRadius: "100%",
            }
        }
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 z-1 w-full h-[140%] bg-orange-600 pointer-events-none"
      />
    </motion.button>
  );
}
