"use client"

import * as React from "react"

import { GirihRosette } from "@/components/girih-rosette"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

import { VerifiedIcon } from "./verified-icon"

function HeroLocalTime({ timeZone }: { timeZone: string }) {
  const [time, setTime] = React.useState<string>("")

  React.useEffect(() => {
    const update = () => {
      try {
        const str = new Intl.DateTimeFormat("en-US", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date())
        setTime(str)
      } catch {
        setTime("")
      }
    }
    update()
    const timer = setInterval(update, 15000)
    return () => clearInterval(timer)
  }, [timeZone])

  return (
    <span suppressHydrationWarning>
      {time ? `${time} LOCAL` : "ADDIS TIME"}
    </span>
  )
}

export function ProfileHeader() {
  const [email, setEmail] = React.useState<string>("fuadtesfaye24@gmail.com")

  React.useEffect(() => {
    try {
      setEmail(atob(USER.emailB64))
    } catch {
      // fallback
    }
  }, [])

  return (
    <header className="relative border-x border-line px-5 py-12 sm:px-8 sm:py-16 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
        {/* Left column: Editorial identity */}
        <div className="min-w-0">
          {/* Eyebrow rail */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 eyebrow">
            <span>ADDIS ABABA</span>
            <span aria-hidden="true" className="text-muted-foreground/40">
              ·
            </span>
            <HeroLocalTime timeZone={USER.timeZone} />
            <span aria-hidden="true" className="text-muted-foreground/40">
              ·
            </span>
            <span className="text-brass">OPEN TO REMOTE</span>
          </div>

          {/* Name & Arabic Seal */}
          <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1 sm:mt-5">
            <div className="flex items-center gap-2">
              <h1 className="font-heading text-4xl font-normal tracking-[-0.01em] text-foreground sm:text-5xl lg:text-6xl">
                {USER.displayName}
              </h1>
              <VerifiedIcon
                className="size-4 text-muted-foreground/60 sm:size-4.5"
                aria-label="Verified profile"
              />
            </div>
            <span
              lang="ar"
              dir="rtl"
              className="font-arabic text-2xl font-normal text-brass select-none sm:text-3xl"
              title="Fu'ayd in Arabic"
            >
              فُؤَيْد
            </span>
          </div>

          {/* Title */}
          <p className="mt-3 font-sans text-base text-muted-foreground sm:text-lg">
            Full-Stack AI Engineer — Backend &amp; Cloud Systems
          </p>

          {/* NOW highlight line */}
          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-line/60 pt-4 text-xs sm:text-[13px]">
            <span className="eyebrow font-mono text-[11px] font-semibold tracking-widest text-brass">
              NOW
            </span>
            <span className="text-muted-foreground">
              Founding Engineer, Zion · Full-Stack, INSA · Winner, Vercel v0
              Global Hackathon
            </span>
          </div>

          {/* Social links row */}
          <nav
            aria-label="Social profiles"
            className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted-foreground"
          >
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 link-brass hover:text-foreground"
              >
                {item.title}{" "}
                <span aria-hidden="true" className="text-[10px]">
                  ↗
                </span>
              </a>
            ))}
            <a
              href={`mailto:${email}`}
              className="text-foreground/80 link-brass hover:text-foreground"
            >
              Email{" "}
              <span aria-hidden="true" className="text-[10px]">
                ↗
              </span>
            </a>
          </nav>
        </div>

        {/* Right column: Girih Rosette framing Avatar */}
        <div className="flex justify-center lg:justify-end">
          <GirihRosette>
            <div className="relative size-28 overflow-hidden rounded-full ring-1 ring-border/80 min-[420px]:size-32 sm:size-36">
              <img
                src={USER.avatar}
                alt={USER.displayName}
                className="size-full rounded-full object-cover contrast-[1.05] grayscale transition-[filter] duration-300 select-none hover:grayscale-0"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full inset-ring-1 inset-ring-foreground/15"
              />
            </div>
          </GirihRosette>
        </div>
      </div>
    </header>
  )
}
