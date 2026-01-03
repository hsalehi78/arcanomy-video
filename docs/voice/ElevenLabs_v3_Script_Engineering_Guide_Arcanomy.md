# ElevenLabs v3 Script Engineering Guide (Arcanomy Workflow)

**Purpose:** Define exactly what “engineer the script for ElevenLabs v3” means, and provide a repeatable, high-signal workflow for converting any raw script into a v3-ready script that performs reliably.

**Audience:** You (Arcanomy) + any future “script engineer” (human or AI) who must produce consistent Eleven v3 outputs.

**Last updated:** 2026-01-01

---

## 0) The definition (so there’s no confusion)

When you say **“engineer the script for v3”**, the deliverable is:

1. **A v3-ready script** (the text you paste into ElevenLabs) that is optimized for:
   - spoken cadence (line breaks, sentence length, breath points)
   - emotional lane control (Audio Tags in `[...]`)
   - timing control (pauses via tags + punctuation + structure)
   - clean pronunciation (numbers, acronyms, names)
2. **Two versions**, unless you explicitly ask for one:
   - **Mode A — Strict Preserve:** same words, only add tags + punctuation/caps (mirrors “Enhance” philosophy).
   - **Mode B — Performance Rewrite:** micro-rewrite for speakability + then add tags.

This document is the operating manual for producing that deliverable.

---

## 1) v3 is “performance,” not “reading”
Eleven v3 is more expressive but needs more “prompt engineering” than earlier models. Very short prompts are more likely to be inconsistent, and ElevenLabs recommends **prompts > 250 characters**.  
Source: ElevenLabs “Best practices → Prompting Eleven v3 (alpha)” section.

**Implication:** You don’t just paste text. You **stage** it: beats, pauses, emotional lanes, and delivery cues.

---

## 2) What controls exist in v3 (and what does NOT)

### 2.1 Audio Tags: the primary control surface
- **Audio Tags are words wrapped in square brackets** like `[excited]`, `[whispers]`, `[sighs]`.  
- Tags can be placed **anywhere**, and can be combined within a script or even a sentence.
- Tags can cover:
  - emotion
  - delivery direction
  - human reactions / nonverbal sounds
  - (optionally) sound effects

Sources: ElevenLabs “Best practices → Audio tags” + ElevenLabs blog post on v3 Audio Tags.

### 2.2 Pauses in v3
- ElevenLabs states **v3 does not support SSML break tags**.
- For v3, control timing using:
  - audio tags (e.g., `[short pause]`, `[long pause]`)
  - punctuation (ellipses, dashes)
  - text structure (line breaks, sentence length)

Source: ElevenLabs “Best practices → Prompting Eleven v3 (alpha)” + “Enhance” prompt includes `[short pause]` and `[long pause]`.

### 2.3 Punctuation + capitalization matter a lot in v3
ElevenLabs explicitly calls out:
- **Ellipses (…) add pauses and weight**
- **Capitalization increases emphasis**
- Standard punctuation provides natural rhythm

Source: ElevenLabs “Best practices → Punctuation” (within v3 prompting section).

### 2.4 Voice selection and Stability (these change how text behaves)
- **Voice choice is the most important parameter** for v3. If the voice is “shouty,” tags like `[whispering]` won’t work well.
- **Stability** in v3:
  - *Creative*: more expressive, more hallucination risk
  - *Natural*: balanced / closest to original voice
  - *Robust*: most stable, but **less responsive** to directional prompts (more like v2 behavior)
- For max expressiveness with tags: use **Creative or Natural**.

Source: ElevenLabs “Best practices → Prompting Eleven v3 (alpha) → Voice selection / Stability”.

> Practical takeaway: Script engineering is not only text. It’s **text + a matching voice + the right stability setting**.

---

## 3) The two engineering modes (standard)

### Mode A — Strict Preserve (default)
**Rules:**
- Do **not** alter, add, or remove any words.
- Only:
  - prepend/append Audio Tags (`[...]`)
  - add punctuation / ellipses / dashes
  - add capitalization emphasis sparingly

This mirrors the internal “Enhance” philosophy in ElevenLabs UI.

Source: ElevenLabs “Best practices → Enhancing input” (the published Enhance prompt explicitly forbids editing the text and allows emphasis via caps/punct/ellipses).

### Mode B — Performance Rewrite
**Rules:**
- You may make minimal edits for spoken clarity while preserving meaning:
  - shorten long sentences
  - remove “written” phrasing
  - move stats to their own line
  - replace visually-oriented language with spoken-friendly language
