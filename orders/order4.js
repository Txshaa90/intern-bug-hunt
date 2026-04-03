function orderStatusLabel(status) {
  let label = "";

  // BUG: Missing breaks → fall-through happens
  switch (status) {
    case "pending":
      label = "Pending";
      break;
    case "shipped":
      label = "Shipped";
      break;
    case "delivered":
      label = "Delivered";
      break;
    default:
      label = "Unknown";
  }

  return label;
}

module.exports = orderStatusLabel;
