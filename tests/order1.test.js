const calculateOrderSubtotal = require("../orders/order1");

test("should calculate subtotal with quantity", () => {
  const items = [
    { price: 100, quantity: 2 },
    { price: 50, quantity: 1 },
  ];

  expect(calculateOrderSubtotal(items)).toBe(250);
});

test("should return 0 for empty items", () => {
  expect(calculateOrderSubtotal([])).toBe(0);
});
