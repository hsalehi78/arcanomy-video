# Arcanomy Examples Pack — Spec v1.0
_Last updated: 2025-12-30_

This pack solves:
1) **No visual examples**
2) **No failure examples**

It creates a **reference set**: match this, or it’s not Arcanomy.

---

## 1) Gold Standard Set (required)

### 1.1 Web screenshots (3–5)
**Capture rules**
- PNG
- No browser chrome
- Desktop: 1440px width
- Mobile: 390×844 viewport
- Use real content (not lorem)

| Priority | File | Page | What we evaluate |
|---:|---|---|---|
| 1 | `examples/web/home-desktop.png` | Home | hierarchy, brand presence |
| 2 | `examples/web/article-desktop.png` | Article | type rhythm, spacing |
| 3 | `examples/web/calculator-mobile.png` | Calculator | mobile clarity |
| 4 | `examples/web/article-mobile.png` | Article (mobile) | readability |
| 5 | `examples/web/nav-footer.png` | Nav/Footer | system consistency |

### 1.2 Motion stills (3–5)
**Capture rules**
- 1080×1920 frame grab
- Choose frames that demonstrate the tokens (TYPE + markup + 1 accent)

| Priority | File | Frame | What we evaluate |
|---:|---|---|---|
| 1 | `examples/motion/hook.png` | Hook | TYPE_XL discipline + motif |
| 2 | `examples/motion/receipt.png` | Receipt | chart + markup style |
| 3 | `examples/motion/one-number-freeze.png` | Key stat | emphasis without hype |
| 4 | `examples/motion/rule.png` | Rule | repeatable takeaway |
| 5 | `examples/motion/broll-overlay.png` | B-roll + text | restraint + legibility |

---

## 2) “This vs That” (training artifact)
Create one comparison image:
- Left: Arcanomy frame (calm, minimal, 1 accent, 8–12 words max)
- Right: Generic explainer frame (hyper-kinetic, many colors, too much text)

Save:
- `examples/this-vs-that/arcanomy-vs-generic.png`

---

## 3) Failure Gallery (do-not-ship examples)
Collect 4–6 examples and annotate them.

### Motion failures
- `failures/motion/too-many-words.png`
- `failures/motion/bouncy-type.png`
- `failures/motion/too-many-colors.png`
- `failures/motion/meme-audio.png`

### Web failures
- `failures/web/template-smell-hero.png`
- `failures/web/chips-badges-overload.png`

**Annotation rules**
- 2–4 callouts max:
  - “Too many words”
  - “Accent spam”
  - “Template smell”
  - “Unclear hierarchy”
  - “Audio mismatch”
- Keep annotations in Ink/Cloud with a single Amber callout arrow.

---

## 4) Definition of “done”
This pack is done when:
- a new editor can produce a reel that matches the stills
- a new designer can build a page that matches the screenshots
- a new hire can identify “bad” immediately from the failure gallery
