"use client";

import styled from "styled-components";
import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";
import type { ProjectData } from "@/lib/projects";
import projects from "@/lib/projects";

// ─── Layout ────────────────────────────────────────────────────────────────

const Page = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  min-height: 100vh;
`;

const ContentWrap = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 24px;
`;

// ─── Back link ─────────────────────────────────────────────────────────────

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

// ─── Header ─────────────────────────────────────────────────────────────────

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

// ─── Hero image ─────────────────────────────────────────────────────────────

const HeroImageWrap = styled.div`
  margin-top: 48px;
  border-radius: 24px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.border};
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

// ─── Article body ───────────────────────────────────────────────────────────

const ArticleBody = styled.div`
  padding-top: 64px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

// ─── Problem Statement + sidebar ─────────────────────────────────────────────

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

// ─── Tasks / Results shared list ─────────────────────────────────────────────

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

// ─── Stats strip ─────────────────────────────────────────────────────────────

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

// ─── Process sections ────────────────────────────────────────────────────────

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

// ─── Project nav strip ───────────────────────────────────────────────────────

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

// ─── Reveal wrapper ──────────────────────────────────────────────────────────

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

// ─── Component ───────────────────────────────────────────────────────────────

export default function ProjectDetail({ project }: { project: ProjectData }) {
  const useGrid = (section: (typeof project.sections)[0]) =>
    section.figures.length > 1 && !section.stack;

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
          <HeroImageWrap>
            <img src={project.heroImage} alt={`${project.title} hero`} />
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

          {/* Tasks */}
          {project.tasks && project.tasks.length > 0 && (
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

          {/* Results */}
          {project.results && project.results.length > 0 && (
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
          )}

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

          {/* Named sections */}
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
