import { msg as msgOfTheDay } from "./class.js";
const CarExpression = function (make) {
  this.make = make;
};
const CarArrow = (make) => {
  this.make = make;
};

const showSample = function () {
  console.log(arguments);
};

const samp = (...args) => {
  console.log(args);
};

let username = "darryle";

const stud = {
  username: "Light",
  sayHi: function () {
    console.log(`Hi ${this.username}`);
  },
  sayHiArrow: () => {
    console.log(`${username}`);
  },
};
//  const shudiAbas = () => { console.log(`Ayg saba france.`)}

//  function run(samok) {
//     samok();
//     samok();
//  }

//  run(shudiAbas);

// stud.sayHi();
// stud.sayHiArrow();

function createMultiplier(multiplier) {
  return function multiply(num) {
    return num * multiplier;
  };
}

// const double = createMultiplier(7);

// console.log(msgOfTheDay);

// Error Handling

function isAdult(age) {
  if (age < 18) {
    throw new Error("You are not an adult.")
  }
  return "Your an adult Boy!";
}


try {
  console.log(isAdult(20));
} catch (error) {
  console.log(`Error Message: ${error.message}`);
}

// Promises

const data = {
  id: 101,
  role: "Admin"
}

const getOrder = new Promise((resolve, reject) => {
  let isReady = false;

  setTimeout(() => {
    if (isReady) {
      resolve("ITS READYYO!");
    } else {
      reject("ITS NOT READYO!")
    }
  }, 2000)
})

getOrder.then((food) => {
  console.log(`Success: Received ${food}`);
}).catch((error) => {
  console.log(`Failure: ${error}`);
})

function loginUser(username) {
  return new Promise(resolve => setTimeout(() => resolve(`HELLO ${username}`), 3000));
}

function getUserData(token) {
  return new Promise(resolve => setTimeout(() => resolve(data), 3000));
}



loginUser("Light")
  .then(token => getUserData(token))
  .then(userData => console.log(`User Details: ${userData}`))
  .catch(err => console.error("ERROR", err))