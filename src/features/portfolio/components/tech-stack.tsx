import { TECH_STACK } from "../data/tech-stack"
import type { TechStack as TechStackType } from "../types/tech-stack"
import { Section } from "./panel"

const ID = "stack"

export function TechStack() {
  const grouped = groupByCategory(TECH_STACK)

  return (
    <Section index="03" title="Stack" arabic="أدوات" id={ID}>
      <div className="space-y-6 sm:space-y-8">
        {Object.entries(grouped).map(([category, items]) => {
          const categoryId = `${ID}-${category
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "")}`

          return (
            <div
              key={category}
              className="grid gap-3 border-b border-line/60 pb-6 last:border-none last:pb-0 sm:grid-cols-[9rem_1fr] sm:gap-6"
            >
              <div id={categoryId} className="self-start pt-1 eyebrow">
                {category}
              </div>

              <ul
                aria-labelledby={categoryId}
                className="flex flex-wrap items-center gap-x-5 gap-y-2.5"
              >
                {items.map((item) => (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors duration-150 hover:text-foreground sm:text-[13px]"
                    >
                      <span className="text-muted-foreground/60 transition-colors duration-150 group-hover:text-brass [&_svg]:size-3.5">
                        {item.icon}
                      </span>
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

function groupByCategory(
  items: TechStackType[]
): Record<string, TechStackType[]> {
  return items.reduce<Record<string, TechStackType[]>>((acc, item) => {
    for (const category of item.categories) {
      ;(acc[category] ??= []).push(item)
    }
    return acc
  }, {})
}
