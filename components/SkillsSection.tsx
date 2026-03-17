'use client';

import styled from 'styled-components';
import { useScrollReveal } from '@/lib/useScrollReveal';

const skills = [
  'Figma', 'Adobe Xd', 'Photoshop', 'Illustrator', 'Premiere Pro',
  'React', 'Typescript', 'HTML', 'CSS', 'Jira', 'Confluence',
];

const Section = styled.section`
  padding: 0 24px 120px;
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

const PillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.pillBg};
  border: 1px solid ${({ theme }) => theme.colors.pillBorder};
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.pillText};
  letter-spacing: -0.15px;
  white-space: nowrap;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.border};
  }
`;

const RevealWrapper = styled.div`
  &.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
  &.reveal.is-visible { opacity: 1; transform: translateY(0); }
`;

export default function SkillsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const pillsRef = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <Section>
      <RevealWrapper ref={headerRef} className="reveal">
        <SectionHeader>
          <SectionTitle>Skills &amp; Tools</SectionTitle>
        </SectionHeader>
      </RevealWrapper>
      <RevealWrapper ref={pillsRef} className="reveal" style={{ transitionDelay: '0.1s' }}>
        <PillsGrid>
          {skills.map((skill) => (
            <Pill key={skill}>{skill}</Pill>
          ))}
        </PillsGrid>
      </RevealWrapper>
    </Section>
  );
}
