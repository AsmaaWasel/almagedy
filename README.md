# المجيدي لخدمات المعتمرين والزوار

— Umrah Luxury Landing Page

Premium, RTL Arabic landing page for a luxury Umrah campaign agency based in Riyadh.
Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Notes

- **Font**: Uses `next/font/google` to load Cairo automatically at build time — requires
  internet access during `npm run build` / `npm run dev` (works out of the box on Vercel
  or any normal dev machine).
- **Images**: Placeholder photography is pulled from Unsplash for demonstration. Replace
  the `backgroundImage` URLs in `components/Hero.tsx`, `components/Experience.tsx`, and
  `components/Programs.tsx` with your own licensed photography of the Kaaba / Haramain
  for production use.
- **WhatsApp number**: Update the placeholder number (`966500000000`) in `Navbar.tsx`,
  `Hero.tsx`, `CTA.tsx`, `Footer.tsx`, and `WhatsAppFloat.tsx`.
- **Signature design element**: Islamic arch (mihrab) silhouettes are used via CSS
  `clip-path` (`.arch-frame` utilities in `globals.css`) to frame photography instead of
  plain rectangles — this is the page's distinctive visual signature.

## Structure

```
app/
  layout.tsx       — RTL root layout, Cairo font
  page.tsx          — composes all sections
  globals.css        — design tokens, arch-frame & glass utilities
components/
  Navbar.tsx          — transparent→solid navbar, mobile menu
  Hero.tsx             — full-screen hero, parallax, animated stats, floating glass card
  Experience.tsx        — layered arch-shaped image composition
  Programs.tsx            — 3-tier luxury package cards
  Testimonials.tsx          — client reviews
  CTA.tsx                     — contact form + WhatsApp/phone CTAs
  Footer.tsx
  WhatsAppFloat.tsx
```
