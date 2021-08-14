"use strict";
/***============== Functions Signature ==============**/
// let greetings: Function;
// example 1
var greetings;
greetings = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numTwo - numOne; // if we dont return in else, will throw error as its in signature
    }
};
// example 3
var logsDetails;
// for using signature, schema has to be same but we can change the params' names
logsDetails = function (user) {
    console.log(user.name + " is " + user.age + " years old");
};
