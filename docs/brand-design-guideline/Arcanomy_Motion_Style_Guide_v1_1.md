# Arcanomy Motion Style Guide v1.0
_Last updated: 2025-12-30_

This is the production grammar for Arcanomy reels/short-form video:
**Vox / Johnny Harris clarity**, but **Arcanomy restraint, evidence, and emotional truth.**

---

## 0) The Arcanomy Motion Promise
Every reel must do three things:
1) **Make one claim.**
2) **Prove it with one receipt.**
3) **Leave one rule the viewer can repeat.**

If any reel tries to do more, it becomes content sludge.

---

## 1) Tone & Pacing
Arcanomy is **calm authority**, not frantic hype.

- Edits cut on **meaning**, not on beat.
- Use motion where it increases comprehension.
- Silence is allowed. Negative space is allowed.

---

## 2) Structure (default 45–75s)
**0–2s**: Hook (emotional truth or surprising claim)  
**2–15s**: Set the frame (what they believe vs what’s true)  
**15–45s**: Receipt (example, data, math, story)  
**45–60s**: Rule (what to do instead)  
**60–75s** (optional): One-line close / identity stamp

---

## 3) Visual Language (what “Arcanomy” looks like)

### 3.1 Typography in video
Text is a highlighter, not the script.

Rules:
- Max 8–12 words on screen at once.
- 1–2 lines max.
- One emphasis word/phrase per beat.
- Never cover faces or the focal point.
- Prefer simple “caption blocks” over kinetic chaos.

Recommended usage:
- hook phrase
- one key stat
- the final rule

### 3.2 Annotation marks (signature motif)
Build a consistent “analyst markup” style:
- underline, circle, arrow, bracket
- consistent stroke width
- consistent animation speed

This becomes your “Arcanomy fingerprint.”

### 3.3 Charts as receipts (not decoration)
Chart rules:
- one takeaway per chart
- one highlight color
- labels in plain language
- animate **reveals**, not spins

### 3.4 B-roll selection
B-roll supports meaning:
- crowds, lines, checkout, calendars, empty gyms, late-night laptop glow
- avoid cliche “money rain,” luxury flex, influencer desk shots
---

## 3.5 Motion Tokens (Arcanomy “fingerprint”)
These tokens keep you consistent across every reel. Treat them like design tokens for motion.

### A) Type Tokens (on-screen)
**Font family**
- Headings / emphasis: **Lora**
- Supporting / labels: **Montserrat**

**Sizes (9:16 / 1080×1920)**
- `TYPE_XL` (hook / big words): **92–110 px**
- `TYPE_L` (key line): **64–78 px**
- `TYPE_M` (support): **44–52 px**
- `TYPE_S` (labels / citations): **28–34 px**

**Weights**
- Lora: 600–700 for emphasis
- Montserrat: 500 for labels, 400 for supporting

**Line rules**
- Max **2 lines**
- Preferred line length: **14–22 characters** per line
- Tracking: **0 to -1** (slightly tight) for Lora; **0** for Montserrat

**Text plates (when needed)**
- Use only when the background kills legibility.
- Plate opacity: **60–75%**
- Plate radius: **16–24**
- Plate padding: **18–26** (x) / **12–18** (y)
- Never full-width banners. Keep it “label-like,” not “news chyron.”

### B) Markup Tokens (annotation motif)
This is the **Arcanomy signature**: calm analyst markup.

- Stroke width: **6–8 px**
- Corner radius: **10–14 px**
- Color: `ACCENT` only (never rainbow)
- Shapes: underline, circle, bracket, arrow
- Animation: draw-on (not pop-in)

**Draw-on timing**
- Duration: **280–420 ms**
- Ease: **easeOutCubic** (fast start, soft stop)
- Delay: **80–140 ms** after the word appears

### C) Reveal Tokens (how things appear)
Arcanomy reveals should feel **inevitable**, not flashy.

**Default reveal**
- Opacity: 0 → 1
- Y: +14px → 0
- Duration: **240–320 ms**
- Ease: **easeOutQuad**

**Hard rule:** no bounce, no elastic easing.

### D) Cut Rhythm Tokens (pacing)
- Average shot length: **0.8–1.8s**
- “Proof” section can breathe: **2.0–3.5s**
- Max time without any visual change: **3.5s** (unless intentionally dramatic)

### E) Chart Tokens (the “receipt” look)
Charts must feel like receipts, not decoration.

- Gridlines: **light**, minimal
- One highlight color: `ACCENT`
- Labels: plain language, Montserrat 400–500
- No 3D, no gradients, no shiny effects

**Chart animation**
- Prefer **reveal / wipe** over “draw from zero with flourish”
- Duration: **420–680 ms**
- Highlight point callout: appears **120–200 ms** after main reveal

### F) Color Tokens (video)
Keep it restrained:
- `INK` (text): near-black or near-white depending on background
- `PAPER` (plates/surfaces): subtle neutral
- `ACCENT` (one color): used for emphasis + markup
- `DANGER` / `SUCCESS`: only when meaning demands

Rule: **1 accent color per reel**.

