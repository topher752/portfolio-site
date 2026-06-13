"use client";

import styled from "styled-components";
import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";
import type { ProjectData, ProjectShowcase } from "@/lib/projects";
import projects from "@/lib/projects";

const Page = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  min-height: 100vh;
`;

const ContentWrap = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 24px;
`;

const BackRow = styled.div`
  padding-top: calc(80px + 48px);
  padding-bottom: 0;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: -0.15px;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.textDark};
  }

  svg {
    flex-shrink: 0;
  }
`;

const Header = styled.header`
  padding-top: 36px;
  padding-bottom: 0;
  max-width: 768px;
`;

const Category = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textFaint};
  letter-spacing: 0.2px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textDark};
  letter-spacing: 0.35px;
  line-height: 1.1;
`;

const NdaPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.3px;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.bgMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 9999px;
  padding: 5px 12px;
  white-space: nowrap;
  align-self: center;
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.textMid};
  letter-spacing: -0.45px;
  line-height: 1.625;
  margin-bottom: 0;
`;

const MetaBar = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 48px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 24px 0;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 16px;
  }
`;

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MetaLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textFaint};
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;

const MetaValue = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.pillText};
  letter-spacing: -0.15px;
  line-height: 1.5;
  max-width: 420px;
`;

const HeroImageWrap = styled.div<{ $compact?: boolean }>`
  margin-top: 48px;
  border-radius: 24px;
  overflow: hidden;
  background: ${({ theme, $compact }) =>
    $compact ? theme.colors.bgMuted : theme.colors.border};
  border: ${({ theme, $compact }) =>
    $compact ? `1px solid ${theme.colors.border}` : "none"};
  padding: ${({ $compact }) => ($compact ? "48px 24px" : "0")};
  display: ${({ $compact }) => ($compact ? "flex" : "block")};
  justify-content: center;
  gap: ${({ $compact }) => ($compact ? "32px" : "0")};
  flex-wrap: wrap;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);

  img {
    display: block;
    width: ${({ $compact }) => ($compact ? "auto" : "100%")};
    max-width: ${({ $compact }) => ($compact ? "280px" : "none")};
    max-height: ${({ $compact }) => ($compact ? "520px" : "none")};
    height: auto;
    object-fit: cover;
    border-radius: ${({ $compact }) => ($compact ? "24px" : "0")};
    border: ${({ $compact }) => ($compact ? "2px solid #000" : "none")};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ $compact }) => ($compact ? "28px 12px" : "0")};
    gap: ${({ $compact }) => ($compact ? "16px" : "0")};

    img {
      max-width: ${({ $compact }) => ($compact ? "44%" : "none")};
    }
  }
`;

const ArticleBody = styled.div`
  padding-top: 64px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

const AskRow = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const AskBlock = styled.div`
  flex: 1;
  min-width: 0;
`;

const SectionHeading = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDark};
  letter-spacing: 0.07px;
  line-height: 1.33;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: "";
    display: block;
    width: 24px;
    height: 2px;
    background: ${({ theme }) => theme.colors.textAccent};
    flex-shrink: 0;
  }
`;

const AskText = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMid};
  line-height: 1.625;
  letter-spacing: -0.44px;
`;

const OverviewCard = styled.aside`
  width: 280px;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.bgMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const OverviewTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDark};
  letter-spacing: -0.44px;
  margin-bottom: 20px;
`;

const OverviewList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const OverviewRow = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.pillBorder};

  &:last-child {
    border-bottom: none;
  }
`;

const OverviewKey = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: -0.15px;
  flex-shrink: 0;
`;

const OverviewVal = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.pillText};
  letter-spacing: -0.15px;
  text-align: right;
`;

const ItemList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const ItemRow = styled.li<{ $variant?: "task" | "result" }>`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMid};
  line-height: 1.625;
  letter-spacing: -0.44px;
  padding: 14px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: baseline;
  gap: 14px;

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  &::before {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme, $variant }) =>
      $variant === "result" ? theme.colors.textDark : theme.colors.textAccent};
    flex-shrink: 0;
    margin-top: 9px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.bgMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StatValue = styled.span`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textDark};
  letter-spacing: -1px;
  line-height: 1;
`;

const StatLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMid};
  letter-spacing: -0.15px;
  line-height: 1.4;
`;

const StatContext = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textFaint};
  letter-spacing: 0.1px;
`;

const MetricsPlaceholder = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textFaint};
  letter-spacing: -0.15px;
  padding: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
`;

const ProcessList = styled.ol`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  counter-reset: step;
`;

const ProcessItem = styled.li`
  counter-increment: step;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  padding: 36px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  /* Flip every other row: figure on the left */
  &:nth-child(even) > :first-child {
    order: 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 28px 0;

    /* On mobile, no flipping needed since figure is hidden */
    &:nth-child(even) > :first-child {
      order: 0;
    }
  }
`;

