import React from "react"

import { cn } from "@/lib/utils"

function Panel({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="panel"
      className={cn(
        "screen-line-top screen-line-bottom border-x screen-line-bottom-border",
        className
      )}
      {...props}
    />
  )
}

function PanelHeader({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="panel-header"
      className={cn(
        "screen-line-bottom px-4 has-data-[slot=panel-description]:*:data-[slot=panel-title]:screen-line-bottom",
        className
      )}
      {...props}
    />
  )
}

function PanelTitle({
  as: Comp = "h2",
  className,
  ...props
}: React.ComponentProps<"h2"> & { as?: "h2" | "div" }) {
  return (
    <Comp
      data-slot="panel-title"
      className={cn(
        "group/panel-title font-heading text-3xl font-medium tracking-tight text-balance sm:text-4xl",
        className
      )}
      {...props}
    />
  )
}

function PanelTitleSup({ className, ...props }: React.ComponentProps<"sup">) {
  return (
    <sup
      className={cn(
        "top-[-0.75em] ml-1.5 text-sm font-medium tracking-normal text-muted-foreground sm:text-base",
        className
      )}
      {...props}
    />
  )
}

function PanelDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-description"
      className={cn(
        "py-4 text-base text-balance text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function PanelContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="panel-body" className={cn("p-4", className)} {...props} />
  )
}

type SectionProps = React.ComponentProps<"section"> & {
  index: string
  title: string
  arabic: string
  aside?: React.ReactNode
}

function Section({
  index,
  title,
  arabic,
  aside,
  children,
  className,
  id,
  ...props
}: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined
  return (
    <section
      data-slot="panel"
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "border-x border-line px-5 py-14 sm:px-8 sm:py-20",
        className
      )}
      {...props}
    >
      <div className="grid gap-8 sm:grid-cols-[11rem_1fr] sm:gap-10">
        <header className="sm:sticky sm:top-[calc(var(--header-height)+1.5rem)] sm:self-start">
          <p className="eyebrow">{index}</p>
          <h2
            id={headingId}
            className="mt-2 font-heading text-[30px] leading-tight font-normal tracking-[-0.01em] sm:text-[34px]"
          >
            {id ? (
              <a
                href={`#${id}`}
                className="transition-colors hover:text-foreground/80"
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h2>
          <p
            lang="ar"
            dir="rtl"
            className="mt-1 font-arabic text-xl text-muted-foreground select-none"
          >
            {arabic}
          </p>
          {aside && <div className="mt-6">{aside}</div>}
        </header>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  )
}

export {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
  Section,
}
