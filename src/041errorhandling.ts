/**
 * ================================================================================
 * FILE: 041errorhandling.ts - Error Handling with Try-Catch-Finally
 * ================================================================================
 * 
 * CONCEPT OVERVIEW:
 * This file demonstrates error handling and exception management in TypeScript.
 * Proper error handling prevents application crashes and provides graceful degradation.
 * 
 * KEY CONCEPTS:
 * - try: Contains code that might throw an error
 * - catch: Handles errors thrown in try block
 * - finally: Always executes regardless of success/failure
 * - Error throwing: Explicitly throw errors for invalid conditions
 * - never type: Function that never returns (always throws)
 * 
 * RULES:
 * - Only one try block per function (cannot nest multiple try blocks)
 * - Finally block always runs, even if return statement exists in try/catch
 * - Can have try without catch if finally block exists
 * ================================================================================
 */

// in JS and TS Error Handling and Exception Handling both are same.

/**
 * ERROR HANDLING FLOW:
 * 
 * Program Execution:
 * 1 ✓ OK
 * 2 -- error -- terminated (if unhandled)
 * 3 (if error handled, continues here)
 * 4 ✓ OK
 * 
 * When error thrown:
 * - Without handling: Program terminates
 * - With try-catch: Error is caught and handled, program continues
 */

/**
 * EXAMPLE 1: THROWING CUSTOM ERRORS
 * Function throws error when division by zero is attempted.
 */
function div (a:number, b:number) :number {
    if (b===0) {
        throw new Error("Can't be devided by zero");
    } 
    return a/b;
}

let result =  div(10,0); 
console.log(result);

/**
 * EXAMPLE 2: TRY-CATCH-FINALLY PATTERN
 * Safe JSON parsing with error handling and cleanup.
 * 
 * EXECUTION ORDER:
 * 1. Execute try block
 * 2. If error: Jump to catch block
 * 3. Finally always executes last
 */
function parsing() {

    try{
    let result =  JSON.parse('{"name":"Nitin"}');
    console.log(result); 
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("I am finally block i will be run");
    }
}
parsing();
console.log("Done");

/**
 * NEVER RETURN TYPE:
 * The 'never' type indicates a function that never returns normally.
 * Function always throws an error.
 * TypeScript-only feature to indicate unreachable code.
 */
function m1():never {
    throw new Error("this is my error");  
}

m1(); 