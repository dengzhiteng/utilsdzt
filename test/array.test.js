import { uniqueArr } from "../src/array";

test("uniqueArr Function", () => {
  const arr = [1, 11, 1, 1, 2, 3, 4, 5, 6];
  expect(uniqueArr(arr)).toContain(6);
});
