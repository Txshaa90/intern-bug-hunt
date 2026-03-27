const isValidEmail = require("../customers/customer2");

test("should accept a typical valid email", () => {
  expect(isValidEmail("user.name+tag@example.co.uk")).toBe(true);
});

test("should reject strings without @", () => {
  expect(isValidEmail("not-an-email")).toBe(false);
});

test("should reject @ without valid domain structure", () => {
  expect(isValidEmail("nodomain@")).toBe(false);
  expect(isValidEmail("@nodomain.com")).toBe(false);
});

test("should reject missing local part", () => {
  expect(isValidEmail("@example.com")).toBe(false);
});

test("should reject missing TLD after dot", () => {
  expect(isValidEmail("user@example")).toBe(false);
});
