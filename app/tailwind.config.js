// tailwind.config.js
module.exports = {
  content: [
    // Update content paths for Next.js v0 App Router structure
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}" // Only if you're actually using src directory
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#ff4b36',
          hover: '#ff3621',
          // Add more shades for better theme control
          light: '#ff7d6d',
          dark: '#cc3c2b'
        }
      },
      animation: {
        // Keep your existing animations
        'pulse-wave': 'pulse-wave 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-reverse-slow': 'spin 16s linear infinite reverse',
        'float': 'float 6s ease-in-out infinite',
        'quantum-pulse': 'quantum-pulse 2s ease-in-out infinite'
      },
      keyframes: {
        // Your custom keyframes are correct
        'pulse-wave': {
          '0%, 100%': { 
            transform: 'scale(1)', 
            opacity: '1' 
          },
          '50%': { 
            transform: 'scale(1.05)', 
            opacity: '0' 
          },
        },
        'float': {
          '0%, 100%': { 
            transform: 'translateY(0) rotate(0deg)' 
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(180deg)' 
          },
        },
        'quantum-pulse': {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '0.8' 
          },
          '50%': { 
            transform: 'scale(1.2)',
            opacity: '0.4' 
          }
        }
      }
    },
  },
  plugins: [
    // Add recommended plugins
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

