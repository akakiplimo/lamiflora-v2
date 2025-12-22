import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Deep Forest Green (stems/leaves)
        forest: {
          DEFAULT: '#1B4D3E',
          50: '#E8F5F0',
          100: '#D1EBE1',
          200: '#A3D7C3',
          300: '#75C3A5',
          400: '#47AF87',
          500: '#2D8B68',
          600: '#236B50',
          700: '#1B4D3E',
          800: '#133A2E',
          900: '#0B271E',
          950: '#051410',
        },
        // Secondary - Rose Pink (flowers)
        rose: {
          DEFAULT: '#C41E3A',
          50: '#FDF2F4',
          100: '#FCE7EB',
          200: '#F9CFD7',
          300: '#F4A7B5',
          400: '#ED7489',
          500: '#E24563',
          600: '#C41E3A',
          700: '#A51B32',
          800: '#89192B',
          900: '#751A29',
          950: '#410912',
        },
        // Accent - Soft Peach/Coral (petals)
        peach: {
          DEFAULT: '#FFAA8A',
          50: '#FFF8F5',
          100: '#FFEEE7',
          200: '#FFDDD0',
          300: '#FFCBB8',
          400: '#FFBAA1',
          500: '#FFAA8A',
          600: '#FF8A62',
          700: '#FF6A3A',
          800: '#FF4A12',
          900: '#E03A00',
          950: '#A82B00',
        },
        // Lavender accent
        lavender: {
          DEFAULT: '#9B7BB8',
          50: '#F8F5FB',
          100: '#F1EBF7',
          200: '#E3D7EF',
          300: '#D0BCE3',
          400: '#B99BD4',
          500: '#9B7BB8',
          600: '#7E5A9E',
          700: '#634780',
          800: '#4B3661',
          900: '#352646',
          950: '#1E1528',
        },
        // Warm Gold (sunlight/premium)
        gold: {
          DEFAULT: '#D4A84B',
          50: '#FCF9F0',
          100: '#F9F2DC',
          200: '#F2E3B8',
          300: '#EBCF8A',
          400: '#E2B85C',
          500: '#D4A84B',
          600: '#B8883A',
          700: '#8F6A2E',
          800: '#6B5024',
          900: '#4C391A',
          950: '#2D210F',
        },
        // Cream background
        cream: {
          DEFAULT: '#FDF8F3',
          50: '#FFFFFF',
          100: '#FDF8F3',
          200: '#F9EFE4',
          300: '#F5E6D5',
          400: '#F1DDC6',
          500: '#EDD4B7',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Lato', 'system-ui', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'floral-pattern': "url('/images/floral-pattern.svg')",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        sway: 'sway 4s ease-in-out infinite',
        bloom: 'bloom 0.8s ease-out forwards',
        'petal-fall': 'petalFall 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        bloom: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-10px) rotate(0deg)', opacity: '1' },
          '100%': {
            transform: 'translateY(100vh) rotate(720deg)',
            opacity: '0',
          },
        },
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.06)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.1)',
        strong: '0 15px 50px rgba(0, 0, 0, 0.12)',
        rose: '0 4px 20px rgba(196, 30, 58, 0.2)',
        petal: '0 8px 32px rgba(255, 170, 138, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
