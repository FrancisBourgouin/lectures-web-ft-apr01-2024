const helpers = {}

helpers.authenticateThief = (email, password, thieves) => {
  const currentThief = thieves[email];

  if (!currentThief) {
    // not a valid thief
    // Using return will make this stop here (escape clause)
    return { thief: null, error: "invalid email" };
  }

  if (currentThief.password !== password) {
    // not a valid thief
    // Using return will make this stop here (escape clause)
    return { thief: null, error: "invalid password" };
  }

  return { thief: currentThief, error: null };
};

helpers.findThiefByEmail = (email, thieves) => {
  const currentThief = thieves[email];

  if (!currentThief) {
    // not a valid thief
    // Using return will make this stop here (escape clause)
    return { thief: null, error: "invalid email" };
  }

  return { thief: currentThief, error: null };
};

helpers.addNewThief = (thiefInfo, thieves) => {
  const { name, email, imagePath, password } = thiefInfo;

  const { thief } = helpers.findThiefByEmail(email, thieves);

  if(!name || !email || !imagePath || !password){
    return { thief: null, error: "One or more fields are empty" };
  }

  if (thief) {
    return { thief: null, error: "Thief already exists" };
  }

  const newThief = {
    name,
    email,
    imagePath,
    password,
    id: Object.keys(thieves).length + 1,
  };

  thieves[email] = newThief;

  return { thief: newThief, error: null };
};

module.exports = helpers