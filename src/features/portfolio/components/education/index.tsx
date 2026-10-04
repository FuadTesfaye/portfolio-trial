import { Section } from "@/features/portfolio/components/panel"
import { EDUCATION } from "@/features/portfolio/data/education"

import { EducationItem } from "./education-item"

const ID = "education"

export function Education() {
  return (
    <Section index="05" title="Education" arabic="معارف" id={ID}>
      <div className="relative pl-6 before:absolute before:inset-y-2 before:left-0 before:w-px before:bg-line sm:pl-8">
        <div className="space-y-10 sm:space-y-12">
          {EDUCATION.map((item) => (
            <EducationItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Section>
  )
}
