"use client";

import styled from "styled-components";
import ProjectCard from "./ProjectCard";
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
        <Grid>
          <RevealCard delay={0}>
            <ProjectCard
              title="DocSpera Web Redesign"
              subtitle="Surgical Coordination Portal"
              description="Ground-up redesign of DocSpera's surgical coordination portal — unifying scheduling, case pipelines, and messaging into one consistent practice dashboard."
              accentColor="#0096fa"
              thumbnailSrc={DocSperaWebThumb.src}
              thumbnailMode="cover"
              linkText="View Project"
              linkHref="/projects/docspera"
              slug="docspera"
            />
          </RevealCard>
          <RevealCard delay={0.1}>
            <ProjectCard
              title="DocSpera Mobile App"
              subtitle="Native Mobile Companion"
              description="Mobile companion designed for surgeons checking case state, schedules, and CPT codes between procedures — fast, scannable, one-handed."
              accentColor="#0096fa"
              thumbnailSrc={DocSperaMobileThumb.src}
              thumbnailMode="cover"
              thumbnailPosition="center top"
              linkText="View Project"
              linkHref="/projects/docspera-mobile"
              slug="docspera-mobile"
            />
          </RevealCard>
          <RevealCard delay={0.2}>
            <ProjectCard
              title="DocSpera Workflow Automation"
              subtitle="Agentic Workflow Builder"
              description="A visual workflow builder that lets non-engineering staff wire up triggers, conditions, and actions across the portal — without writing code."
              accentColor="#0096fa"
              thumbnailSrc={DocSperaWorkflowsThumb.src}
              thumbnailMode="cover"
              linkText="View Project"
              linkHref="/projects/docspera-workflows"
              slug="docspera-workflows"
            />
          </RevealCard>
          <RevealCard delay={0.3}>
            <ProjectCard
              title="Digital Surgery Platform"
              subtitle="Responsive Web Application"
              description="UI/UX design and frontend development for a leading medical device company. Focused on creating an intuitive experience for surgeons navigating a connected orthopedic technology ecosystem."
              accentColor="#d71500"
              isNda
              linkText="View Project"
              linkHref="/projects/digital-surgery"
              slug="digital-surgery"
            />
          </RevealCard>
          <RevealCard delay={0.4}>
            <ProjectCard
              title="Medical Therapy Dashboard"
              subtitle="UI/UX Design & Frontend Development"
              description="UI/UX design and frontend development designing and assisting building therapy tracking, patient intake flows, and an admin view in one concise dashboard"
              accentColor="#ff9e1b"
              isNda
              linkText="View Project"
              linkHref="/projects/medical-therapy"
              slug="medical-therapy"
            />
          </RevealCard>
        </Grid>
      </Group>

      {/* Client Projects */}
      <Group>
        <RevealHeader>
          <SectionHeader>
            <SectionTitle>Client Projects</SectionTitle>
          </SectionHeader>
        </RevealHeader>
        <Grid>
          <RevealCard delay={0}>
            <ProjectCard
              title="NextRep Homepage & Marketing"
              subtitle="Client Website"
              description="Web design for a personal fitness coaching. Focused on showcasing trainers, amplifying social proof through testimonials, and making contact frictionless."
              accentColor="#f0ebe1"
              linkText="View Case Study"
              linkHref="/projects/nextrep"
              slug="nextrep"
              thumbnailSrc={NextRepLogo.src}
            />
          </RevealCard>
          <RevealCard delay={0.1}>
            <ProjectCard
              title="Honeysuckles Homepage"
              subtitle="Client Website"
              description="Web design for a custom floral studio serving weddings, events, and everything in between. Built to feel as curated and personal as the arrangements they create."
              accentColor="#f0ebe1"
              linkText="View Case Study"
              linkHref="/projects/honeysuckles"
              slug="honeysuckles"
              thumbnailSrc={HoneysucklesLogo.src}
            />
          </RevealCard>
        </Grid>
      </Group>
    </Section>
  );
}
