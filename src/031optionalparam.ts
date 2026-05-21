
/**
 * ================================================================================
 * FILE: 031optionalparam.ts - Optional Parameters & Function Overloading
 * ================================================================================
 * 
 * CONCEPT OVERVIEW:
 * This file demonstrates two important function features:
 * 1. Optional Parameters: Parameters that don't have to be provided
 * 2. Function Overloading: Multiple function signatures for the same function name
 * 
 * KEY CONCEPTS:
 * - Optional parameters must come AFTER required parameters
 * - Use '?' to mark a parameter as optional
 * - Function overloading provides type safety for multiple signatures
 * - Only one implementation with general type handling (usually 'any')
 * ================================================================================
 */

/**
 * OPTIONAL PARAMETERS:
 * Optional parameters can be omitted when calling a function.
 * 
 * SYNTAX: function name(required: type, optional?: type): returnType
 * 
 * RULE: All optional parameters must appear AFTER required parameters
 */

function printData(name:string, age?: number):void{
    console.log(name);
    console.log(age);
}
printData('Nitin'); // age undefined 
printData("shivansh",1); // age is given value "1"

/**
 * OPTIONAL PARAMETERS IN CONTROL FLOW:
 * Optional parameters can be conditionally used within function logic.
 */
function launchBrowser(browser:string, headless ? : boolean):boolean{
    if (headless) {
        console.log(`Run test cases in ${browser} in headless`);
        return true;
    }else{
        console.log("run tc in borwser ",browser);
        return true;
    }
}

let isLaunched =  launchBrowser('Chrome',false);
console.log(isLaunched);

/**
 * MULTIPLE OPTIONAL PARAMETERS:
 * Functions can have multiple optional parameters.
 * Optional parameters are checked with conditional logic before use.
 */
function search(name:string, color:string, price ? : number, seller ? : string):void{
    if(price && seller){
        console.log(name,color,price,seller);
    }else{
        console.log(name,color);
    }
}

search("iphone","white",1500,"cloudEra");
search("macbook","silver");


/**
 * FUNCTION OVERLOADING:
 * Allows a single function name to have multiple signatures with different parameter types.
 * 
 * HOW IT WORKS:
 * 1. Define multiple function signatures (prototypes)
 * 2. Implement a single function with general type handling
 * 3. TypeScript ensures type safety for each signature
 * 
 * BENEFIT: Type-safe polymorphism without using 'any' in the API
 */

// design a proto+type: signature
function combination(a:number, b:number): number;
function combination(a:string, b:string): string;
function combination(a:number, b:string): string;
function combination(a:string, b:number): string;

//only One:- with the body
function combination(a:any,b:any):any{
    return a+b;
}

//calling diff signatures
console.log(combination(10,20));
console.log(combination('Nitin','Automation'));
console.log(combination("nitin",10));
