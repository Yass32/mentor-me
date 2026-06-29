/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'surface-container-highest': '#e4e1ee',
        'error-container': '#ffdad6',
        'on-tertiary-container': '#ffd2be',
        'surface-container-high': '#eae6f4',
        'surface-container': '#f0ecf9',
        'surface-tint': '#4d44e3',
        'surface-container-low': '#f5f2ff',
        'outline': '#777587',
        'surface-bright': '#fcf8ff',
        'inverse-surface': '#302f39',
        'on-primary-fixed-variant': '#3323cc',
        'on-primary-container': '#dad7ff',
        'on-primary-fixed': '#0f0069',
        'surface-dim': '#dcd8e5',
        'tertiary-container': '#a44100',
        'secondary-container': '#dce2f3',
        'on-error': '#ffffff',
        'on-background': '#1b1b24',
        'primary': '#3525cd',
        'surface-variant': '#e4e1ee',
        'tertiary': '#7e3000',
        'on-secondary-container': '#5e6572',
        'primary-fixed-dim': '#c3c0ff',
        'on-tertiary-fixed': '#351000',
        'outline-variant': '#c7c4d8',
        'secondary-fixed': '#dce2f3',
        'primary-container': '#4f46e5',
        'on-surface-variant': '#464555',
        'inverse-on-surface': '#f3effc',
        'on-error-container': '#93000a',
        'surface-container-lowest': '#ffffff',
        'on-primary': '#ffffff',
        'surface': '#fcf8ff',
        'on-secondary-fixed-variant': '#404754',
        'on-tertiary': '#ffffff',
        'on-tertiary-fixed-variant': '#7b2f00',
        'on-secondary': '#ffffff',
        'background': '#fcf8ff',
        'error': '#ba1a1a',
        'secondary': '#585f6c',
        'tertiary-fixed-dim': '#ffb695',
        'secondary-fixed-dim': '#c0c7d6',
        'primary-fixed': '#e2dfff',
        'on-secondary-fixed': '#151c27',
        'inverse-primary': '#c3c0ff',
        'on-surface': '#1b1b24',
        'tertiary-fixed': '#ffdbcc',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      spacing: {
        md: '16px',
        lg: '24px',
        'container-max': '1280px',
        gutter: '16px',
        base: '4px',
        sm: '8px',
        xs: '4px',
        xl: '32px',
      },
      maxWidth: {
        'container-max': '1280px',
      },
      fontFamily: {
        'page-title': ['Inter', 'sans-serif'],
        'section-heading': ['Inter', 'sans-serif'],
        'card-title': ['Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'muted': ['Inter', 'sans-serif'],
        'label': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'page-title': ['30px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'section-heading': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'card-title': ['16px', { lineHeight: '1.5', fontWeight: '600' }],
        'body': ['15px', { lineHeight: '1.6', fontWeight: '400' }],
        'muted': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'label': ['12px', { lineHeight: '1.0', letterSpacing: '0.05em', fontWeight: '500' }],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(79, 70, 229, 0.15)' },
          '50%': { 'box-shadow': '0 0 40px rgba(79, 70, 229, 0.3)' },
        },
        'shimmer-btn': {
          '0%': { 'background-position': '-200% 0' },
          '100%': { 'background-position': '200% 0' },
        },
        'border-glow': {
          '0%, 100%': { 'border-color': 'rgba(79, 70, 229, 0.2)' },
          '50%': { 'border-color': 'rgba(79, 70, 229, 0.5)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-down': 'fade-in-down 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slide-in-right 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-left': 'slide-in-left 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'shimmer-btn': 'shimmer-btn 2s linear infinite',
        'border-glow': 'border-glow 3s ease-in-out infinite',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(79, 70, 229, 0.2), 0 0 60px rgba(79, 70, 229, 0.1)',
        'glow-soft': '0 0 15px rgba(79, 70, 229, 0.1)',
        'card-elevated': '0 4px 6px -1px rgba(0,0,0,0.05), 0 10px 15px -3px rgba(0,0,0,0.08)',
        'card-float': '0 20px 40px -12px rgba(0,0,0,0.12)',
      },
      transitionTimingFunction: {
        'bounce-sm': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const delays = {};
      for (let i = 1; i <= 8; i++) {
        delays[`.animation-delay-${i * 100}`] = {
          'animation-delay': `${i * 100}ms`,
        };
      }
      addUtilities(delays);
      addUtilities({
        '.animation-fill-both': {
          'animation-fill-mode': 'both',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
      });
    }),
  ],
};
