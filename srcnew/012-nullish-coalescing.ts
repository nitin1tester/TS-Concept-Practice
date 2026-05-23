/*

            NULLISH COALESCING (??) OPERATOR                                
                   TypeScript Priority 1 Concept #24                        

CONCEPT: Nullish Coalescing Operator (??)


WHAT IS IT?
The nullish coalescing operator (??) returns the right-hand operand when
the left-hand operand is null or undefined (not just falsy).
Different from || which treats 0, "", false as falsy.

WHY USE IT?
 Provide default values only for null/undefined
 Don't treat falsy values (0, "", false) as needing defaults
 Replace long OR chains
 Better than || for numeric/boolean defaults
 Makes intent explicit: "use left if not null/undefined"
 Cleaner API response handling

WHERE TO USE IT?
 Default values when null/undefined
 API responses with falsy values that are valid
 Configuration fallbacks
 Numeric/boolean defaults (0, false should be valid)
 When you want falsy values treated as needing defaults
*/

// 
// NULLISH COALESCING VS LOGICAL OR
// 

/*
Key difference: || treats all falsy values as "missing"
?? treats only null/undefined as "missing"
*/

const config1 = {
  timeout: 0, // Valid 0, not missing
  retries: null, // Actually missing
  debug: false, // Valid false, not missing
};

// With || - treats 0 and false as missing (WRONG for these cases!)
const timeout1 = config1.timeout || 5000; // 5000 (WRONG! 0 is valid)
const debug1 = config1.debug || true; // true (WRONG! false is valid)
const retries1 = config1.retries || 3; // 3 (CORRECT)

// With ?? - only treats null/undefined as missing (CORRECT!)
const timeout2 = config1.timeout ?? 5000; // 0 (CORRECT!)
const debug2 = config1.debug ?? true; // false (CORRECT!)
const retries2 = config1.retries ?? 3; // 3 (CORRECT!)

console.log("timeout with ||:", timeout1); // 5000 (wrong)
console.log("timeout with ??:", timeout2); // 0 (correct)
console.log("debug with ||:", debug1); // true (wrong)
console.log("debug with ??:", debug2); // false (correct)

// 
// BASIC NULLISH COALESCING
// 

interface Settings {
  theme?: string;
  fontSize?: number;
  notifications?: boolean;
}

const userSettings: Settings = {
  fontSize: 0, // User wants zero font size (valid)
  notifications: false, // User disabled notifications (valid)
};

// Get values with nullish coalescing
const theme = userSettings.theme ?? "light";
const fontSize = userSettings.fontSize ?? 14;
const notifications = userSettings.notifications ?? true;

console.log(theme); // "light" (default)
console.log(fontSize); // 0 (user's value, not default)
console.log(notifications); // false (user's value, not default)

// 
// NULLISH COALESCING WITH API RESPONSES
// 

/*
API returns data that might have falsy but valid values
*/

interface Product {
  name: string;
  price: number; // Could be 0
  discount?: number; // Could be 0
  inStock?: boolean; // Could be false
  rating?: number; // Could be 0
}

const apiProduct: Product = {
  name: "Laptop",
  price: 0, // Free product (valid!)
  discount: 0, // No discount (valid!)
  inStock: false, // Out of stock (valid!)
  rating: 0, // No ratings yet (valid!)
};

// Wrong way with ||
const wrongPrice = apiProduct.price || 99.99; // 99.99 (WRONG!)
const wrongDiscount = apiProduct.discount || 10; // 10 (WRONG!)
const wrongInStock = apiProduct.inStock || true; // true (WRONG!)

// Right way with ??
const correctPrice = apiProduct.price ?? 99.99; // 0 (CORRECT!)
const correctDiscount = apiProduct.discount ?? 10; // 0 (CORRECT!)
const correctInStock = apiProduct.inStock ?? true; // false (CORRECT!)

// 
// CHAINING NULLISH COALESCING
// 

/*
Try multiple options until finding non-null value
*/

const env = {
  API_URL: undefined,
  FALLBACK_URL: null,
  DEFAULT_URL: "https://api.example.com",
};

const apiUrl = env.API_URL ?? env.FALLBACK_URL ?? env.DEFAULT_URL ?? "http://localhost:3000";

console.log(apiUrl); // "https://api.example.com"

// 
// COMBINING WITH OPTIONAL CHAINING
// 

/*
Perfect combination for safe deep access with defaults
*/

