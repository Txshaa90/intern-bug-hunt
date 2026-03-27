const getActiveCustomers = require("../customers/customer3");

test("should return only customers with isActive strictly true", () => {
  const customers = [
    { name: "A", isActive: true },
    { name: "B", isActive: false },
    { name: "C", isActive: true },
    { name: "D", isActive: "yes" },
  ];

  const result = getActiveCustomers(customers);

  expect(result).toEqual([
    { name: "A", isActive: true },
    { name: "C", isActive: true },
  ]);
});

test("should not mutate original customer objects", () => {
  const customers = [{ name: "A", isActive: false }];
  getActiveCustomers(customers);
  expect(customers[0].isActive).toBe(false);
});
