'use client';

import styled from 'styled-components';

const EMAIL_ICON = 'https://www.figma.com/api/mcp/asset/19917b1a-62f7-48b2-8102-4c43a17208d0';

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
  letter-spacing: 0.40px;
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
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: opacity 0.2s ease;

  &:hover { opacity: 0.8; }

  img { width: 20px; height: 20px; display: block; }
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
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover { opacity: 0.7; }

  svg { display: block; }
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
            <img src={EMAIL_ICON} alt="" />
            Say Hello
          </PrimaryBtn>
          <IconBtn href="https://www.linkedin.com/in/christophertate752/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="#2d2d2d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="2" y="9" width="4" height="12" stroke="#2d2d2d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="4" cy="4" r="2" stroke="#2d2d2d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </IconBtn>
          <IconBtn href="https://github.com/topher752" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="#2d2d2d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </IconBtn>
        </Buttons>
        <Copyright>© 2026 Christopher Tate. All rights reserved.</Copyright>
      </Inner>
    </FooterEl>
  );
}
