---
name: namokar-next-structure
description: Use when creating, reviewing, or refactoring the Namokar production website with the agreed Next.js + React folder structure based on the provided Pixel Eye reference zip. Applies to route creation, page containers, reusable common components, page section components, content constants, API/form helpers, CSS modules, global styles, and asset placement.
---

# Namokar Next Structure

## Overview

Use this skill to keep Namokar website work aligned with the reference structure from `/Users/jashu/Desktop/Master /pixel-eye-web-frontend-main.zip`. Treat the zip as a structure reference only; do not copy Pixel Eye branding, copy, medical content, or business-specific assets unless the user explicitly asks.

The reference zip is a Next.js Pages Router project. Prefer this structure for Namokar unless the user explicitly asks to migrate to App Router.

## Reference Shape

Use this top-level layout:

```text
.
├── public/
│   └── assets/
│       ├── Header/
│       ├── Footer/
│       ├── Home/
│       ├── About/
│       ├── Service/
│       └── Appointment/
├── src/
│   ├── pages/
│   │   ├── _app.jsx
│   │   ├── _document.jsx
│   │   ├── index.jsx
│   │   ├── about.jsx
│   │   ├── appointment.jsx
│   │   ├── service.jsx
│   │   ├── thank-you.jsx
│   │   ├── error.jsx
│   │   ├── service/
│   │   │   └── [slug-or-service].jsx
│   │   └── api/
│   │       └── forms/
│   │           └── submit.js
│   ├── pagecomponent/
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Appointment/
│   │   ├── Service/
│   │   └── ServiceDetail/
│   ├── component/
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Appointment/
│   │   ├── Service/
│   │   └── ServiceDetail/
│   ├── common/
│   │   ├── Layout/
│   │   ├── BannerNav/
│   │   ├── Footer/
│   │   ├── Button/
│   │   ├── Title/
│   │   ├── HeroBanner/
│   │   └── RevealOnView/
│   ├── constant/
│   ├── lib/
│   └── style/
│       └── globals.css
├── jsconfig.json
├── next.config.mjs
├── eslint.config.mjs
└── package.json
```

## Responsibilities

Keep each folder responsible for one level of the site:

- `src/pages`: route entrypoints only. Keep files thin; import and render the matching `src/pagecomponent/*`.
- `src/pagecomponent`: page-level composition. Assemble sections in order and pass page content into them.
- `src/component`: page-specific sections. Put Home sections under `component/Home`, About sections under `component/About`, and so on.
- `src/common`: reusable layout and UI shared across pages, such as nav, footer, buttons, titles, banners, animation wrappers, and layout shell.
- `src/constant`: static website content, nav links, footer links, service lists, hero copy, FAQs, stats, testimonials, and section data.
- `src/lib`: integration helpers, API clients, form submission helpers, and server-side utilities.
- `src/style`: global CSS only. Put component-specific styling beside the component as `styles.module.css`.
- `public/assets`: static images and files grouped by page or shared region.

## Page Pattern

Create route files as small wrappers:

```jsx
import HomePage from "@/pagecomponent/Home";

export default function Home() {
  return <HomePage />;
}
```

Create page containers as section composers:

```jsx
import Banner from "@/component/Home/Banner";
import Services from "@/component/Home/Services";
import { homeContent } from "@/constant/homeContent";

export default function HomePage() {
  return (
    <>
      <Banner content={homeContent.banner} />
      <Services services={homeContent.services} />
    </>
  );
}
```

Create sections as focused components:

```text
src/component/Home/Banner/
├── index.jsx
└── styles.module.css
```

## Layout Pattern

Use `src/pages/_app.jsx` for global imports and the shared shell:

```jsx
import "@/style/globals.css";
import Layout from "@/common/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
```

Put global nav/footer decisions in `src/common/Layout`. If a page owns its hero nav, define that exception in one array inside Layout instead of scattering conditional nav logic across pages.

## Naming Rules

- Use PascalCase folder names for common UI, page containers, and most section components: `HeroBanner`, `BannerNav`, `ServiceCard`.
- Keep existing reference-style lowercase names only when preserving an established folder from the project, such as `form`.
- Use `index.jsx` for each component entrypoint and `styles.module.css` for local component styles.
- Use named content files in `src/constant`, such as `homeContent.js`, `navContent.js`, `footerContent.js`, `serviceContent.js`, and `aboutContent.js`.
- Use the `@/*` import alias pointing to `src/*`.

## Workflow

1. First inspect the current project structure with `rg --files`, `find`, or targeted `sed` reads.
2. Confirm whether the project is still Pages Router before adding files.
3. Add route entrypoints under `src/pages`.
4. Add page composition under `src/pagecomponent/<PageName>/index.jsx`.
5. Add repeated or shared UI under `src/common`; add page-specific sections under `src/component/<PageName>`.
6. Put editable website copy and structured section data in `src/constant`.
7. Put images and static assets under `public/assets/<PageNameOrSharedArea>`.
8. Keep CSS module files beside components; use `src/style/globals.css` only for resets, variables, typography, and cross-site base styles.
9. Run the repo's available validation command, usually `npm run lint` or `npm run build`, after implementation changes.

## Guardrails

- Do not rewrite the folder structure to App Router unless the user explicitly asks.
- Do not place large page content directly in `src/pages`.
- Do not put page-specific sections in `src/common`.
- Do not put shared nav/footer/button logic inside page sections.
- Do not create duplicate layout shells per page.
- Do not copy `.DS_Store`, `__MACOSX`, Pixel Eye content, or unrelated reference assets into Namokar.