const ProcessItemNoFigure = styled.li`
  counter-increment: step;
  padding: 28px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const ProcessStepNumber = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textFaint};
  letter-spacing: 0.4px;
  margin-bottom: 10px;

  &::before {
    content: counter(step, decimal-leading-zero);
  }
`;

const ProcessStepTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDark};
  letter-spacing: -0.3px;
  line-height: 1.35;
  margin-bottom: 10px;
`;

const ProcessStepBody = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMid};
  line-height: 1.625;
  letter-spacing: -0.3px;
`;

const ProcessStepFigure = styled.div<{ $focus?: string }>`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgMuted};
  aspect-ratio: 4 / 3;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.08),
    0 1px 2px -1px rgba(0, 0, 0, 0.08);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: ${({ $focus }) => $focus ?? "left top"};
    transform: scale(1.6);
    transform-origin: ${({ $focus }) => $focus ?? "left top"};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Showcase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ShowcaseHero = styled.div`
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgMuted};
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.06),
    0 1px 3px rgba(0, 0, 0, 0.08);

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const ShowcaseCaption = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textFaint};
  letter-spacing: -0.1px;
  padding: 10px 4px 0;
`;

const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ShowcaseTile = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 0;
`;

const ShowcaseTileImg = styled.div<{ $focus?: string }>`
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgMuted};
  aspect-ratio: 16 / 10;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.08),
    0 1px 2px -1px rgba(0, 0, 0, 0.08);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: ${({ $focus }) => $focus ?? "top center"};
  }
`;

const MobileRail = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 16px 4px 24px;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 9999px;
  }
`;

const MobileTile = styled.figure`
  flex: 0 0 auto;
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  scroll-snap-align: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 200px;
  }
`;

const MobileTileImg = styled.div`
  border-radius: 28px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bgMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 12px;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.06),
    0 1px 2px rgba(0, 0, 0, 0.06);

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 18px;
    border: 2px solid #000;
  }
`;

const MobileTileCaption = styled.figcaption`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMid};
  letter-spacing: -0.1px;
  text-align: center;
`;

const DecisionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const DecisionCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;

  /* Flip every other row: figure on the left */
  &:nth-child(even) > :first-child {
    order: 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 20px;

    &:nth-child(even) > :first-child {
      order: 0;
    }
  }
`;

const DecisionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const DecisionTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDark};
  letter-spacing: -0.3px;
  line-height: 1.3;
`;

const DecisionBody = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMid};
  line-height: 1.625;
  letter-spacing: -0.3px;
`;

const DecisionFigure = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bgMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 16px;
  display: flex;
  justify-content: center;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

const OutcomesText = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMid};
  line-height: 1.625;
  letter-spacing: -0.44px;
`;

const ProcessSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LiveLink = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: #005f9f;
  letter-spacing: -0.15px;
  text-decoration: underline;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const Figure = styled.div`
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const FigureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectNavWrap = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 40px 0 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProjectNavLabel = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textFaint};
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;

const ProjectNavList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ProjectNavItem = styled(Link)<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 9999px;
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.textDark : theme.colors.border};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.textDark : "transparent"};
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, $active }) =>
    $active ? "#fdfbf7" : theme.colors.textMid};
  letter-spacing: -0.15px;
  text-decoration: none;
  transition:
    border-color 0.15s ease,
    background 0.15s ease,
    color 0.15s ease;
  pointer-events: ${({ $active }) => ($active ? "none" : "auto")};

  &:hover {
    border-color: ${({ theme }) => theme.colors.textDark};
    color: ${({ theme }) => theme.colors.textDark};
  }
`;

const NdaDot = styled.span`
  display: inline-flex;
  align-items: center;
  opacity: 0.5;
`;

const Reveal = styled.div`
  &.reveal {
    opacity: 0;
    transform: translateY(24px);
    transition:
      opacity 0.6s ease,
      transform 0.6s ease;
  }
  &.reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

function RevealBlock({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.06 });
  return (
    <Reveal
      ref={ref}
      className="reveal"
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Reveal>
  );
}

