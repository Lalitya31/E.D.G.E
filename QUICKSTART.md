# EDGE Frontend — Quick Start Guide

## What is Built

A complete scroll-based narrative landing page with:

✅ **Shader-based candle flame** (WebGL with organic distortion)
✅ **5 narrative sections** (Hero → Accumulation → Detection → Recovery → Clarity)
✅ **Scroll-reactive design** (background darkens → brightens as you scroll)
✅ **Full accessibility** (reduced motion support, static fallback)
✅ **Professional typography** (Playfair Display + Inter + JetBrains Mono)

---

---

## Navigation

Scroll down to see the complete narrative:

1. **Hero** — Candle in darkness with "EDGE" title
2. **Accumulation** — Feature cards emerge as background lightens
3. **Detection** — Graph visualizations and prediction trajectories
4. **Recovery** — Metrics and intervention principles
5. **Clarity** — Full brightness, system architecture, footer

---

## Key Features Implemented

### 🔥 Candle Component
- Location: `src/components/Candle/`
- WebGL shader with organic flame motion
- Glow radius increases with scroll
- Static SVG fallback for accessibility

### 🎨 Scroll-Based Color Progression
- Dark (`#0E0F13`) → Charcoal → Fog → Clarity (`#FAF8F4`)
- Controlled via Framer Motion's `useTransform`
- Smooth transitions throughout scroll depth

### 🧭 Adaptive Navbar
- Transparent at top
- Becomes solid as page brightens
- Text color inverts from light → dark
- Always readable against background

### ♿ Accessibility
- Respects `prefers-reduced-motion`
- WCAG AA contrast maintained
- Semantic HTML structure
- Keyboard navigable

---

## Project Structure

```
edge/
├── src/
│   ├── components/
│   │   ├── Candle/
│   │   │   ├── Candle.jsx      ← Main component
│   │   │   ├── Flame.jsx        ← WebGL shader
│   │   │   └── glow.css         ← Visual effects
│   │   ├── Navbar.jsx           ← Scroll-reactive nav
│   │   └── FeatureCard.jsx      ← Reusable cards
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Accumulation.jsx
│   │   ├── Detection.jsx
│   │   ├── Recovery.jsx
│   │   └── Clarity.jsx
│   │
│   ├── styles/
│   │   └── theme.css            ← Global styles
│   │
│   ├── App.jsx                  ← Main scroll container
│   └── main.jsx                 ← Entry point
│
├── tailwind.config.js           ← Custom EDGE theme
├── vite.config.js
└── package.json
```

---

## Customization Quick Reference

### Change Candle Intensity
File: `src/sections/Hero.jsx`
```jsx
const candleIntensity = useTransform(scrollProgress, [0, 0.1], [0.8, 1.0])
//                                                              ↑     ↑
//                                                           start   end
```

### Adjust Color Transitions
File: `src/App.jsx`
```jsx
const backgroundColor = useTransform(
  scrollProgress,
  [0, 0.2, 0.4, 0.6, 0.8, 1],
  ['#0E0F13', '#16181D', '#2A2D34', '#3E4148', '#F4F1EC', '#FAF8F4']
)
```

### Modify Typography Sizes
File: `tailwind.config.js`
```js
fontSize: {
  'hero': ['96px', { lineHeight: '1.1', letterSpacing: '0.04em' }],
  'section': ['48px', { lineHeight: '1.2' }],
}
```

---

## Next Steps (Optional Enhancements)

### 1. Add More Feature Content
Edit `src/sections/Accumulation.jsx` to add more cards:
```jsx
const features = [
  { title: '...', description: '...', metric: '...', metricLabel: '...' }
]
```

### 2. Create Dashboard Page
- Create `src/pages/Dashboard.jsx`
- Add routing with React Router
- Link from Clarity section CTA

### 3. Backend Integration
- Connect to your EDGE backend API
- Fetch real metrics for Detection section
- Display live burnout predictions

### 4. Mobile Optimization
- Test on mobile devices
- Adjust candle size for small screens
- Refine touch scroll experience

---

## Academic Defense Answers

**Q: Why this visual approach?**
> "The interface is intentionally narrative-driven. EDGE models burnout as a gradual process, so the UI mirrors that progression—from fragile persistence to clarity—using controlled illumination and scroll-based transitions."

**Q: Why use Three.js for the flame?**
> "We used a minimal WebGL layer to simulate organic flame behavior that cannot be achieved with static CSS animations. The shader creates non-repetitive, subtle distortion that feels alive."

**Q: How does this relate to the research?**
> "The candle metaphor represents sustained effort under cognitive load. As the page brightens, it visualizes the transition from invisible exhaustion to measurable clarity—mirroring EDGE's analytical progression."

**Q: Is it accessible?**
> "Yes. We respect `prefers-reduced-motion`, provide a static SVG fallback, maintain WCAG AA contrast ratios, and use semantic HTML throughout."

---

## Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## Support Files

- **README.md** — Full documentation
- **.gitignore** — Version control exclusions
- **.vscode/extensions.json** — Recommended VS Code extensions

---

The vision is fully implemented. Scroll, watch the flame glow intensify, and see the background transition from darkness to clarity.

Built with intention. ✨
