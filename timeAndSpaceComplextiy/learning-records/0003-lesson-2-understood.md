# Lesson 2 understood: deriving Big-O from linear and nested loops

The user completed Lesson 2 and passed a 3-question retrieval check from memory,
including the non-obvious case: a triangular inner loop (`j <= i`) is O(n^2), not O(n).
Also solid on sequential loops adding (O(n)) and nested loops over different-sized inputs
being O(n*m).

## Implications

- Floor is now: can produce a step-count from any arrangement of `for` loops that step
  by 1, and reduce it. Confident with the add-vs-multiply distinction and the "half a
  grid still grows like n^2" idea.
- Not yet covered: loops that don't step by 1 (multiply/divide the index or the value).
- Next: Lesson 3 — logarithmic loops, using `warmUp/countDigits.js` (`n = n/10`) and the
  `i *= 2` pattern; binary search as the canonical O(log n); note that log base is
  irrelevant in Big-O. Then Lesson 4 — ranking the common classes with the growth chart.
