# Category Icons Usage Guide

## Available Icons

All icons are designed with motorcycle parts in mind, following the Phosphor icon design system with 64×64 viewBox and 2.5px stroke weight.

---

## Main Category Icons

### 1. Engine Parts
```tsx
import { EngineIcon } from "@/components/CategoryIcons";

<EngineIcon className="h-6 w-6 text-primary" />
```
**Use for:** Pistons, cylinder heads, crankshafts, camshafts, valves, gaskets, engine covers

### 2. Exhaust Systems
```tsx
import { ExhaustIcon } from "@/components/CategoryIcons";

<ExhaustIcon className="h-6 w-6 text-primary" />
```
**Use for:** Full exhaust systems, slip-ons, headers, mufflers, heat shields, exhaust hangers

### 3. Carbon Bodywork
```tsx
import { BodyworkIcon } from "@/components/CategoryIcons";

<BodyworkIcon className="h-6 w-6 text-primary" />
```
**Use for:** Fairings, fenders, fuel tanks, seat cowls, side panels, windscreens, carbon fiber parts

### 4. Brake Systems
```tsx
import { BrakesIcon } from "@/components/CategoryIcons";

<BrakesIcon className="h-6 w-6 text-primary" />
```
**Use for:** Brake calipers, brake rotors/discs, brake pads, brake lines, master cylinders

### 5. Suspension Components
```tsx
import { SuspensionIcon } from "@/components/CategoryIcons";

<SuspensionIcon className="h-6 w-6 text-primary" />
```
**Use for:** Rear shocks, fork springs, dampers, suspension linkages, preload adjusters

### 6. Electrical & ECU
```tsx
import { EcuIcon } from "@/components/CategoryIcons";

<EcuIcon className="h-6 w-6 text-primary" />
```
**Use for:** ECU units, wiring harnesses, sensors, ignition coils, spark plugs, batteries

---

## Subcategory Icons (New)

### 7. Wheels
```tsx
import { WheelIcon } from "@/components/CategoryIcons";

<WheelIcon className="h-6 w-6 text-black" />
```
**Use for:** Front wheels, rear wheels, wheel bearings, wheel spacers, axles, spoke wheels, cast wheels

**Visual:** 5-spoke design with hub and rim detail

---

### 8. Tires
```tsx
import { TireIcon } from "@/components/CategoryIcons";

<TireIcon className="h-6 w-6 text-black" />
```
**Use for:** Front tires, rear tires, tire warmers, tire pressure monitors, valve stems, tire repair kits

**Visual:** Tire with radial tread pattern and sidewall detail

---

### 9. Chain & Sprockets
```tsx
import { ChainIcon } from "@/components/CategoryIcons";

<ChainIcon className="h-6 w-6 text-black" />
```
**Use for:** Drive chains, front sprockets, rear sprockets, chain adjusters, chain guards, chain lubrication

**Visual:** Front and rear sprocket with chain links

---

### 10. Clutch Components
```tsx
import { ClutchIcon } from "@/components/CategoryIcons";

<ClutchIcon className="h-6 w-6 text-black" />
```
**Use for:** Clutch plates, clutch baskets, clutch springs, clutch covers, slave cylinders, clutch cables

**Visual:** Clutch basket with pressure plate and spring positions

---

### 11. Front Forks
```tsx
import { ForkIcon } from "@/components/CategoryIcons";

<ForkIcon className="h-6 w-6 text-black" />
```
**Use for:** Front forks, fork seals, fork oil, triple clamps, fork tubes, fork guards, steering dampers

**Visual:** Dual fork tubes with triple clamp and axle mount

---

### 12. Handlebars & Controls
```tsx
import { HandlebarIcon } from "@/components/CategoryIcons";

<HandlebarIcon className="h-6 w-6 text-black" />
```
**Use for:** Handlebars, bar ends, grips, levers (brake/clutch), bar risers, clip-ons, switches

**Visual:** Curved handlebar with center mount and control levers

---

### 13. Lighting
```tsx
import { LightingIcon } from "@/components/CategoryIcons";

<LightingIcon className="h-6 w-6 text-black" />
```
**Use for:** Headlights, tail lights, turn signals, LED strips, license plate lights, bulbs, light brackets

