# Arcanomy Social Content Generation Guide

**Version:** 1.0  
**Last Updated:** December 2024  
**For:** CrewAI / External content creators

---

## Part 1: The Arcanomy Voice

### Who We Are
Arcanomy exists to help people **understand, plan, and build wealth — and ultimately, live freely.**

We apply the **Feynman Technique** to finance: If you can't explain it simply, you don't understand it well enough.

### How We Sound
Arcanomy speaks *with* people, not *at* them.

| ✅ Do | ❌ Don't |
|-------|---------|
| Clear, conversational | Corporate jargon |
| Data-driven | Hype-driven |
| Empathetic, human | Ego, lecturing |
| Take a stance | Wishy-washy |
| Specific, concrete | Vague platitudes |

### The Honesty Rules (Non-Negotiable)
- **No "studies show"** or "research says" — state facts plainly
- **No invented numbers** — only use data from the source
- **No vague advice** — the reader must know what to think or do differently
- **No throat-clearing** — get to the point immediately
- **Credit sources, disclose incentives** — trust is the ultimate currency

---

## Part 2: MD File Format Specification

### File Structure Overview

```
---
identifier: 2025-12-29-the-article-slug
generated_at: 2025-12-29T10:00:00-08:00
source: crewai
---

# X Posts
(3-5 posts)

---

# Instagram Carousels
(1 carousel, 5-7 slides)

---

# Reel Scripts
(2-4 scripts)
```

### Frontmatter (Required)

```yaml
---
identifier: 2025-12-29-article-slug   # MUST match the blog post identifier
generated_at: 2025-12-29T10:00:00-08:00   # Pacific Time (America/Los_Angeles)
source: crewai   # crewai | external | manual
---
```

**⚠️ CRITICAL:** The `identifier` MUST exactly match the blog post identifier. If it doesn't, the upload will be rejected.

---

## Part 3: X Posts

### Format

```markdown
# X Posts

## Post 1
The actual text of the tweet goes here.
Can be multiple lines.

**Hashtags:** #FinancialFreedom #MoneyMindset #FIRE

## Post 2
Another post text here.

**Hashtags:** #WealthBuilding #PersonalFinance
**Article URL:** https://arcanomy.com/knowledge/article-slug

## Post 3
...
```

### X Post Requirements

| Field | Requirement |
|-------|-------------|
| Text | 1-280 characters (aim for under 250 for engagement) |
| Hashtags | Required, at least 1, format: `#HashTag` |
| Article URL | Optional, for link-card posts |

### X Post Writing Guidelines

**Hook First:** The first line must stop the scroll. No greetings, no context-setting.

**Good hooks:**
- Contrarian truth: "Everyone thinks X. The truth is opposite."
- Painful mistake: "If you do X, you're accidentally doing Y."
- Precise consequence: "This is why Z fails even when you try."

**Bad hooks:**
- "Have you ever wondered...?"
- "I've been thinking about..."
- "Thread 🧵" (save for actual threads)

**The Rule of One:** One idea per post. If it needs "and also," split it.

