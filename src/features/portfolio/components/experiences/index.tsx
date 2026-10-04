import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Section } from "@/features/portfolio/components/panel"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import type { Experience } from "@/features/portfolio/types/experiences"

import { ExperienceItem } from "./experience-item"

const ID = "experience"
const MAX = 3

export function Experiences() {
  return (
    <Section index="04" title="Experience" arabic="مسيرة" id={ID}>
      <div className="relative pl-6 before:absolute before:inset-y-2 before:left-0 before:w-px before:bg-line sm:pl-8">
        <ExperienceList experiences={EXPERIENCES.slice(0, MAX)} />

        {EXPERIENCES.length > MAX && (
          <Collapsible className="group/collapsible">
            <CollapsibleContent>
              <div className="pt-10 sm:pt-12">
                <ExperienceList experiences={EXPERIENCES.slice(MAX)} />
              </div>
            </CollapsibleContent>

            <div className="pt-8">
              <CollapsibleTrigger
                render={
                  <Button
                    className="font-mono text-xs tracking-wider text-muted-foreground uppercase hover:bg-brass-muted hover:text-foreground"
                    variant="ghost"
                    size="sm"
                  >
                    <span className="group-data-open/collapsible:hidden">
                      + Show more
                    </span>
                    <span className="hidden group-data-open/collapsible:inline">
                      − Show less
                    </span>
                  </Button>
                }
              />
            </div>
          </Collapsible>
        )}
      </div>
    </Section>
  )
}

function ExperienceList({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="space-y-10 sm:space-y-12">
      {experiences.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </div>
  )
}
