'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import NextLink from 'next/link';

export interface LinkProps {
  text?: string;
  href: string;
  isAnimate?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
}

export default function Link({
  text,
  href,
  isAnimate = true,
  children,
  className = '',
  onClick,
  target,
  rel,
}: LinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const content = text || children;

  const animationClasses = isAnimate
    ? `before:absolute before:bottom-1 before:left-0 before:h-px before:w-full before:bg-current 
       before:content-[''] before:transition-transform before:duration-300 before:ease-out 
    ${
      isHovered
        ? 'before:origin-left before:scale-x-100 before:-skew-x-1'
        : 'before:origin-right before:scale-x-0 before:skew-x-0'
    }`
    : '';

  return (
    <motion.li className="list-none inline-block">
      <NextLink
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className={`relative inline-flex items-center group cursor-pointer text-xs xl:text-sm 2xl:text-base ${className}`}
      >
        <motion.span
          animate={isAnimate && isHovered ? { skewX: -1 } : { skewX: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className={`relative inline-block font-thin py-0.5 ${animationClasses}`}
        >
          {content}
        </motion.span>
      </NextLink>
    </motion.li>
  );
}
