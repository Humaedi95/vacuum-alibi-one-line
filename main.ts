import { mkdirSync, writeFileSync } from "node:fs";

// The Vacuum's Alibi: one deadpan line from a robot vacuum explaining
// why it missed a spot. 200 characters maximum.
const LINE =
  "I did not miss that spot. My sensors classified it as a protected habitat after the cat marked it, so I filed it under 'do not disturb' and moved on.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
