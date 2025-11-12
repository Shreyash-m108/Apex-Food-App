import { sum } from "../sum";

test("Return a sum of two numbers", () => {
  const res = sum(5, 5);

  expect(res).toBe(10);
});
