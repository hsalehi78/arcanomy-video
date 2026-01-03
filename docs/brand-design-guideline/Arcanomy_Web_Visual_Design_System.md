# Arcanomy Web Visual Design System v1.0
_Last updated: 2025-12-30_

This doc translates the **Brand Guidelines** into **repeatable UI rules** for arcanomy.com.

---

## 0) Principles (what we optimize for)
- **Clarity wins.** Everything should be scannable.
- **Calm confidence.** No “hyperactive SaaS” UI.
- **Mobile-first.** The phone experience is the product.
- **One job per screen.** Reduce cognitive load.

---

## 1) Layout System

### 1.1 Grid
- Mobile: 1 column, 16px padding (min), 20–24px comfortable
- Tablet: 2 columns where helpful
- Desktop: max content width 1040–1200px

### 1.2 Spacing scale (example)
Use a small fixed scale. No random gaps.

`4, 8, 12, 16, 24, 32, 48, 64`

### 1.3 Radius + shadow
- Radius: 12–16 default; 20–24 for hero cards
- Shadows: soft, subtle; never harsh or “floating toy”

---

## 2) Color Tokens (implementation)
Your CSS variables / Tailwind tokens should map 1:1 to the canonical Brand Guideline tokens.

**Canonical Palette:**
- `bg`: `#3A3A3A` (Dark void)
- `text`: `#EAEAEA` (Neutral text)
- `surface`: `#FDF5E6` (Receipt Paper)
- `primary`: `#A47864` (Anchors/Emphasis)
- `blue`: `#0056A3` (Tags)
- `success`: `#046A38`

**Rules:**
- **No component introduces new colors.** Ever.
- **Text on Surface:** When using the light `surface` background (`#FDF5E6`), you MUST use dark text (use `#3A3A3A` for text on paper).

---

## 3) Typography (implementation)
- Headings: Lora (tight leading)
- Body: Montserrat (readable leading)

### Practical rules
- Default body size: 16–18
- Minimum touch target: 44px height
- Links: visible, consistent, accessible

---

## 4) Components (canonical patterns)

### 4.1 Buttons
**Types**
- Primary (main CTA)
- Secondary (supporting)
- Ghost (low emphasis)
- Destructive (rare)

**Rules**
- One primary CTA per section (max).
- Primary CTA should be visually obvious within 1 second.

### 4.2 Cards
**Default card**
- Title (short)
- One-sentence value
- Small metadata row (optional)
- Clear click target

Avoid: cards with too many internal actions.

### 4.3 Forms
- Labels always visible (no “floating label only” as default)
- Inline helper text when confusion is likely
- Errors: specific, human, actionable

### 4.4 Tables (calculator breakdowns)
- Sticky header on mobile if possible
- Zebra rows optional; subtle only
- Always support horizontal scroll on mobile without breaking layout

### 4.5 Accordions
- Use for “details,” not core information
- Provide a one-line summary above the fold

### 4.6 Charts
- Minimal ink
- One highlight
- Tooltips should explain in plain language

---

## 5) Page Patterns (how pages are built)

### 5.1 Article (Perspective / Knowledge)
Recommended flow:
1. H1 + lede
2. “Key takeaway” callout (1–3 bullets)
3. Main sections
4. One embedded “receipt” (chart/table/example)
5. CTA: calculator or newsletter
6. Related reading

### 5.2 Calculator
Your standard structure:
1. Top dashboard cards (4)
2. Inputs
3. Output summary + 1–2 charts
4. Breakdown accordion (monthly/yearly)

Rules:
- Always show “what this means” in human language.
- Never require scrolling to discover the primary output.

### 5.3 Home
If blog-forward:
- Top: latest / featured post
- Middle: 2–3 “pillars”
- Bottom: tools teaser grid

---

## 6) Motion & Micro-interactions
- Motion is for **feedback** and **focus**, not decoration.
- Prefer: subtle fades, small transforms
- Avoid: bouncy overshoot, playful wobble

---

## 7) Accessibility & QA
- Contrast checked
- Focus rings visible
- Keyboard navigable
- Mobile tap targets
- Performance: images optimized, avoid layout shift

---

## 8) “Template Smell” Tests (ship/no-ship)
If you see any of these, redesign:
- symmetric “SaaS hero + 3 features + testimonials” layout
- 6+ colors on one screen
- gradients used to hide weak hierarchy
- too many badges, chips, and icons


---

## 9) Visual Examples (web)
Validate changes against the gold standard screenshots listed in the Brand Guidelines:
- `examples/web/home-desktop.png`
- `examples/web/article-desktop.png`
- `examples/web/calculator-mobile.png`

Rule: if a UI change makes those screenshots worse, the change is rejected.
