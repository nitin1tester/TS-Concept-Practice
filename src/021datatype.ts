
/**
 * ================================================================================
 * FILE: 021datatype.ts - TypeScript Data Types
 * ================================================================================
 * 
 * CONCEPT OVERVIEW:
 * This file covers all primitive and advanced data types available in TypeScript.
 * Understanding data types is crucial for writing type-safe code.
 * 
 * PRIMITIVE DATA TYPES:
 * - number: Integers, decimals, Infinity, NaN
 * - string: Text data, supports template literals
 * - boolean: true or false values
 * - bigint: Large numbers beyond JavaScript's safe integer limit
 * - null: Intentional absence of value
 * - undefined: Variable declared but not assigned
 * - any: Accepts any type (disables type checking - use sparingly)
 * - unknown: Similar to any but requires type checking before use
 * 
 * ADVANCED DATA TYPES:
 * - Union Types: Multiple allowed types using |
 * - Array Types: Collection of same type elements
 * - Tuple Types: Fixed-length arrays with specific types at each position
 * - Object Types: Structured data with defined properties
 * - Type Aliases: Custom type definitions
 * ================================================================================
 */

// primitive data types: 
//let varName: type = value;

/**
 * NUMBER TYPE:
 * The number type represents numeric values (integers, decimals, Infinity, NaN).
 * 
 * SYNTAX: let variableName: number = value;
 */
let num : number = 10;
console.log(num); 
console.log(typeof num);

/**
 * STRING TYPE:
 * The string type represents text data. Supports regular strings, template literals,
 * and all string methods.
 */
let str : string = "nitin";
console.log(str);


/**
 * BOOLEAN TYPE:
 * The boolean type has only two values: true or false.
 * Commonly used in conditions and flags.
 */
let isActive : boolean = true;
console.log(isActive);

/**
 * NULL & UNDEFINED:
 * - null: Explicitly represents absence of a value (intentional)
 * - undefined: Variable declared but not assigned a value
 * 
 * Note: Type inference allows omitting explicit type annotation for null/undefined
 */
let user : null = null;
let user2 = null; // no need to write type here
let user3 = undefined; // no need to write type here

/**
 * BIGINT TYPE:
 * The bigint type handles very large numbers beyond JavaScript's safe integer limit.
 * Add 'n' suffix to create bigint literals.
 */
let bnum : bigint = 100n;
console.log(bnum);

/**
 * ANY TYPE:
 * The 'any' type disables type checking completely.
 * CAUTION: Use 'any' sparingly as it defeats TypeScript's purpose of type safety.
 * Prefer 'unknown' when type is truly unknown.
 */
let testValue: any; 
testValue = 100;
testValue = "nitin";
console.log(testValue);
console.log(typeof testValue);

/**
 * UNKNOWN TYPE:
 * The 'unknown' type is similar to 'any' but safer.
 * Requires explicit type checking before performing operations.
 * 
 * Best practice: Use 'unknown' instead of 'any' for better type safety.
 */
let value: unknown = 'hello'; // new type in TS which is not available in JS (any and unknon is same only)
console.log(value);
console.log(typeof value);

/**
 * FUNCTION RETURN TYPES:
 * Functions can explicitly declare their return types.
 * 
 * - void: Function returns nothing (no return statement)
 * - number/string/etc: Function returns that specific type
 * - unknown: Function can return any type
 */

// void:- no return form function
function test() : void{
    console.log("hello testing");
}

// with some return 
function getPiValue() :number {
    return 3.14;
}

// with param & return
function addNumber(n1:number,n2:number):number{
    return n1+n2;
}
let sum =  addNumber(2,4);
console.log(sum);

/**
 * NEVER TYPE:
 * The 'never' type indicates a function that never returns normally.
 * Use cases:
 * - Function always throws an error
 * - Function has infinite loop
 * - TypeScript-only feature (not available in JavaScript)
 */
// // never(data type) :- a value which will never happen... error (only in TS)
// function throwElementError(locator : string) : never {
//     throw new Error(locator+"Element is not found...");
// }
// throwElementError("loginbtn");

/**
 * UNION TYPES:
 * Union types allow a variable to hold multiple specific types.
 * Use the pipe | operator to specify multiple allowed types.
 * 
 * Syntax: let variable: type1 | type2 | type3;
 * 
 * BENEFIT: More flexible than a single type while maintaining type safety
 */
// union type:- 
let id: string | number| boolean | string ;
id = 100;
id = "nitin";
console.log(typeof id);

/**
 * ARRAY TYPES:
 * Arrays hold multiple values of the same (or specified) type.
 * Arrays are dynamic - size is not fixed.
 * 
 * SYNTAX OPTIONS:
 * - type[] : Simple array syntax (preferred)
 * - Array<type> : Generic array syntax
 * - Array<type1|type2> : Array with union types
 */

// Array:- not fixed size.

let arr : number[] = [1,2,3,4,5,6];
console.log(arr);

let names : string[] = ["nitin",'shraddha', `shivansh`];
console.log(names);

let device : unknown[] = [1,2,3,'Nitin'];

let mixdata : Array<any> = ["apple", 1 , true];

let mixdata2 : Array<string|number|boolean> = ["apple", 1 , true];


/**
 * TUPLE TYPES:
 * Tuples are arrays with FIXED length and SPECIFIC types at each position.
 * Elements must be in the exact order and type defined.
 * 
 * Syntax: let variable: [type1, type2, type3];
 * 
 * DIFFERENCE FROM ARRAYS:
 * - Arrays: Variable length, same type for all elements
 * - Tuples: Fixed length, different types allowed at each position
 */

// tuple :- fixed length arrray with specific types

let myUser : [string, number] = ["nitin",100];
console.log(myUser);

let person : [string, string, number, boolean ] = ['Nitin','QA',45, true];
console.log(person);

// object
// in JS
// let userObj = {
//     name : "Nitin",
//     age : 35,
//     salary: 45.5,
//     isActive: true,
//     city: 'Bangalore'
// }
// console.log(userObj);

// in TS (but its lengthy way)
// let newUser : { name:string, age:number, isActive:boolean, city: string } = {
//     name: "Nitin",
//     age:50,
//     isActive: true,
//     city:"pune"
// };


/**
 * OBJECT TYPE WITH READONLY:
 * Objects have named properties with specific types.
 * 
 * READONLY KEYWORD:
 * - Makes a property immutable (cannot be modified after initialization)
 * - Cannot be deleted
 * - Useful for enforcing data integrity
 * 
 * TYPE ALIAS SYNTAX:
 * type TypeName = { property: type, ... };
 */

// readonly to make property final & we can't update a readonly property. 
// we can't delete readonly field.
type userType = {readonly name:string, age:number, isActive:boolean, city:string}

let usrObj : userType ={
    name: "Nitin",
    age:50,
    isActive: true,
    city:"pune"
} 
console.log(usrObj);


/**
 * CUSTOM TYPE ALIAS:
 * Type aliases allow you to create reusable type definitions.
 * Particularly useful for union types used in multiple places.
 * 
 * Syntax: type AliasName = existingType | anotherType;
 */

// Define custom type 
type orderIdType = string | number;

let orderId : orderIdType = 1234;
orderId = "abc123";
console.log(orderId);







