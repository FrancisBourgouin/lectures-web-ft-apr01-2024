const { users, salt } = require("../data/userData");
const bcrypt = require('bcryptjs');

const getUserByEmail = (email) => {
  const currentUser = users[email];

  if (!currentUser) {
    return { user: null, error: "User doesn't exist" };
  }

  return { user: currentUser, error: null };
};

const getAllUsers = () => users

const authenticateUser = (email, password) => {
  const output = { error: null, user: null };

  const currentUser = users[email];

  if (!currentUser) {
    output.error = "User doesn't exist";
  }

  // if (currentUser.password !== password) {
  if (!bcrypt.compareSync(password, currentUser.password)) {
    output.error = "Wrong password";
  }

  if (!output.error) {
    output.user = currentUser;
  }

  return output;
};

const createUser = (userInfo) => {
  const { email } = userInfo;

  // What if we had a list of all the empty keys
  // Where are those keys stored? userInfo
  // Can we loop over an object ? for..in, Object.keys/values for..of
  const invalidKeys = [];
  for (const key in userInfo) {
    if (!userInfo[key]) {
      invalidKeys.push(key);
    }
  }

  if (invalidKeys.length) {
    return { error: `The fields ${invalidKeys.join(", ")} are invalid`, user: null };
  }

  if (users[email]) {
    return { error: "User already exists with that email", user: null };
  }

  const newUser = { ...userInfo, password:bcrypt.hashSync(userInfo.password, salt) };
  users[email] = newUser;

  return { error: null, user: newUser };
};

module.exports = { createUser, authenticateUser, getUserByEmail, getAllUsers };
