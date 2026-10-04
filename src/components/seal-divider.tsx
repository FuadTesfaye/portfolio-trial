import { cn } from "@/lib/utils"
import { ArabicStar } from "@/components/arabic-star"

export function SealDivider({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      role="separator"
      aria-hidden="true"
      className={cn("hairline-divider select-none", className)}
      {...props}
    >
      <span className="relative z-1 flex items-center justify-center bg-background px-3 text-muted-foreground/60">
        <ArabicStar className="size-3 text-brass/75 dark:text-brass/85" />
      </span>
    </div>
  )
}
