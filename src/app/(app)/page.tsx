import type { Metadata } from "next"
import type { ProfilePage, WithContext } from "schema-dts"

import { CARBON_ADS } from "@/config/ads"
import { JSON_LD_ID } from "@/config/json-ld"
import { JsonLdScript } from "@/lib/json-ld"
import { absoluteUrl } from "@/lib/utils"
import { FloatingCarbonAds } from "@/components/floating-carbon-ads"
import { SealDivider } from "@/components/seal-divider"
import { Education } from "@/features/portfolio/components/education"
import { Experiences } from "@/features/portfolio/components/experiences"
import { GitHubContributions } from "@/features/portfolio/components/github-contributions"
import { Hello } from "@/features/portfolio/components/hello"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { Projects } from "@/features/portfolio/components/projects"
import { TechStack } from "@/features/portfolio/components/tech-stack"
import { USER } from "@/features/portfolio/data/user"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLdScript data={getProfilePageJsonLd()} />
      {CARBON_ADS && <FloatingCarbonAds />}

      <div className="mx-auto md:max-w-5xl">
        <ProfileHeader />
        <SealDivider />

        <GitHubContributions />
        <SealDivider />

        <Hello />
        <SealDivider />

        <TechStack />
        <SealDivider />

        <Experiences />
        <SealDivider />

        <Education />
        <SealDivider />

        <Projects />
      </div>
    </>
  )
}

function getProfilePageJsonLd(): WithContext<ProfilePage> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": absoluteUrl("/"),
    dateCreated: new Date(USER.dateCreated).toISOString(),
    dateModified: new Date().toISOString(),
    mainEntity: { "@id": JSON_LD_ID.person },
  }
}
