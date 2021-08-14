/***============== Any (Dynamic) Type ==============**/
// reverses TS to JS (dont help in suggesting/forcing types
let uid: any = 101;
uid = '202';
uid = {
  name: 'max',
};

uid = {
  myName: 'jill',
  age: 20,
};

let mixed: any[] = [];
let ninja: { name: any, age: any };
ninja = { name: 'sa', age: 12 };
