/**
 * ================================================================================
 * FILE: 043classtest.ts - Class Inheritance and Polymorphism
 * ================================================================================
 * 
 * CONCEPT OVERVIEW:
 * Demonstrates inheritance - creating a class that extends another class.
 * Child classes inherit parent methods and can override them.
 * 
 * KEY CONCEPTS:
 * - extends: Child class inherits from parent class
 * - override: Child method replaces parent method implementation
 * - IS-A relationship: "Every BMW is a Car"
 * - Upcasting: Child can be referenced by parent type (safe)
 * - Downcasting: Parent cannot be referenced by child type (unsafe)
 * 
 * INHERITANCE BENEFITS:
 * 1. Code Reuse: Common functionality in parent class
 * 2. Polymorphism: Same method name, different behavior
 * 3. Type Hierarchy: Organize classes in meaningful structures
 * ================================================================================
 */

/**
 * PARENT CLASS: Car
 * Defines basic functionality common to all cars.
 */
class Car {
    start():void{
        console.log("car---start");
    }
    Stop():void{
        console.log("car---stop");
    }
    refuel():void{
        console.log("car---refuel");
    }
}

/**
 * CHILD CLASS: BMW
 * Inherits from Car and adds specialized functionality.
 * 
 * INHERITANCE RULES:
 * - Inherits all parent methods (start, Stop, refuel)
 * - Can add new methods (autoParking)
 * - Can override parent methods (start) with 'override' keyword
 * - Child-specific methods are not available in parent reference
 */
class BMW extends Car {
    override start(): void { // we need to add override keyword
        console.log("BMW---start");
    }

    autoParking(): void{
        console.log("BMW---AutoParking");
    }
}

/**
 * CREATING CHILD CLASS OBJECTS:
 * Access both inherited and own methods.
 */
let bwm:BMW = new BMW();
bwm.start();
bwm.autoParking();
bwm.Stop();
bwm.refuel();

let car: Car = new Car();

/**
 * POLYMORPHISM AND UPCASTING:
 * Child object can be referenced by parent class type.
 * Method calls use child implementation (polymorphic behavior).
 * 
 * IS-A RELATIONSHIP:
 * "Every BMW is a Car" → Upcasting is SAFE ✓
 * Child inherits all parent functionality.
 */
console.log("========================");
// Chile class object can be refered by parest class ref variable.
// Top/Up/Casting (IS-A releation ship)
// every BMW is a car
let car1 : Car = new BMW();

car1.start();
car1.Stop();
car1.refuel();

/**
 * DOWNCASTING (NOT ALLOWED):
 * Parent object cannot be referenced by child type.
 * 
 * INVALID RELATIONSHIP:
 * "Every Car is NOT a BMW" → Downcasting is UNSAFE ✗
 * Error: Parent doesn't have child-specific methods
 */
// downcasting not allowed
//Every Car is not BMW
// let  bmw:BMW = new Car(); // IS-A relation ship failed

