'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 100;
  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(253, 251, 247, 0.95)' : 'rgba(253, 251, 247, 0.8)'};
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: background 0.3s ease;
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDark};
  letter-spacing: -0.95px;
  white-space: nowrap;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const NavLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMid};
  letter-spacing: -0.15px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.textDark};
  }
`;

const NavLinkAnchor = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMid};
  letter-spacing: -0.15px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.textDark};
  }
`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Nav $scrolled={scrolled}>
      <Inner>
        <Logo href="/">Christopher Tate.</Logo>
        <NavLinks>
          <NavLink onClick={() => scrollToSection('work')}>Work</NavLink>
          <NavLinkAnchor href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</NavLinkAnchor>
        </NavLinks>
      </Inner>
    </Nav>
  );
}
