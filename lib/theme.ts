export const theme = {
  colors: {
    bg: '#fdfbf7',
    bgMuted: '#faf7f2',
    bgFooter: '#faf7f2',
    textDark: '#2d2d2d',
    textMid: '#6b6b6b',
    textMuted: '#8c8273',
    textFaint: '#a39d93',
    textAccent: '#a59d91',
    border: '#f0ebe1',
    pillBorder: '#e2d9c8',
    pillBg: '#faf7f2',
    pillText: '#4a4a4a',
    white: '#ffffff',
    navBg: 'rgba(253, 251, 247, 0.8)',
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
