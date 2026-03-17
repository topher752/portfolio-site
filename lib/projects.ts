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
];

export function getProject(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export default projects;
