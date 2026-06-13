"use client";

import { useCallback, useRef, useState } from "react";
import styled from "styled-components";

export type ZoomFn = (src: string, alt?: string) => void;

type ZoomImgProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  onZoom?: ZoomFn;
};

export function ZoomImg({ onZoom, style, src, alt, ...rest }: ZoomImgProps) {
  const handleClick = () => {
    if (onZoom && typeof src === "string") onZoom(src, alt);
  };
  return (
    <img
      {...rest}
      src={src}
      alt={alt}
      onClick={onZoom ? handleClick : rest.onClick}
      style={{ cursor: onZoom ? "zoom-in" : undefined, ...style }}
    />
  );
}

const LightboxDialog = styled.dialog`
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  inset: 0;
  overflow: hidden;
  color: #fff;

  &::backdrop {
    background: rgba(0, 0, 0, 0.88);
    backdrop-filter: blur(4px);
  }

  &[open] {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const LightboxInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
  cursor: zoom-out;

  @media (max-width: 640px) {
    padding: 16px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
    cursor: default;
  }
`;

const LightboxClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: background 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.22);
  }
`;

export function useLightbox() {
  const ref = useRef<HTMLDialogElement>(null);
  const [image, setImage] = useState<{ src: string; alt: string } | null>(null);

  const open: ZoomFn = useCallback((src, alt) => {
    setImage({ src, alt: alt ?? "" });
    ref.current?.showModal();
  }, []);

  const close = useCallback(() => {
    ref.current?.close();
  }, []);

  const handleClose = useCallback(() => {
    setImage(null);
  }, []);

  const element = (
    <LightboxDialog ref={ref} onClose={handleClose}>
      {image && (
        <LightboxInner onClick={close}>
          <img
            src={image.src}
            alt={image.alt}
            onClick={(e) => e.stopPropagation()}
          />
          <LightboxClose
            type="button"
            onClick={close}
            aria-label="Close image"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 4l8 8M12 4l-8 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </LightboxClose>
        </LightboxInner>
      )}
    </LightboxDialog>
  );

  return { open, element };
}
