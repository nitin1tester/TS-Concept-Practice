/**
 * ================================================================================
 * FILE: 051accessmodifier.ts - Access Modifiers (Public, Private, Protected)
 * ================================================================================
 * 
 * CONCEPT OVERVIEW:
 * Access modifiers control the visibility and accessibility of class members.
 * They enforce encapsulation and data hiding.
 * 
 * ACCESS MODIFIER LEVELS:
 * 
 * public:     Same class, Child class, Outside of class      [VISIBLE EVERYWHERE]
 * private:    Same class only                                [HIDDEN COMPLETELY]
 * protected:  Same class, Child class (NOT outside)          [VISIBLE IN HIERARCHY]
 * 
 * DEFAULT: If no modifier specified, default is public
 * 
 * BENEFITS:
 * 1. Encapsulation: Hide internal implementation
 * 2. Security: Prevent external code from modifying critical data
 * 3. Maintainability: Control what's part of the public API
 * 4. Inheritance: Protected members for subclasses
 * ================================================================================
 */


/**
 * CLASS: User
 * Demonstrates all three access modifiers in action.
 */
class User {
    /**
     * public method: Accessible from anywhere
     * External code and subclasses can call this.
     */
    public testing():void{
        console.log("I am testing");
    }

    /**
     * private method: Accessible only within this class
     * Cannot be called from subclasses or external code.
     */
    private coding():void{
        console.log("I am coding");
    }

    /**
     * public method that calls private method
     * This is a common pattern: private implementation, public interface
     */
    public doCoding():void{
        this.coding();
    }

    /**
     * protected method: Accessible in this class and child classes
     * External code cannot call this, but subclasses can.
     */
    protected managemnent():void{
        console.log("I am management");
    }
}

/**
 * CLASS: Employee extends User
 * Demonstrates access to parent class members based on modifiers.
 */
class Employee extends User {
    public working(){
        console.log("I am working");
        this.managemnent();      // ✓ Can access protected from parent
        this.testing();          // ✓ Can access public from parent
        this.doCoding();         // ✓ Can access public from parent
        // this.coding();         // ✗ Cannot access private from parent
        let e1:Employee = new Employee();
    }
}

// outside of class
// let user = new User();
// user.testing();


let e1:Employee = new Employee();