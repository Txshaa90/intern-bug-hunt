function mergeCustomer(oldCustomer, newCustomer) {
  // BUG: Overwrites everything, even with undefined
  // FIX: Use the spread operator to merge the objects, and filter out undefined values
  const updatedCustomer = {};
  
  for (const key in newCustomer) {
    if (newCustomer[key] !== undefined) {
      updatedCustomer[key] = newCustomer[key];
    }
  }

  return {
    ...oldCustomer,
    ...updatedCustomer
  };
}

module.exports = mergeCustomer;
