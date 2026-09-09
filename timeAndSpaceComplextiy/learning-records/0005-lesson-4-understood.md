# Lesson 4 understood: class ranking, the input-size heuristic, named algorithms

The user completed Lesson 4 and passed a retrieval check from memory: correct ordering
log n < n < n log n < n^2; "n up to 5,000,000 rules out O(n^2)"; named merge sort as an
O(n log n) algorithm. This satisfies the MISSION criterion "rank the common classes and
name a real algorithm for each".

## Implications

- Time-complexity derivation and comparison are solid. The user can now do the core
  interview move: hear an input bound and infer the target complexity.
- Remaining MISSION gaps: (1) stating SPACE complexity separately, including the
  recursion call stack and output array; (2) "can you do better?" — naming the
  bottleneck line and reasoning about a faster approach's cost.
- Next: Lesson 5 (space complexity + call stack), then Lesson 6 (bottleneck analysis on
  a real two-sum-style problem, tying time/space trade-off together).
