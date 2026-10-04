import Link from "next/link"

import type { BuildInfo } from "@/lib/build-info"
import { getBuildInfo } from "@/lib/build-info"
import { ArabicStar } from "@/components/arabic-star"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export function SiteFooterCad() {
  const xLink = SOCIAL.x
  const githubLink = SOCIAL.github
  const linkedinLink = SOCIAL.linkedin

  const build = getBuildInfo()

  return (
    <footer className="max-w-screen overflow-x-clip px-2">
      <div className="mx-auto border-x border-line md:max-w-5xl">
        {/* Faint Girih Architectural Band */}
        <div className="screen-line-top screen-line-bottom screen-line-top-border before:z-1">
          <div className="relative flex h-12 items-center justify-center border-b border-line arabic-stripes-girih opacity-40">
            <div className="z-1 flex items-center gap-2 border border-line bg-background/95 px-3.5 py-1 shadow-2xs backdrop-blur-xs select-none">
              <ArabicStar className="size-3 text-brass" />
              <span className="font-arabic text-sm font-normal tracking-normal text-foreground/90">
                خاتمة
              </span>
              <ArabicStar className="size-3 text-brass" />
            </div>
          </div>
        </div>

        {/* Identity & Contact Row */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2.5">
                <ArabicStar className="size-3.5 text-brass" />
                <h3 className="font-heading text-2xl font-normal text-foreground sm:text-3xl">
                  {USER.displayName}
                </h3>
              </div>
              <p
                lang="ar"
                dir="rtl"
                className="mt-1 font-arabic text-xl text-brass select-none"
              >
                فُؤَيْد
              </p>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                Full-Stack AI Engineer — Backend &amp; Cloud Systems
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 font-mono text-xs sm:items-end">
              <a
                href="mailto:fuadtesfaye24@gmail.com"
                className="text-foreground/90 link-brass hover:text-foreground"
              >
                fuadtesfaye24@gmail.com <span aria-hidden="true">↗</span>
              </a>

              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <a
                  href={githubLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-brass hover:text-foreground"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={linkedinLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-brass hover:text-foreground"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={xLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-brass hover:text-foreground"
                >
                  X <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Ledger Line */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line/60 pt-4 font-mono text-[11.5px] text-muted-foreground">
            <div>
              <span>© {new Date().getFullYear()} Fuad Tesfaye</span>
              <span className="mx-2">·</span>
              <span>Built in Addis Ababa</span>
            </div>

            <div className="flex items-center gap-3">
              <BuildValue build={build} />
              <span className="text-muted-foreground/40">·</span>
              <Link
                href="/llms.txt"
                target="_blank"
                className="hover:text-foreground"
              >
                llms.txt
              </Link>
            </div>
          </div>
        </div>
      </div>

      <SiteFooterInteractiveLogotype />

      <div className="h-(--fade-bottom-height)" />
      <div className="pb-[env(safe-area-inset-bottom,0)]" />
    </footer>
  )
}

function BuildValue({ build }: { build: BuildInfo }) {
  if (!build.commitShortSha) {
    return <span>build local</span>
  }

  return (
    <span>
      build{" "}
      {build.commitUrl ? (
        <a
          className="link-underline"
          href={build.commitUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {build.commitShortSha}
        </a>
      ) : (
        build.commitShortSha
      )}
    </span>
  )
}
