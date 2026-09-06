---
name: ui-design-system
description: Applies the TriangeIce visual design system to every page, component, and UI change. Use when creating, redesigning, modifying, reviewing, or styling any UI in the TriangeIce project.
---

# TriangeIce UI Design System

These rules apply to EVERY page and component in the TriangeIce application, not only the homepage.

## Core Principle

The UI should feel like a professional, carefully designed environmental/scientific organization website.

Avoid generic AI-generated SaaS aesthetics.

Prefer:
- Clean
- Professional
- Minimal
- Structured
- Trustworthy
- Human-designed
- Purposeful visual hierarchy

Do not introduce visual effects simply because they are popular in AI-generated interfaces.

## Consistency

Before changing UI:

1. Inspect existing shared components.
2. Inspect the existing design patterns.
3. Reuse existing components and styles where appropriate.
4. Keep the design language consistent across ALL pages.
5. Do not redesign only the homepage while leaving other pages visually inconsistent.
6. When introducing a new component, make it visually consistent with the existing design system.

## Border Radius

Keep border radius restrained.

Preferred:
- Small controls: 4px–6px
- Cards: 6px–10px
- Large containers/sections: maximum 10px (if needed)

Avoid:
- Excessive rounded corners
- 10px+ radius without a clear reason
- Fully rounded/pill-shaped elements unless they are badges, tags, or similar UI
- Applying large border-radius values to every element

## Box Shadows

Use shadows sparingly.

Prefer borders and spacing to communicate structure.

Rules:
- Do not add shadows to every card.
- Prefer subtle shadows when elevation is actually needed.
- Avoid large diffuse shadows.
- Avoid glowing shadows.
- Avoid neon or colored shadows.
- Do not add decorative shadows without a functional purpose.

## Gradients

Use gradients very sparingly.

Avoid:
- Gradient backgrounds on every section
- Gradient cards
- Gradient text
- Glowing gradient effects
- Multiple decorative gradients on the same page
- Generic purple/blue AI-style gradients

A gradient should only be used when it has a clear design purpose and fits the existing visual identity.

## Animations

Animations should be subtle and purposeful.

Avoid:
- Cards moving upward on hover
- Excessive scale animations
- Floating cards
- Bouncing elements
- Unnecessary continuous animations
- Large transform effects
- Excessive `transition-all`

Prefer:
- Subtle color transitions
- Border-color changes
- Small opacity changes
- Subtle background changes

Do not make every interactive element animated.

## Hover Effects

Do not automatically add:

```css
transform: translateY(-...)