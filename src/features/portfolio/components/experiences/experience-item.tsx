import { addQueryParams } from "@/utils/url"

import { UTM_PARAMS } from "@/config/site"

import type { Experience } from "../../types/experiences"
import { ExperiencePositionItem } from "./experience-position-item"

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <article id={`experience-${experience.id}`} className="relative">
      {/* 7px node positioned on the left hairline rail */}
      <span
        aria-hidden="true"
        className={`absolute top-2 left-[-27px] flex size-2.5 items-center justify-center rounded-full bg-background select-none sm:left-[-35px] ${
          experience.isCurrentEmployer
            ? "ring-2 ring-brass"
            : "ring-1 ring-muted-foreground/40"
        }`}
      >
        <span
          className={`size-1.5 rounded-full ${
            experience.isCurrentEmployer ? "bg-brass" : "bg-transparent"
          }`}
        />
      </span>

      <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-heading text-2xl font-normal text-foreground">
          {experience.companyWebsite ? (
            <a
              href={addQueryParams(experience.companyWebsite, UTM_PARAMS)}
              target="_blank"
              rel="noopener noreferrer"
              className="link-brass"
            >
              {experience.companyName}
            </a>
          ) : (
            experience.companyName
          )}
        </h3>

        {experience.location && (
          <p className="eyebrow">
            {experience.location}
            {experience.locationType ? ` · ${experience.locationType}` : ""}
          </p>
        )}
      </header>

      <div className="mt-4 space-y-6">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </article>
  )
}