- Then add tags.

Use Mode B when:
- the script is too dense
- too many numbers
- too much subordinate clause structure
- it sounds “written,” not spoken

---

## 4) Tagging rules (how to write Audio Tags that actually work)

### 4.1 Tags must describe something AUDIBLE
ElevenLabs “Enhance” prompt: tags must describe something auditory (emotion/delivery/reaction), not stage directions like `[standing]` / `[pacing]`.

**DO**
- `[dry]`, `[annoyed]`, `[whispers]`, `[sighs]`, `[laughs]`, `[short pause]`

**DON’T**
- `[walking]`, `[grinning]`, `[pacing]`, `[music]` (non-auditory / not voice)

Source: ElevenLabs “Best practices → Enhancing input”.

### 4.2 Placement: tag right where it matters
Best practice:
- Put the tag **immediately before** the phrase it modifies, or immediately after it.

Examples:
- `[annoyed] This is hard.`
- `This is hard. [sighs]`

Source: ElevenLabs “Enhance” prompt (placement guidance).

### 4.3 Don’t over-tag
More tags ≠ better.
Over-tagging often causes:
- unstable pacing
- weird prosody
- unnatural “acting”

Rule of thumb:
- In a 45–60s reel script: **6–12 tags total** is usually enough.
- Prefer:
  - pause tags
  - 1 dominant emotional lane
  - occasional nonverbal reaction

### 4.4 Voice matching: don’t fight the voice
- Tags work best when they *fit* the voice’s character and training.
- Don’t expect extreme flips (whisper → shout) to sound convincing unless the voice supports it.

Source: ElevenLabs “Best practices → Voice selection” + “Audio tags” notes.

---

## 5) Punctuation engineering (the hidden lever)

### 5.1 The “pause stack” (strongest to weakest)
For v3 timing control:
1. `[short pause]`, `[long pause]` (most explicit)
2. `…` ellipses (adds weight + hesitation)
3. `—` em dash (quick interrupt / turn)
4. line breaks (structural pacing)

Source: ElevenLabs “Punctuation” + “Enhance” tag list.

### 5.2 The “emphasis stack”
1. Capitalize a single word: **POINT**, **RESET**
2. Quotes around a phrase to “frame it”
3. Short sentence isolation (line break)
4. Exclamation marks sparingly (avoid hype)

Source: ElevenLabs “Punctuation” and “Enhance” prompt (emphasis allowed via caps/punct).

---

## 6) Numbers, acronyms, and research stats (v3-safe formatting)

v3 can read numbers fine, but **you must decide**: do you want “numerals” or “spoken words”?

### 6.1 Default Arcanomy rule (recommended)
- Convert important numbers to spoken words *inside the script* to avoid misreads:
  - “91%” → “ninety-one percent”
  - “30 days” → “thirty days”
- Keep currency explicit:
  - “$500” → “five hundred dollars”

### 6.2 When to keep numerals
Keep numerals if:
- you want exactness for the viewer to read on-screen
- you’re matching on-screen text overlays
- you’ve tested that your chosen voice reads them correctly

### 6.3 Stats delivery pattern (Arcanomy standard)
For any stat line:
- isolate on its own line
- add a micro-pause before it
- keep it cold / evidence-like

Example:
- `[short pause][matter-of-fact] Ninety-one percent…`
- `[short pause] Eighty percent…`

---

## 7) Arcanomy “lane” presets (re-usable tag palettes)

Pick ONE lane and stay in it. v3 performs best with consistent emotional context.

### Lane A — Calm Prosecutor (Arcanomy default)
Use for: “system is rigged,” debunking, traps, business model reveals.

Core tags:
- `[dry]`, `[matter-of-fact]`, `[cold]`, `[short pause]`, `[long pause]`, occasional `[sighs]`

### Lane B — Curious Investigator
Use for: counterintuitive insights, “I found something weird…”

Core tags:
- `[curious]`, `[thinking]`, `[short pause]`, `[surprised]` (sparingly)

### Lane C — Warm Mentor (rare for Arcanomy)
Use for: gentle how-to, reassurance (not trap-reveal).

Core tags:
- `[warm]`, `[encouraging]`, `[calm]`, `[short pause]`

> Note: Tag effectiveness varies by voice. Test per voice.

---

## 8) The conversion workflow (copy/paste checklist)

### 8.1 Step 1 — Beat map the raw script
Mark:
- Hook
- Twist/reveal (“That’s the point.”)
- Evidence (stats)
- Mechanism (the loop)
- Research pivot
- Closing chain

