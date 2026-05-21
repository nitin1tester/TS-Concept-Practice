# TypeScript Concepts Documentation

This documentation explains all the TypeScript concepts demonstrated in the TS-Concept-Practice repository. Each file covers fundamental and advanced TypeScript features.

---

## Table of Contents
1. [011demo.ts - TypeScript Basics](#011demots---typescript-basics)
2. [021datatype.ts - Data Types](#021datatypets---data-types)
3. [031optionalparam.ts - Optional Parameters](#031optionalparamts---optional-parameters)
4. [032functionwithreturn.ts - Functions with Return Types](#032functionwithreturnts---functions-with-return-types)
5. [033enum.ts - Enumerations](#033enumts---enumerations)
6. [034enumbrowsertest.ts - Enum Usage](#034enumbrowsertestts---enum-usage)
7. [041errorhandling.ts - Error Handling](#041errorhandlingts---error-handling)
8. [042customerror.ts - Custom Error Classes](#042customerrorts---custom-error-classes)
9. [043classtest.ts - Inheritance](#043classtestts---inheritance)
10. [051accessmodifier.ts - Access Modifiers](#051accessmodifierts---access-modifiers)
11. [052interfaceconcept.ts - Interfaces](#052interfaceconceptts---interfaces)
12. [053interfacewithclass.ts - Interface Implementation](#053interfacewithclassts---interface-implementation)
13. [054abstractclass.ts - Abstract Classes](#054abstractclassts---abstract-classes)
14. [Sample.ts & adv1.ts - Advanced Examples](#samplets--adv1ts---advanced-examples)

---

## 011demo.ts - TypeScript Basics

### Overview
This file introduces the fundamentals of TypeScript and how to set it up in your development environment.

### Key Concepts

**What is TypeScript?**
- TypeScript is a superset of JavaScript that adds static typing
- Code must be compiled to JavaScript for browsers and Node.js to understand
- Acts as a wrapper over JavaScript with type safety

**Installation Steps:**
```bash
node -v                          # Check Node.js version
npm -v                           # Check npm version
npm install -g typescript        # Install TypeScript globally
tsc -v                           # Verify TypeScript installation
npm init -y                      # Initialize package.json
tsc --init                       # Initialize TypeScript config
```

**Running TypeScript Files:**

1. **ts-node** - Direct compiler execution
   ```bash
   npm install -g ts-node typescript
   ts-node file-name.ts
   ```

2. **nodemon** - Auto-reload on changes
   ```bash
   npm install -g nodemon
   nodemon file-name.ts
   ```

3. **tsx** - TypeScript executor
   ```bash
   npm install -g tsx
   tsx app.ts
   ```

**Code Example:**
```typescript
let msg: string = "nitin";      // String variable with type annotation
console.log(msg);

let x: number = 10;              // Number variable
console.log(x);

function test(browser: string) {
    console.log("browser is ", browser.toUpperCase());
}
test("chrome");                  // Output: BROWSER IS CHROME
```

### Learning Points
- Type annotations are added with `:type` syntax
- The compiler uses `tsconfig.json` to configure compilation options
- Functions can have typed parameters

---

## 021datatype.ts - Data Types

### Overview
Covers all primitive and advanced data types available in TypeScript.

### Primitive Data Types

**1. Number**
```typescript
let num: number = 10;
console.log(num);      // 10
console.log(typeof num); // number
```
- Includes integers, decimals, infinity, and NaN

**2. String**
```typescript
let str: string = "nitin";
console.log(str);      // nitin
```
- Text data type with support for template literals

**3. Boolean**
```typescript
let isActive: boolean = true;
console.log(isActive);  // true
```
- True or false values

**4. Null & Undefined**
```typescript
let user: null = null;
let user2 = null;                // Type inference
let user3 = undefined;           // Type inference
```
- Null and undefined are special types in TypeScript

**5. BigInt**
```typescript
let bnum: bigint = 100n;
console.log(bnum);              // 100n
```
- For handling very large numbers beyond JavaScript's safe integer limit

**6. Any Type**
```typescript
let testValue: any;
testValue = 100;                // Valid
testValue = "nitin";            // Valid (type can change)
```
- Allows any type (disables type checking)
- Use sparingly as it defeats TypeScript's purpose

**7. Unknown Type**
```typescript
let value: unknown = 'hello';
console.log(value);             // hello
```
- Similar to `any` but safer
- Requires type checking before operations

### Function Return Types

**Void - No Return**
```typescript
function test(): void {
    console.log("hello testing");
    // No return statement
}
```

**Return Types**
```typescript
function getPiValue(): number {
    return 3.14;
}

function addNumber(n1: number, n2: number): number {
    return n1 + n2;
}
```

### Union Types
```typescript
let id: string | number | boolean;
id = 100;              // Valid
id = "nitin";          // Valid
id = true;             // Valid
```
- Variable can hold multiple types using the `|` (pipe) operator

### Array Types

**Fixed Type Arrays**
```typescript
let arr: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["nitin", 'shraddha', `shivansh`];
```

**Mixed Type Arrays**
```typescript
let device: unknown[] = [1, 2, 3, 'Nitin'];
let mixdata: Array<any> = ["apple", 1, true];
let mixdata2: Array<string | number | boolean> = ["apple", 1, true];
```

### Tuple Type
```typescript
// Fixed-length array with specific types at each position
let myUser: [string, number] = ["nitin", 100];
let person: [string, string, number, boolean] = ['Nitin', 'QA', 45, true];
```
- Elements must be in exact order and type

### Object Type

**Using Type Alias**
```typescript
type userType = {
    readonly name: string;    // Readonly property (immutable)
    age: number;
    isActive: boolean;
    city: string
}

let usrObj: userType = {
    name: "Nitin",
    age: 50,
    isActive: true,
    city: "pune"
};
```

**Custom Types**
```typescript
type orderIdType = string | number;
let orderId: orderIdType = 1234;
orderId = "abc123";
```

### Key Learning Points
- Type annotations prevent runtime errors
- Readonly properties cannot be modified after initialization
- Tuples provide stricter array typing than regular arrays
- Union types provide flexibility while maintaining type safety

---

## 031optionalparam.ts - Optional Parameters

### Overview
Demonstrates how to make function parameters optional and implement function overloading.

### Optional Parameters

**Basic Optional Parameter**
```typescript
function printData(name: string, age?: number): void {
    console.log(name);
    console.log(age);
}

printData('Nitin');           // age is undefined
printData("shivansh", 1);     // age is 1
```
- Optional parameters use the `?` operator
- Must be placed after required parameters

**Multiple Optional Parameters**
```typescript
function search(name: string, color: string, price?: number, seller?: string): void {
    if(price && seller) {
        console.log(name, color, price, seller);
    } else {
        console.log(name, color);
    }
}

search("iphone", "white", 1500, "cloudEra");  // All params
search("macbook", "silver");                   // Only required params
```

### Function Overloading

Function overloading allows you to define multiple signatures for the same function name.

**Syntax:**
```typescript
// Design prototypes (signatures)
function combination(a: number, b: number): number;
function combination(a: string, b: string): string;
function combination(a: number, b: string): string;
function combination(a: string, b: number): string;

// Only one implementation with body
function combination(a: any, b: any): any {
    return a + b;
}

// Calling different signatures
console.log(combination(10, 20));              // 30 (number + number)
console.log(combination('Nitin', 'Automation')); // NitinAutomation (string + string)
console.log(combination("nitin", 10));         // nitin10 (string + number)
```

**How It Works:**
1. Define multiple function signatures with different parameter types
2. Implement a single function with a general signature (`any` types)
3. The implementation handles all signature combinations
4. TypeScript ensures type safety at compile time

### Key Learning Points
- Optional parameters provide flexibility for function calls
- Function overloading enables single function names with different signatures
- Always place optional parameters after required ones
- Overloading improves code readability and type safety

---

## 032functionwithreturn.ts - Functions with Return Types

### Overview
Demonstrates various function return types including synchronous and asynchronous operations.

### Synchronous Return Types

**Boolean Return**
```typescript
function launchBrowser(name: string): boolean {
    switch (name.trim().toLowerCase()) {
        case 'chrome':
            console.log(`${name} is launched`);
            return true;
        case 'firefox':
            console.log(`${name} is launched`);
            return true;
        default:
            console.log(`${name} is not a valid browser`);
            return false;
    }
}

launchBrowser('fireFox');  // true
launchBrowser('ie');       // false
```

### Promise Return Types

**Promise with Number**
```typescript
function getNumber(): Promise<number> {
    return Promise.resolve(100);
}

getNumber().then((result) => {
    console.log(result);  // 100
});
```

**Promise with String**
```typescript
function getTrainerName(): Promise<string> {
    return Promise.resolve("Nitin");
}

getTrainerName().then((result) => {
    console.log(result);  // Nitin
});
```

**Promise with Custom Type**
```typescript
type userType = { name: string; age: number };

function getUserData(): Promise<userType> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = {
                name: "shivansh",
                age: 1
            };
            resolve(user);
        }, 3000);
    });
}
```

### Async/Await Pattern

**Async Function**
```typescript
async function getMyUserData() {
    let myUsr = await getUserData();  // Wait for promise to resolve
    console.log(myUsr.name);
    console.log(myUsr);
    return myUsr;
}

getMyUserData();  // Call async function
```

**How Async/Await Works:**
- `async` keyword makes a function return a Promise
- `await` pauses execution until the Promise resolves
- Must be used inside async functions
- More readable than chaining `.then()`

### Practical Example - Playwright-like Pattern

```typescript
// Low-level browser method (returns Promise)
function click(element: string): Promise<void> {
    console.log('Click on', element);
    return Promise.resolve();
}

// High-level utility wrapper
async function doClick(element: string): Promise<void> {
    await click(element);  // Wait for click to complete
}

// Usage in test
doClick("loginBtn");
```

### Key Learning Points
- Functions can return specific types using `: ReturnType` syntax
- Promises are used for asynchronous operations
- Async/await provides cleaner syntax than Promise chains
- Proper typing of async operations prevents runtime errors

---

## 033enum.ts - Enumerations

### Overview
Enums are collections of named constants used to define a fixed set of values.

### Enum Basics

```typescript
export enum BROWSER {
    CHROME = 'chrome',
    FIREFOX = 'firefox',
    SAFARI = 'safari',
    EDGE = 'edge'
}

enum ENV {
    QA = "QA",
    STAGE = "stage",
    PROD = "prod"
}
```

**Accessing Enum Values:**
```typescript
console.log(BROWSER.CHROME);   // chrome
console.log(BROWSER.FIREFOX);  // firefox
console.log(BROWSER.SAFARI);   // safari
console.log(BROWSER.EDGE);     // edge
```

### Enum Naming Convention
- Enum names use UPPERCASE with UNDERSCORE separation
- Values are typically string or numeric constants
- Provides a readable way to work with fixed sets of values

### Benefits of Enums
1. **Type Safety** - Prevents invalid values
2. **Readability** - Clear intent with named constants
3. **Maintainability** - Centralized value definitions
4. **IDE Support** - Autocomplete and refactoring

### Key Learning Points
- Enums restrict variables to predefined values
- String enums are more readable than numeric enums
- Can export enums for use in other modules
- Prevents typos and invalid values at compile time

---

## 034enumbrowsertest.ts - Enum Usage

### Overview
Demonstrates practical usage of enums imported from other modules.

### Importing and Using Enums

```typescript
import { BROWSER, ENV } from "./033enum.js";

let browser = BROWSER.CHROME;  // Get enum value

switch (browser.trim().toLowerCase()) {
    case 'chrome':
        console.log("launch chrome");
        break;
    default:
        console.log("enter valid browser");
        break;
}
```

### Real-World Scenario
```typescript
// Test framework usage
if (browser === BROWSER.CHROME) {
    launchChromeDriver();
} else if (browser === BROWSER.FIREFOX) {
    launchFirefoxDriver();
}
```

### Key Learning Points
- Enums can be exported and imported across modules
- String methods like `.trim()` and `.toLowerCase()` work on string enums
- Enums provide compile-time checking for constant values
- Prevents magic strings and hard-coded values in code

---

## 041errorhandling.ts - Error Handling

### Overview
Explains how to handle errors and exceptions in TypeScript using try-catch-finally blocks.

### Error Handling Structure

```typescript
try {
    // Code that might throw an error
} catch (error) {
    // Handle the error
} finally {
    // Code that always runs
}
```

### Try-Catch-Finally Rules
- Only one try block per function (cannot have multiple try blocks)
- Can have try without catch if finally block exists
- Finally block always executes regardless of success/failure

### Example 1: Throwing Errors

```typescript
function div(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Can't be divided by zero");
    }
    return a / b;
}

// This will throw an error
let result = div(10, 0);  // Error thrown, execution stops
```

### Example 2: Try-Catch-Finally

```typescript
function parsing() {
    try {
        let result = JSON.parse('{"name":"Nitin"}');
        console.log(result);
    }
    catch (error) {
        console.log(error);  // Handle JSON parsing error
    }
    finally {
        console.log("I am finally block i will run");  // Always runs
    }
}

parsing();
console.log("Done");
```

**Output:**
```
{ name: 'Nitin' }
I am finally block i will run
Done
```

### Never Return Type

```typescript
function m1(): never {
    throw new Error("this is my error");
    // Function never returns (always throws)
}

m1();  // Execution stops here
```

**When to Use `never`:**
- Function always throws an error
- Function has infinite loop
- Function never returns normally

### Error Handling Best Practices
1. Always catch potential errors
2. Use finally for cleanup operations
3. Log errors for debugging
4. Throw meaningful error messages
5. Use specific error types when possible

### Key Learning Points
- Try-catch blocks prevent program crashes
- Finally block ensures cleanup code runs
- Never type indicates unreachable code paths
- Proper error handling improves code reliability

---

## 042customerror.ts - Custom Error Classes

### Overview
Demonstrates how to create custom error classes by extending the built-in Error class.

### Creating Custom Error Classes

```typescript
class ElementError extends Error {
    constructor(message: string) {
        super(message);  // Call parent Error constructor
    }
}

class BrowserError extends Error {
    constructor(message: string) {
        super(message);
    }
}

class Framework extends Error {
    constructor(message: string) {
        super(message);
    }
}
```

### Using Custom Errors

```typescript
let browser = 'nitin';

switch (browser) {
    case "chrome":
        console.log("open chrome");
        break;
    default:
        throw new BrowserError(`${browser} not found`);
}

console.log("Enter the app url");
```

**If browser != 'chrome':**
```
BrowserError: nitin not found
  at ...
```

### Benefits of Custom Errors
1. **Semantic Clarity** - Different error types for different issues
2. **Specific Handling** - Can catch specific error types
3. **Context** - Each error type provides relevant context
4. **Type Safety** - TypeScript knows error types

### Example with Specific Handling

```typescript
try {
    // Some code that might throw custom errors
} catch (error) {
    if (error instanceof BrowserError) {
        console.log("Browser error detected");
    } else if (error instanceof ElementError) {
        console.log("Element error detected");
    }
}
```

### Key Learning Points
- Custom errors extend the built-in Error class
- `super()` must be called in constructor
- Custom errors provide semantic meaning
- Can differentiate between error types using `instanceof`

---

## 043classtest.ts - Inheritance

### Overview
Demonstrates class inheritance and polymorphism in TypeScript.

### Basic Inheritance

```typescript
class Car {
    start(): void {
        console.log("car---start");
    }
    Stop(): void {
        console.log("car---stop");
    }
    refuel(): void {
        console.log("car---refuel");
    }
}

class BMW extends Car {
    override start(): void {  // Must use override keyword
        console.log("BMW---start");
    }

    autoParking(): void {
        console.log("BMW---AutoParking");
    }
}
```

**Creating Objects:**
```typescript
let bwm: BMW = new BMW();
bwm.start();      // BMW---start (overridden)
bwm.autoParking(); // BMW---AutoParking (new method)
bwm.Stop();       // car---stop (inherited)
bwm.refuel();     // car---refuel (inherited)
```

### Inheritance Hierarchy

```typescript
let car: Car = new Car();

// Upcasting: Child object referenced by parent type
// IS-A relationship: Every BMW is a Car
let car1: Car = new BMW();

car1.start();  // BMW---start (polymorphic behavior)
car1.Stop();   // car---stop
car1.refuel(); // car---refuel
```

### Upcasting vs Downcasting

**Upcasting (Allowed) ✓**
```typescript
// Child can be referenced by parent type
let car: Car = new BMW();  // Valid: IS-A relationship
```

**Downcasting (Not Allowed) ✗**
```typescript
// Parent cannot be referenced by child type
let bwm: BMW = new Car();  // Invalid: NOT every Car is a BMW
```

### Inheritance Relationship Rules
- Every BMW is a Car (IS-A relationship) → Upcasting allowed
- NOT every Car is a BMW → Downcasting not allowed
- Child class inherits all parent methods
- Child can override parent methods using `override` keyword

### Key Learning Points
- Inheritance enables code reuse
- Override allows customization in child classes
- Upcasting is safe and always allowed
- Downcasting can cause runtime errors
- Use meaningful inheritance hierarchies

---

## 051accessmodifier.ts - Access Modifiers

### Overview
Explains how to control visibility and access of class members using access modifiers.

### Access Modifier Levels

```typescript
/**
 * public    -- Same class, Child class, Outside of class
 * private   -- Same class only
 * protected -- Same class, Child class (not outside)
 */
```

### Detailed Examples

**Public Access Modifier**
```typescript
class User {
    public testing(): void {
        console.log("I am testing");
    }
}

// Can be accessed from outside
let user = new User();
user.testing();  // Valid
```

**Private Access Modifier**
```typescript
class User {
    private coding(): void {
        console.log("I am coding");
    }

    public doCoding(): void {
        this.coding();  // Valid: private method called within class
    }
}

// Cannot be accessed from outside
let user = new User();
user.coding();  // Error: private method
```

**Protected Access Modifier**
```typescript
class User {
    protected management(): void {
        console.log("I am management");
    }
}

class Employee extends User {
    public working() {
        console.log("I am working");
        this.management();  // Valid: protected in child class
    }
}

// Cannot be accessed from outside
let emp = new Employee();
emp.management();  // Error: protected method
```

### Inheritance and Access Modifiers

```typescript
class Employee extends User {
    public working() {
        console.log("I am working");
        this.management();      // ✓ Can access protected from parent
        this.testing();         // ✓ Can access public from parent
        this.doCoding();        // ✓ Can access public from parent
        // this.coding();       // ✗ Cannot access private from parent
    }
}
```

### Access Modifier Summary

| Modifier  | Same Class | Child Class | Outside Class |
|-----------|-----------|-------------|---------------|
| public    | ✓         | ✓           | ✓             |
| protected | ✓         | ✓           | ✗             |
| private   | ✓         | ✗           | ✗             |

### Best Practices
1. Use `private` for internal implementation details
2. Use `protected` for functionality needed by child classes
3. Use `public` for the API/interface of your class
4. Minimize public surface area to reduce coupling

### Key Learning Points
- Access modifiers enforce encapsulation
- Private members cannot be inherited or accessed externally
- Protected members are accessible in child classes
- Proper access control improves code maintainability

---

## 052interfaceconcept.ts - Interfaces

### Overview
Interfaces define contracts/blueprints for objects without implementation.

### Interface Basics

```typescript
interface User {
    name: string;
    age: number;
    salary?: number;              // Optional property
    city?: string;                // Optional property
    readonly companyName: string; // Readonly property
    coding(): void;               // Method declaration (no body)
    calcSal(): number;            // Method declaration
}
```

### Implementing Interfaces

```typescript
let u1: User = {
    name: "Shivansh",
    age: 20,
    // salary and city are optional, so not required
    companyName: 'TRC',  // Must provide readonly property

    coding(): void {
        console.log(`${this.name} is coding`);
    },

    calcSal(): number {
        return 100;
    }
};

console.log(u1);  // User object with all properties
u1.coding();      // Shivansh is coding
console.log(u1.calcSal());  // 100
```

### Interface Characteristics

1. **No Implementation** - Only method declarations
2. **Blueprint** - Defines shape of objects
3. **Type Checking** - Compile-time verification
4. **No Instantiation** - Cannot create interface objects

### Optional vs Readonly

**Optional Property (`?`)**
```typescript
salary?: number;  // Not required when creating object
```

**Readonly Property**
```typescript
readonly companyName: string;  // Cannot be changed after initialization
companyName = "NewCompany";    // Error: Cannot modify readonly property
```

### Use Cases for Interfaces
- Define object shapes
- Create contracts for classes
- Enforce consistent structure
- Enable type checking at compile time

### Key Learning Points
- Interfaces provide structural type checking
- No implementation details in interfaces
- Optional and readonly properties add flexibility
- Interfaces cannot be instantiated

---

## 053interfacewithclass.ts - Interface Implementation

### Overview
Demonstrates implementing multiple interfaces in classes with inheritance chains.

### Interface Inheritance

```typescript
interface UNHC {
    minFee(): void;
}

interface WHO extends UNHC {
    covid(): void;
}

interface USMedical extends WHO {
    physio(): void;
    cardio(): void;
    emergency(): void;
}

interface UKMedical extends WHO {
    ENT(): void;
    oncology(): void;
    emergency(): void;
}

interface IndiaMedical extends WHO {
    pedia(): void;
    dental(): void;
    emergency(): void;
}
```

**Interface Inheritance Rules:**
- I-I (Interface to Interface) uses `extends`
- A child interface inherits all methods from parent

### Multiple Interface Implementation

```typescript
class FortisHospital implements USMedical, UKMedical, IndiaMedical {
    // Must implement all methods from all interfaces

    medicalTest(): void {
        console.log("Medical test");
    }

    // From WHO (extends UNHC)
    minFee(): void {
        console.log("1 Rs free");
    }
    covid(): void {
        console.log("I am covid");
    }

    // From USMedical
    physio(): void {
        console.log("I am physio");
    }
    cardio(): void {
        console.log("I am cardio");
    }

    // From UKMedical
    ENT(): void {
        console.log("I am ENT");
    }
    oncology(): void {
        console.log("I am oncology");
    }

    // From IndiaMedical
    pedia(): void {
        console.log("I am pedia");
    }
    dental(): void {
        console.log("I am dental");
    }

    // Common to multiple interfaces
    emergency(): void {
        console.log("I am emergency");
    }
}
```

### Using Implemented Classes

**Direct Usage:**
```typescript
let fortis: FortisHospital = new FortisHospital();
fortis.ENT();          // I am ENT
fortis.cardio();       // I am cardio
fortis.dental();       // I am dental
```

**Upcasting (Polymorphism):**
```typescript
// Child class object referenced by parent interface
let usmedical: USMedical = new FortisHospital();
usmedical.cardio();    // I am cardio
usmedical.physio();    // I am physio
usmedical.emergency(); // I am emergency
usmedical.covid();     // I am covid (inherited from WHO)

let ukmedical: UKMedical = new FortisHospital();
ukmedical.ENT();       // I am ENT
ukmedical.emergency(); // I am emergency
ukmedical.minFee();    // 1 Rs free (inherited from UNHC through WHO)
```

### Relationship Types

| Relationship | Syntax | Used With |
|-------------|--------|-----------|
| Class-to-Class | extends | Classes |
| Class-to-Interface | implements | Classes implementing Interfaces |
| Interface-to-Interface | extends | Interfaces extending Interfaces |

### 100% Abstraction with Interfaces
- Interfaces define WHAT needs to be done
- Classes define HOW it's done
- No implementation in interfaces = 100% abstraction
- Multiple interface implementation = multiple inheritance behavior

### Key Learning Points
- Interfaces can extend other interfaces
- Classes can implement multiple interfaces
- All interface methods must be implemented
- Upcasting allows polymorphic behavior
- Interfaces provide contracts without implementation

---

## 054abstractclass.ts - Abstract Classes

### Overview
Demonstrates abstract classes that combine implementation and abstraction (0-100% abstraction).

### Abstract Class Basics

```typescript
abstract class Page {
    // Constructor in abstract class (called by child object)
    constructor() {
        console.log("default page const .....");
    }

    // Abstract method: no body, must be implemented in child
    abstract title(): void;
    abstract url(): void;

    // Non-abstract method: has implementation
    pageLoading(): void {
        console.log("Page loading method");
    }

    footer(): void {
        console.log("Page Footer Method");
    }
}
```

### Implementing Abstract Class

```typescript
class LoginPage extends Page {
    constructor() {
        super();  // Call parent constructor
        console.log("Login page const .....");
    }

    // Implement abstract methods
    override title(): void {
        console.log("Title method");
    }

    override url(): void {
        console.log("URL method");
    }

    // Can override non-abstract methods
    override pageLoading(): void {
        console.log("Page loading overridden method");
    }

    // Own methods
    doLogin(): void {
        console.log("Do Login method");
    }
}
```

### Creating and Using Objects

```typescript
let login: LoginPage = new LoginPage();

// Parent constructor called first, then child constructor
// Output:
// default page const .....
// Login page const .....

login.title();       // Title method (abstract method implemented)
login.url();         // URL method (abstract method implemented)
login.pageLoading(); // Page loading overridden method (overridden)
login.footer();      // Page Footer Method (inherited as-is)
login.doLogin();     // Do Login method (child specific)
```

### Abstract vs Concrete

**Cannot Create Abstract Class Objects**
```typescript
let page: Page = new Page();  // Error: Cannot instantiate abstract class
```

**Can Create Child Class Objects**
```typescript
let login: LoginPage = new LoginPage();  // Valid: Concrete class
```

### Abstract Class Characteristics

1. **Cannot be instantiated** - Cannot create objects directly
2. **Mixed abstraction** - Can have abstract and concrete methods
3. **Implementation details** - Can contain method bodies
4. **Constructors** - Can have constructors for initialization
5. **0-100% abstraction** - Partial abstraction (0% to 100%)

### Abstract vs Interface

| Feature | Abstract Class | Interface |
|---------|----------------|-----------|
| Instantiation | Cannot instantiate | Cannot instantiate |
| Implementation | Can have implementation | No implementation |
| Constructor | Can have constructor | Cannot have constructor |
| Abstract methods | Can have abstract methods | All methods are abstract |
| Inheritance | Single inheritance (extends) | Multiple inheritance (implements) |
| Abstraction Level | 0-100% (partial) | 100% (complete) |

### Constructor Calling Chain

```
LoginPage() called
    ↓
super() → Page() called
    ↓
"default page const ....." printed
    ↓
LoginPage constructor body
    ↓
"Login page const ....." printed
```

### Key Learning Points
- Abstract classes cannot be instantiated directly
- Abstract methods must be implemented in child classes
- Non-abstract methods can have default implementation
- Constructors in abstract classes are called when child is instantiated
- Abstract classes provide partial abstraction with implementation

---

## Sample.ts & adv1.ts - Advanced Examples

### Sample.ts - Array and String Operations

**Purpose:** Demonstrates practical algorithms for array and string manipulation.

#### 1. Counting Occurrences in Array

```typescript
let arr: number[] = [2, 4, 2, 4, 5, 6, 5, 8, 9, 4, 2, 4, 5, 3, 5];

function counterNum(arr: number[], num: number) {
    let count: number = 0;
    for (const e of arr) {
        if (e === num) {
            count++;
        }
    }
    return count;
}

// Count occurrences of each number 1-9
for (let index = 1; index < 10; index++) {
    let total = counterNum(arr, index);
    console.log(`Total ${index} count: ${total}`);
}
```

**Output:**
```
Total 1 count: 0
Total 2 count: 3
Total 3 count: 1
Total 4 count: 4
Total 5 count: 4
...
```

#### 2. Counting Character Occurrences in String

```typescript
let str: string = "nitin";

function countChar(chr: string, char: string) {
    let strArr: string[] = [...str];  // Spread operator: convert string to array
    let counter: number = 0;
    for (let e of strArr) {
        if (e === char) {
            counter++;
        }
    }
    return counter;
}

let num: number = countChar(str, "n");
console.log(num);  // 2 (character 'n' appears 2 times)
```

**How Spread Operator Works:**
```typescript
let str = "nitin";
let strArr = [...str];
// Result: ['n', 'i', 't', 'i', 'n']
```

#### 3. Removing Duplicates from Array

```typescript
let nArr: number[] = [2, 4, 2, 4, 5, 6, 5, 8, 9, 4, 2, 4, 5, 3, 5];

function removeDuplicateNumber(num: number[]) {
    let x = [...new Set(num)];  // Set removes duplicates, spread converts back to array
    console.log(x);
}

removeDuplicateNumber(nArr);
// Output: [2, 4, 5, 6, 8, 9, 3]
```

**How Set Works:**
- `Set` is a collection of unique values
- Automatically removes duplicates
- Spread operator converts Set back to Array

#### 4. Using Console Methods

```typescript
let nArr1: number[] = [2, 4, 2, 4, 5, 6, 5, 8, 9, 4, 2, 4, 5, 3, 5];
let user = {
    name: "nitin",
    age: 35,
    city: "pune",
    status: true
};

// Table format output
console.table(user);
// Output:
// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │ name    │ 'nitin' │
// │ age     │ 35     │
// │ city    │ 'pune' │
// │ status  │ true   │
// └─────────┴────────┘

// Other console methods (commented out)
// console.count()     // Count calls
// console.clear()     // Clear console
// console.assert()    // Conditional logging
// console.time()      // Measure execution time
```

### Key Algorithms Learned
- **Array operations** - Counting, filtering, removing duplicates
- **String operations** - Converting to arrays, counting characters
- **Set data structure** - Removing duplicates efficiently
- **Console debugging** - Displaying data in readable formats
- **Spread operator** - Converting between data structures

---

## Summary of Concepts

### Data & Types
- Primitive types: number, string, boolean, null, undefined, bigint
- Advanced types: any, unknown, union types, tuples
- Custom types using `type` keyword
- Readonly properties for immutability

### Functions
- Type annotations for parameters and return types
- Optional parameters using `?`
- Function overloading for multiple signatures
- Return types: void, specific types, Promise, never

### Asynchronous Programming
- Promises for async operations
- Async/await syntax for cleaner code
- Promise resolution and error handling

### Object-Oriented Programming
- **Classes**: Create objects with properties and methods
- **Inheritance**: Share functionality using `extends`
- **Interfaces**: Define contracts without implementation
- **Abstract Classes**: Combine abstraction with implementation
- **Access Modifiers**: public, private, protected

### Advanced Topics
- Enums for fixed value sets
- Error handling with try-catch-finally
- Custom error classes
- Polymorphism through inheritance and upcasting
- Multiple interface implementation

### Practical Algorithms
- Array operations (counting, filtering)
- String manipulation
- Duplicate removal using Set
- Console debugging techniques

---

## Best Practices

1. **Always use type annotations** - Catch errors at compile time
2. **Prefer specific types over `any`** - Use `unknown` if unsure
3. **Use interfaces for contracts** - Define clear expectations
4. **Leverage access modifiers** - Encapsulate implementation
5. **Create custom errors** - Handle different error scenarios
6. **Use async/await** - More readable than promise chains
7. **Implement proper error handling** - Use try-catch-finally
8. **Document complex logic** - Add JSDoc comments
9. **Keep inheritance hierarchies simple** - Avoid deep nesting
10. **Test your code** - Catch errors before production

---

## Resources for Further Learning

- TypeScript Official Docs: https://www.typescriptlang.org/docs/
- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/
- Advanced Types: https://www.typescriptlang.org/docs/handbook/2/types-from-types.html
- OOP Concepts: Study class inheritance and polymorphism
- Async/Await: Understand Promise-based programming

---

**Documentation Created:** 2026-05-21  
**Repository:** TS-Concept-Practice  
**Author:** Nitin
