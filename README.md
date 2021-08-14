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
