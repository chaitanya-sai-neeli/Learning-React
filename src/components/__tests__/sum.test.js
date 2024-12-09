import { sum } from "../sum";

test("Calcluates the sum of 2 numbers", () => {
  const result = sum(1, 2);
  expect(result).toBe(3); //Assertion
});
