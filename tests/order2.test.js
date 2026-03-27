const calculateTaxAmount = require("../orders/order2");

test("should treat taxRate as a whole-number percent (e.g. 8 means 8%)", () => {
  expect(calculateTaxAmount(200, 8)).toBe(16);
});

test("should handle fractional percents", () => {
  expect(calculateTaxAmount(100, 12.5)).toBe(12.5);
});
