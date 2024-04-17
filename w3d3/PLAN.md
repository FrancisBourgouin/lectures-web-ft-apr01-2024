# Thieve's Den!

Login, then see the content of the vault, unique per user.

## Data

## Thief

id, unique identifier (email), password, name, imagePath

```js
const thief = {
  id: 1,
  email: "",
  name: "",
  password: "",
  imagePath: "",
};
```

## ThiefList

```js
const thievesArr = [thief, thief]; // ?
const thievesObj = { email: thief, email: thief }; // Better!
```

## Seed

```jsx
const thief1 = {
  id:1,
  name:"Arsène Lupin",
  email:"gentleman@cambrioleur.com",
  password:"tophat"
  imagePath:"/images/arsene.gif"
}

const thief2 = {
  id:2,
  name:"Doug Judy",
  email:"pontiac@bandit.com",
  password:"rosa",
  imagePath:"/images/doug.webp"
}


const thieves = {
  "gentleman@cambrioleur.com":thief1,
  "pontiac@bandit.com":thief2
}
```

## Structure

### Helpers!

#### authenticateThief

```jsx
const authenticateThief = (email, password, thieves) => {
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

authenticateThief("pontiac@bandit.com", "rosa", thieves);
// Success, receive an object containing the error key and the thief key

authenticateThief("pontiac@bandit.com", "rosaaaa", thieves);
// Failure, receive an object containing the error key and the thief key

authenticateThief("pontiacccc@bandit.com", "rosa", thieves);
// Failure, receive an object containing the error key and the thief key
```

#### findThiefByEmail

```jsx
const findThiefByEmail = (email, thieves) => {
  const currentThief = thieves[email];

  if (!currentThief) {
    // not a valid thief
    // Using return will make this stop here (escape clause)
    return { thief: null, error: "invalid email" };
  }

  return { thief: currentThief, error: null };
};
```

#### addNewThief

```jsx
const thiefInfo = {
  name: "",
  email: "",
  password: "",
  imagePath: "",
};

const addNewThief = (thiefInfo, thieves) => {
  const { name, email, imagePath, password } = thiefInfo;

  const { thief } = findThiefByEmail(email, thieves);

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
```

### HTML
