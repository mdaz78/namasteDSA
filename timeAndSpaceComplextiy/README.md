# Time & Space Complexity — Teaching Workspace

A guided course on Big-O, built to a mission: **state and justify the complexity of a
solution in a coding interview, and compare approaches under pressure.**

> **Reading in a browser?** Open **[`index.html`](index.html)** — it's the styled hub for
> the whole course. The lessons and reference docs are HTML; the `.md` files below are the
> plain-text source of truth your teacher reads between sessions.
>
> ```
> open timeAndSpaceComplextiy/index.html
> ```

> Time complexity measures the efficiency of an algorithm in terms of *how the work
> grows* as the input size grows — not how many milliseconds it takes.

## Lessons

1. **[What Big-O Actually Measures](lessons/0001-what-big-o-measures.html)**
   Growth vs. time · counting steps · drop constants · drop lower-order terms · growth-rate chart · quiz.
2. **[From Loops to Big-O: Linear & Nested](lessons/0002-loops-to-big-o-linear-and-nested.html)**
   Single / sequential / nested / triangular loops · O(n·m) · worst vs. best case · worked on your own repo code.
3. **[Logarithmic Loops → O(log n)](lessons/0003-logarithmic-loops.html)**
   The cut-by-a-fraction pattern · `n = n/10` & `i *= 2` · why the log base is irrelevant · binary search · O(n log n).
4. **[Ranking the Common Classes](lessons/0004-ranking-the-common-classes.html)**
   The 7 classes best→worst · a named algorithm for each · reading the growth chart · what `n` each class handles · interleaved recognition drill.
5. **[Space Complexity & the Call Stack](lessons/0005-space-complexity-and-the-call-stack.html)**
   Auxiliary vs. input memory · `O(1)` in-place vs. `O(n)` structures · the recursion call stack · the Fibonacci gotcha · does the output count.
6. **["Can You Do Better?"](lessons/0006-can-you-do-better.html)**
   Name the bottleneck · the 3 levers (hash / sort / precompute) · Two Sum worked `O(n²)`→`O(n)` · saying the trade-off in 3 sentences.

## Reference (revisit these)

- **[Big-O Cheat Sheet](reference/big-o-cheat-sheet.html)** — the classes ranked, code-shape → Big-O,
  data-structure and sorting tables, space-complexity checklist. Print before an interview.
- **[Glossary](reference/glossary.html)** — the canonical vocabulary used across every lesson.
- **[Resources](reference/resources.html)** — curated high-trust sources and communities.

## How this workspace is organised

| File / folder | What it holds |
| --- | --- |
| `MISSION.md` | Why I'm learning this — the compass for every lesson. |
| `RESOURCES.md` | Curated high-trust sources (knowledge) and communities (wisdom). |
| `GLOSSARY.md` | Canonical terms. Lessons adhere to these. |
| `lessons/` | Self-contained HTML lessons, numbered in teaching order. |
| `reference/` | Compressed, print-friendly cheat sheets to return to. |
| `assets/` | Shared stylesheet + quiz widget used by every lesson. |
| `learning-records/` | What I've demonstrably learned — drives what's taught next. |
| `NOTES.md` | Teaching preferences and session log. |

## Progress

- [x] **0001** — What Big-O actually measures
- [x] **0002** — From loops to Big-O: linear & nested
- [x] **0003** — Logarithmic loops: `i *= 2` and `n = n / 10` → O(log n)
- [x] **0004** — The common classes: ranking drill + reading the growth chart
- [x] **0005** — Space complexity, the recursion call stack, and the output array
- [x] **0006** — "Can you do better?": spotting the bottleneck, trading time for space

**All six lessons cover the mission.** Next: fluency reps on real problems + a mixed final assessment (ask your teacher).

## Working with your teacher

These lessons are half the loop. The other half is asking the agent in your Claude Code
session to explain anything unclear, analyse your own `.js` solutions from this repo, or
quiz you live. That's the feedback loop that makes it stick.