### G) Sound Tokens
- SFX library should be minimal: “tick”, “tap”, “whoosh-soft”, “marker”
- SFX volume: **-18 to -24 LUFS relative** (barely there)
- Music bed: low, steady, no “epic build”

---

## 3.6 Signature Motifs (use 2–3 every time)
These are the “you can recognize it in 2 seconds” motifs.

### Motif 1: The Underlined Claim
- Hook line appears (TYPE_XL)
- A single underline draws-on under the key word
- Then you cut to the first receipt

Use when: the hook is a sharp accusation or reframing.

### Motif 2: The Receipt Stamp
A tiny “RECEIPT” label (TYPE_S) appears above a chart/table for 0.6–1.0s, then fades.

Use when: you want to signal “this is proof,” not opinion.

### Motif 3: The One-Number Freeze
Everything pauses for **0.25–0.4s** while a single number appears large (TYPE_L), then you resume.

Use when: you have one stat that changes belief.

### Motif 4: The Margin Notes
Small Montserrat notes appear like analyst margin annotations (TYPE_S), anchored to a point on the chart.

Use when: the proof needs one clarifying sentence.


---

## 4) Sound

## 4.1 Audio & Music (concrete)
Sound is part of the brand. Arcanomy audio must feel **calm, premium, and inevitable**.

### Music bed — allowed ranges
- **BPM:** 70–95 (downtempo, controlled)
- **Vibe:** minimalist cinematic, subdued electronic, modern ambient, restrained lo‑fi (not cozy/whimsical)
- **Avoid:** epic trailer builds, EDM drops, “YouTube vlog” ukulele, happy corporate pop

### Track selection rules
- The bed supports the VO. If you notice the music, it’s too loud or too busy.
- No melodic hooks that compete with speech.
- Prefer steady texture over “progression.”

### Licensing guidance (pick one and standardize)
Options: Artlist / Epidemic Sound / Soundstripe / PremiumBeat  
Rules:
- Save the license receipt + track ID in the reel folder.
- Maintain a small “approved palette” of ~10 beds you reuse.

### VO tone (more specific)
- **Pace:** slightly slower than typical explainers.
- **Delivery:** intimate, direct, no “presenter voice.”
- **Energy:** controlled conviction, not hype.
- **Rule:** every sentence sounds like it was spoken to one smart friend.

### Mix targets (practical)
- VO peak: around **-3 to -6 dB**
- Music bed: typically **-18 to -24 dB** under VO
- SFX: **barely audible**, used only for proof moments

### SFX palette (keep tiny)
Allowed: `marker`, `tick`, `tap`, `soft whoosh`  
Avoid: loud whooshes, risers, impacts, meme sounds

## 5) Templates (repeatable formats)
Use 3–5 templates to produce daily without creative fatigue.

### Template A: “The Receipt”
Hook → one stat → chart reveal → rule  
Best for: myths, consumer traps, pricing tricks

### Template B: “The Two Timelines”
Show two futures side-by-side (small choices compound)  
Best for: compounding, lifestyle creep, debt spirals

### Template C: “The Hidden System”
Explain a business model that depends on your behavior  
Best for: gyms, subscriptions, BNPL, fees

### Template D: “The 60-Second Audit”
3-question diagnostic + one action  
Best for: FIRE readiness, spending leaks, portfolio drift

### Template E: “The Rule”
Start with the rule → then earn it → end with repetition  
Best for: principles and mental models

---

## 6) Art Direction: Vox/Harris influence, Arcanomy uniqueness

### Borrow (allowed)
- clean explainer clarity
- maps/diagrams when relevant
- sharp story beats
- visual “proof” moments

### Add (Arcanomy)
- slower, more deliberate tempo
- emotional truth up front (anxiety, pressure, relief)
- evidence aesthetics (charts, receipts, markup)
- restraint: fewer cuts, fewer effects, higher conviction

### Avoid (hard no)
- meme edits
- over-kinetic type
- “creator studio” b-roll clichés
- sensational thumbnails

---

## 7) Production Specs (fast defaults)

### Aspect ratios
- Reels/TikTok: 1080×1920 (9:16)

### Safe zones (guideline)
- Keep key text/graphics away from:
  - bottom UI bar area
  - top UI/username area
  - edges (breathing room)

### Color & contrast
- Ensure text contrast reads on a phone in sunlight.
- Use subtle background plates behind text only when necessary.

---

## 8) QA Checklist (ship/no-ship)
**Clarity**
- Can a viewer explain the claim in one sentence?

**Brand fit**
- Does it feel premium, calm, and evidence-first?

**Visual restraint**
- Is every animation serving comprehension?

**Text discipline**
- Any frame with >12 words? Reduce.

**Receipt**
- Is there a real proof moment, not just opinion?

If any answer is “no,” it doesn’t ship.


---

## 9) Visual Examples (motion)
Enforce this guide with the gold standard reel stills (see Brand Guidelines):
- `examples/motion/hook.png`
- `examples/motion/receipt.png`
- `examples/motion/rule.png`

Rule: if an editor can’t match these stills, they rework until they can.
