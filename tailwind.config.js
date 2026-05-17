

export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        popover: 'var(--popover)',
        'popover-foreground': 'var(--popover-foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        'chart-1': 'var(--chart-1)',
        'chart-2': 'var(--chart-2)',
        'chart-3': 'var(--chart-3)',
        'chart-4': 'var(--chart-4)',
        'chart-5': 'var(--chart-5)',
        sidebar: 'var(--sidebar)',
        'sidebar-foreground': 'var(--sidebar-foreground)',
        'sidebar-primary': 'var(--sidebar-primary)',
        'sidebar-primary-foreground': 'var(--sidebar-primary-foreground)',
        'sidebar-accent': 'var(--sidebar-accent)',
        'sidebar-accent-foreground': 'var(--sidebar-accent-foreground)',
        'sidebar-border': 'var(--sidebar-border)',
        'sidebar-ring': 'var(--sidebar-ring)',
        'destructive-foreground': 'var(--destructive-foreground)',
        // Vibrant warm accents
        'warm-orange': '#fb923c',
        'warm-gold': '#fbbf24',
        'warm-coral': '#f87171',
        'warm-pink': '#ec4899',
        'cool-violet': '#a78bfa',
        'cool-cyan': '#22d3ee',
        'cool-emerald': '#34d399',
        'deep-navy': '#1e1b4b',
        'deep-charcoal': '#1f2937',
      },
      fontFamily: {
        heading: ['Geist', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace']
      },
      boxShadow: {
        'glow-orange': '0 0 25px rgba(251, 146, 60, 0.45), 0 0 50px rgba(251, 146, 60, 0.15)',
        'glow-gold': '0 0 25px rgba(251, 191, 36, 0.45), 0 0 50px rgba(251, 191, 36, 0.15)',
        'glow-coral': '0 0 25px rgba(248, 113, 113, 0.45), 0 0 50px rgba(248, 113, 113, 0.15)',
        'glow-violet': '0 0 25px rgba(167, 139, 250, 0.45), 0 0 50px rgba(167, 139, 250, 0.15)',
        'glow-cyan': '0 0 25px rgba(34, 211, 238, 0.45), 0 0 50px rgba(34, 211, 238, 0.15)',
        'glow-emerald': '0 0 25px rgba(52, 211, 153, 0.45), 0 0 50px rgba(52, 211, 153, 0.15)',
      },
    }
  }
}

