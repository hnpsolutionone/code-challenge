import { describe, it, expect } from "@jest/globals";
import { sum_to_n_a, sum_to_n_b, sum_to_n_c } from "../sum";

describe("sum_to_n functions", () => {
  it("should return correct result", () => {
    expect(sum_to_n_a(20)).toBe(210);
    expect(sum_to_n_b(20)).toBe(210);
    expect(sum_to_n_c(20)).toBe(210);
  });
});