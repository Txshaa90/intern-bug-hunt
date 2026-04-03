function formatOrderDisplayId(id) {
  // BUG: Doesn't pad correctly for small numbers
  return "ORD-" + String(id).padStart(6, "0");
}

module.exports = formatOrderDisplayId;
