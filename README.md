# JavaScript Type Coercion Bug

This repository demonstrates a common, yet subtle bug in JavaScript related to type coercion during addition. The `foo` function intends to add two numbers, but it fails when one of the inputs is a string.

## Bug Description

The bug lies in the line `return a + b;`. JavaScript's loose typing allows for implicit type conversion. If either `a` or `b` is a string, the `+` operator performs string concatenation rather than numerical addition.

## How to Reproduce

1. Clone the repository.
2. Open `bug.js` and run it in a JavaScript environment (Node.js, browser console).
3. Observe that the function returns unexpected results when a string is involved in the addition.

## Solution

The solution, provided in `bugSolution.js`, involves explicit type checking and conversion to ensure both operands are numbers before performing the addition.

## Lessons Learned

- Be mindful of JavaScript's loose typing system.
- Explicitly check and convert data types to avoid unexpected behavior.