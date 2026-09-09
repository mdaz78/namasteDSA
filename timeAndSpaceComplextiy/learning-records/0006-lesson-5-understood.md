# Lesson 5 understood: space complexity, call stack, output-vs-auxiliary distinction

The user completed Lesson 5 and passed a retrieval check from memory: a returned new
array is O(1) *extra* space when the output isn't counted; recursion n levels deep is
O(n) space regardless of frame size; naive recursive Fibonacci is O(2^n) time but O(n)
space.

## Implications

- The user can now state time AND space as separate answers, and remembers the call
  stack — the last knowledge gap in the MISSION.
- Only skill left: "can you do better?" — finding the bottleneck and reasoning about a
  faster approach's cost. Lesson 6 covers it (two-sum brute vs hash), which closes every
  core MISSION success criterion.
- After Lesson 6: a mixed capstone assessment and a community hand-off (r/leetcode,
  LeetCode Discuss) so the user starts testing analysis on real problems. Consider
  revisiting MISSION scope for a possible "recurrences / Master Theorem" follow-on when
  the course reaches merge sort.
