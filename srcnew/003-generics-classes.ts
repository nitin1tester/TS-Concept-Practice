/*
╔════════════════════════════════════════════════════════════════════════════╗
║                     GENERICS - CLASSES                                     ║
║                   TypeScript Priority 1 Concept #3                         ║
╚════════════════════════════════════════════════════════════════════════════╝

CONCEPT: Generic Classes
─────────────────────────

WHAT IS IT?
A generic class is a class definition that can accept a type parameter,
allowing instances of that class to work with different data types while
maintaining type safety.

WHY USE IT?
• Build reusable data structures (Stack, Queue, LinkedList)
• Create flexible containers that hold any type
• Maintain type information throughout the class lifecycle
• Enable IDE intellisense for class members
• Avoid code duplication across similar classes

WHERE TO USE IT?
✓ Data structures (Stack, Queue, Tree, Graph)
✓ Repository patterns (generic data access layer)
✓ State management containers
✓ Wrapper classes (Result<T>, Option<T>)
✗ When class only works with one specific type
*/

// ─────────────────────────────────────────────────────────────────────────────
// BASIC GENERIC CLASS: SIMPLE CONTAINER
// ─────────────────────────────────────────────────────────────────────────────

/*
A generic Box class that can hold any type of value
*/

class Box<T> {
  private value: T;

  constructor(initialValue: T) {
    this.value = initialValue;
  }

  getValue(): T {
    return this.value;
  }

  setValue(newValue: T): void {
    this.value = newValue;
  }
}

// Usage with different types
const stringBox = new Box<string>("Hello");
console.log(stringBox.getValue()); // "Hello" - type is string

const numberBox = new Box<number>(42);
console.log(numberBox.getValue()); // 42 - type is number

// You can also let TypeScript infer the type
const boolBox = new Box(true); // T is inferred as boolean

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC CLASS: STACK DATA STRUCTURE
// ─────────────────────────────────────────────────────────────────────────────

/*
Stack: LIFO (Last In, First Out) data structure
Real-world use: Browser back button, undo functionality, expression parsing
*/

class Stack<T> {
  private items: T[] = [];

  // Add item to top of stack
  push(item: T): void {
    this.items.push(item);
  }

  // Remove and return top item
  pop(): T | undefined {
    return this.items.pop();
  }

  // View top item without removing
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // Check if empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get size
  size(): number {
    return this.items.length;
  }

  // Clear stack
  clear(): void {
    this.items = [];
  }
}

// Usage examples
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(numberStack.pop()); // 3
console.log(numberStack.pop()); // 2

const stringStack = new Stack<string>();
stringStack.push("first");
stringStack.push("second");
stringStack.push("third");
console.log(stringStack.peek()); // "third"

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC CLASS: QUEUE DATA STRUCTURE
// ─────────────────────────────────────────────────────────────────────────────

/*
Queue: FIFO (First In, First Out) data structure
Real-world use: Task scheduling, print queues, message processing
*/

class Queue<T> {
  private items: T[] = [];

  // Add to end of queue
  enqueue(item: T): void {
    this.items.push(item);
  }

  // Remove from front of queue
  dequeue(): T | undefined {
    return this.items.shift();
  }

