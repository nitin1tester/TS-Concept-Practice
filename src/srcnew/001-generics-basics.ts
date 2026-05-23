/*
╔════════════════════════════════════════════════════════════════════════════╗
║                       GENERICS - BASICS                                    ║
║                   TypeScript Priority 1 Concept #1                         ║
╚════════════════════════════════════════════════════════════════════════════╝

CONCEPT: Generic Types Basics
─────────────────────────────

WHAT IS IT?
Generics are a way to create reusable components that can work with multiple types
while maintaining type safety. They allow you to write "type-flexible" code that
adapts to whatever type is passed to it.

WHY USE IT?
• Reusability: Write functions/classes once, use with many types
• Type Safety: Catch type errors at compile time, not runtime
• Flexibility: Accept and return any type without losing type information
• Avoid "any" type: Better than using 'any' which disables type checking
• DRY Principle: Don't repeat type definitions

WHERE TO USE IT?
✓ When creating utility functions that work with different data types
✓ When building libraries that need to be flexible yet type-safe
✓ Collections/arrays that need to store specific types
✓ API responses with different data structures
✓ State management solutions
✗ When you only need to work with one specific type (use that type directly)
✗ When dealing with completely unknown types (use 'any', but avoid this)
*/

// ─────────────────────────────────────────────────────────────────────────────
// BASIC GENERIC FUNCTION
// ─────────────────────────────────────────────────────────────────────────────

/*
Problem Without Generics:
If we don't use generics, we'd need to duplicate the same function for each type
*/
function getValueForString(value: string): string {
  return value;
}

function getValueForNumber(value: number): number {
  return value;
}

// This is repetitive and violates DRY principle!

/*
Solution WITH Generics:
Using a type parameter <T> (T stands for "Type"), we can write ONE function
that works with ANY type.
*/

// <T> is a type parameter (placeholder for any type)
// T will be replaced with the actual type when the function is called
function getValue<T>(value: T): T {
  return value;
}

// When you call it, TypeScript infers the type from the argument
const stringResult = getValue("Hello"); // T is inferred as 'string'
const numberResult = getValue(42); // T is inferred as 'number'
const boolResult = getValue(true); // T is inferred as 'boolean'

// You can also explicitly specify the type
const explicitString = getValue<string>("explicit");
const explicitNumber = getValue<number>(100);

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC FUNCTION WITH ARRAYS
// ─────────────────────────────────────────────────────────────────────────────

/*
Common Use Case: Working with arrays of any type
*/
function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

const firstNumber = getFirstElement([1, 2, 3]); // T is 'number'
const firstString = getFirstElement(["a", "b"]); // T is 'string'

// ─────────────────────────────────────────────────────────────────────────────
// MULTIPLE TYPE PARAMETERS
// ─────────────────────────────────────────────────────────────────────────────

/*
Sometimes you need to work with multiple different types
Use T, U, V, etc. (convention uses single capital letters)
*/

// Function that takes two values of potentially different types
function combine<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

const mixed = combine<string, number>("age", 30); // [string, number]
const mixed2 = combine("name", { firstName: "John" }); // Type inference works too!

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC TYPES (TYPE ALIASES)
// ─────────────────────────────────────────────────────────────────────────────

/*
You can also define generic type aliases to create reusable type shapes
*/

// Generic Response type for API calls
// This pattern is very common in real applications
type ApiResponse<T> = {
  status: number;
  message: string;
  data: T;
  timestamp: Date;
};

// Using the generic type with different data types
type UserResponse = ApiResponse<{ id: number; name: string }>;
type ProductResponse = ApiResponse<{ productId: string; price: number }>;

// Usage example
const userResponse: UserResponse = {
  status: 200,
  message: "User fetched",
  data: { id: 1, name: "John" },
  timestamp: new Date(),
};

// ─────────────────────────────────────────────────────────────────────────────
// REAL-WORLD EXAMPLE: PAGINATION
// ─────────────────────────────────────────────────────────────────────────────

/*
Pagination is a common pattern in web development.
Without generics, you'd need separate types for UserPage, ProductPage, etc.
With generics, one type handles all cases!
*/

type PaginatedResponse<T> = {
  items: T[];
  currentPage: number;
  totalPages: number;
  hasMore: boolean;
};

interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
}

// These types are automatically generated by the generic
type PaginatedUsers = PaginatedResponse<User>;
type PaginatedProducts = PaginatedResponse<Product>;

// Example data
const userPage: PaginatedUsers = {
  items: [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ],
  currentPage: 1,
  totalPages: 5,
  hasMore: true,
};

// ─────────────────────────────────────────────────────────────────────────────
// KEY TAKEAWAYS
// ─────────────────────────────────────────────────────────────────────────────

/*
✓ Use <T> as a type parameter to make functions/types flexible
✓ TypeScript infers the type from usage, or you can specify it explicitly
✓ Multiple type parameters (T, U, V) when working with multiple types
✓ Generic types are reusable patterns for common structures
✓ Great for APIs, data structures, and utility functions
✓ Eliminates code duplication and improves type safety

NEXT LEVEL:
→ Learn Generic Constraints to limit what types can be passed
→ Learn Generic Classes to create flexible, reusable classes
→ Learn Generic Functions with overloads for more control
*/
