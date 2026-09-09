# Starting point: recognises common complexities, cannot derive them

The user can name <code>O(n)</code>, <code>O(n^2)</code>, and <code>O(log n)</code> and
roughly knows which is faster, but has not yet learned to derive a complexity from
code by counting loops / recursive calls. Mission is coding interviews (state and
justify Big-O out loud, compare approaches). Learns best from worked examples and
growth-rate visuals.

## Implications

- Skip "what is an algorithm" and vocabulary-only intros. Start at derivation.
- Every lesson needs a step-by-step worked code example and, where it helps, a chart.
- Do not yet assume they can handle recursion trees, Master Theorem, or amortised
  analysis — these are explicitly out of scope in [[MISSION.md]] until the relevant
  course sections.
- Next lesson should be deriving Big-O from loop structures (single, sequential,
  nested, and the <code>i *= 2</code> logarithmic case).
