"use client";

import styled from "styled-components";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import { getProject } from "@/lib/projects";
import { useScrollReveal } from "@/lib/useScrollReveal";
import NextRepLogo from "@/assets/NextRepLogo.svg";
import HoneysucklesLogo from "@/assets/HoneySucklesLogo.svg";
import DocSperaWebThumb from "@/assets/RedesignScreenshots/PracticeDashboard.png";
import DocSperaMobileThumb from "@/assets/MobileApp/Overview.png";
import DocSperaWorkflowsThumb from "@/assets/AgenticAI/WorkflowsHome.png";

const Section = styled.section`
  padding: 0 24px 96px;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDark};
  letter-spacing: 0.4px;
  line-height: 1.2;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const RevealWrapper = styled.div`
  &.reveal {
    opacity: 0;
    transform: translateY(28px);
    transition:
      opacity 0.65s ease,
      transform 0.65s ease;
  }
  &.reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

function RevealCard({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });
  return (
    <RevealWrapper
      ref={ref}
      className="reveal"
      style={{ transitionDelay: delay ? `${delay}s` : undefined }}
    >
      {children}
    </RevealWrapper>
  );
}

function RevealHeader({ children }: { children: React.ReactNode }) {
  const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}

type CardMeta = Omit<ProjectCardProps, "description" | "isNda"> & {
  slug: string;
};

const professionalCards: CardMeta[] = [
  {
    slug: "docspera",
    title: "DocSpera Web Redesign",
    subtitle: "Surgical Coordination Portal",
    accentColor: "#0096fa",
    thumbnailSrc: DocSperaWebThumb.src,
    thumbnailMode: "cover",
    linkText: "View Project",
    linkHref: "/projects/docspera",
  },
  {
    slug: "docspera-mobile",
    title: "DocSpera Mobile App",
    subtitle: "Native Mobile Companion",
    accentColor: "#0096fa",
    thumbnailSrc: DocSperaMobileThumb.src,
    thumbnailMode: "cover",
    thumbnailPosition: "center top",
    linkText: "View Project",
    linkHref: "/projects/docspera-mobile",
  },
  {
    slug: "docspera-workflows",
    title: "DocSpera Workflow Automation",
    subtitle: "Agentic Workflow Builder",
    accentColor: "#0096fa",
    thumbnailSrc: DocSperaWorkflowsThumb.src,
    thumbnailMode: "cover",
    linkText: "View Project",
    linkHref: "/projects/docspera-workflows",
  },
  {
    slug: "digital-surgery",
    title: "Digital Surgery Platform",
    subtitle: "Responsive Web Application",
    accentColor: "#d71500",
    linkText: "View Project",
    linkHref: "/projects/digital-surgery",
  },
  {
    slug: "medical-therapy",
    title: "Medical Therapy Dashboard",
    subtitle: "UI/UX Design & Frontend Development",
    accentColor: "#ff9e1b",
    linkText: "View Project",
    linkHref: "/projects/medical-therapy",
  },
];

const clientCards: CardMeta[] = [
  {
    slug: "nextrep",
    title: "NextRep Homepage & Marketing",
    subtitle: "Client Website",
    accentColor: "#f0ebe1",
    thumbnailSrc: NextRepLogo.src,
    linkText: "View Case Study",
    linkHref: "/projects/nextrep",
  },
  {
    slug: "honeysuckles",
    title: "Honeysuckles Homepage",
    subtitle: "Client Website",
    accentColor: "#f0ebe1",
    thumbnailSrc: HoneysucklesLogo.src,
    linkText: "View Case Study",
    linkHref: "/projects/honeysuckles",
  },
];

function renderCards(cards: CardMeta[]) {
  return cards.map((card, i) => {
    const project = getProject(card.slug);
    return (
      <RevealCard key={card.slug} delay={i * 0.1}>
        <ProjectCard
          {...card}
          description={project?.description ?? ""}
          isNda={project?.nda}
        />
      </RevealCard>
    );
  });
}

export default function ProjectsSection() {
  return (
    <Section id="work">
      {/* Professional Projects */}
      <Group>
        <RevealHeader>
          <SectionHeader>
            <SectionTitle>Professional Projects</SectionTitle>
          </SectionHeader>
        </RevealHeader>
        <Grid>{renderCards(professionalCards)}</Grid>
      </Group>

      {/* Client Projects */}
      <Group>
        <RevealHeader>
          <SectionHeader>
            <SectionTitle>Client Projects</SectionTitle>
          </SectionHeader>
        </RevealHeader>
        <Grid>{renderCards(clientCards)}</Grid>
      </Group>
    </Section>
  );
}
