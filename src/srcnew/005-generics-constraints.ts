/*
╔════════════════════════════════════════════════════════════════════════════╗
║                   GENERICS - CONSTRAINTS                                   ║
║                   TypeScript Priority 1 Concept #5                         ║
╚════════════════════════════════════════════════════════════════════════════╝

CONCEPT: Generic Constraints
─────────────────────────────

WHAT IS IT?
Constraints limit what types can be used with a generic by requiring them to
meet certain criteria (extend an interface, have specific properties, etc.).

WHY USE IT?
• Restrict generic types to valid options
• Access properties/methods on generic types safely
• Enforce that types have required structure
• Provide better error messages at compile time
• Enable type-safe operations on constrained types

WHERE TO USE IT?
✓ Functions that need to access specific properties
✓ Array operations (only T[] types)
✓ Database queries (only entities with ID)
✓ Configuration objects (must have certain fields)
✓ Comparisons and sorting (types must be comparable)
✗ When accepting any type is appropriate
*/

// ─────────────────────────────────────────────────────────────────────────────
// CONSTRAINT: EXTENDS INTERFACE
// ─────────────────────────────────────────────────────────────────────────────

/*
The most common constraint: T must extend (implement) an interface
*/

interface HasId {
  id: string | number;
}

// Without constraint, you couldn't safely access .id
// With <T extends HasId>, TypeScript knows T will have 'id'
function printId<T extends HasId>(item: T): void {
  console.log("ID:", item.id); // ✓ Safe - T must have 'id'
}

// Valid usage
printId({ id: 1, name: "John" }); // ✓ Has id
printId({ id: "abc", age: 30 }); // ✓ Has id

// This would be a compile error:
// printId({ name: "John" }); // ✗ Missing 'id'

// ─────────────────────────────────────────────────────────────────────────────
// CONSTRAINT: EXTENDS PRIMITIVE TYPE
// ─────────────────────────────────────────────────────────────────────────────

/*
Restrict to specific types like string, number, etc.
*/

// Only accept string types
function createStringBox<T extends string>(value: T): { value: T } {
  return { value };
}

createStringBox("hello"); // ✓
// createStringBox(123); // ✗ Compile error - must be string

// Only accept types that are strings OR numbers
function addToNumericArray<T extends string | number>(array: (string | number)[], value: T): void {
  array.push(value);
}

addToNumericArray(["a", 1], "b"); // ✓
addToNumericArray(["a", 1], 2); // ✓
// addToNumericArray(["a", 1], true); // ✗ boolean not allowed

// ─────────────────────────────────────────────────────────────────────────────
// CONSTRAINT: KEY OF OBJECT (keyof)
// ─────────────────────────────────────────────────────────────────────────────

/*
T must be a key of object K
This is very powerful for type-safe property access
*/

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

interface Person {
  name: string;
  age: number;
  email: string;
}

const person: Person = { name: "Alice", age: 30, email: "alice@example.com" };

// ✓ All valid - keys exist
const name: string = getProperty(person, "name");
const age: number = getProperty(person, "age");
const email: string = getProperty(person, "email");

// ✗ These would be compile errors:
// getProperty(person, "phone"); // Phone doesn't exist on Person

// ─────────────────────────────────────────────────────────────────────────────
// CONSTRAINT: ARRAY OF TYPE
// ─────────────────────────────────────────────────────────────────────────────

/*
T must be an array of some type
*/

function getArrayLength<T extends any[]>(array: T): number {
  return array.length;
}

// ✓ Valid - arrays
const len1 = getArrayLength([1, 2, 3]); // ✓
const len2 = getArrayLength(["a", "b"]); // ✓
const len3 = getArrayLength([true, false]); // ✓

// ✗ Not arrays:
// getArrayLength("string"); // ✗ string is not an array

// ─────────────────────────────────────────────────────────────────────────────
// CONSTRAINT: CALLABLE/FUNCTION
// ─────────────────────────────────────────────────────────────────────────────

/*
T must be a function
*/

function executeIfFunction<T extends (...args: any[]) => any>(fn: T): void {
  console.log("Executing function");
  fn();
}

executeIfFunction(() => console.log("Hello")); // ✓
executeIfFunction(function () {
  console.log("Hello");
}); // ✓

// executeIfFunction("not a function"); // ✗

// ─────────────────────────────────────────────────────────────────────────────
// CONSTRAINT: CONSTRUCTOR TYPE
// ─────────────────────────────────────────────────────────────────────────────

/*
T must be a class that can be instantiated
*/

function create<T>(constructor: new () => T): T {
  return new constructor();
}

class Dog {
  bark() {
    console.log("Woof!");
  }
}

const dog = create(Dog); // ✓ Valid class
dog.bark();

// create("not a class"); // ✗ Compile error

// With constructor parameters
function createWithArgs<T>(constructor: new (arg: string) => T, arg: string): T {
  return new constructor(arg);
}

class Person2 {
  constructor(public name: string) {}
}

const person2 = createWithArgs(Person2, "John"); // ✓
console.log(person2.name); // "John"