function ShowcaseBlock({ showcase }: { showcase: ProjectShowcase }) {
  if (showcase.layout === "mobile-rail") {
    return (
      <Showcase>
        <MobileRail>
          {showcase.figures.map((fig, i) => (
            <MobileTile key={i}>
              <MobileTileImg>
                <img src={fig.src} alt={fig.alt ?? ""} />
              </MobileTileImg>
              {fig.caption && (
                <MobileTileCaption>{fig.caption}</MobileTileCaption>
              )}
            </MobileTile>
          ))}
        </MobileRail>
      </Showcase>
    );
  }
  return (
    <Showcase>
      {showcase.hero && (
        <div>
          <ShowcaseHero>
            <img src={showcase.hero.src} alt={showcase.hero.alt ?? ""} />
          </ShowcaseHero>
          {showcase.hero.caption && (
            <ShowcaseCaption>{showcase.hero.caption}</ShowcaseCaption>
          )}
        </div>
      )}
      <ShowcaseGrid>
        {showcase.figures.map((fig, i) => (
          <ShowcaseTile key={i}>
            <ShowcaseTileImg $focus={fig.focusPosition}>
              <img src={fig.src} alt={fig.alt ?? ""} />
            </ShowcaseTileImg>
            {fig.caption && <ShowcaseCaption>{fig.caption}</ShowcaseCaption>}
          </ShowcaseTile>
        ))}
      </ShowcaseGrid>
    </Showcase>
  );
}

