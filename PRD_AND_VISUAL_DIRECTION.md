# FARMORA — PRD + FULL VISUAL DIRECTION

## STATUS
NEW ACTIVE PRODUCT. This document supersedes the older PRD/visual direction.

---

# PART I — PRODUCT REQUIREMENTS

## 1. PRODUCT DEFINITION

**Product:** Farmora — AI Field Intelligence & Yield Prediction  
**One-line promise:** **See what your fields need before yield is at risk.**  
**Sector:** AI Field Intelligence & Yield Prediction  
**Primary B2B users:** commercial farms, agribusinesses, plantation operators and agricultural cooperatives  
**Core object:** field observations and crop-health signals  

### Problem
Managers cannot physically inspect every hectare frequently enough to catch changing crop conditions early.

### Solution
Farmora combines field imagery, weather, soil information and crop history to detect change, prioritize attention and forecast yield.

### AI story
**OBSERVE → DETECT → PRIORITIZE → PREDICT**

The homepage should explain this without a wall of text.

---

## 2. BUSINESS MODEL

Pure B2B SaaS. No consumer marketplace, no consultancy positioning.

Commercial motion: self-serve trial where appropriate + sales-led demo for larger customers.

The Nigerian startup story is:
**Built in Nigeria → expanding across Africa → later expanding into Europe.**

Do not use US office details, Silicon Valley language or foreign headquarters.

---

## 3. CORE USER EXPERIENCE

A buyer arrives and should understand the following within the first screen:
1. what operational problem exists
2. what the AI notices/predicts
3. what the business does differently because of it

Avoid technical model language in the hero.

---

## 4. ROUTES

Create these routes, but do NOT expose all of them in the top navbar:

- `/home`
- `/pricing` (may be merged into a conversion route only if justified; otherwise build it)
- `/security`
- `/about`
- `/legal`
- `/solution`
- `/problem`
- `/technology`

All routes must be real pages with complete layout, title, metadata, navigation and footer.
The visual direction decides how they look; they do not have to share the same section structure as other products.

---

## 5. NAVIGATION

Use exactly this visible concept for the primary nav:

**Fields · Intelligence · Outcomes · Company**

Primary CTA: **Explore field intelligence**

Secondary pages such as Security, Technology, Pricing, Legal and deep product explanations belong in grouped dropdowns and/or the footer.

No top bar above the navbar.  
No “Live” strip.  
No uptime badge beside the logo.  
No telemetry in the header.

The navbar should feel spacious, with short labels and generous horizontal padding.

---

## 6. HOMEPAGE CONTENT LOGIC

The homepage is intentionally not the same 14-section template as another product.
Use the following narrative beats, merging them when visually appropriate:

### Hero
Promise + one-sentence explanation + one primary CTA + one secondary CTA.

### Problem moment
Show the real-world failure state visually.

### AI moment
Show how the AI notices a signal that humans/systems miss.

### Action moment
Show what the user does differently because the AI surfaced that signal.

### Outcome
Show measurable business outcomes through typography, one chart, one comparison,
or an interactive graphic. Do not create a wall of KPI cards.

### Proof / scale
Use development placeholder figures until verified.

### Trust / technology
Explain cloud, data handling and security without turning the marketing page into an Azure brochure.

### Company / market
Nigeria first, Africa expansion next, Europe later.

### Conversion
A concise CTA with the product-specific action.

---

## 7. INTERACTION REQUIREMENT

The homepage must include one memorable interaction.  
It must teach the AI story.  
It must not be a dashboard.

**Signature interaction:** A large aerial field image gradually receives a subtle field-grid overlay. One crop section changes from healthy green to a restrained amber signal; the page explains what the AI noticed in one sentence.

Keep it lightweight, responsive and accessible. On mobile, it becomes a simpler scroll interaction rather than a hover-only desktop experience.

---

## 8. TRACTION / SCALE

The master brief asks for live-looking scale. For a portfolio build, use these as **development placeholders only** and replace with verified numbers before public claims.

Suggested proof language:
- “{verified} stores / facilities / projects monitored”
- “{verified} field observations and crop-health signals processed this month”
- “{verified} decisions supported”
- “{verified}% faster response / planning”

Never invent customer names, certification logos or audited outcome claims.
Never show zero traction on the visible prototype.

---

## 9. PRICING MODEL

Price by monitored hectares / estate size. No slider. Use three acreage bands displayed as large typographic thresholds.

Use dollar pricing because the portfolio brief is aimed at enterprise buyers, but make the eventual billing geography-aware if necessary.

Never reuse Propvera’s pricing slider/component.

---

## 10. TECHNOLOGY / MICROSOFT REVIEW

The Technology page must make the heavy workload credible.
Map relevant services to the actual workload:

- Azure Static Web Apps / CDN for the web experience
- Azure Blob Storage for isolated tenant data
- Azure OpenAI for language/reasoning tasks where needed
- Azure Machine Learning for model training/scoring where justified
- AKS for workload spikes where justified
- Microsoft Entra ID for enterprise identity/RBAC
- Azure Key Vault for secrets/certificates
- Private Link and TLS for network security
- Defender for Cloud + Azure Monitor + Application Insights for security/observability

