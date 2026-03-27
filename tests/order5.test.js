const formatOrderDisplayId = require("../orders/order5");

test("should zero-pad numeric id to 6 digits after ORD-", () => {
  expect(formatOrderDisplayId(7)).toBe("ORD-000007");
});

test("should not trim ids that are already wide enough", () => {
  expect(formatOrderDisplayId(1234567)).toBe("ORD-1234567");
});
