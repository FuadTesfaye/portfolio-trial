"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"

interface GirihRosetteProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode
}

const EASE_MIZAN = [0.22, 1, 0.36, 1] as const

export function GirihRosette({
  children,
  className,
  ...props
}: GirihRosetteProps) {
  const prefersReduced = useReducedMotion()
  const isReduced = Boolean(prefersReduced)

  // 8 radial angles
  const angles = [0, 45, 90, 135, 180, 225, 270, 315]

  return (
    <div
      className={cn(
        "relative flex size-[280px] shrink-0 items-center justify-center min-[420px]:size-[320px] sm:size-[360px]",
        className
      )}
      {...props}
    >
      <svg
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute inset-0 size-full select-none"
        aria-hidden="true"
      >
        {/* Outermost construction boundary ring */}
        <motion.circle
          cx="160"
          cy="160"
          r="154"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="2 3"
          className="text-foreground/15 dark:text-foreground/20"
          initial={{
            pathLength: isReduced ? 1 : 0,
            opacity: isReduced ? 1 : 0,
          }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: EASE_MIZAN, delay: 0.1 }}
        />

        {/* 16-point outer polygon ring */}
        <motion.polygon
          points="160.00,12.00 186.14,28.57 216.64,23.27 234.45,48.58 264.65,55.35 271.42,85.55 296.73,103.36 291.43,133.86 308.00,160.00 291.43,186.14 296.73,216.64 271.42,234.45 264.65,264.65 234.45,271.42 216.64,296.73 186.14,291.43 160.00,308.00 133.86,291.43 103.36,296.73 85.55,271.42 55.35,264.65 48.58,234.45 23.27,216.64 28.57,186.14 12.00,160.00 28.57,133.86 23.27,103.36 48.58,85.55 55.35,55.35 85.55,48.58 103.36,23.27 133.86,28.57"
          stroke="currentColor"
          strokeWidth="0.9"
          className="text-foreground/20 dark:text-foreground/25"
          initial={{
            pathLength: isReduced ? 1 : 0,
            opacity: isReduced ? 1 : 0,
          }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: EASE_MIZAN, delay: 0.2 }}
        />

        {/* Outer 8-point star (first square) */}
        <motion.rect
          x="75"
          y="75"
          width="170"
          height="170"
          stroke="currentColor"
          strokeWidth="1.1"
          className="text-foreground/25 dark:text-foreground/30"
          initial={{
            pathLength: isReduced ? 1 : 0,
            opacity: isReduced ? 1 : 0,
          }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.0, ease: EASE_MIZAN, delay: 0.3 }}
        />

        {/* Outer 8-point star (second square, rotated 45 deg) */}
        <motion.rect
          x="75"
          y="75"
          width="170"
          height="170"
          transform="rotate(45 160 160)"
          stroke="currentColor"
          strokeWidth="1.1"
          className="text-foreground/25 dark:text-foreground/30"
          initial={{
            pathLength: isReduced ? 1 : 0,
            opacity: isReduced ? 1 : 0,
          }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.0, ease: EASE_MIZAN, delay: 0.35 }}
        />

        {/* Inner 8-point star rosette */}
        <motion.polygon
          points="160.00,34.00 196.74,71.31 249.10,70.90 248.69,123.26 286.00,160.00 248.69,196.74 249.10,249.10 196.74,248.69 160.00,286.00 123.26,248.69 70.90,249.10 71.31,196.74 34.00,160.00 71.31,123.26 70.90,70.90 123.26,71.31"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="3 3"
          className="text-foreground/15 dark:text-foreground/20"
          initial={{
            pathLength: isReduced ? 1 : 0,
            opacity: isReduced ? 1 : 0,
          }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: EASE_MIZAN, delay: 0.4 }}
        />

        {/* Avatar aperture guide ring */}
        <motion.circle
          cx="160"
          cy="160"
          r="92"
          stroke="currentColor"
          strokeWidth="1"
          className="text-foreground/20 dark:text-foreground/25"
          initial={{
            pathLength: isReduced ? 1 : 0,
            opacity: isReduced ? 1 : 0,
          }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: EASE_MIZAN, delay: 0.45 }}
        />

        {/* 8 Radial construction lines extending to outer perimeter */}
        {angles.map((deg, i) => {
          const rad = (deg * Math.PI) / 180
          const x1 = (160 + 92 * Math.cos(rad)).toFixed(2)
          const y1 = (160 + 92 * Math.sin(rad)).toFixed(2)
          const x2 = (160 + 152 * Math.cos(rad)).toFixed(2)
          const y2 = (160 + 152 * Math.sin(rad)).toFixed(2)
          const tipX = (160 + 154 * Math.cos(rad)).toFixed(2)
          const tipY = (160 + 154 * Math.sin(rad)).toFixed(2)

          return (
            <React.Fragment key={deg}>
              <motion.line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="0.75"
                className="text-foreground/15 dark:text-foreground/20"
                initial={{
                  pathLength: isReduced ? 1 : 0,
                  opacity: isReduced ? 1 : 0,
                }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.4,
                  ease: EASE_MIZAN,
                  delay: 0.5 + i * 0.04,
                }}
              />
              {/* Quiet brass node at each major 8-fold nexus */}
              <motion.circle
                cx={tipX}
                cy={tipY}
                r="1.6"
                className="fill-brass"
                initial={{
                  scale: isReduced ? 1 : 0,
                  opacity: isReduced ? 1 : 0,
                }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: EASE_MIZAN,
                  delay: 1.2 + i * 0.05,
                }}
              />
            </React.Fragment>
          )
        })}
      </svg>

      {/* Centered avatar slot */}
      <div className="relative z-1 flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}
