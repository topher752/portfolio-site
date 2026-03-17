"use client";

import styled from "styled-components";
import MailIcon from "@/assets/MailIcon.svg";
import GithubIcon from "@/assets/GithubIcon.svg";
import LinkedInIcon from "@/assets/LinkedInIcon.svg";

const FooterEl = styled.footer`
  background: ${({ theme }) => theme.colors.bgFooter};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 80px 24px 48px;
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Heading = styled.h2`
  font-size: 30px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDark};
  letter-spacing: 0.4px;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 48px;
  padding: 0 24px;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.textDark};
  color: #fdfbf7;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.31px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  img {
    width: 20px;
    height: 20px;
    display: block;
  }
`;

const IconBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.pillBorder};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  svg {
    display: block;
  }
`;

const Copyright = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textFaint};
  letter-spacing: -0.15px;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterEl>
      <Inner>
        <Heading>Let&apos;s get connected.</Heading>
        <Buttons>
          <PrimaryBtn href="mailto:ctate752@gmail.com">
            <img src={MailIcon.src} alt="" />
            Say Hello
          </PrimaryBtn>
          <IconBtn
            href="https://www.linkedin.com/in/christophertate752/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={LinkedInIcon.src} alt="LinkedIn" />
          </IconBtn>
          <IconBtn
            href="https://github.com/topher752"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={GithubIcon.src} alt="Github" />
          </IconBtn>
        </Buttons>
        <Copyright>© 2026 Christopher Tate. All rights reserved.</Copyright>
      </Inner>
    </FooterEl>
  );
}
