//#region imports
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

// docspera web redesign imports
import RedesignAdmin from "@/assets/RedesignScreenshots/Admin.png";
import RedesignBookingTemplates from "@/assets/RedesignScreenshots/BookingTemplates.png";
import RedesignCreateCase from "@/assets/RedesignScreenshots/CreateCase.png";
import RedesignDailySchedule from "@/assets/RedesignScreenshots/DailySchedule.png";
import RedesignLocationMappings from "@/assets/RedesignScreenshots/LocationMappings.png";
import RedesignMessages from "@/assets/RedesignScreenshots/Messages.png";
import RedesignPostOpCases from "@/assets/RedesignScreenshots/Post-OpCases.png";
import RedesignPracticeDashboard from "@/assets/RedesignScreenshots/PracticeDashboard.png";
import RedesignPreOpCases from "@/assets/RedesignScreenshots/PreOp-Cases.png";
import RedesignWorklists from "@/assets/RedesignScreenshots/Worklists.png";

// docspera mobile app imports
import MobileOverview from "@/assets/MobileApp/Overview.png";
import MobileCalendar from "@/assets/MobileApp/Calendar.png";
import MobileCaseInfo from "@/assets/MobileApp/CaseInfo.png";
import MobileContacts from "@/assets/MobileApp/Contacts.png";
import MobileInbox from "@/assets/MobileApp/Inbox.png";
import MobileCPTCodes from "@/assets/MobileApp/CPTCodes.png";
import MobileLogin from "@/assets/MobileApp/Login.png";
import MobileComponentList from "@/assets/MobileApp/ComponentList.png";
import MobileScreenVariants from "@/assets/MobileApp/ScreenVariantDesigns.png";

// docspera agentic ai imports
import AgenticWorkflowsHome from "@/assets/AgenticAI/WorkflowsHome.png";
import AgenticWorkflowDetails from "@/assets/AgenticAI/WorkflowDetails.png";
import AgenticChatComplete from "@/assets/AgenticAI/ChatComplete.png";
import AgenticFetchTray from "@/assets/AgenticAI/FetchTray.png";
import AgenticSendMessage from "@/assets/AgenticAI/SendMessage.png";
import AgenticSendStryker from "@/assets/AgenticAI/SendStryker.png";
import AgenticTagCase from "@/assets/AgenticAI/TagCase.png";
//#endregion

//#region interfaces
export interface ProjectOverview {
  client: string;
  year: string;
  tools: string[];
}

