import { differenceInMonths, parse } from "date-fns"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Markdown } from "@/components/markdown"
import type { ExperiencePosition } from "@/features/portfolio/types/experiences"

export function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePosition
}) {
  const { start, end } = position.employmentPeriod
  const isOngoing = !end
  const duration = formatDuration(start, end)

  return (
    <Collapsible
      className="group/pos"
      defaultOpen={position.isExpanded}
      disabled={!position.description}
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <CollapsibleTrigger className="group flex items-center gap-2 text-left font-medium text-foreground outline-none disabled:cursor-default sm:text-[16px]">
          <span className="hover:text-foreground/80">{position.title}</span>
          {position.description && (
            <span
              aria-hidden="true"
              className="font-mono text-xs text-muted-foreground transition-transform group-data-open/pos:rotate-45"
            >
              +
            </span>
          )}
        </CollapsibleTrigger>

        <div className="font-mono text-xs text-muted-foreground/80">
          <span>{start}</span>
          <span className="mx-1 font-sans">—</span>
          <span>{isOngoing ? "Present" : end}</span>
          {duration && <span> · {duration}</span>}
        </div>
      </div>

      <CollapsibleContent className="pt-2 text-sm text-muted-foreground">
        {position.description && (
          <div className="typeset typeset-description">
            <Markdown>{position.description}</Markdown>
          </div>
        )}
      </CollapsibleContent>

      {Array.isArray(position.skills) && position.skills.length > 0 && (
        <p className="mt-2.5 font-mono text-[11.5px] text-muted-foreground/70">
          {position.skills.join(" · ")}
        </p>
      )}
    </Collapsible>
  )
}

function formatDuration(start: string, end?: string): string {
  const startHasMonth = start.includes(".")
  const endHasMonth = end ? end.includes(".") : true

  if (!startHasMonth && end && !endHasMonth) {
    const years = parseInt(end, 10) - parseInt(start, 10)
    if (years <= 0) return ""
    return `${years}y`
  }

  const startDate = parsePeriodDate(start, "first")
  const endDate = end ? parsePeriodDate(end, "last") : new Date()

  const totalMonths = differenceInMonths(endDate, startDate) + 1
  if (totalMonths <= 0) return ""
  if (totalMonths < 12) return `${totalMonths}m`

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  if (months === 0) return `${years}y`
  return `${years}y ${months}m`
}

function parsePeriodDate(str: string, fallbackMonth: "first" | "last"): Date {
  if (str.includes(".")) {
    return parse(str, "MM.yyyy", new Date())
  }
  return parse(
    `${fallbackMonth === "last" ? "12" : "01"}.${str}`,
    "MM.yyyy",
    new Date()
  )
}
