"use client"

import React, { useEffect, useState } from "react"
import type { Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "motion/react"

import type { NavItem as NavItemType } from "@/types/nav"
import { cn } from "@/lib/utils"

export function Nav({
  items,
  activeId,
  className,
  exactMatch = false,
}: {
  items: NavItemType<Route>[]
  activeId?: string
  className?: string
  exactMatch?: boolean
}) {
  const pathname = usePathname()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState<string>("")

  // Detect active section on homepage scroll
  useEffect(() => {
    if (pathname !== "/") return

    const sectionIds = items
      .map((item) => {
        const hashMatch = item.href.match(/#(.*)$/)
        return hashMatch ? hashMatch[1] : null
      })
      .filter(Boolean) as string[]

    const handleScroll = () => {
      const scrollY = window.scrollY
      const offset = 220

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          if (scrollY >= elementTop - offset) {
            setActiveSection(id)
            return
          }
        }
      }

      if (scrollY < 200 && sectionIds.length > 0) {
        setActiveSection(sectionIds[0])
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname, items])

  return (
    <nav
      data-active-id={activeId}
      className={cn(
        "relative flex items-center gap-1 rounded-none border border-line bg-muted/20 px-1 py-0.5 shadow-none backdrop-blur-md dark:bg-muted/10",
        className
      )}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {items.map(({ title, href }, index) => {
        const hashMatch = href.match(/#(.*)$/)
        const sectionId = hashMatch ? hashMatch[1] : null

        const isSectionActive =
          pathname === "/" && sectionId ? activeSection === sectionId : false

        const isPageActive = exactMatch
          ? activeId === href
          : activeId === href ||
            (href === "/" // Home page
              ? ["/", "/index"].includes(activeId || "")
              : activeId?.startsWith(href))

        const isActive = isSectionActive || (!sectionId && isPageActive)
        const isHovered = hoveredIndex === index

        const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
          if (pathname === "/" && sectionId) {
            const target = document.getElementById(sectionId)
            if (target) {
              e.preventDefault()
              target.scrollIntoView({ behavior: "smooth", block: "start" })
              history.pushState(null, "", href)
              setActiveSection(sectionId)
            }
          }
        }

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            onMouseEnter={() => setHoveredIndex(index)}
            onClick={handleClick}
            className={cn(
              "group relative flex items-center gap-1 px-2.5 py-1 font-mono text-[11.5px] tracking-[0.06em] uppercase transition-colors outline-none",
              isActive
                ? "font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {/* Smooth floating indicator for hover */}
            {isHovered && (
              <motion.span
                layoutId="nav-hover-pill"
                className="absolute inset-0 rounded-none bg-foreground/6 dark:bg-foreground/10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}

            {/* Active section brass dot indicator */}
            {isActive && (
              <motion.span
                layoutId="nav-active-dot"
                className="absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-brass"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}

            <span className="relative z-1">{title}</span>
          </Link>
        )
      })}
    </nav>
  )
}

export function NavItem({
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "text-sm font-medium tracking-wide text-muted-foreground transition-[color] hover:text-foreground aria-[current=page]:text-foreground",
        className
      )}
      {...props}
    />
  )
}
