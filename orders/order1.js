function calculateOrderSubtotal(items) {
  // BUG: Doesn't multiply by quantity
  return items.reduce((sum, item) => sum + item.price, 0);
}

module.exports = calculateOrderSubtotal;