### 8.2 Step 2 — Restructure for spoken cadence
- 1 idea per line
- punchlines on their own line
- stats isolated
- avoid long multi-clause sentences

### 8.3 Step 3 — Choose a lane preset
- Calm Prosecutor / Curious Investigator / Warm Mentor

### 8.4 Step 4 — Insert pause tags first
- add `[long pause]` before major reveals
- add `[short pause]` before stats and punchlines

### 8.5 Step 5 — Insert emotional tags sparingly
- 1 tag per “section,” not per line
- avoid contradicting the voice

### 8.6 Step 6 — Punctuation polish
- add ellipses only where you want weight
- add caps only for 1–3 words total

### 8.7 Step 7 — Output in the correct format
- The final output is **only the enhanced text**
- No commentary in the output block (so you can paste directly)

This matches ElevenLabs “Enhance” output format expectations.

---

## 9) Debugging playbook (when v3 misbehaves)

### Problem: pacing is too fast / jittery
Fix order:
1. Remove 30–50% of tags (keep only pause tags)
2. Reduce ellipses / exclamation marks
3. Increase Stability toward **Natural** or **Robust**
4. Use a more neutral voice

Sources: ElevenLabs Stability guidance + “too many pause mechanisms can cause instability” warning.

### Problem: tags feel ignored
Fix order:
1. Move Stability toward **Creative** or **Natural** (away from Robust)
2. Use a voice that matches your lane
3. Move tag placement closer to the phrase it modifies
4. Replace rare tags with common ones (`[dry]`, `[curious]`, `[sighs]`)

Sources: ElevenLabs Stability guidance + voice/tag matching note.

### Problem: it “acts” too much (cheesy)
Fix order:
1. Remove nonverbal tags (laughs/sighs) first
2. Keep only `[short pause]` / `[long pause]` + 1 lane tag
3. Reduce caps and ellipses

### Problem: pronunciation (names, acronyms)
Fix order:
1. rewrite phonetically (alias-style) or expand acronym
2. (Non-v3 models) consider phoneme tags / pronunciation dictionaries

Note: Phoneme tags are not broadly supported across all models; check model compatibility.

---

## 10) Example: what a properly engineered v3 script looks like

**Goal:** Calm Prosecutor lane, 45–60s.

```text
[matter-of-fact] Every January, you download the app.
[short pause] By February… it’s buried on your phone.
[short pause] And you blame yourself.

[long pause][dry] That’s the point.

[short pause][matter-of-fact] Ninety-one percent of people who download a finance app in January…
[short pause] abandon it within thirty days.
[short pause] Eighty percent of resolution-makers quit by mid-month.

[short pause][cold] That’s not a willpower problem.
[short pause][cold] That’s a business model.

[short pause][matter-of-fact] Apps don’t profit when you succeed.
[short pause][dry] They profit when you reset.

[short pause] Miss a day.
[short pause] Feel behind.
[short pause] Start again.
[short pause][dry] That loop is the product.

[long pause][matter-of-fact] Here’s what the research actually shows.

[short pause] Outcome goals — “save five hundred dollars a month” —
[short pause] have a forty-seven percent success rate.
[short pause] Identity framing — “I pay myself first” —
[short pause] hits fifty-nine percent.

[short pause][dry] Not because it’s inspirational.
[short pause][matter-of-fact] Because it removes the reset trigger.

[long pause][cold] There’s no January 1st. No fresh start.
[short pause] Just the next deposit… or not.

[long pause][closing argument] The system sells you the calendar.
[short pause][closing argument] The calendar sells you the guilt.
[short pause][closing argument] The guilt sells you the app. Again.
```

Notes:
- Tags are **audible** and placed right before the line they affect.
- Pauses are controlled via `[short pause]` / `[long pause]` + ellipses.
- Caps are used sparingly (or not at all) to avoid “hype.”

---

## 11) Reference (official pages)
- ElevenLabs Docs: **Text-to-Speech Best Practices** (includes “Prompting Eleven v3 (alpha)”, Audio Tags, Stability, Punctuation, and the internal “Enhance” prompt)
- ElevenLabs Blog: **What are Eleven v3 Audio Tags — and why they matter**
- ElevenLabs Docs: **Creative Platform → Text to Speech** (voice/model/settings overview)

(Keep these bookmarked; v3 is evolving.)

---

## 12) The one-line command you can send me in the future

> **Engineer for Eleven v3 — Mode A — Lane: Calm Prosecutor — Target: 55s**

That single line contains everything needed to output a paste-ready v3 script.
