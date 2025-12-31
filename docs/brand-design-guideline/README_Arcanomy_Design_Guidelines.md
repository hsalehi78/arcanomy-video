# Arcanomy Guidelines — README (What to use, when)
_Last updated: 2025-12-30_

This folder contains **one brand** and **two implementation playbooks** (web + motion), plus the **production templates** for CapCut.

If you only remember one rule: **Brand Guidelines is the source of truth. Everything else implements it.**

---

## 1) The docs (what each one is)

### A) `Arcanomy_Brand_Guidelines.md` — *Identity Constitution*
**Use when:** you’re making *any* creative decision and you’re unsure “does this feel like Arcanomy?”

**Answers:**
- What Arcanomy is / who it’s for / what it must feel like
- Voice rules (what to say / what to avoid)
- Core visual identity (typography, imagery vibe, chart philosophy)
- Quality gate (“ship / no-ship”)

**If there’s a conflict between docs, this one wins.**

---

### B) `Arcanomy_Web_Visual_Design_System.md` — *Website/UI Implementation Manual*
**Use when:** you’re designing or building arcanomy.com pages, calculators, components, and layout patterns.

**Answers:**
- Layout system (grid, spacing, radius/shadows)
- Tokens (how color/typography map into Tailwind/CSS)
- Canonical component patterns (cards, buttons, forms, tables, accordions, charts)
- Page patterns (Article, Calculator, Home)
- Accessibility + QA

**This doc translates “brand taste” into repeatable UI rules.**

---

### C) `Arcanomy_Motion_Style_Guide.md` — *Video Grammar*
**Use when:** you’re writing scripts, deciding pacing, typography usage, chart style, b-roll rules, and “what Arcanomy reels look like.”

**Answers:**
- The 3-part promise: **claim → receipt → rule**
- Pacing rules (calm authority)
- Motion Tokens (type sizes, reveal timings, markup style)
- Signature motifs (Underlined Claim, Receipt Stamp, One-Number Freeze, Margin Notes)
- Hard “avoid” list so you don’t drift into generic explainer vibes

**This is where “Vox/Johnny Harris clarity” gets filtered into Arcanomy restraint and evidence.**

---

### D) `Arcanomy_Motion_Template_Pack_Spec.md` — *Template Blueprint (A–E)*
**Use when:** you have a claim and want to pick the right template fast.

**Answers:**
- Which template to use (Receipt, Two Timelines, Hidden System, 60s Audit, The Rule)
- Exact scene blocks + timings
- Asset checklist per template
- Global export + safe zone defaults

**Think of this as the “shot list” and timeline spec.**

---

### E) `Arcanomy_CapCut_Presets_and_Workflow.md` — *CapCut Setup + Daily Production*
**Use when:** you’re actually assembling reels in CapCut.

**Answers:**
- Master project structure (tracks)
- Saved text style presets (TYPE_XL/L/M/S)
- Saved animation presets (REVEAL_DEFAULT, MARKUP_DRAW, NUMBER_FREEZE)
- The daily 10-step workflow
- “Don’t waste time” rules

**This is the operational doc you follow every day.**

---

## 2) Precedence rules (what wins when docs disagree)
1) **Brand Guidelines** (identity)  
2) **Web Design System** (web implementation) / **Motion Style Guide** (video implementation)  
3) **Template Pack** (how to structure a reel)  
4) **CapCut Workflow** (how to execute in the tool)

---

## 3) Quick-start decision tree

### If you’re building the website…
- Start: `Arcanomy_Brand_Guidelines.md`
- Then: `Arcanomy_Web_Visual_Design_System.md`
- If you’re unsure about imagery: check the Imagery section in Brand Guidelines

### If you’re making a reel…
- Start: `Arcanomy_Brand_Guidelines.md` (tone + identity check)
- Then: `Arcanomy_Motion_Style_Guide.md` (grammar + tokens)
- Then: `Arcanomy_Motion_Template_Pack_Spec.md` (pick template A–E)
- Then: `Arcanomy_CapCut_Presets_and_Workflow.md` (build/export)

---

## 4) “When do I consult what?” (common scenarios)

### Scenario: “This looks clean but it feels… off.”
Consult: **Brand Guidelines**
- You’re checking identity + vibe + banned clichés.

### Scenario: “My UI is inconsistent across pages.”
Consult: **Web Visual Design System**
- You’re missing tokens/components/page patterns.

### Scenario: “My reel feels like a generic explainer channel.”
Consult: **Motion Style Guide**
- Check motion tokens + signature motifs + avoid list.

### Scenario: “I have a claim but I don’t know how to structure it.”
Consult: **Template Pack Spec**
- Pick template A–E and follow scene blocks.

### Scenario: “I’m losing time inside CapCut.”
Consult: **CapCut Presets & Workflow**
- Set up presets once; follow the daily 10-step.

---

## 5) How to keep the system clean (governance)
- Don’t change styles ad hoc. Update docs + version tag if you want to evolve.
- Keep a short changelog in each doc when you revise.
- Add examples over time: screenshots of “gold standard” pages and reels.

---

## 6) Suggested folder layout (optional)
If you want a clean repo structure:

```
/guidelines
  README.md
  Arcanomy_Brand_Guidelines.md
  Arcanomy_Web_Visual_Design_System.md
  /motion
    Arcanomy_Motion_Style_Guide.md
    Arcanomy_Motion_Template_Pack_Spec.md
    Arcanomy_CapCut_Presets_and_Workflow.md
```

---

## 7) One-line summary (so you never forget)
- **Brand** = who we are  
- **Web** = how the site looks/behaves  
- **Motion** = how reels look/feel  
- **Templates** = how reels are structured  
- **CapCut** = how reels get made
