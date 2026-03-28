function getCustomerFullName(customer) {
  // BUG: Doesn't handle missing fields properly
  if (customer.firstName && customer.lastName){
    return customer.firstName + " " + customer.lastName;
  }
  return customer.firstName || customer.lastName;
}

module.exports = getCustomerFullName;
