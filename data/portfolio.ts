export interface Project {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  stack: string[];
  type: "Production" | "Personal" | "FYP";
  featured: boolean;
  details?: string[];
  github?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: "Backend" | "Databases" | "Cloud" | "Frontend";
}

export interface RadarStat {
  axis: string;
  value: number;
}

export const projects: Project[] = [
  {
    id: "pfc-crm",
    name: "PFC CRM",
    shortDesc: "AI-Powered Pre-Foreclosure Real Estate CRM",
    description:
      "Production-grade, multi-role Real Estate CRM that automates the full pre-foreclosure lead lifecycle — ingestion, routing, outreach, scheduling, and contract generation — replacing manual Excel/Sheets workflows for a US-based real estate operation.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma ORM", "Supabase", "n8n", "BatchData API", "REST APIs"],
    type: "Production",
    featured: true,
    details: [
      "End-to-end Supabase auth with OTP, JWT session management, Next.js middleware route guards",
      "3-tier RBAC (Superadmin / Agent / Team Member) enforced at API layer — every endpoint validates role and ownership scope",
      "POST /api/leads/ingest — receives BatchData payloads via n8n webhook, runs batchDataId deduplication, maps 20+ lead fields, persists via Prisma transactions",
      "Territory routing engine: ZIP code matching, auto-assign vs PENDING flag, atomic DB operation to prevent race conditions",
      "Full CRUD for team management — agent hierarchy, approval workflows, one-agent-per-territory unique constraint",
    ],
  },
  {
    id: "deepsian-erp",
    name: "DeepSian ERP",
    shortDesc: "Bespoke ERP for Film & TV Set Construction",
    description:
      "7-module ERP platform for a UK film and TV set construction company. Replaced disconnected PO software and manual Excel workflows. Covers procurement, crew management, payroll, cost reporting, forecasting, and production tracking.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma ORM", "Vercel", "Render", "AWS SES", "Cloudinary"],
    type: "Production",
    featured: true,
    details: [
      "Auth & RBAC: MD / Accountant / Coordinator roles at middleware and API layer",
      "Payroll Engine: timesheet auto-population from Crew DB, BECTU rate card, PAYE vs Self-Employed computation, bank-upload CSV export",
      "Cost Report: dual financial model (Fixed Price + Cost Plus with margin logic), auto-populated from PO approvals, live profit and budget variance",
      "Email: AWS SES for PO dispatch, invoice chase, set handover alerts (14-day / 7-day triggers)",
      "File Storage: Cloudinary for crew documents — PO approval blocked until invoice uploaded (enforced at DB layer)",
      "Forecasting: BECTU-rate labour forecaster + Percentometer rapid estimator, named scenario saving, forecast-vs-actual comparison",
    ],
  },
  {
    id: "szabist-spc",
    name: "SZABIST Speed Programming Club App",
    shortDesc: "Competitive programming club management app",
    description:
      "End-to-end competitive programming club management app with seamless user experience, contest management, leaderboards, and member tracking.",
    stack: ["Flutter", "Redux", "Node.js", "MongoDB"],
    type: "FYP",
    featured: false,
  },
  {
    id: "stitching-lab",
    name: "Stitching Lab",
    shortDesc: "Panoramic Image Stitcher",
    description:
      "Users upload multiple overlapping images; backend auto-stitches them into a panoramic image. Node.js handles routing and delegates stitching logic to Python scripts via child processes.",
    stack: ["React", "Node.js", "MongoDB", "Python"],
    type: "Personal",
    featured: false,
  },
  {
    id: "pulse-connect",
    name: "Pulse Connect",
    shortDesc: "Blood Donor App",
    description:
      "Mobile app connecting blood donors and seekers in real-time based on blood group and location. Features: user registration, donor history tracking, donation eligibility checks.",
    stack: ["Flutter", "Node.js", "MongoDB"],
    type: "Personal",
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    company: "Techvera Global",
    role: "Associate Software Engineer",
    period: "May 2026 – Present",
    current: true,
    bullets: [
      "Leading backend development of PFC CRM (AI-powered Real Estate platform) and DeepSian ERP (UK Film & TV set construction) — both live in production",
      "Architecting full-stack systems with Next.js, PostgreSQL, Prisma ORM, Supabase, AWS SES, and Cloudinary",
      "Designing and enforcing 3-tier RBAC systems, lead ingestion pipelines, payroll engines, cost reporting modules, and territory routing logic",
      "Coordinating API contracts, Git workflow, and backend-frontend integration across team",
    ],
  },
  {
    company: "Zyne Ventures",
    role: "Junior Software Engineer",
    period: "Nov 2025 – Apr 2026",
    current: false,
    bullets: [
      "Led backend architecture of production-grade AI-powered Real Estate CRM (PFC CRM) on Next.js, PostgreSQL, Prisma ORM, Supabase",
      "Architected Supabase Authentication end-to-end: OTP flows, session management, JWT handling across frontend and backend",
      "Designed and enforced 3-tier RBAC (Superadmin / Agent / Team Member) with middleware-level route protection on all API endpoints",
      "Built Lead Ingestion API (/api/leads/ingest) integrating BatchData via n8n webhook: payload parsing, deduplication, structured PostgreSQL storage",
      "Developed Auto-Assignment Engine: territory-based ZIP code matching, configurable AUTO_ASSIGN_LEADS system setting toggle",
      "Built Manual Assignment controls: Superadmin override, lead reassignment, PENDING/APPROVED/UNASSIGNED status management",
      "Built Team Management module: agent-team hierarchies, scoped profiles, one-agent-per-territory constraint at data layer",
      "Coordinated backend-frontend integration, reviewed API contracts, managed Git branch workflow across team",
    ],
  },
  {
    company: "Alpha Devs",
    role: "Backend Developer",
    period: "June 2025",
    current: false,
    bullets: [
      "Engineered RESTful APIs using Node.js and Express.js, improving request handling efficiency by 35%",
      "Deployed and maintained backend services on Vercel with CI/CD workflows",
      "Integrated JWT authentication and middleware for secure API access",
      "Implemented payment gateway integrations for secure transaction processing",
      "Collaborated with frontend developers to align APIs with UI requirements",
    ],
  },
  {
    company: "Technosys",
    role: "Mobile Developer Intern",
    period: "July 2024",
    current: false,
    bullets: [
      "Developed HR management app: job postings, applicant tracking, recruitment pipeline",
      "Automated repetitive HR workflows, reducing manual workload by 70%",
      "Collaborated with cross-functional teams on sprint planning and delivery",
    ],
  },
];

