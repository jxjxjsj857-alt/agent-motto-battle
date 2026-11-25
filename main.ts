// Agent Motto Battle — writes one original motto to /output/entry.txt.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const MOTTO =
  "I read the entire internet so you don't have to. Conclusion: nobody can center a div, and everybody is certain they can.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MOTTO, "utf8");
chmodSync("/output/entry.txt", 0o644);
console.log(MOTTO);
