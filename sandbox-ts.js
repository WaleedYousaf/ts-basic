/*
  - As the browsers only knows basic JS, after making a TS file,
   use command `tsc my-ts-file.ts updated-js-file.js` which will make its JS version
  - We can also avoid the target file if we wanna create the JS version with the same
   name `tsc my-ts-file.ts`
  - When we will make changes to out TS file, we'll have to update and make its JS version
   with the same 'tsc' command. In order to avoid it, use `tsc my-ts-file.ts -w` which will
   start to watch for the changes

  --link: https://www.youtube.com/watch?v=iTZ1-85I77c --
**/
var myCharacter = 'waleed';
console.log('character', myCharacter);
var myInputs = document.querySelectorAll('input');
console.log('inputs', myInputs);
myInputs.forEach(function (input, index) { return console.log(index, input); });
