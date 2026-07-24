import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("declares every requested route and all seven towel slugs", async () => {
  const [app, towels] = await Promise.all([read("src/App.tsx"), read("src/data/towels.ts")]);
  const routes = [
    "/products",
    "/products/towels",
    "/products/towels/:slug",
    "/contact",
    "/about",
  ];
  routes.forEach((route) => assert.match(app, new RegExp(route.replace(/[/:]/g, "\\$&"))));
  ["home", "hotel", "restaurant-kitchen", "wash-cleaning", "bath", "hand", "gym-spa"].forEach(
    (slug) => assert.match(towels, new RegExp(`slug: "${slug}"`)),
  );
});

test("contains Swedish-first and English business content", async () => {
  const translations = await read("src/i18n/translations.ts");
  assert.match(translations, /Private label och inköp för nordiska företag/);
  assert.match(translations, /Private-label sourcing for Nordic businesses/);
  assert.match(translations, /MOQ bekräftas efter specifikationsgenomgång/);
  assert.match(translations, /MOQ confirmed after specification review/);
  assert.match(translations, /Final quotations depend on product specifications/);
});

test("contact form validates, creates mailto and includes requested fields", async () => {
  const contact = await read("src/pages/ContactPage.tsx");
  ["organisationNumber", "contactPerson", "towelCategory", "privateLabel", "packaging", "tests", "deliveryDate", "specificationFile"].forEach(
    (field) => assert.match(contact, new RegExp(field)),
  );
  assert.match(contact, /mailto:/);
  assert.match(contact, /Formspree or custom API/);
  assert.match(contact, /aria-invalid/);
});

test("ships GitHub Pages, SEO and static assets", async () => {
  const [vite, workflow, index, robots, sitemap] = await Promise.all([
    read("vite.static.config.ts"),
    read(".github/workflows/deploy-pages.yml"),
    read("index.html"),
    read("public/robots.txt"),
    read("public/sitemap.xml"),
  ]);
  assert.match(vite, /base: "\/scandibridge-sourcing\/"/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
  assert.match(index, /application\/ld\+json/);
  assert.match(index, /og:title/);
  assert.match(robots, /Sitemap:/);
  assert.match(sitemap, /products\/towels\/gym-spa/);
  await access(new URL("public/scandibridge-logo.png", root));
  await access(new URL("public/hero-logistics.jpg", root));
  await access(new URL("dist-pages/index.html", root));
});
