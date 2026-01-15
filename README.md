# EDGE Frontend

A cinematic, scroll-based narrative interface that visualizes the journey from burnout to clarity using controlled illumination and organic motion.

## Vision

> *From fragile persistence to full cognitive clarity*

EDGE models burnout as a gradual process. The UI mirrors that progression—from darkness and low light to full clarity—using a candle metaphor and scroll-based transitions.

## Features

- **Shader-Based Flame**: WebGL candle with organic distortion (no repetitive loops)
- **Scroll Narrative**: Background brightness tied to scroll depth
- **Accessibility First**: Reduced motion fallback, static SVG flame, WCAG compliance
- **Cinematic Typography**: Playfair Display × Inter × JetBrains Mono
- **Intentional Color**: Dark → warm → bright progression

## Tech Stack

- **React** (Vite)
- **Tailwind CSS** (custom EDGE theme)
- **Framer Motion** (scroll animations)
- **Three.js** via `@react-three/fiber` (minimal WebGL for flame)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens at `http://localhost:3000`

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Candle/
│   │   ├── Candle.jsx       # Main candle component
│   │   ├── Flame.jsx         # WebGL shader flame
│   │   └── glow.css          # Glow effects
│   ├── Navbar.jsx            # Scroll-reactive navbar
│   └── FeatureCard.jsx       # Reusable feature cards
│
├── sections/
│   ├── Hero.jsx              # Landing with candle
│   ├── Accumulation.jsx      # Cognitive load intro
│   ├── Detection.jsx         # Early warning signals
│   ├── Recovery.jsx          # Intervention calibration
│   └── Clarity.jsx           # System architecture + footer
│
├── styles/
│   └── theme.css             # Global styles + accessibility
│
└── App.jsx                   # Main scroll container
```

## Design Philosophy

### Color System

- **Dark**: `#0E0F13` → `#16181D` (hero, early sections)
- **Warm Accent**: `#F6B26B` → `#E69138` → `#B45F06` (flame only)
- **Clarity**: `#F4F1EC` → `#FAF8F4` (final sections)

### Typography Hierarchy

- **H1 (EDGE)**: Playfair Display · 96px · +0.04em tracking
- **H2 (Sections)**: Playfair Display · 48px
- **Body**: Inter · 16-18px · 1.6 line-height
- **Metrics**: JetBrains Mono · 14-16px

### Accessibility

- Respects `prefers-reduced-motion`
- Static SVG fallback for WebGL
- WCAG AA contrast ratios maintained
- Semantic HTML throughout

## Academic Defense

> "The interface is intentionally narrative-driven. EDGE models burnout as a gradual process, so the UI mirrors that progression—from fragile persistence to clarity—using controlled illumination and scroll-based transitions."

**Why Three.js?**
> "We used a minimal WebGL layer to simulate organic flame behavior that cannot be achieved with static CSS animations."

**Why this color palette?**
> "Color hierarchy reinforces the narrative of cognitive strain resolving into clarity."

## License

Built with intention for the EDGE project.

---

**Note**: This is frontend only. Backend integration and dashboard components are separate modules.
