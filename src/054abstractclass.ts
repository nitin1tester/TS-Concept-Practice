/**
 * ================================================================================
 * FILE: 054abstractclass.ts - Abstract Classes
 * ================================================================================
 * 
 * CONCEPT OVERVIEW:
 * Abstract classes combine abstraction and implementation.
 * They provide partial abstraction (0-100%) with both abstract and concrete methods.
 * 
 * KEY CONCEPTS:
 * - Cannot instantiate abstract classes directly
 * - Can have abstract methods (no body, must implement in child)
 * - Can have non-abstract methods (full implementation)
 * - Can have constructors (called when child is instantiated)
 * - Provide 0-100% abstraction (mix of abstract and concrete)
 * 
 * ABSTRACT vs INTERFACE:
 * - Abstract: Can have implementation, constructor, properties
 * - Interface: No implementation, no constructor, only declarations
 * 
 * CONSTRUCTOR CHAIN:
 * When child is instantiated:
 * 1. Call super() → Parent constructor runs first
 * 2. Then child constructor code runs
 * 3. This allows parent initialization before child setup
 * ================================================================================
 */

/**
 * ABSTRACT CLASS: Page
 * Cannot be instantiated directly, must be extended by subclass.
 * 
 * CHARACTERISTICS:
 * - abstract keyword marks the class as abstract
 * - constructor: Can have constructor, called via super()
 * - abstract methods: Declared but not implemented
 * - non-abstract methods: Fully implemented with body
 */

abstract class Page{
    // we can have constructor in abstract class but will be called by child object.
    constructor() {
        console.log("default page const ..... ");
    }

    /**
     * ABSTRACT METHODS:
     * Only method signature, no implementation body.
     * Child class MUST provide implementation.
     */
    abstract title():void;// abstract method declearation
    abstract url():void;

    /**
     * NON-ABSTRACT METHODS:
     * Full implementation provided in abstract class.
     * Child can use as-is or override.
     */
    pageLoading():void{ // non-abstract method 
        console.log("Page loading method");
    }

    footer():void{
        console.log("Page Footer Method");
    }
}

/**
 * CHILD CLASS: LoginPage extends Page
 * Must implement all abstract methods.
 * Can override non-abstract methods.
 * Can add own methods.
 */
class LoginPage extends Page {

    constructor() {
        super();
        console.log("Login page const ..... ");
    }
    
    /**
     * IMPLEMENTING ABSTRACT METHODS:
     * Must use 'override' keyword when implementing abstract methods.
     * Provides concrete implementation.
     */
    override title(): void {
        console.log("Title method");
    }
    override url(): void {
        console.log("URL method");
    }

    /**
     * OVERRIDING NON-ABSTRACT METHODS:
     * Non-abstract methods can also be overridden if needed.
     */
    override pageLoading():void{ // non-abstract method 
        console.log("Page loading overriden method");
    }

    /**
     * OWN METHODS:
     * Methods specific to LoginPage that are not in parent.
     */
    doLogin():void{
        console.log("Do Login method");
    }

}

/**
 * CONSTRUCTOR EXECUTION ORDER:
 * When LoginPage instance is created:
 * 1. LoginPage constructor calls super()
 * 2. Page constructor runs first → "default page const ....."
 * 3. LoginPage constructor body runs → "Login page const ....."
 */
let login:LoginPage = new LoginPage(); 
// Note:-  this will call parent class constractor then login page const...

/**
 * METHOD CALLS:
 * Can call abstract methods (implemented in child)
 * Can call inherited non-abstract methods
 * Can call overridden methods
 * Can call child-specific methods
 */
login.title(); // interface implimented
login.url(); //  interface implimented
login.pageLoading(); // overridden method
login.footer() // method implimented in abstract class
login.doLogin()// individule method of child class.