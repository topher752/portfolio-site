// nextrep imports
import NextStart from "@/assets/nextrep/NextRepStart.webp";
import OfferEmail from "@/assets/nextrep/OfferEmail.webp";
import ExampleCard from "@/assets/nextrep/ExampleCard.webp";
import Cards2 from "@/assets/nextrep/Cards2.webp";
import Website from "@/assets/nextrep/Website.webp";
import FirstCards from "@/assets/nextrep/FirstCards.webp";

// honeysuckes imports
import Home from "@/assets/honeysuckles/Home.webp";
import About from "@/assets/honeysuckles/About.webp";
import Arrangements from "@/assets/honeysuckles/Arrangements.webp";
import SpecialOccasions from "@/assets/honeysuckles/SpecialOccasions.webp";

//#region interfaces
export interface ProjectOverview {
  client: string;
  year: string;
  tools: string[];
}

export interface ProjectFigure {
  src: string;
  alt?: string;
}

export interface ProjectSection {
  title: string;
  liveUrl?: string;
  figures: ProjectFigure[];
  stack?: boolean;
}

export interface ProjectStat {
  value: string;
  label: string;
  context?: string;
}

export interface ProjectData {
  slug: string;
  category: string;
  title: string;
  description: string;
  role: string;
  responsibilities: string;
  heroImage: string;
  ask: string;
  overview: ProjectOverview;
  sections: ProjectSection[];
  nda?: boolean;
  stats?: ProjectStat[];
  tasks?: string[];
}
//#endregion

