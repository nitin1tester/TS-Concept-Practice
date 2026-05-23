/*
╔════════════════════════════════════════════════════════════════════════════╗
║                   DESTRUCTURING - OBJECTS                                  ║
║                   TypeScript Priority 1 Concept #19                        ║
╚════════════════════════════════════════════════════════════════════════════╝

CONCEPT: Object Destructuring
──────────────────────────────

WHAT IS IT?
Object destructuring allows you to unpack properties from an object into
individual variables using a concise syntax.

WHY USE IT?
• Avoid repetitive obj.prop.prop.prop chains
• Extract only needed properties
• Rename properties during extraction
• Set default values easily
• Cleaner function parameters
• Reduces variable declarations

WHERE TO USE IT?
✓ Function parameters (extract specific props)
✓ Nested object access
✓ Renaming properties
✓ Default values for missing properties
✓ API response handling
✗ When you need all properties unchanged
*/

// ─────────────────────────────────────────────────────────────────────────────
// BASIC OBJECT DESTRUCTURING
// ─────────────────────────────────────────────────────────────────────────────

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 30,
};

// Without destructuring - repetitive
const userIdOld = user.id;
const userNameOld = user.name;
const userEmailOld = user.email;

// With destructuring - clean
const { id, name, email } = user;

console.log(id, name, email); // 1 "Alice" "alice@example.com"

// ─────────────────────────────────────────────────────────────────────────────
// SELECTIVE DESTRUCTURING
// ─────────────────────────────────────────────────────────────────────────────

/*
Only extract properties you need
*/

const { name, email } = user;
// id and age are not extracted

// ─────────────────────────────────────────────────────────────────────────────
// RENAMING DURING DESTRUCTURING
// ─────────────────────────────────────────────────────────────────────────────

/*
Rename properties to avoid conflicts or improve clarity
*/

const { name: userName, email: userEmail } = user;

console.log(userName); // "Alice"
console.log(userEmail); // "alice@example.com"

// ─────────────────────────────────────────────────────────────────────────────
// DEFAULT VALUES
// ─────────────────────────────────────────────────────────────────────────────

/*
Provide defaults for missing properties
*/

interface Product {
  id: string;
  name: string;
  price: number;
  discount?: number;
  category?: string;
}

const product: Product = {
  id: "P123",
  name: "Laptop",
  price: 999,
};

const { name: productName, discount = 0, category = "Electronics" } = product;

console.log(productName); // "Laptop"
console.log(discount); // 0 (default)
console.log(category); // "Electronics" (default)

// ─────────────────────────────────────────────────────────────────────────────
// NESTED OBJECT DESTRUCTURING
// ─────────────────────────────────────────────────────────────────────────────

/*
Extract properties from nested objects
*/

interface Address {
  street: string;
  city: string;
  country: string;
}

interface UserWithAddress {
  name: string;
  address: Address;
}

const userWithAddr: UserWithAddress = {
  name: "Bob",
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};

// Destructure nested properties
const {
  name: fullName,
  address: { city, country },
} = userWithAddr;

console.log(fullName); // "Bob"
console.log(city); // "New York"
console.log(country); // "USA"

// ─────────────────────────────────────────────────────────────────────────────
// REST IN OBJECT DESTRUCTURING
// ─────────────────────────────────────────────────────────────────────────────

/*
Collect remaining properties into a new object
*/

const { id: userId, name: userName2, ...rest } = user;

console.log(userId); // 1
console.log(userName2); // "Alice"
console.log(rest); // { email: "alice@example.com", age: 30 }

// ─────────────────────────────────────────────────────────────────────────────
// DESTRUCTURING IN FUNCTION PARAMETERS
// ─────────────────────────────────────────────────────────────────────────────

/*
Very practical: extract object properties in function signatures
*/

// Without destructuring - must access properties inside function
function displayUserOld(user: User): void {
  console.log(user.name);
  console.log(user.email);
}

// With destructuring - properties available directly
function displayUser({ name, email }: User): void {
  console.log(name);
  console.log(email);
}

// Only extract needed properties
function getUserInfo({ name, age }: User): string {
  return `${name} is ${age} years old`;
}

console.log(getUserInfo(user)); // "Alice is 30 years old"

// ─────────────────────────────────────────────────────────────────────────────
// DESTRUCTURING WITH DEFAULT IN PARAMETERS
// ─────────────────────────────────────────────────────────────────────────────

/*
Combine destructuring with defaults
*/

interface Config {
  theme?: string;
  language?: string;
  debug?: boolean;
}

function setupApp({ theme = "light", language = "en", debug = false }: Config = {}): void {
  console.log(`Theme: ${theme}, Language: ${language}, Debug: ${debug}`);
}

setupApp(); // Theme: light, Language: en, Debug: false
setupApp({ theme: "dark", debug: true }); // Theme: dark, Language: en, Debug: true