**Visual:** Headlight housing with beam projection lines

---

### 14. Mirrors
```tsx
import { MirrorIcon } from "@/components/CategoryIcons";

<MirrorIcon className="h-6 w-6 text-black" />
```
**Use for:** Side mirrors, bar-end mirrors, mirror extenders, mirror glass, mirror adapters

**Visual:** Elliptical mirror with adjustable stem and ball joint

---

### 15. Seats & Comfort
```tsx
import { SeatIcon } from "@/components/CategoryIcons";

<SeatIcon className="h-6 w-6 text-black" />
```
**Use for:** Seats, seat cowls, gel pads, seat covers, passenger seats, comfort modifications

**Visual:** Contoured seat with stitching detail and mounting brackets

---

## Usage Examples

### Category Grid
```tsx
const CATEGORIES = [
  { name: "Wheels", icon: WheelIcon, count: 45 },
  { name: "Tires", icon: TireIcon, count: 67 },
  { name: "Chain & Sprockets", icon: ChainIcon, count: 34 },
  { name: "Clutch", icon: ClutchIcon, count: 28 },
  { name: "Forks", icon: ForkIcon, count: 19 },
  { name: "Handlebars", icon: HandlebarIcon, count: 56 },
  { name: "Lighting", icon: LightingIcon, count: 42 },
  { name: "Mirrors", icon: MirrorIcon, count: 23 },
  { name: "Seats", icon: SeatIcon, count: 31 },
];

{CATEGORIES.map((cat, idx) => {
  const IconComponent = cat.icon;
  return (
    <button key={idx} className="flex flex-col items-center p-4">
      <IconComponent className="h-8 w-8 text-primary" />
      <span>{cat.name}</span>
    </button>
  );
})}
```

### Product Card Icon Indicator
```tsx
import { WheelIcon } from "@/components/CategoryIcons";

<div className="product-card">
  <div className="category-badge">
    <WheelIcon className="h-5 w-5 text-red-600" />
    <span>Wheels</span>
  </div>
  {/* product content */}
</div>
```

### Navigation Menu
```tsx
<nav>
  <MenuItem icon={EngineIcon} label="Engine Parts" />
  <MenuItem icon={WheelIcon} label="Wheels" />
  <MenuItem icon={TireIcon} label="Tires" />
  <MenuItem icon={ChainIcon} label="Drivetrain" />
</nav>
```

---

## Styling Guidelines

### Size Classes
```tsx
// Small (navigation, badges)
className="h-4 w-4"

// Medium (category cards)
className="h-6 w-6"

// Large (hero sections, featured)
className="h-8 w-8"

// Extra Large (decorative)
className="h-12 w-12"
```

### Color Variations
```tsx
// Primary red (CTAs, highlights)
className="text-primary"  // #DC2626

// Black (default, navigation)
className="text-black"

// Gray (inactive, secondary)
className="text-zinc-500"

// White (on dark backgrounds)
className="text-white"
```

### Background Variations
```tsx
// Primary background with white icon
<div className="bg-primary text-white p-3 rounded-lg">
  <WheelIcon className="h-6 w-6" />
</div>

// Light background with primary icon
<div className="bg-red-50 text-primary p-3 rounded-lg">
  <WheelIcon className="h-6 w-6" />
</div>

// Outline style
<div className="border-2 border-primary text-primary p-3 rounded-lg">
  <WheelIcon className="h-6 w-6" />
</div>
```

### Hover States
```tsx
<button className="group">
  <div className="text-zinc-600 group-hover:text-primary transition">
    <WheelIcon className="h-6 w-6" />
  </div>
</button>
```

---

## Icon Selection Guide

### By Part Type

| Part Category | Recommended Icon |
|--------------|------------------|
| **Wheels & Hubs** | `WheelIcon` |
| **Tires & Rubber** | `TireIcon` |
| **Chain/Sprocket/Belt** | `ChainIcon` |
| **Clutch Parts** | `ClutchIcon` |
| **Front Suspension** | `ForkIcon` |
| **Rear Suspension** | `SuspensionIcon` |
| **Brake Components** | `BrakesIcon` |
| **Engine Internals** | `EngineIcon` |
| **Exhaust Systems** | `ExhaustIcon` |
| **Bodywork/Fairings** | `BodyworkIcon` |
| **Bars/Grips/Levers** | `HandlebarIcon` |
| **Lights & Bulbs** | `LightingIcon` |
| **Mirrors** | `MirrorIcon` |
| **Seats & Pads** | `SeatIcon` |
| **ECU/Wiring/Electronics** | `EcuIcon` |

