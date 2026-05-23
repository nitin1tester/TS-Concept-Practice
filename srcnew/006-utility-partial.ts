/*
╔════════════════════════════════════════════════════════════════════════════╗
║                    UTILITY TYPES - PARTIAL                                 ║
║                   TypeScript Priority 1 Concept #6                         ║
╚════════════════════════════════════════════════════════════════════════════╝

CONCEPT: Partial Utility Type
──────────────────────────────

WHAT IS IT?
Partial<T> creates a new type where ALL properties of T become optional.
It's built-in to TypeScript and transforms a type automatically.

WHY USE IT?
• Make all properties optional in update/patch operations
• Handle partial data structures
• Create flexible configuration objects
• Update functions that don't require all fields
• Avoid repeating optional property definitions

WHERE TO USE IT?
✓ Update/PATCH operations (don't need all fields to update)
✓ Configuration merging (override only some settings)
✓ Object initialization (set defaults gradually)
✓ Form updates (user can update any field)
✗ When you want to keep required properties required
✗ When you need only specific properties optional (use Pick instead)
*/

// ─────────────────────────────────────────────────────────────────────────────
// BASIC PARTIAL EXAMPLE
// ─────────────────────────────────────────────────────────────────────────────

/*
Without Partial - every property is required
*/
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  isActive: boolean;
}

// Problem: When updating, user must provide ALL fields
function updateUserOld(user: User, updates: User): User {
  return { ...user, ...updates };
}

// To update just the name, you must still provide all other fields!
// updateUserOld(user, { name: "Jane" }); // ✗ Error: missing email, phone, isActive, id

/*
Solution: Use Partial
*/
function updateUserNew(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

// Now you can update just what you need
updateUserNew(
  { id: 1, name: "John", email: "john@example.com", phone: "123-456", isActive: true },
  { name: "Jane" } // ✓ Only updating name
);

updateUserNew(
  { id: 1, name: "John", email: "john@example.com", phone: "123-456", isActive: true },
  { email: "jane@example.com", phone: "987-654" } // ✓ Update email and phone only
);

// ─────────────────────────────────────────────────────────────────────────────
// PARTIAL IN API ENDPOINTS
// ─────────────────────────────────────────────────────────────────────────────

/*
Very common pattern in REST APIs
*/

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
  category: string;
}

// POST /products - requires all fields
function createProduct(data: Product): void {
  console.log("Creating product:", data);
}

// PATCH /products/:id - only requires fields to update
function patchProduct(productId: string, data: Partial<Product>): void {
  console.log(`Updating product ${productId}:`, data);
}

// PUT /products/:id - could require all fields
function replaceProduct(productId: string, data: Product): void {
  console.log(`Replacing product ${productId}:`, data);
}

// Usage
patchProduct("PROD-123", {
  price: 99.99, // User only wants to change price
});

patchProduct("PROD-123", {
  price: 99.99,
  inStock: false, // Can update multiple fields
});

// ─────────────────────────────────────────────────────────────────────────────
// PARTIAL FOR FORM UPDATES
// ─────────────────────────────────────────────────────────────────────────────

/*
In React or form handling, user might only fill out some fields
*/

interface RegistrationForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  city: string;
  country: string;
}

function validateAndSave(formData: Partial<RegistrationForm>): void {
  // User might only fill out firstName, lastName, email
  // Other fields might be filled later or left empty
  console.log("Saving form data:", formData);
}

validateAndSave({
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  // Other fields are optional - user can fill them later
});

// ─────────────────────────────────────────────────────────────────────────────
// PARTIAL WITH DEFAULTS
// ─────────────────────────────────────────────────────────────────────────────

/*
Merge partial updates with default values
*/

interface AppConfig {
  apiUrl: string;
  timeout: number;
  retries: number;
  logging: boolean;
  theme: "light" | "dark";
}

const defaultConfig: AppConfig = {
  apiUrl: "https://api.example.com",
  timeout: 30000,
  retries: 3,
  logging: false,
  theme: "light",
};

function createConfig(overrides: Partial<AppConfig>): AppConfig {
  // Merge overrides with defaults
  return { ...defaultConfig, ...overrides };
}

const customConfig = createConfig({
  theme: "dark",
  logging: true,
  // apiUrl, timeout, retries use defaults
});

// customConfig: {
//   apiUrl: "https://api.example.com",
//   timeout: 30000,
//   retries: 3,
//   logging: true,
//   theme: "dark"
// }

