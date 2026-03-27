const getCustomerFullName = require("../customers/customer1");

test("should return full name with normal casing", () => {
  const result = getCustomerFullName({
    firstName: "John",
    lastName: "Doe",
  });

  expect(result).toBe("John Doe");
});

test("should handle missing last name", () => {
  const result = getCustomerFullName({
    firstName: "John",
  });

  expect(result).toBe("John");
});

test("should handle missing first name", () => {
  const result = getCustomerFullName({
    lastName: "Doe",
  });

  expect(result).toBe("Doe");
});
