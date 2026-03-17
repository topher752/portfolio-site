'use client';

import styled from 'styled-components';
import { useScrollReveal } from '@/lib/useScrollReveal';

interface ExperienceItem {
  role: string;
  company: string;
  dates: string;
  location: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'UI/UX Designer',
    company: 'DocSpera',
    dates: 'August 2023 – Present',
    location: 'Remote',
    bullets: [
      'Designed comprehensive mockups within Figma and Adobe Xd, improving design-to-development handoff using components and agentic workflows',
      'Created and presented high fidelity mockups for mobile and web applications within medical software',
      'Collaborated and lead frontend and backend developers into deploying a full-functional application',
      'Developed Typescript-supported components and deploying NextJS applications with backend connections',
      'Provide marketing materials and designs utilizing the Adobe Suite for announcements, social media posts, and releases',
    ],
  },
  {
    role: 'UI Designer — Intern',
    company: 'Chekhub',
    dates: 'May 2022 – October 2022',
    location: 'Raleigh, NC',
    bullets: [
      'Designed user interfaces for both web and mobile platforms for business management',
      'Created marketing and supporting animations within applications and social media',
    ],
  },
];

const Section = styled.section`
  padding: 0 24px 96px;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const SectionHeader = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDark};
  letter-spacing: 0.40px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const Entry = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Role = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDark};
  letter-spacing: -0.45px;
  line-height: 1.4;
`;

const Company = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: -0.44px;
  line-height: 1.56;
`;

const DateLocation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
`;

const MetaText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textFaint};
  letter-spacing: -0.15px;
`;

const Bullets = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
`;

const Bullet = styled.li`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMid};
  line-height: 1.625;
  letter-spacing: -0.31px;
  padding-left: 8px;
  position: relative;

  &::before {
    content: '–';
    position: absolute;
    left: -10px;
    color: ${({ theme }) => theme.colors.textFaint};
  }
`;

const RevealWrapper = styled.div`
  &.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
  &.reveal.is-visible { opacity: 1; transform: translateY(0); }
`;

function RevealEntry({ children }: { children: React.ReactNode }) {
  const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
  return <RevealWrapper ref={ref} className="reveal">{children}</RevealWrapper>;
}

function RevealHeader({ children }: { children: React.ReactNode }) {
  const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  return <RevealWrapper ref={ref} className="reveal">{children}</RevealWrapper>;
}

export default function ExperienceSection() {
  return (
    <Section>
      <RevealHeader>
        <SectionHeader>
          <SectionTitle>Experience</SectionTitle>
        </SectionHeader>
      </RevealHeader>
      <List>
        {experiences.map((exp) => (
          <RevealEntry key={exp.company}>
            <Entry>
              <Meta>
                <Role>{exp.role}</Role>
                <Company>{exp.company}</Company>
                <DateLocation>
                  <MetaText>{exp.dates}</MetaText>
                  <MetaText>{exp.location}</MetaText>
                </DateLocation>
              </Meta>
              <Bullets>
                {exp.bullets.map((b, i) => (
                  <Bullet key={i}>{b}</Bullet>
                ))}
              </Bullets>
            </Entry>
          </RevealEntry>
        ))}
      </List>
    </Section>
  );
}
