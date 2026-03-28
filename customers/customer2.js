function isValidEmail(email) {
  // BUG: Very weak validation (accepts invalid emails)
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

module.exports = isValidEmail;
