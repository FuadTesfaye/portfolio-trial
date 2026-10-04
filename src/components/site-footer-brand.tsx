"use client"

export function SiteFooterInteractiveLogotype() {
  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/15">
      <div className="overflow-hidden">
        <div className="flex w-full translate-y-[24%] items-center justify-center">
          <svg
            className="container size-full"
            viewBox="0 0 1410 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Arabic Calligraphy watermark background */}
            <text
              x="705"
              y="160"
              textAnchor="middle"
              className="pointer-events-none fill-foreground/3 font-arabic text-[180px] font-normal select-none dark:fill-foreground/4"
            >
              فُؤَيْد
            </text>

            <text
              x="705"
              y="190"
              textAnchor="middle"
              className="font-heading text-[240px] font-normal tracking-[-0.02em] italic select-none"
              style={{ fontFamily: "var(--font-heading)" }}
              fill="var(--foreground)"
              fillOpacity="0.04"
              stroke="var(--foreground)"
              strokeOpacity="0.18"
              strokeWidth="1.2"
            >
              Fuad
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}
