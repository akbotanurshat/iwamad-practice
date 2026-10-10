# Week 5 — Handoff notes (SIS 2 starter design)

## Routes (from the prototype)
- `/` → Home (posts list)
- `/contact` → Contact page
- `/posts` → Posts page
- `/post/:id` → Single post
- `*` → 404 Not Found

## Components → React files
- Header → src/components/Header.tsx
- PostCard → src/components/PostCard.tsx
- Button → src/components/ui/Button.tsx
- Tag → src/components/ui/Tag.tsx
- Card → src/components/ui/Card.tsx

## Button variants → prop
- variant: 'primary' | 'secondary'
- primary: full blue background, white text
- secondary: white background, blue border, blue text

## PostCard layout
- direction: column
- gap: 12px
- padding: var(--space-4)
- radius: var(--radius-md)
- width: 320px
- background: var(--color-surface)
- border: 1px solid var(--color-border)

## Breakpoint change
- phone (default): 1 column, header stacked
- desktop (@media min-width: 640px): 2 columns, header in one row
- media query: @media (min-width: 640px)

## Tokens (all ten)
- color/primary    → #1d4ed8
- color/surface    → #FFFFFF
- color/border     → #D1D5DB
- color/text       → #111827
- color/text-muted → #6B7280
- space/1          → 4px
- space/2          → 8px
- space/4          → 16px
- space/8          → 32px
- radius/md        → 12px