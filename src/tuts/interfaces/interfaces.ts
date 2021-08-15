/***============== Interfaces ==============**/
// Enforces structure on a class or objects
// We can describe what properties or functions a class can have and the types of those properties and return types of those methods
// Difference from class is that we cant create objects.

interface IsPlayer {
  name: string,
  age: number,
  play(a: string): void,
  transferMoney(a: number): number,
}

const ronaldo: IsPlayer = {
  name: 'ronaldo',
  age: 30,
  play(style: string): void {
    console.log(style);
  },
  transferMoney(money: number): number {
    return money;
  },
  // skills: ['dribbling'] // TS dont allow cuz not in interface
};

const neymar: IsPlayer = {
  name: 'neymar',
  age: 26,
  play(style: string): void {
    console.log(style);
  },
  transferMoney(money: number): number {
    return money;
  },
};

const transfer = (person: IsPlayer) => {
  console.log('Transferred ', person.name);
  // console.log('Transferred ', person.skills); TS dont allow cuz skills aint defined in the interface
}

console.log(transfer(neymar));
