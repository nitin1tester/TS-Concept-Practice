/*
╔════════════════════════════════════════════════════════════════════════════╗
║                    GENERICS - INTERFACES                                   ║
║                   TypeScript Priority 1 Concept #4                         ║
╚════════════════════════════════════════════════════════════════════════════╝

CONCEPT: Generic Interfaces
────────────────────────────

WHAT IS IT?
An interface that accepts type parameters, allowing you to define a contract
that works with any type while maintaining full type safety.

WHY USE IT?
• Define contracts/templates for any data type
• Create reusable interfaces for common patterns
• Enforce type-safe implementations across classes
• Better than duplicating interface definitions
• Enable polymorphic types with type safety

WHERE TO USE IT?
✓ API response shapes that vary by data type
✓ Data access interfaces (Repository, Database)
✓ Event handlers with different payload types
✓ Configuration objects for generic components
✓ Callback/middleware patterns
✗ When you truly only need one specific type
*/

// ─────────────────────────────────────────────────────────────────────────────
// BASIC GENERIC INTERFACE
// ─────────────────────────────────────────────────────────────────────────────

/*
A simple generic interface that wraps a value
*/

interface Container<T> {
  value: T;
  getValue(): T;
  setValue(newValue: T): void;
}

class StringContainer implements Container<string> {
  value: string = "";

  getValue(): string {
    return this.value;
  }

  setValue(newValue: string): void {
    this.value = newValue;
  }
}

class NumberContainer implements Container<number> {
  value: number = 0;

  getValue(): number {
    return this.value;
  }

