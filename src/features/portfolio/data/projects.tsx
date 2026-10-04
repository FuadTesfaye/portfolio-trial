import {
  CodeXmlIcon,
  CpuIcon,
  GitBranchIcon,
  GlobeIcon,
  LayersIcon,
  LockIcon,
  ServerIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TerminalSquareIcon,
} from "lucide-react"

import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "algowars",
    title: "AlgoWars: Neon Syntax",
    period: {
      start: "05.2026",
    },
    link: "https://v0-algo-wars-3004.vercel.app/",
    githubUrl: "https://github.com/FuadTesfaye",
    category: "systems",
    status: "Vercel Hackathon Winner",
    highlight:
      "Global Vercel v0 Hackathon Winner (8,000+ submissions) — server-authoritative deterministic coding strategy with Google Gemini AI tactics",
    skills: [
      "Vercel AI SDK",
      "Google Gemini",
      "Server-Authoritative",
      "TypeScript",
      "Deterministic Simulation",
      "Game Engine",
    ],
    description: `Winner of the global Vercel v0 Hackathon among 8,000+ developer submissions worldwide.
- Built a real-time multiplayer tactical coding strategy game where players author autonomous algorithms to command units across a dynamic neon grid.
- Engineered a server-authoritative deterministic simulation engine with zero-latency client prediction, ensuring cheat-proof competitive play.
- Integrated Google Gemini via the Vercel AI SDK to generate dynamic game scenarios, analyze player tactics, and power an adaptive AI adversary.
`,
    icon: <TerminalSquareIcon className="size-4" />,
    isExpanded: true,
  },
  {
    id: "gitbridge",
    title: "GitBridge",
    period: {
      start: "03.2026",
    },
    link: "https://www.npmjs.com/package/@fuad24/gitbridge",
    githubUrl: "https://github.com/FuadTesfaye/gitbridge",
    category: "systems",
    status: "Open Source CLI (npm)",
    highlight:
      "Zero-wrapper Git context manager with 225 passing tests, OS keyring + AES-256-GCM, and automated author identity mapping",
    skills: [
      "TypeScript 5.8",
      "CLI",
      "AES-256-GCM",
      "OS Keyring",
      "Git Internals",
      "SSH Management",
      "npm Package",
    ],
    description: `A zero-wrapper Git context manager that automatically maps repositories to author identities, provider accounts, authentication credentials, and SSH configurations.
- Engineered with 225 unit and integration tests passing; 100% offline-first with zero telemetry.
- Secure credential protection combining native OS keyring storage with AES-256-GCM encrypted fallbacks.
- Intelligent features including decision-tree transparency (gb explain), proactive suggestions, typo auto-correction, and built-in security audits (gb sec).
`,
    icon: <GitBranchIcon className="size-4" />,
    isExpanded: true,
  },
  {
    id: "ilmflow-state",
    title: "IlmFlow State",
    period: {
      start: "03.2026",
    },
    link: "https://github.com/FuadTesfaye/ilmflow-state",
    githubUrl: "https://github.com/FuadTesfaye/ilmflow-state",
    category: "platforms",
    status: "Enterprise Event OS",
    highlight:
      "Enterprise Islamic Event OS with multi-day registration, proctored test engine with anti-cheat telemetry, and 100-pt rubric grading",
    skills: [
      "Next.js 16.3",
      "Turbopack",
      "TypeScript",
      "Drizzle ORM",
      "Bun",
      "PostgreSQL",
      "Tailwind CSS v4",
    ],
    description: `Enterprise-grade, data-driven Islamic Event and Competition Operating System engineered for summits, Quran championships, and secretariat administration.
- Modular architecture with dynamic event CMS, multi-day registration forms, pricing math, and waitlist queues.
- Competition engine featuring proctored exams with authoritative timers, anti-cheat telemetry, negative marking, and 100-point rubric evaluation.
- Live gate check-in with dynamic SVG QR lanyards and real-time gate throughput velocity tracking.
`,
    icon: <LayersIcon className="size-4" />,
    isExpanded: true,
  },
  {
    id: "continuity",
    title: "Continuity",
    period: {
      start: "02.2026",
    },
    link: "https://github.com/FuadTesfaye/Continuity",
    githubUrl: "https://github.com/FuadTesfaye/Continuity",
    category: "ai",
    status: "Autonomous AI Tool",
    highlight:
      "Persistent project-context and work-state system for multi-agent and human AI collaboration indexed with SQLite FTS5",
    skills: [
      "TypeScript",
      "Multi-Agent Systems",
      "SQLite FTS5",
      "Context Graphs",
      "Node.js",
      "AI Tooling",
    ],
    description: `A persistent project-context and work-state system that lets any AI pick up software work from where another AI or human engineer left it.
- Two-memory architecture decoupling global developer knowledge (~/.continuity/) from project-level invariants (.continuity/).
- Indexed with SQLite FTS5 full-text search and relationship graphs for sub-millisecond context retrieval.
- Universally compatible with Claude Code, Cursor, Windsurf, Cline, OpenAI, Antigravity, and Gemini.
`,
    icon: <CpuIcon className="size-4" />,
    isExpanded: true,
  },
  {
    id: "aria",
    title: "ARIA — Resort Intelligence Layer",
    period: {
      start: "2025",
    },
    link: "https://aria-main-98cdc8.free.laravel.cloud/",
    githubUrl: "https://github.com/FuadTesfaye/ARIA",
    category: "ai",
    status: "Multi-Agent Platform",
    highlight:
      "Production multi-agent hospitality operations platform with sub-second WebSocket telemetry, OpenAI Realtime voice concierge, and 3D spatial mapping",
    skills: [
      "Laravel",
      "PHP 8.3",
      "OpenAI Realtime",
      "WebSockets",
      "Redis",
      "Three.js",
      "MySQL",
      "Twilio",
    ],
    description: `Architected a production-grade multi-agent operations platform for luxury resorts, featuring autonomous guest-experience routing, predictive maintenance scheduling, and real-time staff orchestration.
- Backend built on Laravel / PHP 8.3 with MySQL, Redis caching, and WebSockets (Pusher/Reverb) for sub-second telemetry delivery.
- Integrated multi-modal AI pipelines: OpenAI Realtime API for natural conversational concierge, Twilio for SMS/voice dispatch, and deep telemetry analytics.
- Designed responsive 3D spatial guest maps using Three.js / React Three Fiber embedded in modern blade views.
`,
    icon: <GlobeIcon className="size-4" />,
    isExpanded: true,
  },
  {
    id: "muwasa",
    title: "Muwāsā (مُوَاسَاة)",
    period: {
      start: "03.2026",
    },
    link: "https://github.com/FuadTesfaye/Muwasa",
    githubUrl: "https://github.com/FuadTesfaye/Muwasa",
    category: "ai",
    status: "AI Companion",
    highlight:
      "Source-bound private emotional-support AI companion with hybrid pgvector search, Reciprocal Rank Fusion, and Bun native WebSockets",
    skills: [
      "Next.js 15",
      "React 19",
      "Bun",
      "Hono",
      "Supabase pgvector",
      "TypeScript",
      "Hybrid Search",
    ],
    description: `A private Islamic emotional-support companion that listens first, understands the situation, and retrieves verified Quran, Sunnah, and scholarly sources.
- Hybrid Islamic retrieval engine combining pgvector semantic search and full-text keyword search via Reciprocal Rank Fusion (RRF).
- Full safety gateway and situation ontology with strict evidence trails ensuring every claim is backed by verified source documents.
- 100% pure TypeScript + Bun architecture with native WebSockets and Hono server for ultra-low latency.
`,
    icon: <SparklesIcon className="size-4" />,
    isExpanded: true,
  },
  {
    id: "aiqa",
    title: "AIQA — Autonomous QA Runtime",
    period: {
      start: "2026",
    },
    link: "https://github.com/FuadTesfaye/AiQa",
    githubUrl: "https://github.com/FuadTesfaye/AiQa",
    category: "ai",
    status: "Autonomous Runtime",
    highlight:
      "Evidence-first autonomous QA orchestrator composing 6 browser agents across 5 phases, Playwright MCP, and ISO 29119-4 standards",
    skills: [
      "Playwright MCP",
      "browser-use CLI",
      "ISO 29119-4",
      "TypeScript",
      "Node.js",
      "Agentic Orchestration",
    ],
    description: `Engineered an evidence-first autonomous QA orchestrator that composes 6 specialized browser agents across 5 lifecycle phases (understand, plan, explore, test, report).
- Clean-state incognito verification engine that executes real-browser exploration, auto-discovers edge cases, and produces reproducible, timestamped test artifacts with video traces.
- Integrated dual-engine support: browser-use CLI for agentic web navigation and Playwright MCP for deterministic execution.
- Designed around ISO 29119-4 boundary-value and equivalence-partitioning test standards.
`,
    icon: <TerminalSquareIcon className="size-4" />,
    isExpanded: true,
  },
  {
    id: "omni-mcp",
    title: "Omni-MCP",
    period: {
      start: "03.2026",
    },
    link: "https://github.com/FuadTesfaye/omni-mcp",
    githubUrl: "https://github.com/FuadTesfaye/omni-mcp",
    category: "ai",
    status: "Open Source MCP Server",
    highlight:
      "Universal MCP adapter engine dynamically converting OpenAPI specs, CLI tools, databases, and websites into Model Context Protocol capabilities",
    skills: [
      "Model Context Protocol",
      "TypeScript",
      "Bun",
      "OpenAPI",
      "Dynamic CLI",
      "Tooling",
    ],
    description: `Universal adapter engine that converts arbitrary computational surfaces into secure, dynamically discoverable Model Context Protocol (MCP) servers.
- One-command MCPification: point at an OpenAPI spec, CLI tool, PostgreSQL database, or internal website to generate active MCP tools.
- Multi-package monorepo architecture with high-speed Bun execution and responsive web console.
`,
    icon: <CpuIcon className="size-4" />,
  },
  {
    id: "insa-fleet",
    title: "INSA Fleet-Management Platform",
    period: {
      start: "06.2025",
    },
    link: "https://github.com/FuadTesfaye",
    githubUrl: "https://github.com/FuadTesfaye",
    category: "systems",
    status: "Nationwide Telemetry",
    highlight:
      "Nationwide microservices platform with Apache Kafka telemetry streaming and sub-100ms vehicle tracking Next.js dashboards",
    skills: [
      "Spring Boot",
      "Apache Kafka",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "Microservices",
      "Tailwind CSS",
    ],
    description: `Core backend services and operator dashboards for a nationwide fleet-management platform monitoring vehicles in real time.
- Engineered core backend services using Spring Boot and microservices architecture, integrating Kafka for real-time telemetry streaming and PostgreSQL for persistence.
- Built high-performance, accessible frontend dashboards with Next.js (App Router), TypeScript, and Tailwind CSS, reducing operator triage time across high-density vehicle tracking views.
`,
    icon: <ServerIcon className="size-4" />,
    isExpanded: true,
  },
  {
    id: "procurement",
    title: "INSA Procurement Management System",
    period: {
      start: "01.2026",
    },
    link: "https://github.com/FuadTesfaye",
    githubUrl: "https://github.com/FuadTesfaye",
    category: "systems",
    status: "National Enterprise System",
    highlight:
      "ACID-compliant procurement microservices in C#/.NET with RabbitMQ asynchronous event propagation and Next.js interfaces",
    skills: [
      "C# / .NET",
      "Next.js",
      "RabbitMQ",
      "PostgreSQL",
      "Microservices",
      "Enterprise Architecture",
    ],
    description: `Mission-critical procurement system engineered for national agency workflows ensuring strict compliance and multi-party approval chains.
- Architected and developed C# / .NET microservices with RabbitMQ for asynchronous event propagation and PostgreSQL datastore.
- Designed clean RESTful and event-driven APIs connecting Next.js clients to distributed .NET and Spring Boot services, enforcing strict data contracts and sub-100ms response targets.
`,
    icon: <ServerIcon className="size-4" />,
    isExpanded: true,
  },
  {
    id: "keyshare",
    title: "Keyshare",
    period: {
      start: "2025",
    },
    link: "https://github.com/FuadTesfaye",
    githubUrl: "https://github.com/FuadTesfaye",
    category: "systems",
    status: "Open Source CLI (MIT)",
    highlight:
      "Zero-leak secret transmission with client-side AES-256-GCM encryption, HMAC-SHA256 verification, and ephemeral TTL access codes",
    skills: [
      "Node.js",
      "CLI",
      "AES-256-GCM",
      "HMAC-SHA256",
      "Express.js",
      "MongoDB",
      "Cryptography",
    ],
    description: `Developer-first CLI for transmitting zero-leak environment variables and API keys using ephemeral, single-use access codes.
- Implemented client-side AES-256-GCM encryption with HMAC-SHA256 integrity verification; secrets never touch servers in plaintext.
- Architected lightweight backend with Express and MongoDB with automatic TTL-based expiration indices, guaranteeing zero artifact retention after retrieval.
`,
    icon: <LockIcon className="size-4" />,
    isExpanded: true,
  },
  {
    id: "dagmawi-dispatch",
    title: "The Dagmawi Dispatch",
    period: {
      start: "01.2026",
    },
    link: "https://the-dagmawi-dispatch.vercel.app/",
    githubUrl: "https://github.com/FuadTesfaye/The-Dagmawi-Dispatch",
    category: "ai",
    status: "Live AI Broadsheet",
    highlight:
      "Real-time Telegram channel intelligence platform powered by Groq AI and multi-model synthesis",
    skills: ["Next.js", "Bun", "PostgreSQL", "Groq AI", "Grammy"],
    description:
      "A universal Telegram channel intelligence and AI summarization platform with real-time indexing, multi-model LLM daily digests, @lurklord_bot integration, and avant-garde broadsheet UI.",
    icon: <CpuIcon className="size-4" />,
  },
  {
    id: "web2app",
    title: "web2app",
    period: {
      start: "2026",
    },
    link: "https://web2app-psi.vercel.app/",
    githubUrl: "https://github.com/FuadTesfaye/web2app",
    category: "systems",
    status: "Open Source Tool",
    highlight:
      "Cross-platform CLI tool compiling web applications into native Android, Windows, and Linux binaries",
    skills: ["TypeScript", "CLI", "WebView2", "Kotlin", "npm"],
    description:
      "Zero-bloat CLI tool to compile Next.js, React, Vue, Python, or live web URLs into native installable desktop and mobile apps for Android, Windows, Debian, and Arch Linux.",
    icon: <CodeXmlIcon className="size-4" />,
  },
  {
    id: "biomatch",
    title: "BioMatch",
    period: {
      start: "2025",
    },
    link: "https://bio-match-six.vercel.app/",
    githubUrl: "https://github.com/FuadTesfaye",
    category: "ai",
    status: "Clinical AI Engine",
    highlight:
      "HIPAA-compliant multi-organ compatibility and transplant matching engine validated for medical workflows",
    skills: ["React", "AI/ML", "Transplant Matching", "HIPAA"],
    description:
      "Advanced multi-organ AI matching platform for organ transplant compatibility. HIPAA-compliant, clinically validated, and trusted by medical professionals.",
    icon: <ShieldCheckIcon className="size-4" />,
  },
  {
    id: "safehire",
    title: "SafeHire Ethiopia",
    period: {
      start: "2025",
    },
    link: "https://labour-link-six.vercel.app/",
    category: "platforms",
    status: "National Verification",
    highlight:
      "Employment platform connecting Ethiopian workers with verified employers via national Fayda digital ID",
    skills: ["Next.js", "Fayda ID", "Digital Contracts", "Auth"],
    description:
      "Connecting Ethiopian workers with employers through digital contracts and Fayda ID verification. A secure, modern employment platform for the Ethiopian market.",
    icon: <ShieldCheckIcon className="size-4" />,
  },
  {
    id: "portfolio",
    title: "Modern Developer Portfolio",
    period: {
      start: "2024",
    },
    link: "https://www.fuadtesfaye.me/",
    githubUrl: "https://github.com/FuadTesfaye/fuadtesfaye.me",
    category: "platforms",
    status: "Production Portfolio",
    highlight:
      "Interactive architectural portfolio engineered with Next.js 16, Islamic geometry, and GSAP micro-interactions",
    skills: [
      "React 19",
      "Next.js 16",
      "GSAP",
      "Three.js",
      "Tailwind CSS v4",
      "TypeScript",
    ],
    description:
      "A high-performance portfolio with interactive GSAP animations, particle effects, and rich 3D elements focused on premium UI/UX.",
    icon: <CodeXmlIcon className="size-4" />,
  },
  {
    id: "ahl-al-shir",
    title: "Ahl Al-Shir (أهل الشعر)",
    period: {
      start: "03.2026",
    },
    link: "https://github.com/FuadTesfaye/ahl-al-shir",
    githubUrl: "https://github.com/FuadTesfaye/ahl-al-shir",
    category: "platforms",
    status: "Interactive Arabic NLP",
    highlight:
      "Arabic literary competition platform with anti-cheat sessions, Levenshtein Arabic text normalization, Drizzle ORM, and Supabase",
    skills: [
      "Next.js 15",
      "Bun",
      "Drizzle ORM",
      "Supabase",
      "Arabic NLP",
      "Levenshtein Distance",
    ],
    description: `Interactive Arabic literature tournament testing recall and completion of immortal classical verses with real-time scoring.
- Intelligent Arabic text normalization engine handling diacritics removal, letter variant unification, and fuzzy Levenshtein comparison.
- Anti-cheat randomized session generator, real-time leaderboard, and full referee administration console (/admin).
- Built with Next.js 15, Bun, Drizzle ORM, Supabase, and authentic Amiri typography.
`,
    icon: <GlobeIcon className="size-4" />,
  },
  {
    id: "agentavis",
    title: "AgentAvis Insights",
    period: {
      start: "2025",
    },
    link: "https://agentavis-insights.vercel.app/",
    githubUrl: "https://github.com/FuadTesfaye",
    category: "ai",
    status: "Autonomous Analytics",
    highlight:
      "Autonomous intelligence dashboard with real-time multi-agent business telemetry and actionable synthesis",
    skills: ["Next.js", "AI Agents", "Analytics", "TypeScript"],
    description:
      "An AI-driven insights and analytics dashboard providing real-time intelligence and actionable business recommendations.",
    icon: <CpuIcon className="size-4" />,
  },
  {
    id: "compute",
    title: "COMPUTE",
    period: {
      start: "2025",
    },
    link: "https://ai-agents-ui-omega.vercel.app/",
    githubUrl: "https://github.com/FuadTesfaye/AI-Agents-UI",
    category: "ai",
    status: "Distributed Runtime",
    highlight:
      "Multi-model autonomous AI agent deployment runtime orchestrated across global edge infrastructure",
    skills: ["TypeScript", "AI SDK", "Distributed Computing", "Multi-Model"],
    description:
      "Deploy autonomous AI agents that execute complex tasks across distributed infrastructure. Features multi-model support, secure sandboxing, and global edge deployment.",
    icon: <ServerIcon className="size-4" />,
  },
  {
    id: "sovereign",
    title: "Sovereign OS",
    period: {
      start: "2025",
    },
    link: "https://sovereign-v3.vercel.app/",
    githubUrl: "https://github.com/FuadTesfaye/sovereign-v3",
    category: "platforms",
    status: "Interactive WebGL OS",
    highlight:
      "Terminal-driven cyberpunk operating system simulation with custom WebGL shaders and command runtime",
    skills: ["React", "TypeScript", "WebGL", "System UI"],
    description:
      "A futuristic operating system interface simulation featuring terminal-driven interactions, immersive boot sequences, and cyberpunk-inspired design aesthetics.",
    icon: <TerminalSquareIcon className="size-4" />,
  },
]
