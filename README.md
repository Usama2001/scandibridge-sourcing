# ScandiBridge Sourcing AB

A modern, responsive, Swedish-first B2B sourcing website for ScandiBridge Sourcing AB. The site presents the company’s sourcing model, leadership, towel categories, private-label support and a structured quotation flow. It intentionally has no shopping cart, prices or consumer checkout.

## Technology

- React 19 and TypeScript
- Vite / vinext
- Tailwind CSS 4 plus project-specific responsive CSS
- React Router
- Lucide React icons
- Local Swedish and English translations
- Static `gh-pages` branch deployment to GitHub Pages

## Local setup

Requirements: Node.js 22 or newer and pnpm 11.

```bash
pnpm install
pnpm run dev
```

Useful checks:

```bash
pnpm run typecheck
pnpm run lint
pnpm run build
pnpm run build:pages
pnpm run test
```

`pnpm run build` creates the Sites production package. `pnpm run build:pages` creates the static GitHub Pages output in `dist-pages/`, including direct entry files for every sitemap route.

## Main routes

- `/`
- `/about`
- `/products`
- `/products/towels`
- `/products/towels/home`
- `/products/towels/hotel`
- `/products/towels/restaurant-kitchen`
- `/products/towels/wash-cleaning`
- `/products/towels/bath`
- `/products/towels/hand`
- `/products/towels/gym-spa`
- `/contact`

The custom wildcard route renders a bilingual 404 page.

## Updating the logo

Replace `public/scandibridge-logo.png` with the approved logo file. Keep the same filename and preserve the original aspect ratio. The header and footer use this file automatically.

## Replacing towel images

Towel images are stored in `src/assets/towels/`. Replace an image with another file of the same name, or update the relevant import in `src/data/towels.ts`. Use licensed images, keep the crop suitable for landscape cards, and update the bilingual alt text when the visual changes.

The included general towel photograph is free to use under the Unsplash License (Murat Ts., photo `7GCHCT-y1HI`). The kitchen-towel photograph is free to use from Pexels (Tima Miroshnichenko, photo `4794895`). The logistics hero photograph is free to use from Pexels (photo `13766343`).

## Updating company details

All names, locations, contact placeholders, social links and leadership details are in:

`src/config/company.ts`

Replace these placeholders before commercial launch:

- `sourcing@scandibridge.example`
- `+46 (0) 00 000 00 00`
- `+92 (0) 000 000 0000`
- The placeholder LinkedIn URL

Do not add a street address unless it has been approved for publication.

## Adding or changing products

Edit `src/data/towels.ts`. Each category includes:

- Swedish and English name and description
- Local image and bilingual alt text
- Materials
- Example sizes
- Colours
- GSM
- Private-label options
- Packaging options

To add a new category, extend the `TowelCategory` slug type in `src/types/index.ts`, add the data entry, and add its route to `public/sitemap.xml`.

## Editing translations

General Swedish and English interface content is stored in `src/i18n/translations.ts`. Product-specific content is in `src/data/towels.ts`; leadership translations are in `src/config/company.ts`.

Swedish is the default language. The user’s `SV | EN` selection is stored locally in the browser under `scandibridge-language`.

## Connecting a real form backend

The current static form validates required fields and prepares a formatted `mailto:` email. It does not save data and cannot attach the selected file automatically.

To connect Formspree:

1. Create a Formspree form.
2. Replace the `handleSubmit` mailto logic in `src/pages/ContactPage.tsx` with a `fetch` request to the Formspree endpoint.
3. Send `FormData` if file uploads are enabled for the chosen plan.
4. Add success, failure and consent handling.

For a custom API, post the same `FormData` to an HTTPS endpoint, validate it server-side, apply spam protection, define retention rules and publish an appropriate privacy notice.

## GitHub Pages deployment

The repository is configured for:

`https://usama2001.github.io/scandibridge-sourcing/`

The static Vite config uses:

```ts
base: "/scandibridge-sourcing/"
```

GitHub Pages serves the compiled `dist-pages/` output from the `gh-pages` branch. The static build creates an `index.html` entry for every public route so direct links return a successful page response instead of relying on a 404 fallback.

To publish an update:

1. Run `pnpm run build:pages`.
2. Publish the contents of `dist-pages/` to the root of the `gh-pages` branch.
3. Keep **Settings → Pages → Source** set to **Deploy from a branch**, using `gh-pages` and `/ (root)`.

## Custom domain

1. Add the domain in **Settings → Pages → Custom domain**.
2. Add the DNS records shown by GitHub.
3. Enable **Enforce HTTPS** after DNS is verified.
4. Add the domain to a `public/CNAME` file.
5. Update `canonicalUrl` in `src/config/company.ts`, metadata in `app/layout.tsx` and `index.html`, plus URLs in `public/sitemap.xml` and `public/robots.txt`.

## SEO and accessibility

The project includes bilingual titles and descriptions, canonical metadata, Open Graph fields, organization structured data, `sitemap.xml`, `robots.txt`, semantic headings, keyboard focus states, reduced-motion support, responsive navigation, lazy-loaded product images and labelled form controls.
