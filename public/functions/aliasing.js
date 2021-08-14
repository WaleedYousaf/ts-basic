"use strict";
/***============== type (Aliasing) ==============**/
var logDetails = function (uid, item) {
    console.log(item + " has a uid: " + uid);
};
var greeting = function (user) {
    console.log((user === null || user === void 0 ? void 0 : user.name) + " says hello");
};