export default function ProjectDetail({ project }: { project: ProjectData }) {
  const useGrid = (section: (typeof project.sections)[0]) =>
    section.figures.length > 1 && !section.stack;

  const hasProcess = project.process && project.process.length > 0;
  const hasShowcase = project.showcase && project.showcase.figures.length > 0;
  const hasDecisions = project.decisions && project.decisions.length > 0;
  const hasOutcomes = !!project.outcomes;

  return (
    <Page>
      <ContentWrap>
        {/* Back */}
        <BackRow>
          <BackLink href="/#work">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8l4-4"
                stroke="#8c8273"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Work
          </BackLink>
        </BackRow>

        {/* Header */}
        <Header>
          <Category>{project.category}</Category>
          <TitleRow>
            <Title>{project.title}</Title>
            {project.nda && (
              <NdaPill>
                <svg width="11" height="12" viewBox="0 0 12 14" fill="none">
                  <rect
                    x="1"
                    y="6"
                    width="10"
                    height="7"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M3.5 6V4.5a2.5 2.5 0 0 1 5 0V6"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
                NDA Protected
              </NdaPill>
            )}
          </TitleRow>
          <Description>{project.description}</Description>
          <MetaBar>
            <MetaItem>
              <MetaLabel>Role</MetaLabel>
              <MetaValue>{project.role}</MetaValue>
            </MetaItem>
            <MetaItem>
              <MetaLabel>Responsibilities</MetaLabel>
              <MetaValue>{project.responsibilities}</MetaValue>
            </MetaItem>
          </MetaBar>
        </Header>

        {/* Hero image */}
        {project.heroImage && (
          <HeroImageWrap $compact={project.heroImageCompact}>
            <img src={project.heroImage} alt={`${project.title} hero`} />
            {project.heroImageExtra && (
              <img
                src={project.heroImageExtra}
                alt={`${project.title} hero secondary`}
              />
            )}
          </HeroImageWrap>
        )}

        {/* Article body */}
        <ArticleBody>
          {/* Problem Statement + Overview sidebar */}
          <RevealBlock>
            <AskRow>
              <AskBlock>
                <SectionHeading>Problem Statement</SectionHeading>
                <AskText>{project.ask}</AskText>
              </AskBlock>
              <OverviewCard>
                <OverviewTitle>Project Overview</OverviewTitle>
                <OverviewList>
                  <OverviewRow>
                    <OverviewKey>Client</OverviewKey>
                    <OverviewVal>{project.overview.client}</OverviewVal>
                  </OverviewRow>
                  <OverviewRow>
                    <OverviewKey>Year</OverviewKey>
                    <OverviewVal>{project.overview.year}</OverviewVal>
                  </OverviewRow>
                  <OverviewRow>
                    <OverviewKey>Tools</OverviewKey>
                    <OverviewVal>
                      {project.overview.tools.map((line, i) => (
                        <span key={i} style={{ display: "block" }}>
                          {line}
                        </span>
                      ))}
                    </OverviewVal>
                  </OverviewRow>
                </OverviewList>
              </OverviewCard>
            </AskRow>
          </RevealBlock>

          {/* Process (new narrative) */}
          {hasProcess && (
            <RevealBlock>
              <SectionHeading>Process</SectionHeading>
              <ProcessList>
                {project.process!.map((step, i) => {
                  const Row = step.figure ? ProcessItem : ProcessItemNoFigure;
                  return (
                    <Row key={i}>
                      <div>
                        <ProcessStepNumber />
                        <ProcessStepTitle>{step.title}</ProcessStepTitle>
                        <ProcessStepBody>{step.body}</ProcessStepBody>
                      </div>
                      {step.figure && (
                        <ProcessStepFigure $focus={step.figure.focusPosition}>
                          <img
                            src={step.figure.src}
                            alt={step.figure.alt ?? ""}
                          />
                        </ProcessStepFigure>
                      )}
                    </Row>
                  );
                })}
              </ProcessList>
            </RevealBlock>
          )}

          {/* Showcase */}
          {hasShowcase && (
            <RevealBlock>
              <SectionHeading>
                {project.showcase!.title ?? "Showcase"}
              </SectionHeading>
              <ShowcaseBlock showcase={project.showcase!} />
            </RevealBlock>
          )}

          {/* Design Decisions */}
          {hasDecisions && (
            <RevealBlock>
              <SectionHeading>Design Decisions</SectionHeading>
              <DecisionList>
                {project.decisions!.map((d, i) => (
                  <DecisionCard key={i}>
                    <DecisionText>
                      <DecisionTitle>{d.title}</DecisionTitle>
                      <DecisionBody>{d.body}</DecisionBody>
                    </DecisionText>
                    {d.figure && (
                      <DecisionFigure>
                        <img src={d.figure.src} alt={d.figure.alt ?? ""} />
                      </DecisionFigure>
                    )}
                  </DecisionCard>
                ))}
              </DecisionList>
            </RevealBlock>
          )}

          {/* Tasks (legacy) */}
          {!hasProcess && project.tasks && project.tasks.length > 0 && (
            <RevealBlock>
              <SectionHeading>Tasks</SectionHeading>
              <ItemList>
                {project.tasks.map((task, i) => (
                  <ItemRow key={i} $variant="task">
                    {task}
                  </ItemRow>
                ))}
              </ItemList>
            </RevealBlock>
          )}

          {/* Outcomes (prose) OR Results (legacy bullets) */}
          {hasOutcomes ? (
            <RevealBlock>
              <SectionHeading>Outcomes</SectionHeading>
              <OutcomesText>{project.outcomes}</OutcomesText>
            </RevealBlock>
          ) : project.results && project.results.length > 0 ? (
            <RevealBlock>
              <SectionHeading>Results</SectionHeading>
              <ItemList>
                {project.results.map((result, i) => (
                  <ItemRow key={i} $variant="result">
                    {result}
                  </ItemRow>
                ))}
              </ItemList>
            </RevealBlock>
          ) : null}

          {/* Metrics */}
          {project.stats !== undefined && (
            <RevealBlock>
              <SectionHeading>Metrics</SectionHeading>
              {project.stats.length > 0 ? (
                <StatsGrid>
                  {project.stats.map((stat, i) => (
                    <StatCard key={i}>
                      <StatValue>{stat.value}</StatValue>
                      <StatLabel>{stat.label}</StatLabel>
                      {stat.context && (
                        <StatContext>{stat.context}</StatContext>
                      )}
                    </StatCard>
                  ))}
                </StatsGrid>
              ) : (
                <MetricsPlaceholder>Metrics coming soon</MetricsPlaceholder>
              )}
            </RevealBlock>
          )}

          {/* Named sections (legacy — for nextrep / honeysuckles) */}
          {project.sections.map((section, i) => (
            <RevealBlock key={i} delay={0.05}>
              <ProcessSection>
                <SectionTitleRow>
                  <SectionHeading>{section.title}</SectionHeading>
                  {section.liveUrl && (
                    <LiveLink
                      href={section.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live Site
                    </LiveLink>
                  )}
                </SectionTitleRow>

                {useGrid(section) ? (
                  <FigureGrid>
                    {section.figures.map((fig, j) => (
                      <Figure key={j}>
                        <img src={fig.src} alt={fig.alt ?? ""} />
                      </Figure>
                    ))}
                  </FigureGrid>
                ) : (
                  section.figures.map((fig, j) => (
                    <Figure key={j}>
                      <img src={fig.src} alt={fig.alt ?? ""} />
                    </Figure>
                  ))
                )}
              </ProcessSection>
            </RevealBlock>
          ))}

          {/* Project nav */}
          <ProjectNavWrap>
            <ProjectNavLabel>More Projects</ProjectNavLabel>
            <ProjectNavList>
              {projects.map((p) => (
                <ProjectNavItem
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  $active={p.slug === project.slug}
                >
                  {p.title}
                  {p.nda && (
                    <NdaDot>
                      <svg
                        width="9"
                        height="11"
                        viewBox="0 0 12 14"
                        fill="none"
                      >
                        <rect
                          x="1"
                          y="6"
                          width="10"
                          height="7"
                          rx="1.5"
                          stroke="currentColor"
                          strokeWidth="1.4"
                        />
                        <path
                          d="M3.5 6V4.5a2.5 2.5 0 0 1 5 0V6"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </NdaDot>
                  )}
                </ProjectNavItem>
              ))}
            </ProjectNavList>
          </ProjectNavWrap>
        </ArticleBody>
      </ContentWrap>
    </Page>
  );
}
