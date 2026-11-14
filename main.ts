// make.fun food-picture-01 — "Make the best-looking food picture".
// This program copies the entry image (entry.png, in this repository) to the
// output directory make.fun runs it with, so the judge sees exactly those bytes.
//
// Concept: "The Tallest Pull" — a steaming bowl of tonkotsu ramen, chopsticks
// lifting a tall, glistening tangle of noodles high above the bowl, broth
// droplets falling, steam catching warm golden light; torched chashu, a halved
// jammy egg with a molten yolk spilling, chili-oil swirls and scallions below.
// Chosen after comparing six generated variants (two ramen, plus steak, dim sum,
// fried chicken and chocolate lava): this one scored best on the judge's first
// criterion — one look and you want to eat it — and reads clearly at 300px.
//
// Node 22, standard library only. No network, no dependencies.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
