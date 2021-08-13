import { isArray, isString } from "../src/is";

test("isArray Function", () => {
  expect(isArray([])).toBeTruthy();
});
test("isString Function", () => {
  expect(isString([])).toBeFalsy();
});

afterAll(() => {});
afterEach(() => {});
