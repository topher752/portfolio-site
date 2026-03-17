'use client';

import styled from 'styled-components';
import Link from 'next/link';

const LOCK_ICON = 'https://www.figma.com/api/mcp/asset/f7512a09-7e99-498a-9616-2e3fd82a7d8e';
const ARROW_ICON = 'https://www.figma.com/api/mcp/asset/4a75f4c8-8d06-4baf-9dc1-fb72d49b5406';

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  thumbnailBg?: string;
  thumbnailSrc?: string;
  linkText?: string;
  linkHref?: string;
  isNda?: boolean;
  slug?: string;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const Thumbnail = styled.div<{ $accentColor: string; $bg?: string }>`
  height: 180px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  background-color: ${({ $accentColor }) => $accentColor};
  box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1);
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  }
`;

const ThumbnailImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
`;

const ThumbnailCustom = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NdaBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,0.9);
  border: 1px solid ${({ theme }) => theme.colors.pillBorder};
  border-radius: 9999px;
  padding: 12px 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

const NdaIcon = styled.img`
  width: 16px;
  height: 16px;
  display: block;
`;

const NdaText = styled.span`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.pillText};
`;

const Info = styled.div`
  padding-top: 20px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 6px;
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDark};
  letter-spacing: 0.07px;
  line-height: 1.33;
`;

const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: -0.15px;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMid};
  line-height: 1.625;
  letter-spacing: -0.3px;
  margin-bottom: 18px;
`;

const CardLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDark};
  letter-spacing: -0.15px;
  transition: opacity 0.2s ease;

  &:hover { opacity: 0.6; }

  img {
    width: 15px;
    height: 15px;
    display: block;
  }
`;

const UnavailableText = styled.span`
  font-size: 14px;
  font-style: italic;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDark};
  letter-spacing: -0.15px;
`;

export default function ProjectCard({
  title,
  subtitle,
  description,
  accentColor,
  thumbnailSrc,
  linkText,
  linkHref,
  isNda,
  slug,
}: ProjectCardProps) {
  const thumbnailContent = (
    <>
      {thumbnailSrc && <ThumbnailImg src={thumbnailSrc} alt="" />}
      {isNda && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(253,251,247,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <NdaBadge>
            <NdaIcon src={LOCK_ICON} alt="" />
            <NdaText>NDA Protected</NdaText>
          </NdaBadge>
        </div>
      )}
      {!thumbnailSrc && !isNda && <ThumbnailCustom />}
    </>
  );

  return (
    <Card>
      <Thumbnail $accentColor={accentColor}>
        {thumbnailContent}
      </Thumbnail>
      <Info>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
        {isNda ? (
          <UnavailableText>Unavailable to View</UnavailableText>
        ) : linkHref && linkText ? (
          <CardLink href={linkHref}>
            {linkText}
            <img src={ARROW_ICON} alt="" />
          </CardLink>
        ) : null}
      </Info>
    </Card>
  );
}
