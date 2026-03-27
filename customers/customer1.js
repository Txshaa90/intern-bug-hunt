function getCustomerFullName(customer) {
  // BUG: Doesn't handle missing fields properly
  return customer.firstName + " " + customer.lastName.toUpperCase();
}

module.exports = getCustomerFullName;
