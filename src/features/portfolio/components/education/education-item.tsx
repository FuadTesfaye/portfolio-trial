import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Markdown } from "@/components/markdown"
import type { Education } from "@/features/portfolio/types/education"

export function EducationItem({ item }: { item: Education }) {
  const { start, end } = item.period
  const isOngoing = !end

  return (
    <article id={`education-${item.id}`} className="relative">
      {/* Node on the rail */}
      <span
        aria-hidden="true"
        className="absolute top-2 left-[-27px] flex size-2.5 items-center justify-center rounded-full bg-background ring-1 ring-muted-foreground/40 select-none sm:left-[-35px]"
      >
        <span className="size-1 rounded-full bg-muted-foreground/40" />
      </span>

      <Collapsible
        className="group/edu"
        defaultOpen={item.isExpanded}
        disabled={!item.description}
      >
        <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="font-heading text-2xl font-normal text-foreground">
            {item.school}
          </h3>

          <div className="font-mono text-xs text-muted-foreground/80">
            <span>{start}</span>
            <span className="mx-1 font-sans">—</span>
            <span>{isOngoing ? "Present" : end}</span>
          </div>
        </header>

        {(item.degree || item.fieldOfStudy) && (
          <CollapsibleTrigger className="mt-2 flex items-center gap-2 text-left font-medium text-foreground outline-none disabled:cursor-default sm:text-[16px]">
            <span>
              {item.degree}
              {item.degree && item.fieldOfStudy ? " · " : ""}
              {item.fieldOfStudy}
            </span>
            {item.description && (
              <span
                aria-hidden="true"
                className="font-mono text-xs text-muted-foreground transition-transform group-data-open/edu:rotate-45"
              >
                +
              </span>
            )}
          </CollapsibleTrigger>
        )}

        <CollapsibleContent className="pt-2 text-sm text-muted-foreground">
          {item.description && (
            <div className="typeset typeset-description">
              <Markdown>{item.description}</Markdown>
            </div>
          )}
        </CollapsibleContent>

        {Array.isArray(item.skills) && item.skills.length > 0 && (
          <p className="mt-2.5 font-mono text-[11.5px] text-muted-foreground/70">
            {item.skills.join(" · ")}
          </p>
        )}
      </Collapsible>
    </article>
  )
}
