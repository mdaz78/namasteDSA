# NamasteDSA

Solutions to problems solved as part of the NamasteDSA course by Akshay Saini, written in JavaScript.

## Structure

Problems are grouped by the section they appear in during the course.

```
namasteDSA/
├── arrays/
│   └── removeDuplicates.js
├── timeAndSpaceComplextiy/     # guided Big-O mini-course (open index.html)
│   ├── lessons/                # 6 interactive HTML lessons
│   ├── reference/              # cheat sheet, glossary, resources
│   └── index.html              # course hub
└── warmUp/
    ├── countDigits.js
    ├── countNegatives.js
    ├── findLargest.js
    ├── palindrome.js
    ├── reverse.js
    ├── searchElement.js
    ├── secondLargest.js
    └── starPatterns.js
```

## Problems

### Warm Up

| Problem                                                               | File                       |
| --------------------------------------------------------------------- | -------------------------- |
| Count Digits                                                          | `warmUp/countDigits.js`    |
| Count Negatives                                                       | `warmUp/countNegatives.js` |
| Find Largest                                                          | `warmUp/findLargest.js`    |
| [Palindrome Number](https://leetcode.com/problems/palindrome-number/) | `warmUp/palindrome.js`     |
| [Reverse Integer](https://leetcode.com/problems/reverse-integer/)     | `warmUp/reverse.js`        |
| Search Element                                                        | `warmUp/searchElement.js`  |
| Second Largest                                                        | `warmUp/secondLargest.js`  |
| Star Patterns                                                         | `warmUp/starPatterns.js`   |

### Arrays

| Problem                                                                                                   | File                         |
| --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | `arrays/removeDuplicates.js` |

## Time & Space Complexity

A self-contained, interview-focused mini-course on Big-O. Open
[`timeAndSpaceComplextiy/index.html`](timeAndSpaceComplextiy/index.html) in a browser.

| #   | Lesson                                                                                            | Covers                                                          |
| --- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 1   | [What Big-O Actually Measures](timeAndSpaceComplextiy/lessons/0001-what-big-o-measures.html)                       | growth vs. time; drop constants and lower-order terms          |
| 2   | [From Loops to Big-O: Linear & Nested](timeAndSpaceComplextiy/lessons/0002-loops-to-big-o-linear-and-nested.html) | single / sequential / nested / triangular loops; `O(n·m)`      |
| 3   | [Logarithmic Loops](timeAndSpaceComplextiy/lessons/0003-logarithmic-loops.html)                                   | `i *= 2`, `n = n / 10`, binary search, `O(n log n)`            |
| 4   | [Ranking the Common Classes](timeAndSpaceComplextiy/lessons/0004-ranking-the-common-classes.html)                 | `O(1)`…`O(n!)` ordering; a named algorithm for each            |
| 5   | [Space Complexity & the Call Stack](timeAndSpaceComplextiy/lessons/0005-space-complexity-and-the-call-stack.html) | auxiliary memory; recursion call stack; output assumptions     |
| 6   | ["Can You Do Better?"](timeAndSpaceComplextiy/lessons/0006-can-you-do-better.html)                                | bottleneck analysis; hash / sort / precompute; Two Sum worked  |

Reference: [Big-O Cheat Sheet](timeAndSpaceComplextiy/reference/big-o-cheat-sheet.html) ·
[Glossary](timeAndSpaceComplextiy/reference/glossary.html) ·
[Resources](timeAndSpaceComplextiy/reference/resources.html)

## Language

All solutions are written in **JavaScript**.
