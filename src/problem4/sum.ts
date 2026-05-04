/**
 * Calculate the sum from 1 to n using an iterative loop.
 *
 * @param n - A non-negative integer
 * @returns The sum of integers from 1 to n
 *
 * @example
 * sum_to_n_a(5) // returns 15
 *
 * @complexity
 * Time: O(n) - iterates from 1 to n
 * Space: O(1) - uses constant memory
 *
 * @pros
 * - Easy to understand and implement
 * - Safe (no recursion stack issues)
 *
 * @cons
 * - Less efficient than O(1) formula for large n
 *
 * @see https://en.wikipedia.org/wiki/Arithmetic_progression
 */

export function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * Calculate the sum from 1 to n using the arithmetic series formula.
 *
 * Formula: n(n + 1) / 2
 *
 * @param n - A non-negative integer
 * @returns The sum of integers from 1 to n
 *
 * @example
 * sum_to_n_b(5) // returns 15
 *
 * @complexity
 * Time: O(1) - constant time computation
 * Space: O(1)
 *
 * @pros
 * - Most efficient solution (constant time)
 * - No loops or recursion
 *
 * @cons
 * - Requires understanding of math formula
 * - Potential integer overflow in some languages (less concern in JS/TS)
 *
 * @see https://en.wikipedia.org/wiki/Arithmetic_series
 */
export function sum_to_n_b(n: number): number {
    return (n * (n + 1)) / 2;
}

/**
 * Calculate the sum from 1 to n using recursion.
 *
 * @param n - A non-negative integer
 * @returns The sum of integers from 1 to n
 *
 * @throws Error if n < 0
 *
 * @example
 * sum_to_n(5) // returns 15
 *
 * @complexity
 * Time: O(n) - recursive calls decrease n by 1 each time
 * Space: O(n) - due to call stack
 *
 * @pros
 * - Demonstrates recursion clearly
 * - Matches mathematical definition: f(n) = n + f(n-1)
 *
 * @cons
 * - Risk of stack overflow for large n
 * - Less efficient than iterative or formula approach
 * - Requires input validation
 *
 * @see https://en.wikipedia.org/wiki/Recursion_(computer_science)
 */
export function sum_to_n(n: number): number {
  if (n < 0) {
    throw new Error("n must be >= 0");
  }

  if (n === 0) {
    return 0;
  }

  return n + sum_to_n(n - 1);
}
