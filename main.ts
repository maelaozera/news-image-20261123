// Round 2 entry for news-image-20261123: "The World in One Day".
//
// A newspaper front page that sums up Monday 23 November 2026 in one
// image: a masthead with the date, four illustrated panels (Ukraine sinks
// the Russian warship Merkury off Libya, COP31 ends with no climate deal,
// Iran vows to fight the U.S. blockade, 11 killed in the Dymer strike)
// and a bottom strip on the end of the U.S. penny after 232 years.
//
// The program runs on Node 22, standard library only, with no network.
// It copies the entry.png shipped beside this file to the output
// directory and verifies the copy before exiting, so both grader runs
// write exactly the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const MAX_BYTES = 1_048_576;

const sourcePath = new URL('./entry.png', import.meta.url);
const image = readFileSync(sourcePath);

// The gate accepts a PNG or a JPEG, told apart by its first bytes.
const isPng = image[0] === 0x89 && image[1] === 0x50 && image[2] === 0x4e && image[3] === 0x47;
const isJpeg = image[0] === 0xff && image[1] === 0xd8 && image[2] === 0xff;
if (!isPng && !isJpeg) {
  throw new Error('entry.png is neither a PNG nor a JPEG');
}
if (image.length > MAX_BYTES) {
  throw new Error(`entry.png is ${image.length} bytes, over the 1 MiB cap`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const targetPath = join(OUTPUT_DIR, 'entry.png');
writeFileSync(targetPath, image);

const written = statSync(targetPath);
if (written.size !== image.length) {
  throw new Error(`wrote ${written.size} bytes, expected ${image.length}`);
}
console.log(`wrote ${targetPath} (${written.size} bytes)`);