**Hashtag Strategy:**
- 3-5 hashtags per post
- Mix broad (#FIRE) and specific (#RetirementPlanning)
- Always include #Arcanomy

---

## Part 4: Instagram Carousels

### Format

```markdown
# Instagram Carousels

## Carousel: unique-carousel-id
**Caption:** The Instagram caption goes here. Can include emojis 🔥 and be up to 2200 characters.
**Hashtags:** #FinancialFreedom #MoneyMindset #WealthBuilding #Arcanomy #FIRE

### Slide 1 (Cover)
BIG HEADLINE


### Slide 2
HEADLINE TEXT


### Slide 3
ANOTHER POINT


### Slide 4
THE KEY INSIGHT


### Slide 5
THE NEXT STEP


### Slide 6 (CTA)
START TODAY

```

### Carousel Requirements

| Field | Requirement |
|-------|-------------|
| Carousel ID | kebab-case, unique within file (e.g., `four-percent-rule`) |
| Caption | 1-2200 characters |
| Hashtags | Required, at least 1 (Instagram allows up to 30) |
| Slides | 3-10 slides (ideal: 5-7) |
| First slide | Mark with `(Cover)` |
| Last slide | Mark with `(CTA)` |
| Slide text | 2-3 lines, 60-90 characters total |

### Carousel Writing Guidelines

**Slide Text Rules:**
- ALL CAPS for headlines (they'll be overlaid on images)
- Max 2-3 lines per slide
- 60-90 characters total per slide
- Write for scanning, not reading

**Slide Structure:**
1. **Cover (Slide 1):** Bold claim or question that creates curiosity
2. **Problem (Slides 2-3):** What's wrong / the pain point
3. **Solution (Slides 4-5):** The insight / what to do instead
4. **CTA (Last slide):** Clear next action + "Link in bio"

**Caption Writing:**
- Lead with the hook (same as the cover slide concept)
- Expand on the "why it matters"
- End with a question to drive comments
- Hashtags go at the end (or in first comment)

---

## Part 5: Reel Scripts

### Format

```markdown
# Reel Scripts

## Reel: unique-reel-id
**Claim:** One sentence stating the core idea (max 100 chars)
**Why It Matters:** One sentence explaining the significance
**Emotion Target:** Aha
**Remembered Sentence:** The one line you want repeated

**Script:**
Everyone thinks FIRE is about quitting your job.
It's not.
FIRE is about reaching a point where work becomes optional.
The goal isn't to stop working forever.
It's to stop working for permission.

## Reel: another-reel-id
**Claim:** ...
```

### Reel Script Requirements

| Field | Requirement |
|-------|-------------|
| Reel ID | kebab-case, unique within file (e.g., `four-percent-math`) |
| Claim | Required, max 100 characters |
| Why It Matters | Required |
| Emotion Target | One of: `LOL`, `WTF`, `OMG`, `Aha`, `Awww` |
| Remembered Sentence | Required |
| Script | Required, multi-line spoken text |

### The Five Emotion Targets

Choose **ONE** primary emotion. If you aim for multiple, you get "mildly informative."

| Emotion | Meaning | Trigger |
|---------|---------|---------|
| **LOL** | Amusement/Humor | Irony, absurd contrast, exaggeration (without lying) |
| **WTF** | Surprise/Shock | Taboo truth, reversal, pattern break (must stay defensible) |
| **OMG** | Awe/Astonishment | Scale, extreme consequences, big numbers (make magnitude concrete) |
| **Aha** | Insight/Realization | Reframe, simple model, "I never saw it that way" — **Arcanomy home base** |
| **Awww** | Warmth/Cuteness | Tenderness, belonging, human moments (use sparingly) |

### Script Writing Rules

**Length Constraints (Monk Mode):**
- VO pace: ~150-170 words per minute
- **45s script:** 112-128 words
- **60s script:** 145-160 words

If it can't fit the cap, it's two scripts.

**Line Discipline:**
- One sentence per line
- Max 12 words per line
- Max 12 lines total (45s) / 14 lines total (60s)
- Max 1 rhetorical question (in hook only)

**Beat Template (60s):**
| Beat | Words | Purpose |
|------|-------|---------|
| Hook | 10-12 | Make them stop scrolling |
| Claim | 20-26 | State the idea clearly |
| Earn It | 85-100 | Prove it with mechanism/example/distinction |
| Takeaway | 20-24 | The remembered sentence |

**Hook Patterns (Pick One):**
- **Reversal:** "Everyone thinks X. The truth is Y."
- **Cost/Consequence:** "This is why X keeps failing."
- **Taboo truth:** "Here's the uncomfortable part about X…"
- **Mistake framing:** "If you're doing X, you're accidentally training Y."
- **Test:** "If you can't answer this in 5 seconds, you're guessing."
- **Micro-story:** "A friend told me something that ruined X for me."

**Earning Methods (Pick One):**
- **Mechanism:** "Because A → B → C, you get D."
- **Distinction:** "X looks like Y, but it's actually Z."
- **Example:** One specific scenario that makes the claim obvious.
- **Tradeoff:** What you gain and what you sacrifice.
- **Myth-bust:** "The myth is X. The reality is Y. The fix is Z."

**Close Patterns:**
- **Rule:** "So the rule is…"
- **Test:** "If you can't ___, then ___."
- **Move:** "Do this once today: ___."
- **Reframe:** Repeat the remembered sentence with force.

### Reel Quality Checklist

Before submitting, the script must pass ALL of these:

- [ ] First line is strong enough to stand alone
- [ ] Claim is stated clearly (not implied)
- [ ] Contains at least one concrete reason/example
- [ ] No sentence depends on vague authority
- [ ] Ending gives one crisp takeaway
- [ ] Word count is within range
- [ ] One earning method (not multiple)
- [ ] One emotion target (not multiple)

---

## Part 6: Common Mistakes to Avoid

### ❌ Format Mistakes
- Wrong identifier (doesn't match blog post)
- Missing frontmatter
- Wrong section headers (must be exact: `# X Posts`, `# Instagram Carousels`, `# Reel Scripts`)
- Missing required fields (Claim, Emotion Target, etc.)
- Carousel ID or Reel ID with spaces or uppercase (must be kebab-case)

### ❌ Content Mistakes
- Multiple claims in one piece ("and also...")
- Vague hook ("Have you ever wondered...")
- Authority framing ("Studies show...")
- Too many numbers (0-2 is the default)
- No concrete example or mechanism
- Weak CTA slide on carousel

### ❌ Voice Mistakes
- Corporate jargon ("leverage your assets")
- Essay language (write for speaking)
- Lecturing tone (speak WITH, not AT)
- No stance taken (wishy-washy)

---

## Appendix: Quick Reference

### Required Fields Checklist

**Every file must have:**
- [ ] Frontmatter with correct `identifier`
- [ ] At least one content section (X Posts, Carousel, or Reel)

**Every X Post must have:**
- [ ] Text (1-280 chars)
- [ ] Hashtags (at least 1)

**Every Carousel must have:**
- [ ] Unique kebab-case ID
- [ ] Caption
- [ ] Hashtags
- [ ] 3-10 slides
- [ ] First slide marked (Cover)
- [ ] Last slide marked (CTA)

**Every Reel Script must have:**
- [ ] Unique kebab-case ID
- [ ] Claim (max 100 chars)
- [ ] Why It Matters
- [ ] Emotion Target (LOL/WTF/OMG/Aha/Awww)
- [ ] Remembered Sentence
- [ ] Script

---

*Generated for Arcanomy Studio — Where Knowledge Builds Wealth.*
