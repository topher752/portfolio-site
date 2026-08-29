export const theme = {
  colors: {
    bg: '#fdfbf7',
    bgMuted: '#faf7f2',
    bgFooter: '#faf7f2',
    textDark: '#2d2d2d',
    textMid: '#5c5c5c',
    textMuted: '#6b6357',
    textFaint: '#746d63',
    textAccent: '#766d60',
    border: '#f0ebe1',
    /* Meets WCAG 1.4.11 (3:1) — for borders that are the sole visual
       boundary of an interactive control. */
    borderStrong: '#948b76',
    pillBorder: '#e2d9c8',
    pillBg: '#faf7f2',
    pillText: '#4a4a4a',
    white: '#ffffff',
    navBg: 'rgba(253, 251, 247, 0.8)',
    focusRing: '#2d2d2d',
  },
  fonts: {
    sans: "var(--font-inter), sans-serif",
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '20px',
    xl: '24px',
    '2xl': '30px',
    '3xl': '60px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '80px',
  },
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
  },
  maxWidth: '1024px',
  navHeight: '80px',
};

export type Theme = typeof theme;
