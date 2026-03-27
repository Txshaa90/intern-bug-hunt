function isValidEmail(email) {
  // BUG: Very weak validation (accepts invalid emails)
  return email.includes("@");
}

module.exports = isValidEmail;
