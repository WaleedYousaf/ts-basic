/***============== type (Aliasing) ==============**/

// can reuse types, to avoid duplication
type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid: ${uid}`);
};

const greeting = (user: objWithName) => {
  console.log(`${user?.name} says hello`);
};
