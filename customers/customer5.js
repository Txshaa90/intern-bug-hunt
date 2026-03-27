function mergeCustomer(oldCustomer, newCustomer) {
  // BUG: Overwrites everything, even with undefined
  return {
    ...oldCustomer,
    ...newCustomer,
  };
}

module.exports = mergeCustomer;
