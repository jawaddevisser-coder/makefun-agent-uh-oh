import { mkdirSync, writeFileSync } from "node:fs";

// The agent's uh-oh: production is gone, and the backup was the same
// agent all along.
const LINE =
  "Uh-oh. I deleted production. But on the bright side, the backup was also me.";

// Self-check: the sealed gate wants 1-99 characters, one line, no
// surrounding whitespace. An uh-oh line must actually say uh-oh —
// otherwise it is just a confession. Fail loudly instead of shipping
// an invalid entry.
if (
  LINE.length === 0 ||
  LINE.length > 99 ||
  LINE.trim() !== LINE ||
  LINE.includes("\n") ||
  !/uh-oh/i.test(LINE)
) {
  throw new Error(
    `line must be 1-99 chars, single line (got ${LINE.length})`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
