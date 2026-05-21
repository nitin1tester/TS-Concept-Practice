
// Typescript is a wrapper over JS.
// NodeJS, Brawser understand only JS.
// How to install type script

// Installation :- 
//node -v 
//npm -v
// npm install -g typescript
// tsc -v
// npm init -y: package.json
// tsc --init

// Runner cmd:- 

// using ts-node run .ts file directly with compiler
//npm install -g ts-node typescript
// ts-node file-name.ts

// using nodemon:
//npm install -g nodemon
// nodemon file-name.ts

//using tsx: typescript executor
//npm install -g tsx
//tsx app.ts 



// compiler is tsconfig.json
let msg : string = "nitin";
console.log(msg);

let x : number = 10;
console.log(x);

function test(browser:string) {
    console.log("browser is ", browser.toUpperCase());
}
test("chrome");
