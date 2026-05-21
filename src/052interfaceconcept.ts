/**
 * ================================================================================
 * FILE: 052interfaceconcept.ts - Interfaces
 * ================================================================================
 * 
 * CONCEPT OVERVIEW:
 * Interfaces define contracts or blueprints for objects without implementation.
 * They specify what properties and methods an object should have.
 * 
 * KEY CONCEPTS:
 * - No implementation: Only method declarations, no bodies
 * - Blueprint: Defines object shape and structure
 * - Type checking: Compile-time verification of object structure
 * - Cannot instantiate: Cannot create interface objects directly
 * - Optional properties: Use ? to mark properties as optional
 * - Readonly properties: Use readonly to make immutable properties
 * 
 * BENEFITS:
 * 1. Contracts: Define expectations for object implementations
 * 2. Type Safety: Ensures consistent object structure
 * 3. Scalability: Easy to add new required properties
 * 4. Documentation: Self-documenting code structure
 * ================================================================================
 */

/**
 * INTERFACE DEFINITION: User
 * Defines the structure and behavior expected of user objects.
 * 
 * PROPERTIES:
 * - name: Required string property
 * - age: Required number property
 * - salary?: Optional number property (not required to implement)
 * - city?: Optional string property (not required to implement)
 * - companyName: Readonly string (cannot be modified after initialization)
 * 
 * METHODS:
 * - coding(): Method declaration with void return
 * - calcSal(): Method declaration returning number
 */

// interface with objects: define the shape of object/ blue print of the class.

interface User{
    name:string;
    age:number;
    salary?:number;// Optional 
    city?:string; // optional field
    readonly companyName:string; // we can change final in nature.
    coding():void;
    calcSal():number;
}


/**
 * IMPLEMENTING INTERFACE:
 * Create an object that satisfies the User interface contract.
 * 
 * RULES:
 * - Must provide all required properties (name, age, companyName)
 * - Can optionally provide optional properties (salary, city)
 * - Must implement all required methods (coding, calcSal)
 * - Cannot modify readonly properties after creation
 */
let u1:User={
    name:"Shivansh",
    age:20,
    // salary: 50.00,// optional var are not mandatory to impliment
    companyName:'TRC',

    coding():void{
        console.log(`${this.name} is coding`);
    },
    calcSal():number{
        return 100;
    }
}

console.log(u1);
u1.coding();
console.log(u1.calcSal());