function computeLoyaltyPoints(purchases) {
  // BUG: Ignores quantity and incorrect accumulation
  let points = 0;

  for (let i = 0; i < purchases.length; i++) {
    points = purchases[i].amount * 10;
  }

  return points;
}

module.exports = computeLoyaltyPoints;
