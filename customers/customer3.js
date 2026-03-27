function getActiveCustomers(customers) {
  // BUG: Assignment instead of comparison
  return customers.filter((c) => (c.isActive = true));
}

module.exports = getActiveCustomers;