  // Peek at front
  front(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

// Usage
const taskQueue = new Queue<string>();
taskQueue.enqueue("task1");
taskQueue.enqueue("task2");
taskQueue.enqueue("task3");

while (!taskQueue.isEmpty()) {
  console.log("Processing:", taskQueue.dequeue()); // task1, task2, task3
}

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC CLASS: RESULT TYPE (ERROR HANDLING)
// ─────────────────────────────────────────────────────────────────────────────

/*
A Result type is used instead of throwing exceptions.
Common in functional programming and modern TypeScript.
Represents either success (Ok<T>) or failure (Err<E>).
*/

abstract class Result<T, E> {
  abstract isOk(): this is Ok<T>;
  abstract isErr(): this is Err<E>;
  abstract map<U>(fn: (value: T) => U): Result<U, E>;
  abstract mapErr<F>(fn: (error: E) => F): Result<T, F>;
}

class Ok<T> extends Result<T, never> {
  constructor(private value: T) {
    super();
  }

  isOk(): this is Ok<T> {
    return true;
  }

  isErr(): this is Err<never> {
    return false;
  }

  getValue(): T {
    return this.value;
  }

  map<U>(fn: (value: T) => U): Result<U, never> {
    return new Ok(fn(this.value));
  }

  mapErr<F>(): Result<T, F> {
    return this as any;
  }
}

class Err<E> extends Result<never, E> {
  constructor(private error: E) {
    super();
  }

  isOk(): this is Ok<never> {
    return false;
  }

  isErr(): this is Err<E> {
    return true;
  }

  getError(): E {
    return this.error;
  }

  map<U>(): Result<U, E> {
    return this as any;
  }

  mapErr<F>(fn: (error: E) => F): Result<never, F> {
    return new Err(fn(this.error));
  }
}

// Practical example: API call that could fail
function parseJson(jsonString: string): Result<object, string> {
  try {
    const parsed = JSON.parse(jsonString);
    return new Ok(parsed);
  } catch (error) {
    return new Err(`JSON parse error: ${error}`);
  }
}

// Usage - explicit error handling instead of try/catch
const result1 = parseJson('{"name": "John"}');
if (result1.isOk()) {
  console.log("Parsed:", result1.getValue());
} else {
  console.log("Error:", result1.getError());
}

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC CLASS: REPOSITORY PATTERN
// ─────────────────────────────────────────────────────────────────────────────

/*
The Repository pattern abstracts data access.
One generic Repository class works for any entity type.
Very common in real applications for data layer abstraction.
*/

interface Entity {
  id: number;
}

interface IRepository<T extends Entity> {
  findById(id: number): Promise<T | null>;
  findAll(): Promise<T[]>;
  save(item: T): Promise<T>;
  delete(id: number): Promise<boolean>;
}

class Repository<T extends Entity> implements IRepository<T> {
  private items: Map<number, T> = new Map();
  private nextId: number = 1;

  async findById(id: number): Promise<T | null> {
    return this.items.get(id) ?? null;
  }

  async findAll(): Promise<T[]> {
    return Array.from(this.items.values());
  }

  async save(item: T): Promise<T> {
    if (!item.id) {
      item.id = this.nextId++;
    }
    this.items.set(item.id, item);
    return item;
  }

  async delete(id: number): Promise<boolean> {
    return this.items.delete(id);
  }
}

// Usage with different entity types
interface User extends Entity {
  name: string;
  email: string;
}

interface Product extends Entity {
  name: string;
  price: number;
}

const userRepository = new Repository<User>();
const productRepository = new Repository<Product>();

// Both repositories work the same way but with different types
async function demonstrateRepository() {
  const user: User = { id: 0, name: "John", email: "john@example.com" };
  await userRepository.save(user);

  const product: Product = { id: 0, name: "Laptop", price: 999 };
  await productRepository.save(product);
}

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC CLASS WITH MULTIPLE TYPE PARAMETERS
// ─────────────────────────────────────────────────────────────────────────────

/*
Sometimes you need more than one type parameter
*/

class Pair<T, U> {
  constructor(private first: T, private second: U) {}

  getFirst(): T {
    return this.first;
  }

  getSecond(): U {
    return this.second;
  }

  swap(): Pair<U, T> {
    return new Pair(this.second, this.first);
  }
}

const pair = new Pair<string, number>("age", 30);
console.log(pair.getFirst()); // "age"
console.log(pair.getSecond()); // 30

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC CLASS: LINKED LIST NODE
// ─────────────────────────────────────────────────────────────────────────────

/*
Building a simple linked list demonstrates generic classes in action
*/

class LinkedListNode<T> {
  next: LinkedListNode<T> | null = null;

  constructor(public value: T) {}
}

class LinkedList<T> {
  private head: LinkedListNode<T> | null = null;

  append(value: T): void {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  traverse(callback: (value: T) => void): void {
    let current = this.head;
    while (current) {
      callback(current.value);
      current = current.next;
    }
  }
}

const numberList = new LinkedList<number>();
numberList.append(1);
numberList.append(2);
numberList.append(3);
numberList.traverse((value) => console.log("Value:", value));

// ─────────────────────────────────────────────────────────────────────────────
// KEY TAKEAWAYS
// ─────────────────────────────────────────────────────────────────────────────

/*
✓ Generic classes: class Name<T> { ... }
✓ Instances specify the type: new Name<string>()
✓ Type parameter used throughout class definition
✓ Works perfectly for data structures (Stack, Queue, Tree)
✓ Perfect for pattern implementations (Repository, Result)
✓ Enables reusable, type-safe classes

COMMON PATTERNS:
• Data Structures: Stack<T>, Queue<T>, LinkedList<T>
• Repository: Repository<T extends Entity>
• Result Types: Result<T, E> for error handling
• Wrappers: Container<T>, Box<T>, Option<T>
• Pairs/Tuples: Pair<T, U>, Triplet<T, U, V>

NEXT LEVEL:
→ Learn Generic Interfaces to define contracts
→ Learn Generic Constraints to limit type parameters
→ Combine with inheritance for advanced OOP patterns
*/
