const orderStatusLabel = require("../orders/order4");

test('should map "pending" to Pending', () => {
  expect(orderStatusLabel("pending")).toBe("Pending");
});

test('should map "shipped" to Shipped', () => {
  expect(orderStatusLabel("shipped")).toBe("Shipped");
});

test('should map "delivered" to Delivered', () => {
  expect(orderStatusLabel("delivered")).toBe("Delivered");
});

test("should map unknown statuses to Unknown", () => {
  expect(orderStatusLabel("cancelled")).toBe("Unknown");
});
