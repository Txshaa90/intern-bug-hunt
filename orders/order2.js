function calculateTaxAmount(subtotal, taxRate) {
  // BUG: taxRate assumed as whole number (e.g. 12 instead of 0.12)
  return subtotal * taxRate;
}

module.exports = calculateTaxAmount;
