/***============== Functions Signature ==============**/

// let greetings: Function;

// example 1
let greetings: (a: string, b: string) => void;
greetings = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

// example 2
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numTwo - numOne; // if we dont return in else, will throw error as its in signature
  }
};

// example 3
let logsDetails: (obj: {name: string, age: number}) => void;
type person = { name: string, age: number };
// for using signature, schema has to be same but we can change the params' names
logsDetails = (user: person) => {
  console.log(`${user.name} is ${user.age} years old`);
};
