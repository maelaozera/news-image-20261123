// news-image-20261123: copy the editorial image to the output directory.
// The image (entry.png, next to this file) sums up the world news of
// Monday 23 November 2026. Standard library only, no network.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.png");
copyFileSync(join(here, "entry.png"), outPath);
// Fail loudly if the copy did not land, instead of exiting 0 silently.
if (!existsSync(outPath)) {
  throw new Error(`entry.png was not written to ${outPath}`);
}
