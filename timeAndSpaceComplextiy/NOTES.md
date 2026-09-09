# Notes

## Teaching preferences (from the user)

- **Mission**: coding interviews — state & justify Big-O out loud, compare approaches under pressure.
- **Level**: recognises O(n), O(n^2), O(log n) by name; cannot reliably derive them yet.
- **Learning style**: worked examples (step-by-step through code) + visuals (growth-rate charts).
  Lean on both in every lesson. Quizzes are fine but pair them with a worked example first.
- Language is **JavaScript** (NamasteDSA course). Use JS in all code examples.

## Workspace conventions

- Lessons: `lessons/NNNN-slug.html`, self-contained, link `../assets/lesson.css`.
- Reference docs: `reference/*.html`, print-friendly, revisitable.
- Every lesson: one win, a primary source, a "ask your teacher" reminder, links to glossary.
- **Everything the user reads is HTML.** The `.md` steering files (MISSION, RESOURCES,
  GLOSSARY, NOTES, learning-records) stay as the source of truth, but each has a styled
  mirror the user actually opens:
  - `index.html` ← the hub (mirrors README + mission "why")
  - `reference/glossary.html` ← GLOSSARY.md
  - `reference/resources.html` ← RESOURCES.md
  When you edit a `.md`, update its HTML mirror in the same pass. All cross-links in
  lessons/reference point at `.html`, never `.md`.

## Session log

- 2026-09-09: Workspace created. Mission set. Lesson 0001 (what Big-O measures) delivered.
- 2026-09-09: User found raw `.md` links ugly in the browser. Added HTML mirrors
  (`index.html`, `reference/glossary.html`, `reference/resources.html`) and repointed all
  cross-links. Keep this mirror discipline going forward.
- 2026-09-09: Retrieval check on Lesson 1 — 3/3 correct from memory (LR-0002). Delivered
  Lesson 0002 (linear & nested loops), worked on the user's own `searchElement.js` and
  `starPatterns.js`.
- 2026-09-09: Retrieval check on Lesson 2 — 3/3 from memory incl. the triangular-loop
  trap (LR-0003). Delivered Lesson 0003 (logarithmic loops), worked example is the user's
  `countDigits.js` plus `i *= 2` and binary search.
- 2026-09-09: Retrieval check on Lesson 3 — 3/3 from memory incl. `i += 10` distractor
  (LR-0004). Delivered Lesson 0004 (ranking the common classes) with interleaved drill +
  the "what n can each class handle" heuristic. Promoted glossary terms: constant / log /
  linear / linearithmic / quadratic time (both GLOSSARY.md and reference/glossary.html).
- 2026-09-09: Retrieval check on Lesson 4 — 3/3 from memory (ranking, input-size
  heuristic, named merge sort) (LR-0005). Delivered Lesson 0005 (space complexity + the
  recursion call stack), incl. the Fibonacci time≠space gotcha and the "state your
  output assumption" point.
- 2026-09-09: Retrieval check on Lesson 5 — 3/3 from memory incl. output-not-counted
  nuance (LR-0006). Delivered Lesson 0006 ("can you do better?") — bottleneck → 3 levers
  → Two Sum worked O(n²)→O(n), plus the 3-sentence interview script. **All 6 lessons now
  cover the full MISSION.** Remaining work is fluency, not new knowledge:
  - When the user next shows up: offer the mixed final assessment (10 problems, brute +
    optimal, time + space each). Use LeetCode easy/mediums.
  - Hand off to r/leetcode + LeetCode Discuss for real-world reps (already in RESOURCES).
  - Possible future scope bump: recurrences / Master Theorem when the course hits merge
    sort — currently out of scope in MISSION. Confirm with user before adding.
