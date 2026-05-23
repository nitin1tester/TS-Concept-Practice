/*

                   TYPE GUARDS - TYPEOF                                     
                   TypeScript Priority 1 Concept #11                        

CONCEPT: typeof Type Guards


WHAT IS IT?
A type guard is code that performs a runtime check and tells TypeScript
the precise type in a narrowed scope. typeof is the simplest type guard
for checking primitive types.

WHY USE IT?
 Check if a value is a specific primitive type (string, number, boolean, etc.)
 Narrow union types to specific types for safe operations
 Handle polymorphic values safely
 Prevent runtime "Cannot read property of undefined" errors
 Enable proper type inference after checks

WHERE TO USE IT?
 Functions that accept union types
 Handling API responses with unknown shape
 User input validation
 Configuration parsing
 Polymorphic data processing
 For checking object types (use instanceof instead)
*/

// 
// BASIC TYPEOF GUARD
// 

/*
Without type guard - TypeScript doesn't know which type we're dealing with
*/
function processValueUnsafe(value: string | number): void {
  // TypeScript error: value could be string or number
  // console.log(value. Error: not all types have toUpperCasetoUpperCase()); // 
}

/*
With typeof guard - TypeScript narrows the type
*/
function processValueSafe(value: string | number): void {
  if (typeof value === "string") {
    // Inside this block, value is definitely string
    console.log(value. SafetoUpperCase()); // 
  } else {
    // Inside this block, value is definitely number
    console.log(value.toFixed( Safe2)); // 
  }
}

// 
// TYPEOF FOR MULTIPLE TYPES
// 

/*
Handle different types differently
*/
type FlexibleInput = string | number | boolean | null | undefined;

function formatValue(input: FlexibleInput): string {
  if (typeof input === "string") {
    return `String: ${input.toUpperCase()}`;
  }

  if (typeof input === "number") {
    return `Number: ${input.toFixed(2)}`;
  }

  if (typeof input === "boolean") {
    return `Boolean: ${input ? "true" : "false"}`;
  }

  if (input === null) {
    return "Value is null";
  }

  if (input === undefined) {
    return "Value is undefined";
  }

  // Unreachable - TypeScript knows all cases handled
  const _exhaustive: never = input;
  return _exhaustive;
}

// 
// TYPEOF FOR OPTIONAL VALUES
// 

/*
Safely handle values that might be undefined
*/
function getLength(value: string | undefined): number {
  if (typeof value === "string") {
    return value. value is definitely stringlength; // 
  }
  return 0; // Fallback for undefined
}

console.log(getLength("hello")); // 5
console.log(getLength(undefined)); // 0

// 
// TYPEOF WITH ARRAYS (CAVEAT!)
// 

/*
Important: typeof array === "object" (not "array")
Use Array.isArray() for checking arrays
*/

function processData(data: unknown): void {
  if (typeof data === "object" && !Array.isArray(data) && data !== null) {
    // It's an object but not an array
    console.log("Object:", data);
  }

  if (Array.isArray(data)) {
    // It's an array
    console.log("Array:", data);
  }

  if (typeof data === "string") {
    console.log("String:", data);
  }
}

// 
// TYPEOF GUARD IN CONDITIONS
// 

/*
Use typeof directly in conditionals for clean code
*/

type Config = string | { url: string; timeout: number };

function getApiUrl(config: Config): string {
  // Type narrowing happens right in the expression
  return typeof config === "string" ? config : config.url;
}

// 
// REAL-WORLD EXAMPLE: API RESPONSE HANDLER
// 

/*
API might return different response types
*/

type ApiResponse = 
  | { success: true; data: object; status: 200 }
  | { success: false; error: string; status: 400 | 500 };

function handleApiResponse(response: ApiResponse): void {
  if (response.success && typeof response.data === "object") {
    console.log("Processing data:", response.data);
    // Safe to access response.data
  } else if (!response.success && typeof response.error === "string") {
    console.log("Error:", response.error);
    console.log("Status:", response.status);
  }
}

// 
// REAL-WORLD EXAMPLE: JSON PARSING
// 

/*
After parsing JSON, you don't know the type
*/

