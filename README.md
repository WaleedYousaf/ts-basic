# ts-basic
Basic typescript app

TS Basics:
-----------

- As the browsers only knows basic JS, after making a TS file,
use command `tsc my-ts-file.ts updated-js-file.js` for typescript conversion which
will make its JS version
- We can also avoid the target file if we wanna create the JS version with the same
name `tsc my-ts-file.ts`
- When we will make changes to out TS file, we'll have to update and make its JS version
with the same 'tsc' command. In order to avoid it, use `tsc my-ts-file.ts -w` which will
start to watch for the changes

Inference:
-----------

- TS dont allow changing var/lets types later on
- Type is decided at the time of declaration

        let character = 'mario';
        let age = 'mario';
        let isBlackBelt = false;

        // character = 20; // TS dont allow type change
        character = 'luigi';

        // define type of a param with `myParam: number`
        const circumference = (diameter: number) => diameter * Math.PI;

        let names = ['max', 'ema'];
        names.push('dave');
        // names.push(20); // TS dont allow

        names[0] = 'shawn';
        // names[0] = 20; // TS dont allow
- Can declare a mixed array and that can then extend to the types used at the
time of declaration

        let mixed = ['kim', 20, 'ann'];
        mixed.push(30);
        mixed[1] = 'mac';
        // mixed[0] = false; // TS dont allow cuz array inference is string|number
- Objects can get overridden if the schema is exactly same, but cannot 
add/reduce/update keys

        let knight = {
          name: 'jason',
          belt: 'black',
          age: 19,
        };

        knight.age = 20;
        // knight.name = 30; // TS dont allow
        // knight.skill = 'mma'; // TS dont allow

        knight = {
          name: 'gordan',
          belt: 'white',
          age: 43,
        };

        // knight = {
        //   name: 'gordan',
        //   myBelt: 'white',
        //   skill: 'ji-jitsu'
        // }; // TS dont allow adding or changing keys, signature/schema has to be the same

Explicit Types:
----------------

- Define a type for a var at the time of declaration like 

        let character: string;
        let users: string[] = [];

- Can also initialize at the time of declaration like

        let users: string[] = [];
- Can define multiple types by unions like

        let mixed: (string|number)[] = [];
- Union of basic dataTypes dont require `()` like

        let uid: number|string;
- Explicit Types in objects can be achieved through 
        
        let userOne: object;
        let userTwo: {
          name: string,
          age: number,
          beltColor: string,
        };

Any (Dynamic) Type:
-------------------

- Can use `any` type which allows to then 
use any of the types
- It basically reverts what the TS is all about
- Works like `let uid: any = 101;`
- For arrays and objects, its like 
    
        let mixed: any[] = [];
        let user: { name: any, age: any };
     
WF and TSConfig:
----------------

- Better to place `index.html`, `styless.css`, and 
other files which are to be hosted publically in
`public` folder and all the source code and ts files in `src`
- Also, use the command `tsc --init` to generate tsConfig file
- For start conversion of TS - JS, change following in 
`tsconfig.json` file

        ...,
        "outDir": "./public",
        "rootDir": "./src",
        ...
- To only allow conversion of the files in `src` folder, add `include` 
in `tsconfig.json` like

        ...,
        "forceConsistentCasingInFileNames": true
      },
      "include": ["src"]

Functions:
----------

