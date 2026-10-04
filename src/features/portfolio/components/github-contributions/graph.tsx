"use client"

import { useEffect, useState } from "react"
import { formatNumber } from "@/utils/format"
import { format, parseISO } from "date-fns"

import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { Activity } from "@/registry/components/contribution-graph"
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/registry/components/contribution-graph"
import fallbackContributions from "@/features/portfolio/data/github-contributions-fallback.json"
import { SOCIAL } from "@/features/portfolio/data/social-links"

export function GitHubContributionGraph({
  initialData,
}: {
  initialData?: Activity[]
}) {
  const [data, setData] = useState<Activity[]>(() => {
    if (initialData && initialData.length > 0) {
      return initialData
    }
    return fallbackContributions as Activity[]
  })

  useEffect(() => {
    if (data.length > 0) return

    const apiUrl =
      process.env.NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL ||
      "https://github-contributions-api.jogruber.de/v4"

    fetch(`${apiUrl}/${SOCIAL.github.handle}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed")
        return res.json() as Promise<{ contributions?: Activity[] }>
      })
      .then((json) => {
        if (json?.contributions && json.contributions.length > 0) {
          setData(json.contributions)
        }
      })
      .catch(() => {
        // Fallback already rendered
      })
  }, [data.length])

  if (!data || data.length === 0) {
    return null
  }

  return (
    <figure>
      <ContributionGraph
        className={cn(
          "mx-auto gap-4 py-2",
          '**:data-[level="0"]:fill-muted/60 dark:**:data-[level="0"]:fill-[#141724]',
          '**:data-[level="1"]:fill-foreground/20 dark:**:data-[level="1"]:fill-[#242a42]',
          '**:data-[level="2"]:fill-foreground/45 dark:**:data-[level="2"]:fill-[#3e4870]',
          '**:data-[level="3"]:fill-foreground/75 dark:**:data-[level="3"]:fill-[#6d7ca8]',
          '**:data-[level="4"]:fill-brass dark:**:data-[level="4"]:fill-brass'
        )}
        data={data}
        blockSize={13}
        blockMargin={3}
        blockRadius={2}
        aria-label="GitHub Contributions Graph"
      >
        <ContributionGraphCalendar
          className="px-2 **:data-[slot=month-labels]:text-xs **:data-[slot=month-labels]:text-muted-foreground"
          title="GitHub Contributions"
          aria-hidden
        >
          {({ activity, dayIndex, weekIndex }) => (
            <Tooltip>
              <TooltipTrigger
                render={
                  <g>
                    <ContributionGraphBlock
                      activity={activity}
                      dayIndex={dayIndex}
                      weekIndex={weekIndex}
                    />
                  </g>
                }
              />
              <TooltipContent className="font-sans">
                <p>
                  {activity.count} contribution{activity.count > 1 ? "s" : null}{" "}
                  on {format(parseISO(activity.date), "d MMM yyyy")}
                </p>
              </TooltipContent>
            </Tooltip>
          )}
        </ContributionGraphCalendar>

        <ContributionGraphFooter className="px-2 font-mono text-xs">
          <ContributionGraphTotalCount>
            {({ totalCount }) => (
              <figcaption className="text-muted-foreground tabular-nums">
                <span className="font-semibold text-foreground">
                  {formatNumber(totalCount)}
                </span>{" "}
                contributions in the last year on{" "}
                <a
                  href={SOCIAL.github.href}
                  className="text-foreground link-brass"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </figcaption>
            )}
          </ContributionGraphTotalCount>

          <ContributionGraphLegend aria-hidden />
        </ContributionGraphFooter>
      </ContributionGraph>
    </figure>
  )
}