// ─────────────────────────────────────────────────────────────────────────────
// CONSTRAINT: EXTENDS ANOTHER GENERIC
// ─────────────────────────────────────────────────────────────────────────────

/*
One generic type parameter extends another
*/

function cloneArray<T extends U[], U>(original: T): T {
  return [...original] as T;
}

const cloned = cloneArray([1, 2, 3]); // T is number[], U is number
// const cloned = cloneArray(["a", "b"]); // T is string[], U is string

// ─────────────────────────────────────────────────────────────────────────────
// CONSTRAINT: MULTIPLE CONSTRAINTS (AND/OR)
// ─────────────────────────────────────────────────────────────────────────────

/*
A type can extend multiple interfaces (intersection)
*/

interface HasName {
  name: string;
}

interface HasAge {
  age: number;
}

// T must have both 'name' AND 'age'
function processUser<T extends HasName & HasAge>(user: T): string {
  return `${user.name} is ${user.age} years old`;
}

const validUser = { name: "John", age: 30, email: "john@example.com" };
console.log(processUser(validUser)); // ✓ Has both properties

// processUser({ name: "John" }); // ✗ Missing 'age'

// ─────────────────────────────────────────────────────────────────────────────
// REAL-WORLD EXAMPLE: GENERIC FIND FUNCTION
// ─────────────────────────────────────────────────────────────────────────────

/*
A type-safe find function that only works with array types
*/

function findFirst<T extends any[]>(
  array: T,
  predicate: (item: T[number]) => boolean
): T[number] | undefined {
  return array.find(predicate);
}

const users: Person[] = [
  { name: "Alice", age: 30, email: "alice@example.com" },
  { name: "Bob", age: 25, email: "bob@example.com" },
  { name: "Charlie", age: 35, email: "charlie@example.com" },
];

const adult = findFirst(users, (p) => p.age >= 30);
console.log(adult?.name); // Alice or Charlie (whichever is first)

// ─────────────────────────────────────────────────────────────────────────────
// REAL-WORLD EXAMPLE: MERGE OBJECTS
// ─────────────────────────────────────────────────────────────────────────────

/*
Merge two objects safely - T and U must be objects
*/

function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 } as T & U;
}

const defaults = { theme: "light", language: "en" };
const userSettings = { theme: "dark" };

const merged = mergeObjects(defaults, userSettings);
// merged has both 'theme' (overridden) and 'language' properties

// ─────────────────────────────────────────────────────────────────────────────
// REAL-WORLD EXAMPLE: SORT FUNCTION FOR ENTITIES
// ─────────────────────────────────────────────────────────────────────────────

/*
Sort array of items that have a specific property
*/

function sortByProperty<T extends { [key: string]: any }>(
  items: T[],
  property: keyof T
): T[] {
  return [...items].sort((a, b) => {
    const aVal = a[property];
    const bVal = b[property];

    if (typeof aVal === "string" && typeof bVal === "string") {
      return aVal.localeCompare(bVal);
    }

    if (typeof aVal === "number" && typeof bVal === "number") {
      return aVal - bVal;
    }

    return 0;
  });
}

const sortedByAge = sortByProperty(users, "age");
const sortedByName = sortByProperty(users, "name");

console.log(sortedByAge.map((u) => u.age)); // [25, 30, 35]
console.log(sortedByName.map((u) => u.name)); // ["Alice", "Bob", "Charlie"]

// ─────────────────────────────────────────────────────────────────────────────
// REAL-WORLD EXAMPLE: ENSURE OBJECT HAS REQUIRED FIELDS
// ─────────────────────────────────────────────────────────────────────────────

/*
Make sure an object has required fields before processing
*/

function processRequired<T extends Required<{ id: string | number; data: any }>>(
  item: T
): void {
  console.log(`Processing item with ID: ${item.id}`);
  console.log(`Data:`, item.data);
}

processRequired({ id: 1, data: { name: "Test" }, extra: "field" }); // ✓

// processRequired({ data: { name: "Test" } }); // ✗ Missing 'id'

// ─────────────────────────────────────────────────────────────────────────────
// KEY TAKEAWAYS
// ─────────────────────────────────────────────────────────────────────────────

/*
CONSTRAINT SYNTAX:
<T extends ConstraintType>

COMMON CONSTRAINTS:
• <T extends Interface> - T must implement interface
• <T extends Type> - T must be specific type (string, number, etc)
• <T extends keyof U> - T must be a property key of U
• <T extends any[]> - T must be an array
• <T extends object> - T must be an object
• <T extends (...args: any[]) => any> - T must be a function
• <T extends new () => any> - T must be a class
• <T extends U & V> - T must satisfy both U and V (intersection)
• <T extends U | V> - T must be either U or V (union)

BENEFITS:
✓ Enforce correct usage at compile time
✓ Enable safe property access on generic types
✓ Improve error messages
✓ Enable type inference to work better
✓ Document what types are acceptable
✓ Prevent runtime errors

NEXT LEVEL:
→ Combine constraints with conditional types
→ Use constraints with mapped types
→ Build complex type systems with multiple constraints
*/