const projects: ProjectData[] = [
  {
    slug: "nextrep",
    category: "Client Website",
    title: "NextRep Homepage",
    description:
      "Web design for a personal fitness coaching. Focused on showcasing trainers, amplifying social proof through testimonials, and making contact frictionless.",
    role: "Lead Designer",
    responsibilities:
      "Designed the UX, Logos, Marketing proposals, building, deploying, and maintaining website",
    heroImage: NextStart.src,
    ask: "NextRep needed a website that could effectively represent their fitness coaching brand online — one that would showcase their trainers, build credibility through client testimonials, and make it easy for prospective clients to get in touch as quickly as possible.",
    overview: {
      client: "Startup",
      year: "2024 - Current",
      tools: ["Figma, React", "Resend, Vercel"],
    },
    sections: [
      {
        title: "Homepage",
        liveUrl: "https://nextrep-homepage.vercel.app/",
        figures: [
          {
            src: Website.src,
            alt: "NextRep homepage screenshot",
          },
        ],
      },
      {
        title: "Advertising Materials",
        figures: [
          {
            src: FirstCards.src,
            alt: "NextRep advertising cards",
          },
          {
            src: Cards2.src,
            alt: "NextRep card set 2",
          },
          {
            src: OfferEmail.src,
            alt: "NextRep offer email",
          },
          {
            src: ExampleCard.src,
            alt: "NextRep example card",
          },
        ],
      },
    ],
  },
  {
    slug: "honeysuckles",
    category: "Client Website",
    title: "Honeysuckles Homepage",
    description:
      "Web design for a custom floral studio serving weddings, events, and everything in between. Built to feel as curated and personal as the arrangements they create.",
    role: "Lead Designer",
    responsibilities:
      "Designed the UX, logos, building, deploying, and maintaining website",
    heroImage: Home.src,
    ask: "The client needed a website that reflected the beauty and craftsmanship of their custom floral work. I crafted an elegant, visually-led experience that highlights the different offerings — arrangements, special occasions, and mainly weddings — in one responsive application. Additionally a contact form with custom HTML directly to the business owner.",
    overview: {
      client: "Family/Startup Business",
      year: "2023 - Current",
      tools: ["Figma, React", "Vercel"],
    },
    sections: [
      {
        title: "Homepage",
        liveUrl: "https://honeysuckles.vercel.app/",
        stack: true,
        figures: [
          {
            src: Arrangements.src,
            alt: "Arrangements page",
          },
          {
            src: About.src,
            alt: "About page",
          },
          {
            src: SpecialOccasions.src,
            alt: "Special Occasions page",
          },
        ],
      },
    ],
  },
  {
    slug: "docspera",
    category: "Professional Project",
    title: "DocSpera Redesign",
    description:
      "UX design and frontend development for DocSpera's healthcare portal, streamlining patient scheduling, messaging, and surgical lifecycle tracking across web and mobile.",
    role: "UX Designer & Frontend Developer",
    responsibilities:
      "End-to-end UX redesign, component library development, web and mobile-tablet designs",
    heroImage: "",
    nda: true,
    ask: "DocSpera needed a ground-up redesign of their healthcare portal to reduce friction for surgical coordinators and physicians managing complex patient pipelines. The existing interface was fragmented across platforms with inconsistent patterns, making critical workflows slower than they needed to be. The goal was a unified, intuitive experience across both web and mobile that matched how clinical teams actually work.",
    overview: {
      client: "DocSpera",
      year: "2023 - 2024",
      tools: ["Adobe Xd", "NextJS", "TypeScript", "styled-components"],
    },
    // stats: [
    //   { value: "—", label: "Screens redesigned", context: "Coming soon" },
    //   { value: "—", label: "Reduction in task time", context: "Coming soon" },
    //   { value: "—", label: "Platforms covered", context: "Coming soon" },
    //   { value: "—", label: "Stakeholder sessions", context: "Coming soon" },
    // ],
    tasks: [
      "Audited the existing web and mobile interfaces to identify friction points in the surgical scheduling and patient tracking workflows",
      "Designed a new component library to be used across the application and future DocSpera projects",
      "Collaborated with engineering and product teams through weekly design reviews and iterative prototyping sessions",
      "Delivered high-fidelity Adobe Xd prototypes and assisted in building production-ready React components, interactions, and pages",
    ],
    sections: [],
  },
  {
    slug: "digital-surgery",
    category: "Professional Project",
    title: "Digital Surgery Platform",
    description:
      "UI/UX design and frontend development for a leading medical device company — creating an intuitive experience for surgeons navigating a connected orthopedic technology ecosystem.",
    role: "UX Designer & Frontend Developer",
    responsibilities:
      "Responsive UI design, medical UX flows, design system contributions, frontend implementation",
    heroImage: "",
    nda: true,
    ask: "A leading medical device company needed a designed web platform that gave surgeons, patients, and medical staff a clear platform into their connected orthopedic technology and patient journeys. The challenge was translating dense technical data into a focused, scannable interface that worked equally well in a hospital office and on a personal device at the point of care.",
    overview: {
      client: "Medical Device Company (NDA)",
      year: "2023 - Current",
      tools: ["Figma", "NextJS", "TypeScript", "styled-components"],
    },
    // stats: [
    //   { value: "—", label: "Components built", context: "Coming soon" },
    //   { value: "—", label: "User flows designed", context: "Coming soon" },
    //   { value: "—", label: "Devices supported", context: "Coming soon" },
    //   { value: "—", label: "Design iterations", context: "Coming soon" },
    // ],
    tasks: [
      "Researched existing workflows and surgeon pain points through client discussions",
      "Designed responsive layouts optimized for both desktop and personal device use across medical and patient care",
      "Built a component library in Figma and implemented key UI components in React with full responsive behavior",
      "Continue to implement and design new flows across a sprint-to-sprint basis",
    ],
    sections: [],
  },
  {
    slug: "medical-therapy",
    category: "Professional Project",
    title: "Medical Therapy Dashboard",
    description:
      "UI/UX design and frontend development for a therapy tracking dashboard — covering patient intake flows, session management, and an admin view in one concise application.",
    role: "UX Designer & Frontend Developer",
    responsibilities:
      "Dashboard UX architecture, patient intake flow design, admin view, frontend development",
    heroImage: "",
    nda: true,
    ask: "The client needed a single unified dashboard to replace a patchwork of spreadsheets and disconnected tools used by therapy staff. The system had to handle patient intake across therapy and their varying lengths, an admin oversight layer, and a simple chatbot to reduce common FAQs flooding support staff",
    overview: {
      client: "Healthcare Startup (NDA)",
      year: "2024",
      tools: ["Adobe Xd", "NextJS", "TypeScript", "styled-components"],
    },
    // stats: [
    //   { value: "—", label: "Dashboard views", context: "Coming soon" },
    //   { value: "—", label: "Patient flows", context: "Coming soon" },
    //   { value: "—", label: "Admin features", context: "Coming soon" },
    //   { value: "—", label: "Weeks to ship", context: "Coming soon" },
    // ],
    tasks: [
      "Mapped out the full patient lifecycle from intake to metrics for providers into one unified dashboard",
      "Designed patient intake forms, organization patient and metric dashboards, and an admin oversight layer as a cohesive single-page application",
      "Worked closely with the development team to implement the UI in React with styled-components and API implementation",
      "Simplified a fragmented multi-tool workflow into one unified interface, reducing daily operational overhead for clinical staff",
      "Design and implement an AI Chatbot to assist users of all roles to answer common questions",
    ],
    sections: [],
  },
];

export function getProject(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export default projects;
