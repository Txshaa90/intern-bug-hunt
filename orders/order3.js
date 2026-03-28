function canFulfillOrder(order, inventory) {
  // BUG: Returns true too early inside loop
  for (let item of order.items) {
    if (!inventory[item.id] || inventory[item.id] < item.quantity) {
      return false;
    }
  }
    return true;
}

module.exports = canFulfillOrder;
