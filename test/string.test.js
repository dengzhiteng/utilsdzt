import { toDecimal } from "../src/string";
test("toDecimal Function", () => {
  const money = 100012000000.01;
  expect(toDecimal(money)).toBe("100,012,000,000.010");
});
