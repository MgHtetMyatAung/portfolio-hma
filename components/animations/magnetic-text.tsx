"use client";

import Link from "next/link";

interface MagneticTextProps {
  children: string;
  revealText?: string;
  href?: string;
  strength?: number;
  cursorText?: string;
  className?: string;
}

export default function MagneticText({
  children,
  revealText,
  href,
  strength = 0.35,
  cursorText,
  className = "",
}: MagneticTextProps) {
  // Use revealText first, then cursorText, otherwise repeat children
  const secondLine = revealText ?? cursorText ?? children;

  const sharedProps = {
    "data-cursor-magnetic": true,
    "data-magnetic-strength": strength,
    ...(cursorText ? { "data-cursor-text": cursorText } : {}),
    className: `group relative hidden md:inline-flex cursor-pointer select-none py-1 ${className}`,
  };

  const content = (
    <span className="relative inline-grid overflow-hidden leading-tight">
      {/* Default Text ("Power") - slides up and out on hover */}
      <span className="col-start-1 row-start-1 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
        {children}
      </span>

      {/* Revealed Text ("Data") - slides up from below on hover */}
      <span
        aria-hidden="true"
        className="col-start-1 row-start-1 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0"
      >
        {secondLine}
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} {...sharedProps}>
        {content}
      </Link>
    );
  }

  return (
    <span {...sharedProps} data-cursor-hover>
      {content}
    </span>
  );
}
