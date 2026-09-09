# Lesson 1 understood: what Big-O measures + the two simplification rules

The user completed Lesson 1 and answered a 3-question retrieval check correctly, from
memory: Big-O describes how work grows with input (not runtime/memory/LOC); a loop of n
doing 5 ops each is O(n) (drop constants); a loop of n then a nested loop of n^2 is
O(n^2) (drop lower-order terms).

## Implications

- The floor is now: they can apply "drop constants" and "drop lower-order terms" to a
  given step-count. They have NOT yet practised producing the step-count from code.
- Next: Lesson 2 — deriving the step-count from loop structure (single, sequential,
  nested, triangular `j <= i`). Lesson 3 — logarithmic loops.
- Use their own repo code as worked examples: `warmUp/searchElement.js` (single loop,
  O(n)), `warmUp/starPatterns.js` pattern1 (nested, O(n^2)) and pattern2 (triangular,
  still O(n^2)), `warmUp/countDigits.js` (`n = n/10` loop, O(log n)) for Lesson 3.
