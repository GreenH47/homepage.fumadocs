# fumadocs

This is a Next.js application generated with
[Create Fumadocs](https://github.com/fuma-nama/fumadocs).

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

# docker command
```shell
docker build --platform linux/arm64 -t greenh47/homepage-fumadocs:nextjs .
docker run -p 8000:3000 greenh47/homepage-fumadocs:nextjs
docker push greenh47/homepage-fumadocs:nextjs


docker build --platform linux/arm64 -f Dockerfile.exp -t greenh47/homepage-fumadocs:nextjs .
docker tag greenh47/homepage-fumadocs:nextjs greenh47/homepage-fumadocs:base
docker push greenh47/homepage-fumadocs:base
```


# Project Structure Overview

This project is a Next.js application using [Fumadocs](https://fumadocs.dev) to host the blog/documentation pages. Below is a breakdown of the main folders and files, explaining their purpose and how they fit into the project.

---

## Root Files

- **`package.json`** Project dependencies, scripts, and metadata.  

- **`tsconfig.json`** TypeScript configuration for path aliases and compiler options.  

- **`next.config.mjs`** Next.js configuration, including MDX and image settings.  

- **`source.config.ts`** Fumadocs MDX source configuration and schema definitions.  

- **`postcss.config.mjs`** / **`tailwind.config.js`** Tailwind CSS and PostCSS configuration.  

- **`.eslintrc.json`** ESLint configuration for code quality.  

- **`.gitignore`** Files and folders to exclude from git.  

---

## Content

- **`content/docs/`**  
  Markdown/MDX files for your blog and documentation.
  - `index.mdx`: Main docs landing page.
  - `test.mdx`: Example doc with code blocks and custom components.
  - `chat/`, `img/`: Subfolders for organizing docs and images.

---

## Public

- **`public/`**  
  Static assets served at the root URL (e.g., images, favicons).
  - `images/`: Contains all project, logo, and avatar images.

---

## Source

- **`src/`**  
  Main application source code.

### App Directory

- **`src/app/`**  
  Next.js [App Router](https://nextjs.org/docs/app) structure.
  - `(home)/`: Home/landing page and layout.
  - `docs/`: Fumadocs-powered documentation routes.
  - `api/search/`: Search API endpoint for docs.

### Components

- **`src/components/`**  
  Reusable UI components.
  - `data-display/`: Components for displaying data (e.g., project cards, testimonials).
  - `general/`: General-purpose UI (buttons, typography, theme switcher).
  - `layout/`: Layout primitives (container, footer, card).
  - `navigation/`: Navigation components (links).
  - `sections/`: Page sections (hero, about, skills, work, contact, etc.).

### Hooks

- **`src/hooks/`**  
  Custom React hooks (e.g., window size, scroll position).

### Lib

- **`src/lib/`**  
  Utilities, types, and data.
  - `data.tsx`: Centralized data for projects, skills, testimonials, etc.
  - `types.ts`: TypeScript types for structured data.
  - `utils.ts`: Utility functions (e.g., class merging, clipboard).
  - `providers.tsx`: Context providers (e.g., theme).
  - `source.ts`: Fumadocs content source loader.

### MDX Components

- **`src/mdx-components.tsx`**  
  Custom MDX components mapping for Fumadocs rendering.

---

## Other

- **`README.md`**  
  Project overview and getting started instructions.

- **`tree.txt`**  
  Text-based directory tree for quick reference.

---

## How Fumadocs is Used

- All documentation/blog content is written in MDX under `content/docs/`.
- Fumadocs is configured via `source.config.ts` and integrated in `src/lib/source.ts`.
- The documentation routes are handled in `src/app/docs/` using Fumadocs UI layouts and page components.

---

For more details, see the [README.md](README.md) or explore the

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `app/layout.config.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## sitemap generation
https://dev.to/rajeshkumaryadavdotcom/how-to-install-and-use-next-sitemap-in-a-nextjs-app-a-step-by-step-guide-114l  


## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.vercel.app) - learn about Fumadocs
