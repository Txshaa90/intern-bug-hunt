const canFulfillOrder = require("../orders/order3");

test("should return true when every line has enough stock", () => {
  const order = {
    items: [
      { id: "a", quantity: 2 },
      { id: "b", quantity: 1 },
    ],
  };
  const inventory = { a: 2, b: 5 };

  expect(canFulfillOrder(order, inventory)).toBe(true);
});

test("should return false when any line is short on stock", () => {
  const order = {
    items: [
      { id: "a", quantity: 2 },
      { id: "b", quantity: 10 },
    ],
  };
  const inventory = { a: 5, b: 3 };

  expect(canFulfillOrder(order, inventory)).toBe(false);
});

test("should return false when sku is missing from inventory", () => {
  const order = { items: [{ id: "missing", quantity: 1 }] };
  const inventory = {};

  expect(canFulfillOrder(order, inventory)).toBe(false);
});

test("should return true for an order with no items", () => {
  expect(canFulfillOrder({ items: [] }, {})).toBe(true);
});
