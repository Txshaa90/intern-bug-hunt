function orderStatusLabel(status) {
  let label = "";

  // BUG: Missing breaks → fall-through happens
  switch (status) {
    case "pending":
      label = "Pending";
    case "shipped":
      label = "Shipped";
    case "delivered":
      label = "Delivered";
    default:
      label = "Unknown";
  }

  return label;
}

module.exports = orderStatusLabel;