Do not put these services into the hero.

---

## 11. SECURITY PAGE

Explain, in plain language:
- tenant isolation
- encryption in transit and at rest
- RBAC
- identity controls
- auditability
- model/data boundaries
- retention controls
- monitored infrastructure

Use one technical illustration or diagram, not a grid of security cards.

---

## 12. TEAM

Show 2–3 Nigerian founders/team members, approximately 28–35, in realistic modern professional contexts.
Use placeholder names until real team details are supplied.
Do not fabricate backgrounds, employers or awards.

---

## 13. LEGAL

Privacy and Terms should be real pages with actual placeholder legal copy that is clearly marked for counsel review.
Do not invent regulatory approvals.

---

# PART II — VISUAL DIRECTION

## 14. DESIGN THESIS

**cinematic Nigerian commercial agriculture; aerial fields, soil texture, crop rows, farm roads, real workers and satellite-like abstractions**

The experience must feel premium, calm and highly intentional.

Reference atmosphere only:
**CropX — https://cropx.com/ — use as a category/imagery benchmark for field intelligence and connected agriculture.**

---

## 15. COLOR SYSTEM

Mist #F2F0E7; forest #183A2B; crop #507449; sun #D5B65B; charcoal #20251F; line #D5D5CA

Use one dominant background, one dark text color, one signature accent and one secondary support color.
Do not use a rainbow palette.
Do not use a generic neon-AI gradient.

---

## 16. TYPOGRAPHY

Primary: **Inter**.  
Use large editorial Inter for hero and section headlines.  
Body: 16–20px with 1.4–1.6 line height.  
Micro labels: 11–13px, restrained letter spacing.

Suggested sizing:
- desktop H1: clamp(3.5rem, 7vw, 7.5rem)
- desktop H2: clamp(2.25rem, 4vw, 4.75rem)
- mobile H1: 42–56px depending on length
- body mobile: 16–18px

Use width constraints so no paragraph becomes a wall of text.

---

## 17. NAVBAR ART DIRECTION

The navbar is a brand component, not a utility template.

Structure:
- logo left
- **Fields · Intelligence · Outcomes · Company** center/right
- **Explore field intelligence** as a compact action
- mobile drawer with the same logical groupings

Do not add:
- announcement bar
- top status bar
- telemetry
- live processing number
- generic “Get Started” pill duplicated from another product

Allow generous empty space around labels.

---

## 18. HERO COMPOSITION

**Hero concept:** cinematic Nigerian commercial agriculture; aerial fields, soil texture, crop rows, farm roads, real workers and satellite-like abstractions

Use the hero to tell a complete mini-story:
1. show the real-world environment
2. introduce the hidden problem
3. introduce the AI insight
4. state the outcome

Do not use a giant fake dashboard or browser frame.

Hero media should have an accessible poster/fallback.

Hero uses a short Flow-generated video loop with a static poster fallback.

---

## 19. FLOW VIDEO PROMPT

Cinematic aerial drone footage over a large commercial Nigerian farm at golden morning light; realistic Nigerian farmland and crop rows; Nigerian farm professionals in their late 20s/early 30s visible naturally at work; camera slowly descends toward one field section; sunlight across crops; premium agriculture brand film; documentary realism; no sci-fi; no holograms; no text; 16:9; photorealistic; elegant 8 second loop.

Implementation:
- use `<video>` with muted autoplay loop playsInline where appropriate
- poster image must make sense without video
- do not bake UI/text into the footage
- overlay website typography in HTML/CSS
- provide reduced-motion fallback to poster/image

---

## 20. IMAGE GENERATION PROMPTS

### Hero/cover still
Create a premium editorial photograph in a believable modern Nigerian commercial environment related to AI Field Intelligence & Yield Prediction. Use Nigerian people approximately 28–35 where people appear, natural skin texture, realistic wardrobe, documentary composition, modern Nigerian architecture or work setting, no white people, no generic Western stock-photo look, no futuristic holograms, no fake UI, no text baked into the image, photorealistic, art-directed brand photography, 3:2.

### Detail / secondary image
Close-up detail from the same world: materials, hands, equipment, documents or environmental cues relevant to field observations and crop-health signals. Nigerian context should remain believable. Premium editorial photography, shallow depth of field, natural light, photorealistic, no text, no holograms, no generic stock aesthetic.

### Team image
Nigerian startup team members aged approximately 28–35 in a modern Lagos/Abuja office or work environment, candid not posed, premium editorial corporate photography, natural interaction, modern clothing, realistic Nigerian features, no white people, no fake logos, no text, no AI-looking faces.

---

## 21. HOMEPAGE LAYOUT — DETAILED

### Section 1 — Hero
Use a strong visual field. H1 should be **See what your fields need before yield is at risk.**.
One short sentence underneath.
One primary CTA and one secondary link.
No third CTA.

### Section 2 — Problem
Use a full-bleed or large split visual that represents the operational pain.
Headline should be 5–9 words.
Supporting text max 2–3 sentences.

