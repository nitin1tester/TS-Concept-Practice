/*
╔════════════════════════════════════════════════════════════════════════════╗
║                    GENERICS - FUNCTIONS                                    ║
║                   TypeScript Priority 1 Concept #2                         ║
╚════════════════════════════════════════════════════════════════════════════╝

CONCEPT: Generic Functions
──────────────────────────

WHAT IS IT?
Generic functions are functions that can accept and work with different types
while maintaining full type safety. They're the most common use of generics in
real-world code.

WHY USE IT?
• Create flexible functions that work with any data type
• Maintain type safety and intellisense support
• Avoid repeated function overloads
• Enable type inference so callers don't always specify types
• Perfect for utility/helper functions

WHERE TO USE IT?
✓ Utility functions (map, filter, find operations)
✓ Data transformation functions
✓ API call wrappers
✓ Validation functions
✓ Type converters
✗ When the function truly only works with one type
*/

// ─────────────────────────────────────────────────────────────────────────────
// SIMPLE GENERIC FUNCTION
// ─────────────────────────────────────────────────────────────────────────────

function processData<T>(input: T): T {
  console.log("Processing:", input);
  return input;
}

// TypeScript infers the types
processData(42); // T is number
processData("hello"); // T is string
processData({ name: "John" }); // T is object

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC WITH RETURN TYPE TRANSFORMATION
// ─────────────────────────────────────────────────────────────────────────────

/*
When you need to transform data from one type to another
*/

function transform<T, U>(data: T, transformer: (item: T) => U): U {
  return transformer(data);
}

// Example: String to Number
const numberResult = transform("123", (str) => parseInt(str, 10));

// Example: Object to String
const stringResult = transform({ name: "John", age: 30 }, (obj) => JSON.stringify(obj));

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC ARRAY FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

/*
One of the most practical uses: working with arrays of any type
*/

// Get first element
function first<T>(array: T[]): T | undefined {
  return array[0];
}

// Get last element
function last<T>(array: T[]): T | undefined {
  return array[array.length - 1];
}

// Map over array
function mapArray<T, U>(array: T[], mapper: (item: T, index: number) => U): U[] {
  return array.map(mapper);
}

// Filter array
function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
  return array.filter(predicate);
}

// Usage examples
const numbers = [1, 2, 3, 4, 5];
const strings = ["a", "b", "c"];

console.log(first(numbers)); // 1
console.log(last(strings)); // "c"

const doubled = mapArray(numbers, (n) => n * 2); // [2, 4, 6, 8, 10]
const evenNumbers = filterArray(numbers, (n) => n % 2 === 0); // [2, 4]

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC WITH DEFAULT VALUE
// ─────────────────────────────────────────────────────────────────────────────

/*
You can provide default values for generic parameters
This is useful when the type can often be inferred
*/

function getOrDefault<T = string>(value: T | null | undefined, defaultValue: T): T {
  return value ?? defaultValue;
}

// Type is inferred from default value
const result1 = getOrDefault(null, "default text"); // Returns "default text"
const result2 = getOrDefault(42, 100); // Returns 42 (both numbers)

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC WITH OBJECT KEYS
// ─────────────────────────────────────────────────────────────────────────────

/*
Working with object properties generically
*/

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = { id: 1, name: "John", email: "john@example.com" };

const userId = getProperty(user, "id"); // Type: number
const userName = getProperty(user, "name"); // Type: string

// This would be a compile error (property doesn't exist):
// const invalid = getProperty(user, "age"); // ✗ 'age' not a property of User

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC WITH OPTIONAL PROPERTY
// ─────────────────────────────────────────────────────────────────────────────

/*
Sometimes you need to safely handle optional properties
*/

function getPropertySafely<T, K extends keyof T>(obj: T, key: K): T[K] | undefined {
  return obj[key];
}

// Now it returns T[K] | undefined, safer!
const possiblyUndefined = getPropertySafely(user, "id");

// ─────────────────────────────────────────────────────────────────────────────
// REAL-WORLD EXAMPLE: API CACHE WRAPPER
// ─────────────────────────────────────────────────────────────────────────────

/*
A generic cache function that works with any data type
This is a practical pattern you'll see in real applications
*/

const cache = new Map<string, any>();

async function cachedFetch<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
  // Check if data is already cached
  if (cache.has(key)) {
    console.log(`Cache hit for ${key}`);
    return cache.get(key) as T;
  }

  // Fetch and cache the data
  console.log(`Fetching data for ${key}`);
  const data = await fetcher();
  cache.set(key, data);
  return data;
}

// Usage with different types
interface Post {
  id: number;
  title: string;
}

async function exampleUsage() {
  // Fetch users - T is User[]
  const users = await cachedFetch<User[]>("users", async () => {
    const response = await fetch("https://api.example.com/users");
    return response.json();
  });

  // Fetch posts - T is Post[]
  const posts = await cachedFetch<Post[]>("posts", async () => {
    const response = await fetch("https://api.example.com/posts");
    return response.json();
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// REAL-WORLD EXAMPLE: GENERIC RETRY MECHANISM
// ─────────────────────────────────────────────────────────────────────────────

/*
A function that retries an operation with any return type
*/

async function retry<T>(
  operation: () => Promise<T>,
  maxAttempts: number = 3,
  delayMs: number = 1000
): Promise<T> {
  let lastError: Error | undefined;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      console.log(`Attempt ${attempt}/${maxAttempts}`);
      return await operation();
    } catch (error) {
      lastError = error as Error;
      if (attempt < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }
  }

  throw new Error(`Failed after ${maxAttempts} attempts: ${lastError?.message}`);
}

// Usage - T could be any type
async function unreliableApiCall(): Promise<string> {
  return "Success";
}

// retry will maintain the return type (string in this case)
const result = await retry(unreliableApiCall, 3, 500);

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC FUNCTION WITH REST PARAMETERS
// ─────────────────────────────────────────────────────────────────────────────

/*
Combining generics with rest parameters for flexibility
*/

function logAndReturn<T>(...args: T[]): T[] {
  console.log("Arguments:", args);
  return args;
}

const mixed = logAndReturn<string | number>(1, "two", 3, "four");

// ─────────────────────────────────────────────────────────────────────────────
// KEY TAKEAWAYS
// ─────────────────────────────────────────────────────────────────────────────

/*
✓ Generic functions accept type parameters in angle brackets: <T>
✓ TypeScript infers types from arguments automatically
✓ Multiple types: <T, U> for different data types
✓ Perfect for utilities, transformations, and wrappers
✓ Maintains full IDE intellisense and type safety
✓ Much cleaner than function overloads or using 'any'

WHEN GENERICS SHINE:
• Utility functions that don't care about type specifics
• Promise wrappers and async handlers
• Data validation and transformation
• Collection operations (map, filter, etc.)
• Caching and memoization
• Retry and error handling mechanisms
*/
