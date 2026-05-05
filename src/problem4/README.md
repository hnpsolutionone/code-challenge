# Test Guide

This directory contains unit tests for the `sum` functions implemented in `sum.ts`.

---

## Structure

```
tests/
├── jest.config.js     # Jest configuration
├── package.json       # Test dependencies & scripts
├── sum.test.ts        # Test cases for sum functions
└── node_modules/      # Dependencies (generated after install)
```

---

## Functions Under Test (`sum.ts`)

The following implementations are tested:

### 1. `sum_to_n_a` (Iterative)

* Uses a loop to accumulate values from `1 → n`
* Time: `O(n)`
* Space: `O(1)`
* Simple and safe, but less efficient for large `n`

---

### 2. `sum_to_n_b` (Formula)

* Uses arithmetic series formula:

  ```
  n * (n + 1) / 2
  ```

* Time: `O(1)`

* Space: `O(1)`

* Most efficient approach

---

### 3. `sum_to_n` (Recursive)

* Uses recursion: `f(n) = n + f(n - 1)`
* Time: `O(n)`
* Space: `O(n)` (call stack)
* Not suitable for large `n` due to stack overflow risk

---

## Getting Started

> ⚠️ All test commands must be run inside the `tests/` directory

### 1. Move into the test directory

```bash
cd tests
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run tests

```bash
npx jest
```

---

## 📊 Test Coverage

The test file `sum.test.ts` verifies:

* Correct results for all 3 implementations
* Edge cases:

  * `n = 0`
  * small values
* Consistency between implementations
* Error handling (e.g. negative input, if implemented)

---

## ⚠️ Notes

* Functions are expected to work with **non-negative integers (`n ≥ 0`)**
* Behavior for negative inputs should be explicitly handled (or tested if defined)
* Results are assumed to be within `Number.MAX_SAFE_INTEGER`

---

## Example

```ts
sum_to_n_a(5) // 15
sum_to_n_b(5) // 15
sum_to_n(5)   // 15
```

---
