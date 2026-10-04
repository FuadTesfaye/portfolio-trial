import { MapPinIcon } from "lucide-react"

import { EmailItem } from "@/features/portfolio/components/overview/email-item"
import { PhoneItem } from "@/features/portfolio/components/overview/phone-item"
import { Section } from "@/features/portfolio/components/panel"
import { USER } from "@/features/portfolio/data/user"

export function Hello() {
  const bullets = USER.about
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("-"))
    .map((line) => line.slice(1).trim())

  const lead = bullets[0]
  const remaining = bullets.slice(1)

  return (
    <Section index="02" title="About" arabic="نبذة" id="about">
      {lead && (
        <p className="font-heading text-[22px] leading-relaxed font-normal text-foreground/95 italic sm:text-[25px]">
          {lead}
        </p>
      )}

      {remaining.length > 0 && (
        <ul className="mt-6 space-y-3 font-sans text-sm/relaxed text-muted-foreground sm:text-[15px]">
          {remaining.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="font-mono text-brass select-none"
              >
                —
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Quiet Contact DL */}
      <dl className="mt-10 grid gap-4 border-t border-line/60 pt-6 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <dt className="eyebrow">Location</dt>
          <dd className="font-sans text-sm text-foreground/90">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 link-brass"
            >
              <MapPinIcon className="size-3.5 text-muted-foreground" />
              {USER.address}
            </a>
          </dd>
        </div>

        <div className="flex flex-col gap-1">
          <dt className="eyebrow">Time Zone</dt>
          <dd className="font-mono text-sm text-foreground/90">
            {USER.timeZone} (UTC+3)
          </dd>
        </div>

        <div className="flex flex-col gap-1">
          <dt className="eyebrow">Email</dt>
          <dd className="font-mono text-sm">
            <EmailItem emailB64={USER.emailB64} />
          </dd>
        </div>

        <div className="flex flex-col gap-1">
          <dt className="eyebrow">Phone</dt>
          <dd className="font-mono text-sm">
            <PhoneItem phoneNumberB64={USER.phoneNumberB64} />
          </dd>
        </div>
      </dl>
    </Section>
  )
}
