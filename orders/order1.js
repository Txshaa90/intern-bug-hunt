function calculateOrderSubtotal(items) {
  // BUG: Doesn't multiply by quantity
  return items.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);
}

module.exports = calculateOrderSubtotal;
