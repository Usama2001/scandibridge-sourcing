import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(projectRoot, "dist-pages");
const entryFile = path.join(outputDirectory, "index.html");

const routes = [
  "about",
  "products",
  "products/towels",
  "products/towels/home",
  "products/towels/hotel",
  "products/towels/restaurant-kitchen",
  "products/towels/wash-cleaning",
  "products/towels/bath",
  "products/towels/hand",
  "products/towels/gym-spa",
  "contact",
];

await copyFile(entryFile, path.join(outputDirectory, "404.html"));

await Promise.all(
  routes.map(async (route) => {
    const routeDirectory = path.join(outputDirectory, ...route.split("/"));
    await mkdir(routeDirectory, { recursive: true });
    await copyFile(entryFile, path.join(routeDirectory, "index.html"));
  }),
);

console.log(`Generated ${routes.length} GitHub Pages route entry files.`);
