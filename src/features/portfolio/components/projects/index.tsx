"use client"

import { useMemo, useState } from "react"
import { addQueryParams } from "@/utils/url"

import { UTM_PARAMS } from "@/config/site"
import { cn } from "@/lib/utils"
import { Markdown } from "@/components/markdown"
import { Section } from "@/features/portfolio/components/panel"
import { PROJECTS } from "@/features/portfolio/data/projects"
import type {
  Project,
  ProjectCategory,
} from "@/features/portfolio/types/projects"

const ID = "projects"

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Works" },
  { id: "ai", label: "AI & Autonomous" },
  { id: "systems", label: "Systems & Cloud" },
  { id: "platforms", label: "Platforms & Web" },
]

export function Projects({
  isStandalone: _isStandalone = false,
}: {
  isStandalone?: boolean
}) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return PROJECTS
    return PROJECTS.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const featured = useMemo(() => {
    return filteredProjects.slice(0, 3)
  }, [filteredProjects])

  const catalog = useMemo(() => {
    return filteredProjects.slice(3)
  }, [filteredProjects])

  const filterRail = (
    <nav
      aria-label="Project categories"
      className="flex flex-row flex-wrap gap-2 sm:flex-col sm:gap-2.5"
    >
      {CATEGORIES.map((cat) => {
        const count =
          cat.id === "all"
            ? PROJECTS.length
            : PROJECTS.filter((p) => p.category === cat.id).length
        const isActive = activeCategory === cat.id

        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "flex items-baseline gap-1.5 py-1 text-left font-mono text-xs transition-colors",
              isActive
                ? "border-b border-brass font-semibold text-foreground sm:border-b-0 sm:border-l-2 sm:pl-2"
                : "text-muted-foreground hover:text-foreground sm:pl-2"
            )}
          >
            <span>{cat.label}</span>
            <sup className="text-[10px] text-muted-foreground">({count})</sup>
          </button>
        )
      })}
    </nav>
  )

  return (
    <Section
      index="06"
      title="Projects"
      arabic="أعمال"
      id={ID}
      aside={filterRail}
    >
      {/* Featured Projects (Top 3) */}
      <div className="space-y-10 sm:space-y-12">
        {featured.map((project, idx) => (
          <FeaturedProject key={project.id} project={project} index={idx} />
        ))}
      </div>

      {/* Catalog Table Rows (The rest) */}
      {catalog.length > 0 && (
        <div className="mt-12 border-t border-line/60 pt-8 sm:mt-16">
          <div className="mb-4 flex items-center justify-between">
            <span className="eyebrow">Catalog Index</span>
            <span className="font-mono text-xs text-muted-foreground/60">
              {catalog.length} more systems
            </span>
          </div>

          <div className="border-t border-line/60">
            {catalog.map((project, idx) => (
              <CompactProjectRow
                key={project.id}
                project={project}
                index={idx + 3}
              />
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}

function FeaturedProject({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const year = project.period.start.split(".").pop() ?? project.period.start
  const categoryLabel = project.category
    ? project.category.toUpperCase()
    : "SYSTEM"

  return (
    <article className="group relative border-b border-line/60 pb-8 last:border-none last:pb-0">
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="flex items-baseline gap-3">
          <span className="eyebrow font-bold text-brass">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-heading text-2xl/snug font-normal text-foreground sm:text-[28px]">
            <a
              href={addQueryParams(project.link, UTM_PARAMS)}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground/80"
            >
              {project.title}
            </a>
          </h3>
        </div>

        <div className="flex items-center gap-2 eyebrow">
          <span>{categoryLabel}</span>
          <span aria-hidden="true">·</span>
          <span>{year}</span>
          {project.status && (
            <>
              <span aria-hidden="true">·</span>
              <span className="text-foreground/80">{project.status}</span>
            </>
          )}
        </div>
      </header>

      {project.highlight && (
        <p className="mt-3 border-l-2 border-brass/60 pl-3 font-mono text-xs/relaxed text-foreground/90 sm:text-[13px]">
          {project.highlight}
        </p>
      )}

      {project.description && (
        <div className="typeset typeset-description mt-3 text-sm text-muted-foreground">
          <Markdown>{project.description}</Markdown>
        </div>
      )}

      {project.skills.length > 0 && (
        <p className="mt-3 font-mono text-[11.5px] text-muted-foreground/70">
          {project.skills.join(" · ")}
        </p>
      )}

      <footer className="mt-4 flex flex-wrap items-center gap-4 font-mono text-xs">
        <a
          href={addQueryParams(project.link, UTM_PARAMS)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-foreground link-brass"
        >
          <span>Launch Project</span>
          <span aria-hidden="true">↗</span>
        </a>

        {project.githubUrl && (
          <a
            href={addQueryParams(project.githubUrl, UTM_PARAMS)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-muted-foreground link-brass hover:text-foreground"
          >
            <span>Source Code</span>
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </footer>
    </article>
  )
}

function CompactProjectRow({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const [open, setOpen] = useState(false)
  const year = project.period.start.split(".").pop() ?? project.period.start
  const categoryLabel = project.category
    ? project.category.toUpperCase()
    : "SYSTEM"

  return (
    <div className="border-b border-line/60 last:border-none">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="group grid w-full grid-cols-[2rem_1fr_auto] items-baseline gap-3 px-2 py-3.5 text-left transition-colors duration-150 hover:bg-brass-muted/30 focus-visible:ring-1 focus-visible:ring-brass focus-visible:outline-none sm:grid-cols-[2.5rem_1fr_8rem_4rem_1.5rem]"
      >
        <span className="eyebrow text-muted-foreground/60">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-heading text-lg font-normal text-foreground group-hover:text-foreground/80 sm:text-xl">
          {project.title}
        </span>
        <span className="hidden eyebrow sm:inline">{categoryLabel}</span>
        <span className="hidden eyebrow tabular-nums sm:inline">{year}</span>
        <span
          aria-hidden="true"
          className="text-sm text-muted-foreground transition-transform duration-150 group-hover:translate-x-0.5"
        >
          {open ? "−" : "↗"}
        </span>
      </button>

      {open && (
        <div className="space-y-3 bg-muted/10 p-4 sm:px-6">
          {project.highlight && (
            <p className="border-l-2 border-brass/60 pl-3 font-mono text-xs/relaxed text-foreground/90">
              {project.highlight}
            </p>
          )}

          {project.description && (
            <div className="typeset typeset-description text-sm text-muted-foreground">
              <Markdown>{project.description}</Markdown>
            </div>
          )}

          {project.skills.length > 0 && (
            <p className="font-mono text-[11.5px] text-muted-foreground/70">
              {project.skills.join(" · ")}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
            <a
              href={addQueryParams(project.link, UTM_PARAMS)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-foreground link-brass"
            >
              <span>Launch</span>
              <span aria-hidden="true">↗</span>
            </a>

            {project.githubUrl && (
              <a
                href={addQueryParams(project.githubUrl, UTM_PARAMS)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground link-brass hover:text-foreground"
              >
                <span>Source</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