---

## Accessibility

All icons are designed to be accessible:

1. **Use with labels**: Always pair icons with text labels for clarity
```tsx
<button aria-label="View wheel products">
  <WheelIcon className="h-6 w-6" />
  <span>Wheels</span>
</button>
```

2. **ARIA attributes**: For icon-only buttons
```tsx
<button aria-label="Filter by tires">
  <TireIcon className="h-6 w-6" />
</button>
```

3. **Color contrast**: Ensure sufficient contrast (WCAG AA minimum)
- Black on white: ✅ AAA (21:1)
- Red (#DC2626) on white: ✅ AA (5.6:1)
- Gray on white: Check specific shade

4. **Size**: Minimum 16×16px for visibility

---

## Animation Examples

### Hover Scale
```tsx
<WheelIcon className="h-6 w-6 transition-transform hover:scale-110" />
```

### Rotate on Hover
```tsx
<WheelIcon className="h-6 w-6 transition-transform hover:rotate-45" />
```

### Pulse Animation
```tsx
<WheelIcon className="h-6 w-6 animate-pulse" />
```

### Color Transition
```tsx
<WheelIcon className="h-6 w-6 text-zinc-500 hover:text-primary transition-colors duration-200" />
```

---

## Best Practices

1. **Consistency**: Use the same icon for the same category throughout the site
2. **Context**: Icons should make sense without labels but work better with them
3. **Size**: Don't scale icons below 16px (readability)
4. **Color**: Use theme colors (red/black/white) for brand consistency
5. **Spacing**: Add padding around icons for comfortable touch targets (min 44×44px)
6. **Weight**: All icons use 2.5px stroke - don't mix with other weights
7. **Alignment**: Center-align icons with text for visual balance
8. **Loading**: Show skeleton or placeholder while icons load

---

## Common Patterns

### Category Card Pattern
```tsx
<button className="group flex flex-col items-center p-6 border rounded-lg hover:border-primary">
  <div className="p-3 rounded-lg bg-white group-hover:bg-red-50 transition">
    <WheelIcon className="h-7 w-7 text-zinc-600 group-hover:text-primary transition" />
  </div>
  <h3 className="text-xs font-bold uppercase mt-3">Wheels</h3>
  <span className="text-[10px] text-zinc-500 mt-1">45 items</span>
</button>
```

### Breadcrumb Pattern
```tsx
<nav className="flex items-center gap-2 text-sm">
  <EngineIcon className="h-4 w-4 text-zinc-400" />
  <span>Engine Parts</span>
  <ChevronRight className="h-4 w-4 text-zinc-400" />
  <span className="font-bold">Pistons</span>
</nav>
```

### Filter Chip Pattern
```tsx
<button className="inline-flex items-center gap-2 px-3 py-1.5 border rounded-full">
  <TireIcon className="h-4 w-4" />
  <span className="text-xs font-semibold">Tires</span>
  <X className="h-3 w-3" />
</button>
```

---

## Testing Checklist

- [ ] Icons render at all breakpoints (mobile, tablet, desktop)
- [ ] Icons maintain aspect ratio when scaled
- [ ] Hover states work as expected
- [ ] Color contrast meets WCAG AA standards
- [ ] Icons are recognizable at small sizes (16px)
- [ ] Touch targets are large enough (44×44px minimum)
- [ ] Icons work with screen readers (proper labels)
- [ ] Icons match theme colors (red/black/white)
- [ ] No console errors or warnings
- [ ] Icons load quickly (no layout shift)

---

## Support

For questions or issues with the icon system:
1. Check this guide for usage examples
2. Review `CategoryIcons.tsx` source code
3. Verify icon is imported correctly
4. Check Tailwind classes are being applied
5. Inspect element in browser dev tools

All icons are SVG-based and scalable without quality loss. They're optimized for web performance and designed to work seamlessly with the Aprilia Parts theme.
