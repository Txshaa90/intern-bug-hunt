const mergeCustomer = require("../customers/customer5");

test("should merge defined fields without dropping old values when new is undefined", () => {
  const oldCustomer = { id: 1, name: "Ada", city: "London" };
  const newCustomer = { name: "Augusta", city: undefined };

  const result = mergeCustomer(oldCustomer, newCustomer);

  expect(result).toEqual({
    id: 1,
    name: "Augusta",
    city: "London",
  });
});

test("should not mutate the original old customer object", () => {
  const oldCustomer = { id: 1, name: "Ada" };
  const newCustomer = { name: "Augusta" };

  mergeCustomer(oldCustomer, newCustomer);

  expect(oldCustomer.name).toBe("Ada");
});
