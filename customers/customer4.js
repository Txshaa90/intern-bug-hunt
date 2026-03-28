function computeLoyaltyPoints(purchases) {
  // BUG: Ignores quantity and incorrect accumulation
  let points = 0;
  let accumulatedPoints = 0;

  for (let i = 0; i < purchases.length; i++) {
    accumulatedPoints = purchases[i].amount * purchases[i].quantity;
    points += accumulatedPoints;
  }

  return points *= 10;


}

module.exports = computeLoyaltyPoints;
