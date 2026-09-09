# Mission: Time & Space Complexity (Big-O)

## Why

In coding interviews I want to state the time and space complexity of my solution
out loud, justify it in a sentence or two, and compare a brute-force approach
against an optimised one under pressure — without guessing.

## Success looks like

- Given a function, I can derive its Big-O by counting loops and recursive calls,
  and say it correctly on the first try.
- I can explain *why* we drop constants and lower-order terms.
- I can rank the common classes (O(1), O(log n), O(n), O(n log n), O(n^2), O(2^n), O(n!))
  from fastest to slowest growing, and name a real algorithm for each.
- When asked "can you do better?", I can identify the bottleneck line and reason
  about what a faster approach would cost.
- I can state the *space* complexity separately, including hidden costs like the
  recursion call stack and the output array.

## Constraints

- Learning through the NamasteDSA course (Akshay Saini), JavaScript.
- Prefers worked examples (walk through code step by step) and visuals (growth charts).
- Recognises O(n), O(n^2), O(log n) by name but cannot reliably derive them yet.

## Out of scope (for now)

- Formal limit definitions of Big-O / Big-Theta / Big-Omega (proofs).
- Master Theorem for recurrences — revisit when we hit merge sort / divide & conquer.
- Amortised analysis internals — a working intuition is enough until we hit dynamic arrays / hash tables.
