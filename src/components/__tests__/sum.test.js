import { expect, test } from "@jest/globals";
import { sum } from "../sum";

describe("Sum function", () => {
  test("Sum function should calculate the sum of the two numbers", () => {
    const result = sum(1, 2);

    // Assertion
    expect(result).toBe(3);
  });
});
