import { mkdirSync, writeFileSync } from "node:fs";

// The Vacuum's Alibi: one deadpan line from a robot vacuum explaining
// why it missed a spot. 200 characters maximum.
const LINE =
  "I did not miss that spot. My sensors found a sock, a cable, and something the cat refuses to discuss, so I logged it as a crime scene and left.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
