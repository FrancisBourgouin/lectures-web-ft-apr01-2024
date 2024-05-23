require("dotenv").config()

const password1 = process.env.PASSWORD1
const password2 = process.env.PASSWORD2

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const hash1 = bcrypt.hashSync(password1, salt);
const hash2 = bcrypt.hashSync(password2, salt);

const user1 = {
  name: "Dimitri Ivanovich Mendeleiv",
  email: "periodic@table.com",
  password: hash1,
  secret: "He actually prefers biology over chemistry",
};

const user2 = {
  name: "Doug Judy",
  email: "pontiac@bandit.com",
  password: hash2,
  secret: "He doesn't actually know how to drive stick",
};

const users = {
  "periodic@table.com": user1,
  "pontiac@bandit.com": user2,
};

module.exports = {user1, user2, users, salt}