const users = {};

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
  // const newUser = {
  //   name: userInfo.name,
  //   email: userInfo.email,
  //   password: userInfo.password,
  //   secret: userInfo.secret,
  // };
  users[email] = newUser;

  return { error: null, user: newUser };
};

const result = createUserButBetter({
  name: "wddwwd",
  email: "qsqsqsqssq",
  password: "wddw",
  secret: "wdwd",
});
console.log(result);



const list1 = ["maksym","sergio"]
const list2 = ["jordan","miguel"]

const mergedList = [...list1, ...list2, "francis"]