"use strict";
/***============== type (Aliasing) ==============**/
const logDetails = (uid, item) => {
    console.log(`${item} has a uid: ${uid}`);
};
const greeting = (user) => {
    console.log(`${user === null || user === void 0 ? void 0 : user.name} says hello`);
};
