import { Section } from "@/features/portfolio/components/panel"
import { getGitHubContributions } from "@/features/portfolio/data/github-contributions"

import { GitHubContributionGraph } from "./graph"

const ID = "activity"

export async function GitHubContributions() {
  const contributions = await getGitHubContributions()

  return (
    <Section index="01" title="Activity" arabic="نشاط" id={ID}>
      <div className="overflow-x-auto pb-2">
        <GitHubContributionGraph initialData={contributions} />
      </div>
    </Section>
  )
}
