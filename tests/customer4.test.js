const computeLoyaltyPoints = require("../customers/customer4");

test("should accumulate points using amount × quantity (10 points per dollar)", () => {
  const purchases = [
    { amount: 10, quantity: 2 },
    { amount: 5, quantity: 1 },
  ];

  expect(computeLoyaltyPoints(purchases)).toBe(250);
});

test("should sum all purchase lines", () => {
  const purchases = [
    { amount: 3, quantity: 1 },
    { amount: 2, quantity: 4 },
  ];

  expect(computeLoyaltyPoints(purchases)).toBe(110);
});

test("should return 0 for empty purchases", () => {
  expect(computeLoyaltyPoints([])).toBe(0);
});
