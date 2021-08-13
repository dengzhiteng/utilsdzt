// const sum = require("../src/is");
import { isArray, isString } from "../src/is";

test("isArray Function", () => {
  expect(isArray([])).toBeTruthy();
});

afterAll(() => {
  // console.log("afterAll");
});
afterEach(() => {
  // console.log("afterEach");
});
