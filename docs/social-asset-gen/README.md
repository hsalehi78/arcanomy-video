# Social Asset Generation

This folder contains guides for generating social content markdown files for Arcanomy Studio.

## Files

| File | Purpose |
|------|---------|
| `SOCIAL-CONTENT-MD-GUIDE.md` | **Main guide** — Complete documentation for creating social content MD files |
| `EXAMPLE-SOCIAL-CONTENT.md` | **Example file** — A valid example MD file you can use as a template |
| `SYSTEM-PROMPT-FOR-AI.md` | **AI prompt** — System prompt for CrewAI or other LLMs to generate content |

## Quick Start

1. Read `SOCIAL-CONTENT-MD-GUIDE.md` to understand the format and writing guidelines
2. Copy `EXAMPLE-SOCIAL-CONTENT.md` as a template
3. Replace the content while following the format exactly
4. Upload to Arcanomy Studio at `/social/{identifier}/content`

## For AI Generation

If using CrewAI or another LLM:

1. Use the system prompt from `SYSTEM-PROMPT-FOR-AI.md`
2. Provide the blog post content and identifier
3. Validate the output matches the expected format
4. Upload to Arcanomy Studio

## Key Rules

### Format Rules
- Frontmatter `identifier` MUST match the blog post identifier
- Section headers must be exact: `# X Posts`, `# Instagram Carousels`, `# Reel Scripts`
- IDs must be kebab-case (lowercase with hyphens)

### Writing Rules
- No "studies show" or authority framing
- One idea per content piece
- Hook first — no throat-clearing
- Write for speaking, not reading

### Content Quantities
- X Posts: 3-5 per article
- Carousels: 1 per article (5-7 slides)
- Reel Scripts: 2-4 per article

## Workflow

```
1. Blog post published
   ↓
2. Generate MD file (manual or AI)
   ↓
3. Upload to Studio (/social/{identifier}/content)
   ↓
4. Studio validates and parses
   ↓
5. Edit content in Studio UI if needed
   ↓
6. Generate images (Images tab)
   ↓
7. Upload videos for reels (Videos tab)
   ↓
8. Publish to platforms
```

## Support

If the upload fails, check:
- Identifier matches exactly
- All required fields are present
- Emotion Target is one of: LOL, WTF, OMG, Aha, Awww
- IDs are kebab-case
- Word counts are in range

---

*Arcanomy Studio — Where Knowledge Builds Wealth.*
