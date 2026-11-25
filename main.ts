// Alien Field Notes: The Two Day Earth Review
// Entry for make.fun bounty u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000
// Writes one original one-line alien tourist review of Earth to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Day 1: the locals worship glowing rectangles and call it socializing. Day 2: I joined in. Five stars — never felt so alone, together.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
