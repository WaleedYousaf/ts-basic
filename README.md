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

  --link: https://www.youtube.com/watch?v=iTZ1-85I77c --


Inference:
-----------

- TS dont allow changing var/lets types later on
- Type is decided at the time of declaration
- Can declare a mixed array and that can then extend to the types used at the 
time of declaration
- Objects can get overridden if the schema is exactly same, but cannot 
add/reduce/update keys

Explicit Types:
----------------

- Define a type for a var at the time of declaration like 
    `
        let character: string;
        let ninjas: string[] = [];
    `
- Can also initialize at the time of declaration like
    `let ninjas: string[] = [];`
- Can define multiple types by unions like
    `let mixed: (string|number)[] = [];`
- Union of basic dataTypes dont require `()` like
    `let uid: number|string;`
- Explicit Types in objects can be achieved through 
        
        let ninjaOne: object;
        let ninjaTwo: {
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
        let ninja: { name: any, age: any };
     
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