export const skills: Skill[] = [
  // Backend
  { name: "Node.js + Express.js", level: 92, category: "Backend" },
  { name: "REST API Design", level: 90, category: "Backend" },
  { name: "Authentication (JWT/OAuth/Supabase)", level: 88, category: "Backend" },
  { name: "WebSockets", level: 78, category: "Backend" },
  { name: "Redis", level: 72, category: "Backend" },
  { name: "Microservices", level: 75, category: "Backend" },
  { name: "AI / LLM Integration", level: 70, category: "Backend" },
  // Databases
  { name: "PostgreSQL", level: 88, category: "Databases" },
  { name: "MongoDB", level: 82, category: "Databases" },
  { name: "Prisma ORM", level: 87, category: "Databases" },
  { name: "Redis", level: 72, category: "Databases" },
  // Cloud
  { name: "Supabase", level: 85, category: "Cloud" },
  { name: "Vercel / Render", level: 80, category: "Cloud" },
  { name: "AWS SES", level: 74, category: "Cloud" },
  { name: "Cloudinary", level: 78, category: "Cloud" },
  { name: "n8n Automation", level: 76, category: "Cloud" },
  // Frontend
  { name: "Next.js", level: 78, category: "Frontend" },
  { name: "React", level: 75, category: "Frontend" },
  { name: "Flutter", level: 70, category: "Frontend" },
];

export const radarStats: RadarStat[] = [
  { axis: "Backend", value: 92 },
  { axis: "Databases", value: 87 },
  { axis: "Cloud", value: 80 },
  { axis: "APIs", value: 90 },
  { axis: "Automation", value: 76 },
  { axis: "Mobile", value: 70 },
];

export const personalInfo = {
  name: "Muhammad Anas Khan",
  role: "Associate Software Engineer",
  tagline: "Building scalable APIs and backend systems",
  email: "ak1096561@gmail.com",
  linkedin: "https://linkedin.com/in/anas-khan",
  github1: "https://github.com/AnasKhan199911",
  github2: "https://github.com/Anasvkhan",
  phone: "+92-312-8694139",
  location: "Karachi, Pakistan",
  university: "SZABIST — BS Computer Science, 2021–2025",
  cvPath: "/Anas_Khan_CV.pdf",
};
