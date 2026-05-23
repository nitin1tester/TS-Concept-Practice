/*

                    REST PARAMETERS (...args)                               
                   TypeScript Priority 1 Concept #13                        

CONCEPT: Rest Parameters


WHAT IS IT?
Rest parameters allow a function to accept a variable number of arguments
as an array. They're denoted by three dots (...) before the parameter name.

WHY USE IT?
 Accept unlimited arguments without overloading
 Group multiple arguments into a single array
 Avoid using arguments object (outdated)
 Create flexible, variadic functions
 Cleaner than array parameters

WHERE TO USE IT?
 Functions that take multiple values (sum, concat, etc.)
 Logging functions with multiple arguments
 Array/object spreading operations
 Function composition and higher-order functions
 API wrappers that need flexibility
 When you need fixed number of arguments
*/

// 
// BASIC REST PARAMETERS
// 

/*
Classic example: sum any number of values
*/

// Old way (poor type safety)
function sumOld(...args: any[]): number {
  return args.reduce((a, b) => a + b, 0);
}

// Better way (typed)
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum()); // 0 (empty)

// 
// REST PARAMETERS WITH MULTIPLE TYPES
// 

/*
Rest parameters accept unions and other types
*/

function logAll(...values: (string | number | boolean)[]): void {
  values.forEach((val, index) => {
    console.log(`[${index}]:`, val);
  });
}

logAll("hello", 42, true, "world", 100);

// 
// REST PARAMETERS WITH OBJECTS
// 

/*
Collect multiple objects
*/

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

function createTodos(...tasks: Task[]): void {
  tasks.forEach((task) => {
    console.log(`${task.title} (${task.id})`);
  });
}

createTodos(
  { id: "1", title: "Buy groceries", completed: false },
  { id: "2", title: "Write code", completed: true },
  { id: "3", title: "Exercise", completed: false }
);

// 
// FIXED PARAMETERS BEFORE REST
// 

/*
You can have regular parameters before rest parameters
The rest must be last!
*/

function greetUsers(greeting: string, ...names: string[]): void {
  names.forEach((name) => {
    console.log(`${greeting}, ${name}!`);
  });
}

greetUsers("Hello", "Alice", "Bob", "Charlie");
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!

// 
// REAL-WORLD: LOGGING FUNCTION
// 

/*
Common pattern in logging frameworks
*/

function log(level: "info" | "warn" | "error", ...messages: any[]): void {
  const timestamp = new Date().toISOString();
  const prefix = `[${timestamp}] ${level.toUpperCase()}:`;

  console.log(prefix, ...messages);
}

log("info", "Application started");
log("warn", "Memory usage high", "123MB");
log("error", "Failed to fetch", "API timeout", { duration: 5000 });

// 
// REAL-WORLD: ARRAY CONCATENATION
// 

/*
Build arrays from multiple sources
*/

function combineArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((result, arr) => [...result, ...arr], []);
}

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

const combined = combineArrays(arr1, arr2, arr3); // [1, 2, 3, 4, 5, 6]

// 
// REST PARAMETERS WITH GENERICS
// 

/*
Combine generics with rest for maximum flexibility
*/

function merge<T extends object>(...objects: T[]): T {
  return Object.assign({}, ...objects);
}

const obj1 = { name: "John", age: 30 };
const obj2 = { email: "john@example.com" };
const obj3 = { role: "admin" };

const merged = merge(obj1, obj2, obj3);
// { name: "John", age: 30, email: "john@example.com", role: "admin" }

// 
// REST PARAMETERS WITH CALLBACK
// 

/*
Pass multiple arguments to a callback
*/

function withRetry<T>(
  operation: (...args: any[]) => Promise<T>,
  ...args: any[]
): Promise<T> {
  return operation(...args);
}

async function fetchUser(userId: number, includeDetails: boolean): Promise<object> {
  return { id: userId, name: "John", details: includeDetails };
}

withRetry(fetchUser, 123, true);

// 
// REST IN CLASS METHODS
// 

/*
Classes can use rest parameters in methods
*/

class StringBuilder {
  private parts: string[] = [];

  append(...strings: string[]): this {
    this.parts.push(...strings);
    return this; // Enable chaining
  }

  toString(): string {
    return this.parts.join("");
  }
}

const result = new StringBuilder()
  .append("Hello")
  .append(" ", "World")
  .append("!")
  .toString(); // "Hello World!"

// 
// REST PARAMETERS TYPING PITFALLS
// 

/*
Be careful with typing rest parameters
*/

 This is wrong - creates array of arrays// 
// function sum(...numbers: number[][]): number { ... }

 Correct - creates array of numbers// 
function correctSum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

// 
// TUPLE REST PARAMETERS
// 

/*
Rest parameters can be tuples for specific signatures
*/

function buildQuery(
  baseUrl: string,
  ...params: [string, string][]
): string {
  const queryString = params
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return `${baseUrl}?${queryString}`;
}

const url = buildQuery("https://api.example.com", ["id", "123"], ["name", "John"]);
// "https://api.example.com?id=123&name=John"

// 
// REST PARAMETERS WITH OPTIONAL
// 

/*
Rest parameters are always optional (can be empty)
*/

function process(...items: string[]): void {
  if (items.length === 0) {
    console.log("No items provided");
    return;
  }

  items.forEach((item) => {
    console.log("Processing:", item);
  });
}

process(); // "No items provided"
process("item1", "item2"); // Processes both

// 
// KEY TAKEAWAYS
// 

/*
SYNTAX:
function name(...paramName: Type[]): ReturnType { ... }

RULES:
 Rest parameter must be last in parameter list
 Only one rest parameter per function
 Rest parameter is always optional
 Creates an array of the specified type
 Works with generics for flexibility

COMMON PATTERNS:
 function sum(...numbers: number[]): number
 function log(level: string, ...messages: any[]): void
 function merge<T>(...objects: T[]): T
 function concat<T>(...arrays: T[][]): T[]

USE CASES:
 Variadic functions (unlimited arguments)
 Logging and debugging
 Array/object operations
 Flexible API wrappers
 Configuration builders

ADVANTAGES OVER arguments:
 Better type safety
 Clearer intent
 Works with arrow functions
 No need for Array.from() conversion
 Works with destructuring

NEXT LEVEL:
 Combine with destructuring
 Use with default parameters
 Combine with function overloads
*/
