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

const projects: ProjectData[] = [
  {
    slug: 'nextrep',
    category: 'Client Website',
    title: 'NextRep Homepage',
    description:
      'Web design for a personal fitness coaching. Focused on showcasing trainers, amplifying social proof through testimonials, and making contact frictionless.',
    role: 'Lead Designer',
    responsibilities:
      'Designed the UX, Logos, Marketing proposals, building, deploying, and maintaining website',
    heroImage: 'https://www.figma.com/api/mcp/asset/a2c40dcc-9a55-492e-9ad7-86e61efc1b0b',
    ask: 'NextRep needed a website that could effectively represent their fitness coaching brand online — one that would showcase their trainers, build credibility through client testimonials, and make it easy for prospective clients to get in touch as quickly as possible.',
    overview: {
      client: 'Startup',
      year: '2024 - Current',
      tools: ['Figma, React', 'Resend, Vercel'],
    },
    sections: [
      {
        title: 'Homepage',
        liveUrl: 'https://nextrep-homepage.vercel.app/',
        figures: [
          {
            src: 'https://www.figma.com/api/mcp/asset/2d8fcd4a-9a09-489e-9f44-c051cbb516f4',
            alt: 'NextRep homepage screenshot',
          },
        ],
      },
      {
        title: 'Advertising Materials',
        figures: [
          {
            src: 'https://www.figma.com/api/mcp/asset/5f026dd8-d366-4a76-8092-ca1317fad7e1',
            alt: 'NextRep advertising cards',
          },
          {
            src: 'https://www.figma.com/api/mcp/asset/28537377-ecb8-46fb-b375-99c0c7a35cc0',
            alt: 'NextRep card set 2',
          },
          {
            src: 'https://www.figma.com/api/mcp/asset/4e9bd3aa-13dc-4ef8-a5e5-4c89300ea0ab',
            alt: 'NextRep offer email',
          },
          {
            src: 'https://www.figma.com/api/mcp/asset/cea45575-0e48-48f6-816d-1e8e64dc43bd',
            alt: 'NextRep example card',
          },
        ],
      },
    ],
  },
  {
    slug: 'honeysuckles',
    category: 'Client Website',
    title: 'Honeysuckles Homepage',
    description:
      'Web design for a custom floral studio serving weddings, events, and everything in between. Built to feel as curated and personal as the arrangements they create.',
    role: 'Lead Designer',
    responsibilities: 'Designed the UX, logos, building, deploying, and maintaining website',
    heroImage: 'https://www.figma.com/api/mcp/asset/d2cfb42a-e303-4709-9201-b38ebbcd9304',
    ask: 'The client needed a website that reflected the beauty and craftsmanship of their custom floral work. I crafted an elegant, visually-led experience that highlights the different offerings — arrangements, special occasions, and mainly weddings — in one responsive application. Additionally a contact form with custom HTML directly to the business owner.',
    overview: {
      client: 'Family/Startup Business',
      year: '2023 - Current',
      tools: ['Figma, React', 'Vercel'],
    },
    sections: [
      {
        title: 'Homepage',
        liveUrl: 'https://honeysuckles.vercel.app/',
        stack: true,
        figures: [
          {
            src: 'https://www.figma.com/api/mcp/asset/395424ff-761a-448e-93c0-8790ff23c010',
            alt: 'Honeysuckles homepage screenshot',
          },
          {
            src: 'https://www.figma.com/api/mcp/asset/d6e6c08a-bad4-4334-88ae-5f727f252fbf',
            alt: 'Honeysuckles homepage screenshot 2',
          },
          {
            src: 'https://www.figma.com/api/mcp/asset/51353877-4054-41d8-906a-5d5d0d72c6b8',
            alt: 'Honeysuckles homepage screenshot 3',
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