### Section 3 — The AI sees it
Create the signature interaction: **A large aerial field image gradually receives a subtle field-grid overlay. One crop section changes from healthy green to a restrained amber signal; the page explains what the AI noticed in one sentence.**.
Use progressive reveal. Do not add four explanatory cards.

### Section 4 — What changes
Use one before/after composition or one narrative graphic.
Example structure:
**BEFORE** → **AI** → **AFTER**

### Section 5 — Proof
Use a typographic or data-driven composition. Maximum three major proof statements.

### Section 6 — How it works
Use a visual sequence matching **OBSERVE → DETECT → PRIORITIZE → PREDICT**.
This may be four illustrated moments, one continuous diagram, or one scroll-driven story.
Do not use four cards.

### Section 7 — Trust / Technology
One architectural illustration, concise copy, infrastructure details beneath it.

### Section 8 — Market / Company
Nigeria → Africa → Europe shown with elegant geography/typography if useful.

### Section 9 — Pricing / conversion
Use the product-specific pricing model. Do not reuse another site's pricing component.

### Section 10 — Final CTA
One statement, one action, plenty of breathing room.

---

## 22. INNER PAGE DIRECTIONS

### `/pricing`
Commercially clear. Product-specific pricing unit. One comparison mechanism max.
No slider copied from Propvera.

### `/security`
Trust-first, diagram-led. Use architecture illustration and concise sections.

### `/about`
Editorial company story. Nigerian origin, team, mission, Nigeria → Africa → Europe growth.

### `/legal`
Quiet, readable legal typography. No marketing decoration that harms reading.

### `/solution`
Demonstrate the AI transformation with a visual sequence. It should feel like an interactive case study.

### `/problem`
Tell the operational problem through imagery, one or two data points and a short narrative. Do not write a research paper.

### `/technology`
Technical architecture diagram + 4–6 concise technical principles. Azure appears naturally here.

---

## 23. UI LANGUAGE

UI is supporting evidence only.

Allowed:
- small contextual interface fragments
- one compact table
- one timeline
- one chart
- one annotated map/diagram
- document snippets

Forbidden:
- giant dashboard hero
- dashboard wall
- app window inside browser frame
- KPI card grid
- 6-card feature section

Use flat, purposeful shapes. Keep radii restrained and product-specific.

---

## 24. MOTION SYSTEM

Use motion to reveal the story.
- 180–250ms micro transitions
- 500–900ms visual reveals
- scroll-linked sequences only when they clarify the product
- no continuous decorative movement everywhere
- honor prefers-reduced-motion

---

## 25. FOOTER ART DIRECTION


## FOOTER CONTENT — COMPLETE ON EVERY ROUTE

Legal name: **Farmora Technologies Ltd** — replace with verified CAC-registered name.
RC: **RC XXXXXXX** — placeholder only; replace with verified number.
HQ: **Lagos, Nigeria** — replace with verified full Nigerian address.
Phone: **+234 XXX XXX XXXX** — replace with verified number.
Email: **hello@farmora.ai**
Social: LinkedIn · Facebook · email icon/address.

Footer groups should include Product, Company, Trust/Security, Legal, Privacy and Terms.
The exact visual footer composition is product-specific; the information is not.


Visual treatment for this product should NOT copy another product's footer.
Possible approach: large statement + four grouped columns + legal strip.
Adjust the exact composition to fit the product's color world.

Footer tagline:
**Field intelligence, built in Nigeria.**

---

## 26. RESPONSIVE BEHAVIOR

### 1440px
Hero media may occupy 55–75% of the viewport.
Use a 12-column grid and strong negative space.

### 1024px
Reduce overlap. Preserve hero subject. Keep nav short.

### 768px
Recompose rather than simply stack. Turn large visual interactions into one-column scroll narratives.

### 375px
- no horizontal overflow
- H1 42–56px based on fit
- media crops around the key subject
- CTAs stack only when needed
- navigation becomes a clean drawer
- complex diagrams simplify, never break

---

## 27. ACCESSIBILITY

Semantic headings.
Alt text for meaningful imagery.
Decorative images marked accordingly.
Keyboard-accessible nav and interactions.
Visible focus.
Reduced-motion support.
Do not rely on color alone for meaning.

---

## 28. FINAL ANTI-SLOP TEST

Reject the build if it looks like:
- a generic AI landing page
- a Tailwind template
- a Webflow clone
- a dashboard product tour
- a collection of rounded cards
- a futuristic AI concept page

Reject it if the first viewport contains:
- a badge above the navbar
- a top announcement/status strip
- a telemetry line directly under the hero CTA
- a giant app screenshot

Ask one final question:
**Can a busy business owner understand what this AI does from the first screen without reading a full paragraph?**
If not, redesign the hero.

---

# 29. BUILD ORDER FOR ANTIGRAVITY

1. Read `00_MASTER_PORTFOLIO_RULES.md`.
2. Read this file.
3. Build the navbar and hero only.
4. Test desktop + mobile.
5. Build the signature interaction.
6. Complete the homepage narrative.
7. Build inner pages.
8. Verify footer consistency across every route.
9. Run responsive QA.
10. Remove anything that looks like a reusable SaaS template.
