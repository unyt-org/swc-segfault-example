import {transform} from "npm:@swc/core@1.3.101";

console.log("working example 1: ");
console.log(await transform("const x = 'example'"));

console.log("working example 2: ");
console.log(await transform("while(true){}"));

console.log("not working: ");
console.log(await transform("if(true){}"));