// ─────────────────────────────────────────────────────────────────────────────
// PARTIAL WITH CLASS UPDATE METHOD
// ─────────────────────────────────────────────────────────────────────────────

/*
Classes often have an update method using Partial
*/

class UserProfile {
  id: number;
  name: string;
  email: string;
  avatar: string;
  bio: string;

  constructor(data: User) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.avatar = "";
    this.bio = "";
  }

  // Only update fields that are provided
  update(changes: Partial<UserProfile>): void {
    Object.assign(this, changes);
  }
}

const profile = new UserProfile({
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  phone: "",
  isActive: true,
});

profile.update({
  avatar: "https://example.com/alice.jpg",
  bio: "Software developer",
  // Other fields remain unchanged
});

// ─────────────────────────────────────────────────────────────────────────────
// PARTIAL IN REPOSITORY PATTERN
// ─────────────────────────────────────────────────────────────────────────────

/*
Update operations typically use Partial
*/

class Repository<T extends { id: number | string }> {
  private items: Map<string | number, T> = new Map();

  update(id: string | number, updates: Partial<T>): T | null {
    const item = this.items.get(id);
    if (!item) return null;

    const updated = { ...item, ...updates };
    this.items.set(id, updated);
    return updated;
  }

  // Merge provides partial updates too
  merge(id: string | number, partial: Partial<T>): T | null {
    const existing = this.items.get(id);
    if (!existing) return null;

    return this.update(id, partial);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// PARTIAL WITH NESTED OBJECTS
// ─────────────────────────────────────────────────────────────────────────────

/*
Important: Partial only works one level deep by default
For nested objects, use Partial recursively
*/

interface Address {
  street: string;
  city: string;
  country: string;
  zipCode: string;
}

interface FullUser {
  id: number;
  name: string;
  email: string;
  address: Address;
}

// With Partial<FullUser>, address is optional
// But if address is provided, it still requires all its properties
const update1: Partial<FullUser> = {
  name: "Jane",
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
    zipCode: "10001",
  }, // ✓ All address fields required
};

// To make nested properties optional too, you'd need a recursive type
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

const deepUpdate: DeepPartial<FullUser> = {
  name: "Jane",
  address: {
    city: "New York", // ✓ Other address fields optional
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PRACTICAL EXAMPLE: API CLIENT
// ─────────────────────────────────────────────────────────────────────────────

/*
Typical API client pattern using Partial
*/

class UserApi {
  async create(user: User): Promise<User> {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(user),
    });
    return response.json();
  }

  async update(id: number, changes: Partial<User>): Promise<User> {
    const response = await fetch(`/api/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify(changes),
    });
    return response.json();
  }
}

const userApi = new UserApi();
await userApi.update(1, { name: "Jane", email: "jane@example.com" });

// ─────────────────────────────────────────────────────────────────────────────
// COMPARISON WITH RELATED TYPES
// ─────────────────────────────────────────────────────────────────────────────

/*
When to use Partial vs alternatives
*/

// Partial<T> - ALL properties optional
// Use when: updating entire object, any field can be omitted

// Pick<T, Keys> - only specific properties
// Use when: you want exactly certain properties

// Omit<T, Keys> - exclude specific properties
// Use when: all properties except certain ones

// Required<T> - ALL properties required
// Use when: need to ensure all fields are present

// Readonly<T> - ALL properties immutable
// Use when: prevent accidental modifications

// ─────────────────────────────────────────────────────────────────────────────
// KEY TAKEAWAYS
// ─────────────────────────────────────────────────────────────────────────────

/*
SYNTAX:
Partial<T> where T is any type

WHAT IT DOES:
• Converts all required properties to optional
• Uses ? on each property definition

WHEN TO USE:
✓ Update/PATCH operations
✓ Form submissions
✓ Configuration merging
✓ Flexible object construction
✓ API responses with partial data

USE CASE EXAMPLES:
• updateUser(id, Partial<User>)
• patchProduct(id, Partial<Product>)
• mergeConfig(defaults, Partial<Config>)
• updateSettings(Partial<Settings>)

COMBINATIONS:
• Partial<Pick<T, Keys>> - optional specific properties
• Partial<Omit<T, Keys>> - optional all except certain
• DeepPartial<T> - recursively optional nested objects
• Required<Partial<T>> - flatten to required after optional

NEXT LEVEL:
→ Learn Pick to select specific properties
→ Learn Omit to exclude specific properties
→ Learn Required for the opposite effect
→ Build custom utility types combining multiple utilities
*/
