# Project

Secret vault of destiny!

# Purpose

Store a terrible secret, only accessible w/ username + password

# DATA

## User

```jsx
const user = {
  name:
  email:
  password:
  secret:
};
```

## Users

```jsx
const users = { email: user, email: user };

const users = [user, user];
```

## Seed

```jsx
const user1 = {
  name: "Dimitri Ivanovich Mendeleiv",
  email: "periodic@table.com",
  password: "hydrogen",
  secret: "He actually prefers biology over chemistry",
};

const user2 = {
  name: "Doug Judy",
  email: "pontiac@bandit.com",
  password: "rosa",
  secret: "He doesn't actually know how to drive stick",
};

const users = {
  "periodic@table.com": user1,
  "pontiac@bandit.com": user2,
};
```

# Helpers

## getUserByEmail

```jsx
const getUserByEmail = (email) => {
  const currentUser = users[email];

  if (!currentUser) {
    return { user: null, error: "User doesn't exist" };
  }

  return { user: currentUser, error: null };
};
```

## authenticateUser

```jsx
const authenticateUser = (email, password) => {
  const output = { error: null, user: null };

  const currentUser = users[email];

  if (!currentUser) {
    output.error = "User doesn't exist";
  }

  if (currentUser.password !== password) {
    output.error = "Wrong password";
  }

  if (!output.error) {
    output.user = currentUser;
  }

  return output;
};
```

## createUser

```jsx
const createUserButBetter = (userInfo) => {
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

  const newUser = { ...userInfo };
  users[email] = newUser;

  return { error: null, user: newUser };
};
```

```jsx
const createUser = (userInfo) => {
  const { name, email, password, secret } = userInfo;

  if (!name || !email || !password || !secret) {
    return { error: "One of the fields is invalid", user: null };
  }

  if (users[email]) {
    return { error: "User already exists with that email", user: null };
  }

  const newUser = { name, email, password, secret };
  users[email] = newUser;

  return { error: null, user: newUser };
};
```
