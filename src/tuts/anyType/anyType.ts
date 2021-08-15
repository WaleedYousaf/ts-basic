/***============== Any (Dynamic) Type ==============**/
// reverses TS to JS (dont help in suggesting/forcing types
let uid1: any = 101;
uid1 = '202';
uid1 = {
  name: 'max',
};

uid1 = {
  myName: 'jill',
  age: 20,
};

let mixed1: any[] = [];
let user: { name: any, age: any };
user = { name: 'sa', age: 12 };
