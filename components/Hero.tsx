'use client';

import styled, { keyframes } from 'styled-components';
import Profile from "@/assets/Profile.png"

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  padding-top: calc(80px + 112px);
  padding-bottom: 80px;
  padding-left: 24px;
  padding-right: 24px;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: calc(80px + 60px);
    padding-bottom: 48px;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  min-width: 0;
`;

const Eyebrow = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.2px;
  text-transform: uppercase;
  margin-bottom: 36px;
  animation: ${fadeUp} 0.7s ease both;
  animation-delay: 0.1s;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 20px;
  }
`;

const Headline = styled.h1`
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textDark};
  letter-spacing: 0.26px;
  line-height: 1.1;
  margin-bottom: 32px;
  animation: ${fadeUp} 0.7s ease both;
  animation-delay: 0.2s;
  max-width: 700px;
`;

const AccentWord = styled.span`
  color: ${({ theme }) => theme.colors.textAccent};
`;

const Subline = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.textMid};
  letter-spacing: -0.45px;
  line-height: 1.625;
  max-width: 580px;
  animation: ${fadeUp} 0.7s ease both;
  animation-delay: 0.35s;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 17px;
  }
`;

const Avatar = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  animation: ${fadeUp} 0.7s ease both;
  animation-delay: 0.15s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 120px;
    height: 120px;
  }
`;

export default function Hero() {
  return (
    <Section>
      <Inner>
        <TextBlock>
          <Eyebrow>Hi, I&apos;m Christopher Tate</Eyebrow>
          <Headline>
            Designing simple, <AccentWord>intuitive</AccentWord>, and human-centered digital experiences.
          </Headline>
          <Subline>
            I&apos;m a UX Designer focused on translating complex problems into elegant, easy-to-use interfaces.
          </Subline>
        </TextBlock>
        <Avatar>
          <img src={Profile.src} alt="Christopher Tate" />
        </Avatar>
      </Inner>
    </Section>
  );
}