function processJsonValue(value: unknown): void {
  if (typeof value === "string") {
    console.log("String value:", value);
  } else if (typeof value === "number") {
    console.log("Numeric value:", value);
  } else if (typeof value === "object" && value !== null) {
    if (Array.isArray(value)) {
      console.log("Array with", value.length, "items");
    } else {
      console.log("Object with keys:", Object.keys(value));
    }
  } else {
    console.log("Primitive value:", value);
  }
}

const parsed = JSON.parse('{"name":"John","age":30}');
processJsonValue(parsed);

// 
// TYPEOF GUARD WITH CUSTOM TYPE PREDICATES
// 

/*
Create reusable type guard functions
*/

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

function filterStrings(values: unknown[]): string[] {
  return values.filter(isString);
}

const mixed: unknown[] = [1, "hello", true, "world", false, 42];
const onlyStrings = filterStrings(mixed); // ["hello", "world"]

// 
// TYPEOF FOR FUNCTION DETECTION
// 

/*
Check if something is callable
*/

type Callable = (() => void) | string;

function execute(fn: Callable): void {
  if (typeof fn === "function") {
     Safe to callfn(); // 
  } else {
    console.log("Not a function:", fn);
  }
}

execute(() => console.log(" Calls itHello")); // 
execute("not a  Logs messagefunction"); // 

// 
// PRACTICAL PATTERN: RESULT TYPE WITH TYPEOF
// 

/*
Common pattern: function returns either success or error
*/

type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

function parseUserInput(input: unknown): Result<number> {
  if (typeof input === "string") {
    const parsed = parseInt(input, 10);
    if (!isNaN(parsed)) {
      return { ok: true, value: parsed };
    }
  }

  if (typeof input === "number") {
    return { ok: true, value: input };
  }

  return { ok: false, error: "Invalid input type" };
}

const result = parseUserInput("42");
if (result.ok && typeof result.value === "number") {
  console.log("Parsed value:", result.value);
} else if (!result.ok && typeof result.error === "string") {
  console.log("Error:", result.error);
}

// 
// TYPEOF NARROWING IN SWITCH STATEMENTS
// 

/*
Switch statements work great for typeof checks
*/

function describe(value: string | number | boolean | null | undefined): string {
  switch (typeof value) {
    case "string":
      return `String of length ${value.length}`;
    case "number":
      return `Number: ${value.toFixed(2)}`;
    case "boolean":
      return `Boolean: ${value}`;
    case "object":
      if (value === null) return "Null value";
      return "Object";
    case "undefined":
      return "Undefined";
    default:
      return "Unknown";
  }
}

// 
// TYPEOF RETURNS IN TYPESCRIPT
// 

/*
What typeof returns for each type
*/
// typeof undefined === "undefined"
// typeof true === "boolean"
// typeof 42 === "number"
// typeof "string" === "string"
// typeof Symbol("id") === "symbol"
// typeof BigInt(42) === "bigint"
// typeof function(){} === "function"
// typeof {} === "object"
// typeof [] === "object" (arrays are objects!)
// typeof null === "object" (quirk of JavaScript!)

// 
// KEY TAKEAWAYS
// 

/*
 typeof is the simplest type guard
 Returns string, number, boolean, object, function, undefined, symbol, bigint
 Narrows union types to specific cases
 Always check for null when typeof === "object"
 Use Array.isArray() for array detection
 Combine typeof with other checks for robust guards
 Create reusable type predicates for cleaner code

TYPEOF VALUES:
 "string" - for string literals
 "number" - for numbers
 "boolean" - for true/false
 "object" - for objects, arrays, null (watch for null!)
 "function" - for functions
 "undefined" - for undefined values
 "symbol" - for symbols
 "bigint" - for BigInt values

BEST PRACTICES:
 Always check for null when using typeof === "object"
 Use Array.isArray() instead of typeof for arrays
 Create named type predicates for reusability
 Combine with other guards (instanceof, custom checks)
 Use exhaustiveness checking with never type

NEXT LEVEL:
 Learn instanceof for checking class instances
 Learn custom type predicates
 Learn discriminated unions
*/