export interface ProjectFigure {
  src: string;
  alt?: string;
  caption?: string;
  focusPosition?: string;
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

export interface ProjectProcessStep {
  title: string;
  body: string;
  figure?: ProjectFigure & { focusPosition?: string };
}

export interface ProjectShowcase {
  title?: string;
  layout: "marquee-grid" | "mobile-rail";
  hero?: ProjectFigure;
  figures: ProjectFigure[];
}

export interface ProjectDecision {
  title: string;
  body: string;
  figure?: ProjectFigure;
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
  results?: string[];
  // New, richer narrative fields used by DocSpera trio:
  process?: ProjectProcessStep[];
  showcase?: ProjectShowcase;
  decisions?: ProjectDecision[];
  outcomes?: string;
  heroImageCompact?: boolean;
  heroImageExtra?: string;
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
    tasks: [
      "Propose multiple colour and logo and brand designs to compile and combine if needed",
      "Investigate and propose functionality for email notifications and management",
      "Build a functional and responsive website using NextJS and Resend for future use",
    ],
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
    tasks: [
      "Create proposed flows and grid-like designs for presenting work",
      "Design and implement interest email form using nodemailer",
      "Design and help brand company logo and social media management",
    ],
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
    title: "DocSpera Web Redesign",
    description:
      "Ground-up redesign of DocSpera's surgical coordination portal utilizing scheduling, case lifesycles, and messaging into one unified practice dasbhoard for HCPs in a new, modernized look.",
    role: "UX Designer & Frontend Developer",
    responsibilities:
      "End-to-end UX audit, component library, page-level redesigns, and React implementation",
    heroImage: RedesignPracticeDashboard.src,
    nda: false,
    ask: "DocSpera's initial surgical coordination portal included inconsistent screens, massive CLS, overloaded tables, and separated compnents. Users were shown multiple routes to manage a single case, and the visual language had drifted across teams. The ask required was reviving an ourdated system with new branding, best practices, and interactions that reduced the number of pages, modals, and click events without breaking the workflows clinical teams already depend on.",
    overview: {
      client: "DocSpera",
      year: "2023 - 2024",
      tools: ["Adobe Xd", "NextJS", "TypeScript", "styled-components"],
    },
    process: [
      {
        title: "Familiarize and Audit the exsisting Application",
        body: "Fully explor the entire application flow by flow, including the entire lifesycle from creating a case, adding users, communications with patients pre-op and post-op ending with completion. The audit surfaced redundant table views, mixed styles and inconsistent header patterns.",
        figure: {
          src: RedesignWorklists.src,
          alt: "Worklists view used during audit",
          focusPosition: "left top",
        },
      },
      {
        title: "Defined a shared component library",
        body: "Standardized table rows, filter bars, status pills, and the case header pattern so every page in the portal stays consistent, future proofing any additional pages. This process included redesigning basic components and defining a clear styleguide",
        figure: {
          src: RedesignPracticeDashboard.src,
          alt: "Practice dashboard showing shared components",
          focusPosition: "left top",
        },
      },
      {
        title: "Redesigned by surface, not by screen",
        body: "Redesigned each workflow: scheduling, pre-op and post-op lifecycles, admin, and messaging. Each surface got a unified header, filter pattern, and density level before any individual screen was touched using the shared styles.",
        figure: {
          src: RedesignPreOpCases.src,
          alt: "Pre-op cases surface",
          focusPosition: "left top",
        },
      },
      {
        title: "Iterated with engineering weekly",
        body: "Weekly design reviews with engineering and seniors kept scope honest and showcased and other improvements received from customers. This lead to lots of edge cases being identified and improved, leadning to better future planning.",
        figure: {
          src: RedesignCreateCase.src,
          alt: "Create case form",
          focusPosition: "center top",
        },
      },
    ],
    showcase: {
      title: "Inside the Portal",
      layout: "marquee-grid",
      hero: {
        src: RedesignPracticeDashboard.src,
        alt: "Practice dashboard with all-cases worklist",
        caption: "Practice dashboard",
      },
      figures: [
        {
          src: RedesignDailySchedule.src,
          alt: "Daily schedule view",
          caption: "Daily schedule",
        },
        {
          src: RedesignWorklists.src,
          alt: "Worklists view",
          caption: "Worklists",
        },
        {
          src: RedesignPreOpCases.src,
          alt: "Pre-op cases pipeline",
          caption: "Pre-op Lifescycle",
        },
        {
          src: RedesignPostOpCases.src,
          alt: "Post-op cases pipeline",
          caption: "Post-op Lifescycle",
        },
        {
          src: RedesignCreateCase.src,
          alt: "Create case form",
          caption: "Create case",
        },
        {
          src: RedesignBookingTemplates.src,
          alt: "Booking templates",
          caption: "Booking templates",
        },
        {
          src: RedesignMessages.src,
          alt: "Messaging view",
          caption: "Messaging",
        },
        {
          src: RedesignLocationMappings.src,
          alt: "Location mappings admin",
          caption: "Location mappings",
        },
        {
          src: RedesignAdmin.src,
          alt: "Admin settings",
          caption: "Admin",
        },
      ],
    },
    outcomes:
      "Consolidated 25+ disconnected routes into a navigation a coordinator can hold in their head. The component library cut the cost of every subsequent feature, with the mobile app and the workflow automation tool both inheriting designs, and gave DocSpera one consistent visual language.",
    stats: [],
    sections: [],
  },
  {
    slug: "docspera-mobile",
    category: "Professional Project",
    title: "DocSpera Mobile App",
    description:
      "Native-feeling mobile companion to the DocSpera portal: designed for surgeons checking case state, schedules, and CPT codes between procedures.",
    role: "UX Designer",
    responsibilities:
      "Mobile UX Design, component variants, interaction prototyping",
    heroImage: MobileOverview.src,
    heroImageExtra: MobileCalendar.src,
    heroImageCompact: true,
    nda: false,
    ask: "Similar to the main webapp redesign, the companion mobile application required an modernized redo for users. This included redesigning existing funtionality, but idenifying improvements to port over including existing DocSpera functionality, new push notifications, and building in biometric native functionality",
    overview: {
      client: "DocSpera",
      year: "2023 - 2024",
      tools: ["Adobe Xd"],
    },
    process: [
      {
        title: "Identify workflows and audit",
        body: "Mapped the realistic workflows a surgeon or provider would do when opening the app: between procedures, figuring out their schedule, and staying up-to-date with their careteams.",
      },
      {
        title: "Built a mobile-specific component set",
        body: "Using the web versions components as a base, I pared them down to a smaller kit of cards, status badges, mobile-friendly variants, and list rows tuned for thumb reach and one-handed reading.",
      },
      {
        title: "Designed status as the primary signal",
        body: "Color and label do most of the work on small screens. Confirmation states, readiness, and unconfirmed cases each got a distinct visual treatment so a surgeon could triage the day at a glance.",
      },
      {
        title: "Validated screen variants before committing",
        body: "Ran multiple visual directions for the case header and overview rows side-by-side before locking the final pattern, which is where the screen variant board came from.",
      },
    ],
    showcase: {
      title: "Mobile Screens",
      layout: "mobile-rail",
      figures: [
        { src: MobileOverview.src, alt: "Overview screen", caption: "Overview" },
        { src: MobileCalendar.src, alt: "Calendar", caption: "Calendar" },
        { src: MobileCaseInfo.src, alt: "Case info", caption: "Case info" },
        { src: MobileCPTCodes.src, alt: "CPT codes", caption: "CPT codes" },
        { src: MobileInbox.src, alt: "Inbox", caption: "Inbox" },
        { src: MobileContacts.src, alt: "Contacts", caption: "Contacts" },
        { src: MobileLogin.src, alt: "Login", caption: "Login" },
      ],
    },
    decisions: [
      {
        title: "Component library, in miniature",
        body: "A standalone mobile component sheet kept the team aligned on spacing, density, icons, and status treatment for easy access.",
        figure: {
          src: MobileComponentList.src,
          alt: "Mobile component list",
        },
      },
      {
        title: "Variants before commitment",
        body: "Before locking screen patterns, I produced a side-by-side variant board to compare information density, status placement, and process for open discussion and review",
        figure: {
          src: MobileScreenVariants.src,
          alt: "Mobile screen variant designs",
        },
      },
    ],
    outcomes:
      "Delivered a coherent mobile companion that providers can use. The screens hit a consistent density, responsive across native phone settings, status reads at a glance, and the underlying component sheet gives DocSpera a foundation to keep extending the mobile experience.",
    stats: [],
    sections: [],
  },
  {
    slug: "docspera-workflows",
    category: "Professional Project",
    title: "DocSpera Workflow Automation",
    description:
      "Agentic workflow builder that lets DocSpera staff and partners wire up triggers, conditions, and actions across the portal, with some examples include sending messages, tagging cases, and adding careteam members without writing code.",
    role: "UX Designer",
    responsibilities:
      "UX Design, review, and integration investigation",
    heroImage: AgenticWorkflowsHome.src,
    nda: false,
    ask: "DocSpera needed to give non-engineering staff a way to automate repetitive coordination tasks that used to require an entire sprint for implementation. The challenge was making something powerful enough to compose real workflows, but readable enough that a coordinator could open it cold and understand what was already wired up.",
    overview: {
      client: "DocSpera",
      year: "2024",
      tools: ["Adobe Xd"],
    },
    process: [
      {
        title: "Treated each workflow as a sentence",
        body: "The core unit reads left-to-right: a trigger, a condition, an action. Designing it as a sentence made the list view scannable and kept the mental model close to how people describe the rule out loud.",
        figure: {
          src: AgenticWorkflowsHome.src,
          alt: "Workflows home — rows read as sentences",
          focusPosition: "left top",
        },
      },
      {
        title: "Designed for browse, then edit",
        body: "The home view leads with browsing existing workflows with an optional 'recommended' workflow to improve for users. Editing and creation are downstream of recognizing what's already running, so the home screen optimizes for status and ownership at a glance.",
        figure: {
          src: AgenticWorkflowDetails.src,
          alt: "Workflow details surface",
          focusPosition: "left top",
        },
      },
      {
        title: "Built dedicated action surfaces",
        body: "Each action type, like sending a message, tag case, or send to a manufacturer integration, got its own focused configuration surface so the workflow row stays clean while the action stays expressive.",
        figure: {
          src: AgenticSendMessage.src,
          alt: "Send message action configuration",
          focusPosition: "left top",
        },
      },
      {
        title: "Layered the assistant in carefully",
        body: "An assistant panel sits alongside the builder for staff who want to describe a workflow in plain language. It scaffolds the rule, then hands editing back to the visual builder.",
        figure: {
          src: AgenticChatComplete.src,
          alt: "Assistant panel alongside the builder",
          focusPosition: "left top",
        },
      },
    ],
    showcase: {
      title: "Inside the Builder",
      layout: "marquee-grid",
      hero: {
        src: AgenticWorkflowsHome.src,
        alt: "Workflows home view",
        caption: "Workflows home — scan, don't dig.",
        focusPosition: "left top",
      },
      figures: [
        {
          src: AgenticWorkflowDetails.src,
          alt: "Workflow details",
          caption: "Workflow details",
          focusPosition: "left top",
        },
        {
          src: AgenticChatComplete.src,
          alt: "Assistant complete state",
          caption: "Assistant",
          focusPosition: "left top",
        },
        {
          src: AgenticSendMessage.src,
          alt: "Send message action",
          caption: "Send message action",
          focusPosition: "left top",
        },
        {
          src: AgenticTagCase.src,
          alt: "Tag case action",
          caption: "Tag case action",
          focusPosition: "left top",
        },
        {
          src: AgenticSendStryker.src,
          alt: "Manufacturer integration action",
          caption: "Manufacturer integration",
          focusPosition: "left top",
        },
        {
          src: AgenticFetchTray.src,
          alt: "Fetch tray action",
          caption: "Fetch tray",
          focusPosition: "left top",
        },
      ],
    },
    outcomes:
      "Proposed to the non-engineering staff a way to compose real automation themselves and gave engineering a single flow instead of a backlog of one-off scripts.",
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
    tasks: [
      "Researched existing workflows and surgeon pain points through client discussions",
      "Designed responsive layouts optimized for both desktop and personal device use across medical and patient care",
      "Built a component library in Figma and implemented key UI components in React with full responsive behavior",
      "Continue to implement and design new flows across a sprint-to-sprint basis",
    ],
    results: [
      "Multi-role medial support and data visiualization",
      "Customizable patient journeys before and after their surgery",
      "International support",
    ],
    stats: [],
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
    tasks: [
      "Mapped out the full patient lifecycle from intake to metrics for providers into one unified dashboard",
      "Designed patient intake forms, organization patient and metric dashboards, and an admin oversight layer as a cohesive single-page application",
      "Worked closely with the development team to implement the UI in React with styled-components and API implementation",
      "Simplified a fragmented multi-tool workflow into one unified interface, reducing daily operational overhead for clinical staff",
      "Design and implement an AI Chatbot to assist users of all roles to answer common questions",
    ],
    results: [
      "Unified dashboard for patient and organization therapy metrics",
      "B2B handoff with an easy user and organization admin management portal",
      "AI Support chatbot reducing user confusion aleviating management and developer time",
    ],
    stats: [],
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