  setValue(newValue: number): void {
    this.value = newValue;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC INTERFACE: API RESPONSE
// ─────────────────────────────────────────────────────────────────────────────

/*
Very common pattern: API responses with different data types
*/

interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
  timestamp: Date;
  errors?: string[];
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: string;
  title: string;
  price: number;
  inStock: boolean;
}

// Different API responses, same interface structure
const userResponse: ApiResponse<User> = {
  status: 200,
  message: "User retrieved successfully",
  data: {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
  },
  timestamp: new Date(),
};

const productResponse: ApiResponse<Product> = {
  status: 200,
  message: "Product retrieved successfully",
  data: {
    id: "PROD-123",
    title: "Laptop",
    price: 1299.99,
    inStock: true,
  },
  timestamp: new Date(),
};

// API response for arrays
const usersListResponse: ApiResponse<User[]> = {
  status: 200,
  message: "Users list retrieved",
  data: [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ],
  timestamp: new Date(),
};

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC INTERFACE: EVENT HANDLER
// ─────────────────────────────────────────────────────────────────────────────

/*
Event systems often use generic interfaces to handle different event types
*/

interface EventHandler<T> {
  handle(event: T): void;
}

interface UserCreatedEvent {
  userId: number;
  email: string;
  createdAt: Date;
}

interface OrderPlacedEvent {
  orderId: string;
  userId: number;
  total: number;
}

class UserCreatedHandler implements EventHandler<UserCreatedEvent> {
  handle(event: UserCreatedEvent): void {
    console.log(`User created: ${event.email}`);
    // Send welcome email
  }
}

class OrderNotificationHandler implements EventHandler<OrderPlacedEvent> {
  handle(event: OrderPlacedEvent): void {
    console.log(`Order placed: ${event.orderId} for user ${event.userId}`);
    // Send order confirmation
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC INTERFACE: PAGINATION
// ─────────────────────────────────────────────────────────────────────────────

/*
Pagination is a universal pattern in web applications
*/

interface Paginated<T> {
  items: T[];
  pageNumber: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasNext(): boolean;
  hasPrevious(): boolean;
}

class PaginatedResponse<T> implements Paginated<T> {
  items: T[];
  pageNumber: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;

  constructor(data: {
    items: T[];
    pageNumber: number;
    pageSize: number;
    totalItems: number;
  }) {
    this.items = data.items;
    this.pageNumber = data.pageNumber;
    this.pageSize = data.pageSize;
    this.totalItems = data.totalItems;
    this.totalPages = Math.ceil(data.totalItems / data.pageSize);
  }

  hasNext(): boolean {
    return this.pageNumber < this.totalPages;
  }

  hasPrevious(): boolean {
    return this.pageNumber > 1;
  }
}

// Usage with different types
const userPage = new PaginatedResponse<User>({
  items: [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ],
  pageNumber: 1,
  pageSize: 10,
  totalItems: 50,
});

console.log(userPage.hasNext()); // true (5 total pages)

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC INTERFACE: REPOSITORY PATTERN
// ─────────────────────────────────────────────────────────────────────────────

/*
Repository pattern for data access abstraction
One interface, multiple implementations for different entities
*/

interface IRepository<T extends { id: string | number }> {
  findById(id: string | number): Promise<T | null>;
  findAll(): Promise<T[]>;
  create(item: Omit<T, "id">): Promise<T>;
  update(id: string | number, item: Partial<T>): Promise<T | null>;
  delete(id: string | number): Promise<boolean>;
}

interface BlogPost {
  id: string;
  title: string;
  content: string;
  authorId: number;
  publishedAt: Date;
}

class BlogPostRepository implements IRepository<BlogPost> {
  private posts: Map<string, BlogPost> = new Map();

  async findById(id: string | number): Promise<BlogPost | null> {
    return this.posts.get(String(id)) ?? null;
  }

  async findAll(): Promise<BlogPost[]> {
    return Array.from(this.posts.values());
  }

  async create(item: Omit<BlogPost, "id">): Promise<BlogPost> {
    const post: BlogPost = {
      id: Date.now().toString(),
      ...item,
    };
    this.posts.set(post.id, post);
    return post;
  }

  async update(id: string | number, item: Partial<BlogPost>): Promise<BlogPost | null> {
    const post = this.posts.get(String(id));
    if (!post) return null;

    const updated = { ...post, ...item };
    this.posts.set(String(id), updated);
    return updated;
  }

  async delete(id: string | number): Promise<boolean> {
    return this.posts.delete(String(id));
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC INTERFACE: REQUEST/RESPONSE
// ─────────────────────────────────────────────────────────────────────────────

/*
HTTP endpoints often have request and response types
Generic interface captures both
*/

interface HttpEndpoint<TRequest, TResponse> {
  handle(request: TRequest): Promise<TResponse>;
}

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

interface CreateUserResponse {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

class CreateUserEndpoint implements HttpEndpoint<CreateUserRequest, CreateUserResponse> {
  async handle(request: CreateUserRequest): Promise<CreateUserResponse> {
    // Validate, hash password, save to database
    return {
      id: 1,
      name: request.name,
      email: request.email,
      createdAt: new Date(),
    };
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC INTERFACE: CACHE
// ─────────────────────────────────────────────────────────────────────────────

/*
A cache interface that works with any data type
*/

interface ICache<T> {
  get(key: string): T | undefined;
  set(key: string, value: T): void;
  has(key: string): boolean;
  delete(key: string): boolean;
  clear(): void;
}

class MemoryCache<T> implements ICache<T> {
  private store = new Map<string, T>();

  get(key: string): T | undefined {
    return this.store.get(key);
  }

  set(key: string, value: T): void {
    this.store.set(key, value);
  }

  has(key: string): boolean {
    return this.store.has(key);
  }

  delete(key: string): boolean {
    return this.store.delete(key);
  }

  clear(): void {
    this.store.clear();
  }
}

// Usage
const userCache = new MemoryCache<User>();
userCache.set("user:1", { id: 1, name: "Alice", email: "alice@example.com" });

const cachedUser = userCache.get("user:1");
if (cachedUser) {
  console.log("Found in cache:", cachedUser.name);
}

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC INTERFACE: VALIDATOR
// ─────────────────────────────────────────────────────────────────────────────

/*
Validation logic that works with any data type
*/

interface IValidator<T> {
  validate(data: unknown): { isValid: boolean; errors: string[] };
}

class UserValidator implements IValidator<User> {
  validate(data: unknown): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data || typeof data !== "object") {
      return { isValid: false, errors: ["Data must be an object"] };
    }

    const obj = data as any;

    if (!obj.id || typeof obj.id !== "number") {
      errors.push("ID must be a number");
    }

    if (!obj.name || typeof obj.name !== "string") {
      errors.push("Name must be a string");
    }

    if (!obj.email || typeof obj.email !== "string") {
      errors.push("Email must be a string");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// KEY TAKEAWAYS
// ─────────────────────────────────────────────────────────────────────────────

/*
✓ Generic interfaces define contracts for any type
✓ Implementing class specifies concrete type: implements Interface<ConcreteType>
✓ Multiple types: interface Name<T, U> { ... }
✓ Perfect for APIs, repositories, event handlers, validators
✓ Reduce code duplication across entity types
✓ Enable type-safe polymorphism

COMMON PATTERNS:
• API Responses: ApiResponse<T>
• Data Access: IRepository<T>
• Event Handlers: EventHandler<T>
• Caching: ICache<T>
• Validation: IValidator<T>
• Pagination: Paginated<T>
• Request/Response: HttpEndpoint<Req, Res>

BENEFITS:
→ Write once, use with many types
→ Full type safety and intellisense
→ Cleaner, DRY code
→ Easy to extend and refactor
*/
