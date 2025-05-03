/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A90E2',
          dark: '#2171cd',
          light: '#82b4f0',
        },
        secondary: {
          DEFAULT: '#5DBCD2',
          dark: '#3a96ac',
          light: '#8fd2e3',
        },
        accent: {
          DEFAULT: '#F5A623',
          dark: '#d68c13',
          light: '#f8c067',
        },
        success: {
          DEFAULT: '#4CAF50',
          dark: '#3b8c3f',
          light: '#7cc47f',
        },
        warning: {
          DEFAULT: '#FF9800',
          dark: '#cc7a00',
          light: '#ffb74d',
        },
        error: {
          DEFAULT: '#F44336',
          dark: '#d32f2f',
          light: '#f88078',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};