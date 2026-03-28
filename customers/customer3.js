function getActiveCustomers(customers) {
  // BUG: Assignment instead of comparison
  return customers.filter(customer => customer.isActive === true);
}

module.exports = getActiveCustomers;
