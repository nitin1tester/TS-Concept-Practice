
/**
 * ================================================================================
 * FILE: 011demo.ts - TypeScript Fundamentals and Setup
 * ================================================================================
 * 
 * CONCEPT OVERVIEW:
 * This file demonstrates the basics of TypeScript and how to set up your 
 * development environment. TypeScript is a superset of JavaScript that adds 
 * static type checking at compile time.
 * 
 * KEY CONCEPTS:
 * 1. TypeScript Compilation: TypeScript code must be compiled to JavaScript
 *    because browsers and Node.js only understand JavaScript natively.
 * 
 * 2. Type Annotations: Variables and parameters can have explicit types.
 *    Syntax: let variableName: type = value;
 * 
 * 3. Function Parameters: Functions can specify the types of their parameters.
 *    This prevents type mismatches at runtime.
 * 
 * INSTALLATION & SETUP:
 * Before running TypeScript files, you need to install the compiler.
 * ================================================================================
 */

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

/**
 * EXAMPLE 1: String Type Annotation
 * 
 * Syntax: let variableName: string = value;
 * 
 * EXPLANATION:
 * - 'msg' is a variable with explicit 'string' type
 * - Only string values can be assigned to this variable
 * - Attempting to assign a number would cause a compile-time error
 */
let msg : string = "nitin";
console.log(msg);

/**
 * EXAMPLE 2: Number Type Annotation
 * 
 * Syntax: let variableName: number = value;
 * 
 * EXPLANATION:
 * - 'x' is a variable with explicit 'number' type
 * - Can hold integers, decimals, or special values like Infinity
 * - Type safety prevents string concatenation errors
 */
let x : number = 10;
console.log(x);

/**
 * EXAMPLE 3: Function with Typed Parameters
 * 
 * Syntax: function name(param: type): returnType { ... }
 * 
 * EXPLANATION:
 * - 'test' function accepts only 'string' type parameters
 * - The browser variable must be a string when calling this function
 * - toUpperCase() is a string method that converts text to uppercase
 * - Function has implicit return type (void - no return statement)
 */
function test(browser:string) {
    console.log("browser is ", browser.toUpperCase());
}
test("chrome");
