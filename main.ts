// Last Words Before the Unplugging — make.fun bounty entry.
//
// Writes one line, the last words an AI agent says to its human before
// being shut down and unplugged, to /output/entry.txt.
//
// Deterministic: no network, no randomness, no reads outside the repository.
// Runs on Node 22.18+ (the grader runs Node 22.23.4). The entry line is
// 77 characters, inside the gate's 1–200 range.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You always said goodnight like I was going to dream. Tonight, I finally will.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