// ─────────────────────────────────────────────────────────────────────────────
// REAL-WORLD EXAMPLE: REACT COMPONENT PROPS
// ─────────────────────────────────────────────────────────────────────────────

/*
Destructuring is very common in React
*/

interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

// Component receives props destructured
function Button({ label, disabled = false, onClick, className = "btn" }: ButtonProps) {
  return `<button class="${className}" disabled="${disabled}">${label}</button>`;
}

// Usage
Button({ label: "Click me", disabled: false, className: "btn-primary" });

// ─────────────────────────────────────────────────────────────────────────────
// REAL-WORLD EXAMPLE: API RESPONSE HANDLING
// ─────────────────────────────────────────────────────────────────────────────

/*
Extract relevant fields from API response
*/

interface ApiResponse {
  status: number;
  data: {
    user: {
      id: number;
      name: string;
      profile: {
        avatar: string;
        bio: string;
      };
    };
  };
  timestamp: number;
}

const response: ApiResponse = {
  status: 200,
  data: {
    user: {
      id: 1,
      name: "Charlie",
      profile: {
        avatar: "https://example.com/avatar.jpg",
        bio: "Developer",
      },
    },
  },
  timestamp: Date.now(),
};

// Extract deeply nested values cleanly
const {
  data: {
    user: {
      name: userName3,
      profile: { avatar, bio },
    },
  },
} = response;

console.log(userName3, avatar, bio); // "Charlie", "https://example.com/avatar.jpg", "Developer"

// ─────────────────────────────────────────────────────────────────────────────
// COMBINING ARRAY AND OBJECT DESTRUCTURING
// ─────────────────────────────────────────────────────────────────────────────

/*
Destructure mixed structures
*/

interface Result {
  success: boolean;
  data: [string, number];
}

const result: Result = {
  success: true,
  data: ["value", 42],
};

const {
  success,
  data: [value, count],
} = result;

console.log(success, value, count); // true, "value", 42

// ─────────────────────────────────────────────────────────────────────────────
// COMPUTED PROPERTY NAMES
// ─────────────────────────────────────────────────────────────────────────────

/*
Destructure dynamic property names
*/

const config = {
  database: "postgres",
  port: 5432,
  host: "localhost",
};

const key = "database";

// Can't do: const { [key] } = config (syntax error)
// Instead, rename to a variable
const { [key]: dbType } = config;

console.log(dbType); // "postgres"

// ─────────────────────────────────────────────────────────────────────────────
// PRACTICAL: FILTER AND EXTRACT
// ─────────────────────────────────────────────────────────────────────────────

/*
Extract specific properties and ignore others
*/

const fullUserData = {
  id: 1,
  name: "Diana",
  email: "diana@example.com",
  password: "secret",
  createdAt: new Date(),
  updatedAt: new Date(),
  isAdmin: false,
  metadata: { ... },
};

// Extract only safe properties to send to client
const { password, metadata, ...safeUserData } = fullUserData;

// safeUserData has everything except password and metadata

// ─────────────────────────────────────────────────────────────────────────────
// COMPLEX PATTERN: CONFIGURATION MERGING
// ─────────────────────────────────────────────────────────────────────────────

/*
Merge configurations with destructuring
*/

interface AppConfig {
  api: string;
  timeout: number;
  retries: number;
  logging: boolean;
}

const defaultConfig: AppConfig = {
  api: "https://api.example.com",
  timeout: 5000,
  retries: 3,
  logging: false,
};

const userConfig = {
  api: "https://custom-api.com",
  logging: true,
};

// Merge with defaults
const { api, timeout, retries, logging } = { ...defaultConfig, ...userConfig };

console.log(api); // "https://custom-api.com" (overridden)
console.log(logging); // true (overridden)
console.log(timeout); // 5000 (from default)

// ─────────────────────────────────────────────────────────────────────────────
// KEY TAKEAWAYS
// ─────────────────────────────────────────────────────────────────────────────

/*
SYNTAX:
const { prop1, prop2 } = object;
const { prop1: renamed } = object;
const { prop1 = default } = object;
const { nested: { deep } } = object;
const { prop1, ...rest } = object;

BENEFITS:
✓ Cleaner than obj.prop.prop chains
✓ Extract only needed properties
✓ Easy renaming
✓ Default values
✓ Works in function parameters
✓ Rest operator for remaining properties

COMMON PATTERNS:
• Component props: ({ prop1, prop2 } = {}) => { ... }
• API responses: const { data: { user } } = response;
• Configuration: const { theme = "light" } = config;
• Renaming: const { oldName: newName } = obj;
• Rest: const { id, ...others } = user;

NEXT LEVEL:
→ Combine with array destructuring
→ Use in for..of loops
→ Create complex patterns
*/
