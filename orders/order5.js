function formatOrderDisplayId(id) {
  // BUG: Doesn't pad correctly for small numbers
  return "ORD-" + id;
}

module.exports = formatOrderDisplayId;
