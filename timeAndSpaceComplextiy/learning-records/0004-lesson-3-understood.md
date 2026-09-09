# Lesson 3 understood: logarithmic loops, and interleaved recognition holding up

The user completed Lesson 3 and passed a mixed retrieval check from memory: `i *= 3`
until `i > n` is O(log n) (base irrelevant); a halving loop is the genuine O(log n)
while `i += 10` is a distractor that stays O(n); a loop of n containing a binary search
is O(n log n).

## Implications

- The user can now recognise and derive the four workhorse shapes: O(1), O(log n),
  O(n), O(n^2), and combine them (O(n log n), O(n*m)). Retention across lessons is
  strong — three 3/3 checks in a row, including distractors.
- Ready to consolidate: Lesson 4 ranks all common classes fastest-to-slowest, attaches
  a named algorithm to each (a MISSION success criterion), and interleaves recognition
  of every shape seen so far.
- After Lesson 4: space complexity + recursion call stack (Lesson 5), then "can you do
  better?" bottleneck analysis (Lesson 6). Exponential/factorial only need recognition
  depth, not derivation, per MISSION scope.
- Glossary promoted: linear / quadratic / logarithmic / linearithmic time (the user
  uses these correctly and unprompted).
