# Time & Space Complexity Glossary

<!-- Readable/styled version for browsing: reference/glossary.html -->

The canonical vocabulary for this workspace. Every lesson, exercise, and learning
record uses these terms. Terms are added only once demonstrated understanding exists.

## Terms

**Big-O**:
An upper bound on how an algorithm's running time or memory grows as the input size
grows, ignoring constant factors and lower-order terms.
_Avoid_: "the speed", "how fast it runs"

**Input size (n)**:
The measure of how much data the algorithm is given — usually the number of elements,
sometimes the magnitude of a number or the length of a string.
_Avoid_: "the input", "the data"

**Growth rate**:
How the operation count changes in *shape* as n increases (flat, straight line, curve,
explosion), independent of how many actual operations run for a given n.
_Avoid_: "how big it gets"

**Drop constants**:
The rule that O(2n), O(500n), and O(n/2) are all written O(n), because constant
multipliers don't change the growth rate.
_Avoid_: "simplifying", "rounding"

**Drop lower-order terms**:
The rule that O(n^2 + n) is written O(n^2), because for large n the largest term
dominates and the rest becomes negligible.
_Avoid_: "ignoring the small stuff"

**Worst case**:
The input arrangement that makes the algorithm do the most work. Big-O in interviews
means worst case unless stated otherwise.
_Avoid_: "the bad case", "on average"

## Classes

**Constant time — O(1)**:
The work does not depend on the input size at all.
_Avoid_: "instant", "one step"

**Logarithmic time — O(log n)**:
Each step discards a constant fraction of what remains, so the step count grows like the
number of times n can be divided down to 1. The log base is not written.
_Avoid_: "O(log₂ n)", "halving time"

**Linear time — O(n)**:
The work grows in direct proportion to the input size — one pass' worth per element.
_Avoid_: "one loop", "straight time"

**Linearithmic time — O(n log n)**:
A linear amount of work where each unit costs a logarithmic step; the complexity of
efficient comparison sorting.
_Avoid_: "n log n time" spoken as separate words, "sort time"

**Quadratic time — O(n²)**:
The work grows with the square of the input size — typically a full nested loop, or one
operation per pair of elements.
_Avoid_: "nested time", "n-squared loops"
