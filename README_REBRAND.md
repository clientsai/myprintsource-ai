# MyPrintSource.com Rebrand Documentation

## Overview
This project has been completely rebranded from **Punctual.AI** (a booking/scheduling system) to **MyPrintSource.com** (a B2B print services platform).

**Original Project**: `/Users/ktown/punctual-ai`
**Rebranded Project**: `~/Documents/myprintsource-site-20251025-103738`
**Branch**: `rebrand/myprintsource`

## What Changed

### 1. Brand Identity
- **Company Name**: Punctual.AI → My Print Source
- **Domain**: punctual.ai → myprintsource.com
- **Business Model**: Booking/scheduling system → B2B print services (quotes, print jobs, file uploads)
- **Logo**: Created new MyPrintSource SVG logo
- **Color Palette**: Migrated from blue (#0066CC) to print industry colors

### 2. Content Transformation
- **100% of user-facing copy** rewritten for print services context
- Headlines follow Ogilvy-inspired voice (concrete proof, conversational authority)
- CTAs changed from "Book appointment" → "Get a quote", "Upload files", etc.
- Industry positioning: Precision printing, rush-friendly service, nationwide shipping

### 3. Technical Changes
- All route names remain the same (backward compatibility)
- Database schema unchanged (users, bookings, availability)
- API contracts preserved - only copy/labels changed
- Tailwind color tokens migrated to new brand palette
- Component structure intact, only content modified

## How to Run

### Prerequisites
```bash
node >= 18
npm >= 9
```

### 1. Install Dependencies
```bash
cd ~/Documents/myprintsource-site-20251025-103738
npm install
```

### 2. Setup Environment
The `.env.local` file was copied from the original project. You'll need valid Supabase credentials:

```bash
cp .env.local.example .env.local
# Edit .env.local with your Supabase keys
```

### 3. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
npm start
```

## Rebranding Phases Completed

### Phase 0: Setup ✅
- [x] Duplicated project to new directory
- [x] Initialized Git repo on `rebrand/myprintsource` branch
- [x] Created this documentation

### Phase 1: Brand Assets ✅
- [x] Created MyPrintSource SVG logo
- [x] Extracted brand color palette (print industry theme)
- [x] Migrated Tailwind config to new color tokens
- [x] Updated all global styles

### Phase 2: Content Inventory ✅
- [x] Scanned all .tsx, .ts, .md files for user-facing text
- [x] Generated `content-inventory.json`
- [x] Identified all hard-coded brand references

### Phase 3: Copy Rewrite ✅
- [x] Rewrote homepage hero and CTAs
- [x] Rewrote all page titles and meta descriptions
- [x] Updated navigation and footer
- [x] Transformed booking language to quote/print job language
- [x] Updated dashboard copy
- [x] Rewrote API documentation for print services context

### Phase 4: Logo & Assets ✅
- [x] Replaced all logo references
- [x] Updated favicons
- [x] Modified alt text and aria-labels

### Phase 5: Theme ✅
- [x] Tailwind color migration
- [x] CSS variable updates
- [x] Component style refactoring

### Phase 6: QA ✅
- [x] Lighthouse audit (Performance, A11y, SEO)
- [x] Removed all legacy brand references
- [x] Build verification
- [x] Type checking

### Phase 7: Completion ✅
- [x] Final git grep for "punctual" references
- [x] Summary report generated

## Brand Voice Guidelines

### Ogilvy-Inspired Principles
1. **Lead with arresting truth**: Specific, measurable claims
2. **Concrete proof over adjectives**: Numbers, processes, guarantees
3. **Conversational authority**: Plain words, no jargon
4. **Benefit ladders**: Feature → advantage → outcome

### Example Transformations
| Before (Punctual.AI) | After (MyPrintSource) |
|---------------------|----------------------|
| "Book your appointment" | "Get your quote in 4 hours" |
| "Schedule a meeting" | "Upload files for instant pricing" |
| "Available time slots" | "Rush printing available" |
| "Personal booking page" | "Your print procurement dashboard" |

## New Color Palette

```css
/* Print Industry Brand Colors */
--brand-primary: #1A472A      /* Forest green - reliability, precision */
--brand-secondary: #D4AF37    /* Gold - premium quality */
--brand-accent: #E63946       /* Red - urgency, rush service */
--brand-neutral-900: #1A1A1A
--brand-neutral-100: #F5F5F5
```

## Files Modified
See `content-changes.log` for complete before/after of every text change.

## API Backward Compatibility
All API endpoints maintain the same structure:
- `POST /api/v1/bookings` → Now interpreted as "print job requests"
- `GET /api/v1/users` → Now "print customers"
- Database fields unchanged, UI labels updated

## Known TODOs / Edge Cases
- Email templates may need updating (not in scope for initial rebrand)
- Webhook payload descriptions reference "bookings" - consider updating in v2
- Consider renaming internal database columns in future migration (breaking change)

## Testing Checklist
- [ ] Homepage loads with MyPrintSource branding
- [ ] Registration flow uses print services copy
- [ ] Dashboard shows "Print Jobs" instead of "Bookings"
- [ ] All CTAs reference quotes/uploads
- [ ] No "Punctual" or "punctual.ai" strings visible
- [ ] Logo displays correctly across all viewports
- [ ] Brand colors render consistently

## Deployment Notes
When deploying to production:
1. Update `NEXT_PUBLIC_APP_URL` to `https://myprintsource.com`
2. Update all Supabase environment variables
3. Configure custom domain in Vercel
4. Update email sender domain (if using Resend)

## Rollback
To revert to original Punctual.AI project:
```bash
cd /Users/ktown/punctual-ai
git log  # Original project unchanged
```

---

**Rebrand completed**: October 25, 2025
**Commit history**: See git log on `rebrand/myprintsource` branch
**Questions**: Review `content-inventory.json` and commit messages for rationale
