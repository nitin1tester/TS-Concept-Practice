/*
╔════════════════════════════════════════════════════════════════════════════╗
║                    DESTRUCTURING - ARRAYS                                  ║
║                   TypeScript Priority 1 Concept #18                        ║
╚════════════════════════════════════════════════════════════════════════════╝

CONCEPT: Array Destructuring
─────────────────────────────

WHAT IS IT?
Array destructuring is a syntax that lets you unpack values from arrays
into distinct variables in a single, concise assignment.

WHY USE IT?
• Write cleaner, more readable code
• Extract values without repeated indexing
• Swap variables without temp variables
• Pair with rest parameters for flexibility
• Reduce intermediate variables
• Improves code maintainability

WHERE TO USE IT?
✓ Unpacking return values from functions
✓ Extracting specific array elements
✓ Swapping variables
✓ Function parameters
✓ Loop iterations
✗ When you need all array elements in order
*/

// ─────────────────────────────────────────────────────────────────────────────
// BASIC ARRAY DESTRUCTURING
// ─────────────────────────────────────────────────────────────────────────────

/*
Without destructuring: repetitive indexing
*/
const colors = ["red", "green", "blue"];

// Old way
const firstColorOld = colors[0];
const secondColorOld = colors[1];
const thirdColorOld = colors[2];

// With destructuring: clean and concise
const [first, second, third] = colors;

console.log(first); // "red"
console.log(second); // "green"
console.log(third); // "blue"

// ─────────────────────────────────────────────────────────────────────────────
// SKIP ELEMENTS
// ─────────────────────────────────────────────────────────────────────────────

/*
You don't have to unpack every element
*/

const [red, , blue] = colors;
// Skipped "green" (middle element)

console.log(red); // "red"
console.log(blue); // "blue"

// ─────────────────────────────────────────────────────────────────────────────
// REST ELEMENTS IN DESTRUCTURING
// ─────────────────────────────────────────────────────────────────────────────

/*
Collect remaining elements into an array
*/

const [primary, secondary, ...rest] = ["red", "green", "blue", "yellow", "purple"];

console.log(primary); // "red"
console.log(secondary); // "green"
console.log(rest); // ["blue", "yellow", "purple"]

// ─────────────────────────────────────────────────────────────────────────────
// DEFAULT VALUES
// ─────────────────────────────────────────────────────────────────────────────

/*
Provide default values if array is shorter than expected
*/

const [a = "default1", b = "default2", c = "default3"] = ["value1"];

console.log(a); // "value1"
console.log(b); // "default2" (not in array)
console.log(c); // "default3" (not in array)

// ─────────────────────────────────────────────────────────────────────────────
// DESTRUCTURING IN FUNCTION PARAMETERS
// ─────────────────────────────────────────────────────────────────────────────

/*
Very useful for functions that return multiple values
*/

// Function returns tuple [success, message]
function parseInput(input: string): [boolean, string] {
  if (!input.trim()) {
    return [false, "Input is empty"];
  }
  return [true, input.trim()];
}

// Destructure the return value immediately
const [isValid, message] = parseInput("  hello  ");

console.log(isValid); // true
console.log(message); // "hello"

// ─────────────────────────────────────────────────────────────────────────────
// DESTRUCTURING IN FUNCTION ARGUMENTS
// ─────────────────────────────────────────────────────────────────────────────

/*
Destructure array parameters for cleaner function signature
*/

function sum([a, b]: [number, number]): number {
  return a + b;
}

console.log(sum([5, 3])); // 8

function logCoordinates([x, y]: [number, number]): void {
  console.log(`Point: (${x}, ${y})`);
}

logCoordinates([10, 20]); // "Point: (10, 20)"

// ─────────────────────────────────────────────────────────────────────────────
// VARIABLE SWAPPING
// ─────────────────────────────────────────────────────────────────────────────

/*
Swap two variables elegantly
*/

let x = 5;
let y = 10;

console.log(`Before: x=${x}, y=${y}`); // x=5, y=10

// Swap without temp variable!
[x, y] = [y, x];

console.log(`After: x=${x}, y=${y}`); // x=10, y=5

// ─────────────────────────────────────────────────────────────────────────────
// NESTED DESTRUCTURING
// ─────────────────────────────────────────────────────────────────────────────

