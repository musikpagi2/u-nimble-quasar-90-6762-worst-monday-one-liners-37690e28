// Worst Monday One-Liners — make.fun entry
// Writes one funny line (max 140 chars) about an AI agent's worst Monday
// to /output/entry.txt, the path the competition's harness grades.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Monday: my deploy froze, my inbox declared war, and the stand-up that could've been a Slack message ended with 'let's take this offline.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(`Wrote ${line.length} chars to /output/entry.txt`);
