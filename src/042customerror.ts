/**
 * ================================================================================
 * FILE: 042customerror.ts - Custom Error Classes
 * ================================================================================
 * 
 * CONCEPT OVERVIEW:
 * Demonstrates creating custom error classes by extending the built-in Error class.
 * Custom errors provide semantic meaning and enable specific error handling.
 * 
 * KEY CONCEPTS:
 * - Custom errors extend the Error class
 * - super() calls parent Error constructor
 * - Each custom error represents a specific error scenario
 * - Can be caught specifically using instanceof operator
 * - Improves code readability and maintainability
 * 
 * BENEFITS:
 * 1. Semantic Clarity: Different errors for different problems
 * 2. Type Safety: TypeScript knows error types
 * 3. Specific Handling: Can catch and handle specific error types
 * 4. Context: Each error provides relevant context
 * ================================================================================
 */

/**
 * CUSTOM ERROR CLASSES:
 * Each class represents a specific type of error that can occur.
 * 
 * PATTERN:
 * class CustomError extends Error {
 *     constructor(message: string) {
 *         super(message);  // Call parent Error constructor
 *     }
 * }
 */
class ElementError extends Error{
    constructor(messsage:string){
        super(messsage);        // call user class constuctor 
    }
};

class BrowserError extends Error{
    constructor(message : string){
        super(message);
    }
};

class Framework extends Error{
    constructor(message : string){
        super(message);
    }
}


/**
 * THROWING CUSTOM ERRORS:
 * When an invalid browser is encountered, throw BrowserError.
 * This communicates the type of error that occurred.
 */
let browser = 'nitin';
switch (browser) {
    case "chrome":
        console.log("open chrome");
        break;

    default: throw new BrowserError(`${browser} not found`);
}
console.log("Enter the app url");