interface User {
  profile?: {
    settings?: {
      theme?: string;
      fontSize?: number;
    };
  };
}

const user1: User | null = null;
const user2: User = {};

// Safely access nested property with default
const theme1 = user1?.profile?.settings?.theme ?? "light";
const theme2 = user2?.profile?.settings?.theme ?? "light";

console.log(theme1); // "light" (default)
console.log(theme2); // "light" (default)

// 
// REAL-WORLD: ENVIRONMENT VARIABLES
// 

/*
Environment variables are often strings or undefined
*/

const envVariables = {
  PORT: "0", // Could be "0" which is truthy as string but means port 0
  DEBUG: "false", // String "false" (truthy as string)
  DATABASE_URL: undefined,
};

// Wrong with ||
const wrongPort = envVariables.PORT || "3000"; // "0" is truthy, keeps "0"
const wrongDebug = envVariables.DEBUG || "true"; // "false" is truthy, keeps "false"

// Better with ??
const correctPort = envVariables.PORT ?? "3000"; // "0"
const correctDebug = envVariables.DEBUG ?? "true"; // "false"
const dbUrl = envVariables.DATABASE_URL ?? "mongodb://localhost";

// 
// REAL-WORLD: FORM HANDLING
// 

interface FormData {
  name: string;
  age?: number;
  subscribe?: boolean;
}

const formData: FormData = {
  name: "John",
  age: 0, // User is 0 years (invalid age but shows the pattern)
  subscribe: false, // User opted out (valid)
};

// Using ?? ensures false boolean and 0 number are respected
function submitForm(data: FormData) {
  const age = data.age ?? 18; // Use 18 only if age is null/undefined
  const subscribe = data.subscribe ?? true; // Use true only if subscribe is null/undefined

  console.log(`Name: ${data.name}, Age: ${age}, Subscribe: ${subscribe}`);
}

submitForm(formData); // "Name: John, Age: 0, Subscribe: false"

// 
// REAL-WORLD: REACT STATE
// 

/*
React component state with falsy values
*/

interface ComponentState {
  count?: number;
  isVisible?: boolean;
  filter?: string;
}

const state: ComponentState = {
  count: 0, // Valid count
  isVisible: false, // Valid visibility state
  filter: "", // Valid empty filter
};

// Component rendering
function render(state: ComponentState) {
  // ?? ensures we get the actual values, not defaults
  const displayCount = state.count ?? -1; // Shows 0
  const visible = state.isVisible ?? true; // Shows false
  const searchTerm = state.filter ?? "all"; // Shows ""

  console.log(displayCount, visible, searchTerm);
}

// 
// IMPORTANT: PRECEDENCE WITH OTHER OPERATORS
// 

/*
?? has lower precedence than most operators
Be careful when combining with other operators
*/

// These are equivalent (parentheses added for clarity)
const result = 5 ?? 10; // 5
const result2 = (5) ?? 10; // 5

// Logical AND/OR have different precedence
// const mixed = false || true ?? 10; // SyntaxError in strict mode
// Use parentheses:
const mixed = (false || true) ?? 10; // true

// 
// NULLISH COALESCING ASSIGNMENT (??=)
// 

/*
Assign only if current value is null/undefined
*/

let config: any = {
  timeout: 0,
  retries: null,
};

// Only assign if null/undefined
config.timeout ??= 5000; // Keeps 0
config.retries ??= 3; // Sets to 3

console.log(config.timeout); // 0
console.log(config.retries); // 3

// 
// KEY TAKEAWAYS
// 

/*
SYNTAX:
leftValue ?? rightValue
obj.prop ??= defaultValue

WHEN LEFT IS:
 returns RIGHT
 returns 0 (not right!)
 returns false (not right!)
 returns "" (not right!)
 returns LEFT

DIFFERENCE FROM ||:
?? treats only null/undefined as "missing"
|| treats all falsy values as "missing"

USE CASES:
 Defaults for null/undefined
 API responses with valid falsy values
 Numeric defaults (0 is valid)
 Boolean defaults (false is valid)
 Empty string (valid in some cases)

PATTERNS:
 value ?? defaultValue
 optional?.prop ?? default
 chain ?? fallback1 ?? fallback2
 object.prop ??= defaultValue

NEXT LEVEL:
 Combine with optional chaining (?.)
 Use in complex assignment patterns
 Understand operator precedence
*/