/*
Destructuring arrays within arrays
*/

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const [[a1, b1], [a2, b2]] = matrix;

console.log(a1, b1); // 1, 2
console.log(a2, b2); // 4, 5

// ─────────────────────────────────────────────────────────────────────────────
// REAL-WORLD EXAMPLE: TUPLE RETURNS
// ─────────────────────────────────────────────────────────────────────────────

/*
Common pattern: functions return [value, error] or [success, data]
*/

interface User {
  id: number;
  name: string;
}

function fetchUser(id: number): [User | null, string | null] {
  // Simulated API call
  if (id === 1) {
    return [{ id: 1, name: "Alice" }, null];
  }
  return [null, "User not found"];
}

// Destructure the result for clean error handling
const [user, error] = fetchUser(1);

if (error) {
  console.log("Error:", error);
} else if (user) {
  console.log("User:", user.name);
}

// ─────────────────────────────────────────────────────────────────────────────
// REAL-WORLD EXAMPLE: ARRAY OPERATIONS
// ─────────────────────────────────────────────────────────────────────────────

/*
Filter, map, or process arrays with destructuring
*/

const userIds = [1, 2, 3, 4, 5];

// Extract first and last
const [firstId, ...middleIds, lastId] = userIds;

console.log(firstId); // 1
console.log(middleIds); // [2, 3, 4]
console.log(lastId); // 5

// ─────────────────────────────────────────────────────────────────────────────
// REAL-WORLD EXAMPLE: REACT HOOKS
// ─────────────────────────────────────────────────────────────────────────────

/*
React useState returns [state, setter] - perfect for destructuring
*/

// In React (conceptual example):
// const [count, setCount] = useState(0);
// const [name, setName] = useState("");

// This is array destructuring in action!

// ─────────────────────────────────────────────────────────────────────────────
// IGNORING VALUES
// ─────────────────────────────────────────────────────────────────────────────

/*
Skip values you don't need
*/

const coords = [10, 20, 30, 40, 50];

const [, , zValue] = coords; // Only get third value

console.log(zValue); // 30

// ─────────────────────────────────────────────────────────────────────────────
// DESTRUCTURING WITH TYPE ANNOTATIONS
// ─────────────────────────────────────────────────────────────────────────────

/*
Add type annotations for type safety
*/

type Point = [number, number];
type Color = [number, number, number]; // RGB

const point: Point = [10, 20];
const [px, py] = point; // px and py are numbers

const rgb: Color = [255, 128, 0];
const [r, g, b] = rgb; // r, g, b are numbers

// ─────────────────────────────────────────────────────────────────────────────
// COMBINING WITH SPREAD OPERATOR
// ─────────────────────────────────────────────────────────────────────────────

/*
Destructuring and spread are complementary
*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Destructure and spread in new array
const combined = [...arr1, ...[7, 8], ...arr2];

console.log(combined); // [1, 2, 3, 7, 8, 4, 5, 6]

// ─────────────────────────────────────────────────────────────────────────────
// REAL-WORLD: ARRAY METHOD CHAINING
// ─────────────────────────────────────────────────────────────────────────────

/*
Destructure results from array methods
*/

const numbers = [1, 2, 3, 4, 5];

// Find first even number
const findFirstEven = (): [number | undefined, string] => {
  const even = numbers.find((n) => n % 2 === 0);
  return [even, even ? "Found" : "Not found"];
};

const [firstEven, status] = findFirstEven();
console.log(firstEven, status); // 2, "Found"

// ─────────────────────────────────────────────────────────────────────────────
// KEY TAKEAWAYS
// ─────────────────────────────────────────────────────────────────────────────

/*
SYNTAX:
const [var1, var2, var3] = array;
const [first, ...rest] = array;
const [a = default, b = default] = array;

BENEFITS:
✓ More readable than indexed access
✓ Extract multiple values concisely
✓ Works with rest/spread operators
✓ Supports default values
✓ Enables pattern matching

COMMON PATTERNS:
• Tuple unpacking: const [x, y] = point;
• Swapping: [a, b] = [b, a];
• Function returns: const [data, error] = fetchData();
• React hooks: const [state, setState] = useState(initial);
• Rest collection: const [first, ...rest] = array;

NEXT LEVEL:
→ Learn object destructuring
→ Combine array and object destructuring
→ Use destructuring in parameters
→ Create complex destructuring patterns
*/
