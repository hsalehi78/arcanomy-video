# Arcanomy Motion — Template Pack Spec v1.0
_Last updated: 2025-12-30_

This document turns the Motion Style Guide into **repeatable reel templates** you can produce daily in **CapCut** or implement as **Remotion templates**.

It assumes: 9:16, 1080×1920, 45–75s.

---

## 0) Global Presets (apply to every template)

### A) Canvas + Export
- **Resolution:** 1080×1920 (9:16)
- **Frame rate:** 30 fps (default)
- **Codec:** H.264
- **Bitrate:** 12–20 Mbps
- **Audio:** 48kHz

### B) Safe Zones (rule of thumb)
Keep critical text/graphics inside:
- **Top:** 170 px
- **Bottom:** 320 px
- **Left/Right:** 90 px

(These numbers are conservative for IG/TikTok UI overlays.)

### C) Type Styles (CapCut presets)
Create 4 saved text styles that match Motion Tokens:

- **TYPE_XL (Hook)**
  - Font: Lora
  - Size: 92–110
  - Weight: 700
  - Max: 2 lines
  - Optional plate (60–75% opacity), radius 20

- **TYPE_L (Key line / stat)**
  - Font: Lora
  - Size: 64–78
  - Weight: 700

- **TYPE_M (Support line)**
  - Font: Montserrat
  - Size: 44–52
  - Weight: 500

- **TYPE_S (Label / margin note / citation)**
  - Font: Montserrat
  - Size: 28–34
  - Weight: 500
  - Letter spacing: 0
  - Use sparingly

### D) Motion Presets (CapCut presets)
Create 3 saved animations (or copy/paste keyframes):

- **REVEAL_DEFAULT**
  - Opacity: 0→1
  - Y: +14→0
  - Duration: 240–320ms
  - Ease: easeOut

- **MARKUP_DRAW**
  - Stroke: 6–8px (single accent color)
  - Duration: 280–420ms
  - Delay after word: 80–140ms

- **NUMBER_FREEZE**
  - Brief pause: 250–400ms
  - Then reveal TYPE_L number + optional “RECEIPT” label (TYPE_S) for 600–1000ms

### E) Audio Preset
- VO sits on top (clear, intimate).
- Music bed: low, steady (no epic build).
- SFX: minimal (marker/tick/tap), very quiet.

---

## 1) Template A — “The Receipt” (best default)
**Use for:** business model traps, pricing tricks, “they’re betting you’ll quit.”

**Total length:** 55–65s  
**Signature motifs:** Underlined Claim + Receipt Stamp

### Scene blocks (with timings)
1) **HOOK (0–2s)**
   - Visual: TYPE_XL hook line
   - Motif: underline one word (MARKUP_DRAW)

2) **FRAME (2–10s)**
   - Visual: 1–2 supporting lines (TYPE_M) over subtle b-roll
   - Rule: no more than 12 words on screen

3) **RECEIPT SETUP (10–18s)**
   - Visual: show the “system” object (gym doors, checkout page, subscription UI mock)
   - Add TYPE_S “RECEIPT” label for 0.6–1.0s

4) **RECEIPT MOMENT (18–42s)**
   - Visual: chart/table reveal OR annotated screenshot
   - Highlight: one number, one callout
   - Motif: One-Number Freeze at the key stat (NUMBER_FREEZE)

5) **RULE (42–58s)**
   - Visual: TYPE_L rule line + TYPE_M supporting line
   - Keep it repeatable (“If X, do Y.”)

6) **CLOSE (58–65s)**
   - Optional identity stamp (TYPE_S): “Arcanomy — Where Knowledge Builds Wealth”

### Asset checklist
- 1 hook background (dark neutral)
- 2–3 b-roll clips (8–12s total)
- 1 chart or annotated screenshot
- 1 key stat (single number)

---

## 2) Template B — “Two Timelines”
**Use for:** compounding, lifestyle creep, debt spirals, “two futures.”

**Total length:** 60–75s  
**Signature motifs:** One-Number Freeze + Margin Notes

### Scene blocks
1) HOOK (0–3s): TYPE_XL “Two paths…” (underlined word)
2) SPLIT SCREEN SETUP (3–10s): Left = “Choice A”, Right = “Choice B” (TYPE_S labels)
3) TIMELINE RUN (10–45s): animate two lines/bars diverging
4) RECEIPT STAT (45–55s): freeze on gap number (TYPE_L)
5) RULE (55–70s): “Pick the path you can repeat.”

### Implementation notes
- Use a consistent left/right color treatment (neutral + accent).
- Don’t animate constantly—reveal in 2–3 deliberate steps.

---

## 3) Template C — “The Hidden System”
**Use for:** subscriptions, fees, BNPL, incentives, dark patterns.

**Total length:** 50–65s  
**Signature motifs:** Underlined Claim + Receipt Stamp

### Scene blocks
1) HOOK (0–2s): TYPE_XL accusation (“They don’t want you to…”) + underline
2) SYSTEM MAP (2–20s): simple diagram: “You → behavior → their profit”
3) RECEIPT (20–45s): one chart/screenshot with markup
4) RULE (45–60s): simple defense mechanism (“Cancel same day”, “Set a rule”)
5) CLOSE (optional)

### Diagram spec (simple)
- 3 nodes max
- 1 arrow style
- 1 accent color

---

## 4) Template D — “60-Second Audit”
**Use for:** diagnostic reels that feel useful + shareable.

**Total length:** 55–70s  
**Signature motifs:** Margin Notes + Receipt Stamp (optional)

### Scene blocks
1) HOOK (0–3s): “Answer these 3 questions.”
2) Q1 (3–20s): question on screen (TYPE_L), 1 example (TYPE_M)
3) Q2 (20–37s): same format
4) Q3 (37–54s): same format
5) VERDICT (54–65s): “If you got 2+ yes, do this…”
6) CLOSE (65–70s)

### Rules
- Only show one question at a time.
- Keep questions short (<= 8 words on screen).

---

## 5) Template E — “The Rule”
**Use for:** principles and mental models (high conviction).

**Total length:** 45–60s  
**Signature motifs:** Underlined Claim (rule) + One-Number Freeze (if applicable)

### Scene blocks
1) RULE FIRST (0–4s): TYPE_XL rule sentence
2) WHY (4–20s): 1 story beat or analogy (b-roll)
3) RECEIPT (20–40s): 1 stat/chart or one example calculation
4) REPEAT THE RULE (40–55s): same rule again (cleaner, shorter)

---

## 6) B-roll Library Spec (what to collect)
Make a small library to avoid wasting time.

**Categories (minimum set)**
- Calendars / dates / New Year / deadlines
- Checkout / subscriptions / receipts
- Crowds / lines / “everyone does it” scenes
- Empty space / quiet / “after the hype”
- Late-night screens / quiet anxiety
- Freedom cues (road, ocean, walking, morning light) — used sparingly

**Rule:** no luxury flex, no “creator desk,” no meme clips.

---

## 7) QA Checklist (template pack edition)
- One claim? One receipt? One repeatable rule?
- Any screen >12 words? Cut it.
- Does any animation exist just to look cool? Remove it.
- Can it be understood muted? (captions/visual proof)
- Does it feel calm/premium, not “explainer spam”?