- Can define the functions and specify the type of each param
like

        const add = (a: number, b: number) => {

- For an optional parameter, can use either of the two ways

        const add = (a: number, b: number, c?: number | string) => {
        
        const add = (a: number, b: number, c: number | string = 20) => {
- The type of the function is inferred by the type of data it returns. 
 For a function which is'nt returning anything, the type would be `void` 
- Try declaring the optional params at the end after the required ones

type (Aliasing):
----------------

- Instead of repeating the types in unions, we can create `type` like

        type StringOrNum = string | number;
        type objWithName = { name: string, uid: StringOrNum };
        
        const greeting = (user: objWithName) => {...}

Function Signatures:
--------------------

- Can create signatures of functions and define the params, their types
and the function's return type as well like

        let calc: (a: number, b: number, c: string) => number;
        calc = (numOne: number, numTwo: number, action: string) => {
          if (action === 'add') {
            return numOne + numTwo;
          } else {
            return numTwo - numOne; // if we dont return in else, will throw error as its in signature that it should always return number
          }
        };

DOM:
----

- Can access DOM as in JS/React etc
- One difference is that during development, TS dont have access to
index.html and its element so it throws errors while accessing those
- There are a couple of solutions to cater that, if we are sure that the
element we are trying to access is in the DOM, we can use `!` like

        const anchorTag = document.querySelector('a')!;
        console.log(anchorTag.href);

- Alternatively, we can use conditional statements or optional chaining like

        const anchorTag = document.querySelector('a');
        console.log(anchorTag?.href);

Type Casting:
-------------

- Even though, TS grabs the DOM elements, it doesnt know which type 
of DOM element it is. It just know which DOM element it is like an input, select, anchor etc
- To deal with it, we can use the keyword `as` for type casting like

        const anchorTag = document.querySelector('#anchorTag') as HTMLAnchorElement;

Classes:
--------

- Can define classes similar to JS
- All the properties of the class must hae defined types and 
needs to be initialized, can be initialized in the constructor like

        class Invoice {
          client: string;
          details: string;
          amount: number;
        
          constructor(client: string, details: string, amount: number) {
            this.client = client;
            this.details = details;
            this.amount = amount;
          }
        
          format = () => `${this.client} owes $${this.amount} for ${this.details}`;
        }
- Can create instances of class like

        const invoiceOne = new Invoice('Ema', 'work on the website', 500);      
- Can infer new variables/arrays with the type of this class like

        let invoices: Invoice[] = []; 

Access Modifiers:
-----------------

- The properties of the class can be `public`, `private` or `readonly` like

        class Invoice {
          // public client: string; // can avoid public as by default its public
          client: string;
          details: string;
          amount: number;
          readonly id: number;
          private identity: string;
        
          constructor(client: string, details: string, amount: number, id: number = 101, identity: string = 'secret') {
            this.client = client;
            this.details = details;
            this.amount = amount;
            this.id = id;
            this.identity = identity;
          }
        
          format = () => `${this.client} owes $${this.amount} for ${this.details}`;
        }
- Public properties are both access-able and can be modified outside the class (but 
the type cannot be changed) like

        invoiceOne.client = 'Matt';
- ReadOnly properties are access-able outside the class but we cant modify them
neither inside nor outside the class
- Private properties cannot be accessed outside the class
- if using access modifiers with all the params, we can use shorthand like

        class InvoiceUpdated {
          constructor(
            public client: string,
            readonly id: number = 101,
            private identity: string = 'secret'
          ) {
            this.client = client;
            this.id = id;
            this.identity = identity;
          }
        }

Modules:
--------

- To structure code, in bigger projects, we need a modularized approach
- To handle that, we introduce `module` in our scripts in `index.html` like

          ...
          <script type="module" src="app.js"></script>
        </body>
      </html>  
- In addition to this, we'll update the module dependency and EcmaScript target version in `tsconfig.js`
like

        "target": "es6",
        "module": "es2015",
- Make sure we are running the html/htm static pages on a local or a remote server instead of file system, as 
modules require a server. Viusal Studio's `Live Server` can
be a good and easy option for a local server. Alternatively, for other IDEs, we can use an npm package `http-server`  
- No we can create and export a new directory/folder in our `src` folder and call it classes/myModule etc and 
create a module/class like

        export class Invoice {
          client: string;
          details: string;
          amount: number;
          readonly id: number;
          private identity: string;

          constructor(client: string, details: string, amount: number, id: number = 101, identity: string = 'secret') {
            this.client = client;
            this.details = details;
            this.amount = amount;
            this.id = id;
            this.identity = identity;
          }

          format = () => `${this.client} owes $${this.amount} for ${this.details}`;
        }
- And access them from the main `app.js` by importing it like

        import { Invoice } from "./classes/Invoice.js";

        const invoiceOne = new Invoice('Ema', 'work on the website', 500);

        console.log(invoiceOne);
- While importing, make sure to import the `.js` as at the end, browser reads `.js`
- There are a couple of drawbacks to this module system. They are:
  - Only a specific number of modern browsers like chrome, firefox etc supports this module system
  - It doesnt bundle our code into a single file. The browser is now using module system load separate files and make separate requests.
  - We can notice on compiling, there are multiple files created against of all TSs
- To cater these, we can use webpack which bundles our app into a single file

Interfaces:
-----------

- They enforce structure on a class or objects
- We can describe what properties or functions a class can have and
the types of those properties and return types of those methods
- Difference from class is that we cant create objects
- Can create interfaces with the keyword `interface` like

        interface IsPlayer {
          name: string,
          age: number,
          play(a: string): void,
          transferMoney(a: number): number,
        }
- And use it like

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

        const transfer = (person: IsPlayer) => {
          console.log('Transferred ', person.name);
          // console.log('Transferred ', person.skills); TS dont allow cuz skills aint defined in the interface
        }

        console.log(transfer(neymar));
- For using an interface with classes, first create an interface like

        export interface HasFormatter {
          format(): string;
        }

- Now use that in a class using `implements` keyword like

        import { HasFormatter } from '../interfaces/HasFormatter.js';

        // now this class must have a method `format`
        export class Invoice implements HasFormatter {
          client: string;
          details: string;
          amount: number;
          readonly id: number;
          private identity: string;

          constructor(client: string, details: string, amount: number, id: number = 101, identity: string = 'secret') {
            this.client = client;
            this.details = details;
            this.amount = amount;
            this.id = id;
            this.identity = identity;
          }

          format = () => `${this.client} owes $${this.amount} for ${this.details}`;
        }

- Now call the class with interface like

        let docOne: HasFormatter;
        let docTwo: HasFormatter;

        // can initiate from Invoice or Payment cuz they both `has` `HasFormatter`
        docOne = new Invoice('Neymar', 'barca to psg', 200);
        docTwo = new Payment('Ronaldo', 'madrid to juventus', 250);

        let docs: HasFormatter[] = [];
        // both have type `HasFormatter`
        docs.push(docOne);
        docs.push(docTwo);

Generics:
---------

- They allow us to create reusable blocks of code which can be used with different types
- We can use generics by appending `<T>` (or anything other than `T`) with the parameter definition like

        const appendUid = <T>(obj: T) => {
        let uid = Math.floor(Math.random() * 100);
          return { ...obj, uid };
        }

        let docTwo = appendUid({ name: 'Ema', age: '40' });
        console.log('init ', docTwo.name);
- This captures whatever object we pass to this function. Now it knows what properties are on that object
- But now in method, we are not specifying the type of the parameter, we are just saying it would be what is passed
- To take care of this, we can do something like

        const appendUid = <T extends object>(obj: T) => {
        let uid = Math.floor(Math.random() * 100);
          return { ...obj, uid };
        }
- Or to be more specific about the schema of the object, we can do

        const appendUid = <T extends { name: string }>(obj: T) => {
        let uid = Math.floor(Math.random() * 100);
          return { ...obj, uid };
        }
- We can use generics with interfaces as

        interface Player<T> {
          uid: number;
          name: string;
          data: T;
        }

        const docFour: Player<object> = {
          uid: 1,
          name: 'villa',
          data: { fName: 'david' }
        };

        const docFive: Player<string[]> = {
          uid: 2,
          name: 'Silva',
          data: ['dribble', 'passing']
        };
