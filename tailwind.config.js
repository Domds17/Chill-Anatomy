import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        border: 'hsl(var(--border))',
        brown: {
          900: 'var(--brown-900)',
          800: 'var(--brown-800)',
          700: 'var(--brown-700)',
          600: 'var(--brown-600)',
          300: 'var(--brown-300)',
          200: 'var(--brown-200)',
          100: 'var(--brown-100)',
        },
      },
      boxShadow: {
        'elevation-1': '0 2px 4px rgba(0,0,0,0.06)',
        'elevation-2': '0 4px 8px rgba(0,0,0,0.10)',
        'elevation-3': '0 8px 16px rgba(0,0,0,0.15)',
        'elevation-4': '0 12px 24px rgba(0,0,0,0.20)',
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.4s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
