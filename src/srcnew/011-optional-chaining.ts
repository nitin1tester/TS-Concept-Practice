/*

               OPTIONAL CHAINING (?.) OPERATOR                              
                   TypeScript Priority 1 Concept #23                        

CONCEPT: Optional Chaining Operator (?.)


WHAT IS IT?
The optional chaining operator (?.) allows you to safely access properties,
methods, and array indices on objects that might be null or undefined.
Returns undefined instead of throwing an error.

WHY USE IT?
 Prevents "Cannot read property X of undefined" errors
 Replaces repetitive null/undefined checks
 Makes code more readable and concise
 Handles deeply nested properties safely
 Reduces defensive programming boilerplate
 Modern JavaScript/TypeScript feature

WHERE TO USE IT?
 Accessing properties on potentially null/undefined objects
 Calling methods that might not exist
 Deep property access chains
 Array access with optional indices
 Optional method calls
 When you need explicit null checks
*/

// 
// PROPERTY ACCESS WITH OPTIONAL CHAINING
// 

interface User {
  name: string;
  email?: string;
  profile?: {
    avatar?: string;
    bio?: string;
  };
}

const user: User | null = null;

// Without optional chaining - would throw error
// const bio = user.profile. Error: Cannot read property 'profile' of nullbio; // 

// With optional chaining - returns undefined safely
const bio = user?.profile?. Returns undefinedbio; // 

console.log(bio); // undefined (no error)

// 
// OPTIONAL PROPERTY ACCESS
// 

const validUser: User = {
  name: "Alice",
  profile: {
    avatar: "https://example.com/avatar.jpg",
  },
};

// Works if profile exists
const avatar = validUser.profile?.avatar; // "https://example.com/avatar.jpg"

// undefined if profile doesn't exist
const user2: User = { name: "Bob" };
const avatar2 = user2.profile?.avatar; // undefined (no error)

// 
// OPTIONAL METHOD CALLS
// 

interface Document {
  save?: () => Promise<void>;
  delete?: () => Promise<void>;
}

const doc: Document | null = null;

// Call method only if it exists
doc?.save?.(); // Safely does nothing if save doesn't exist or doc is null

// With a valid document
const validDoc: Document = {
  save: async () => {
    console.log("Saving...");
  },
};

validDoc?. Calls the methodsave?.(); // 

// 
// OPTIONAL ARRAY ACCESS
// 

interface Config {
  servers?: string[];
}

const config: Config | null = null;

// Access array element safely
const firstServer = config?.servers?.[0]; // undefined (no error)

const validConfig: Config = {
  servers: ["server1.com", "server2.com"],
};

const validFirstServer = validConfig?.servers?.[0]; // "server1.com"

// 
// REAL-WORLD EXAMPLE: API RESPONSE HANDLING
// 

interface ApiUser {
  id: number;
  profile?: {
    firstName?: string;
    lastName?: string;
    contact?: {
      email?: string;
      phone?: string;
    };
  };
}

async function fetchUser(): Promise<ApiUser | null> {
  // Simulated API call
  return {
    id: 1,
    profile: {
      firstName: "John",
      contact: {
        email: "john@example.com",
      },
    },
  };
}

async function processUser() {
  const user = await fetchUser();

  // Without optional chaining: many checks needed
  // if (user && user.profile && user.profile.contact && user.profile.contact.email) {
  //   console.log(user.profile.contact.email);
  // }

  // With optional chaining: clean and safe
  const email = user?.profile?.contact?.email;
  const phone = user?.profile?.contact?.phone;

  console.log("Email:", email); // "john@example.com"
  console.log("Phone:", phone); // undefined
}

// 
// COMBINING WITH NULLISH COALESCING
// 

// Optional chaining + nullish coalescing for defaults
const config2: Config | null = null;

const serverCount = config2?.servers?.length ?? 0; // 0 (default)

const validConfig2: Config = { servers: ["srv1", "srv2"] };
const validServerCount = validConfig2?.servers?.length ?? 0; // 2

// 
// REAL-WORLD: REACT COMPONENT PROPS
// 

interface ComponentProps {
  data?: {
    items?: Array<{ id: number; title: string }>;
    metadata?: {
      total?: number;
      page?: number;
    };
  };
  onUpdate?: (id: number) => void;
}

function MyComponent(props: ComponentProps | null) {
  // Safely access deeply nested optional properties
  const itemCount = props?.data?.items?.length ?? 0;
  const currentPage = props?.data?.metadata?.page ?? 1;

  // Safely call optional callback
  const handleClick = (id: number) => {
    props?.onUpdate?.(id);
  };

  return `Items: ${itemCount}, Page: ${currentPage}`;
}

// 
// OPTIONAL CHAINING IN LOOPS
// 

interface UserList {
  users?: Array<{ id: number; name: string; email?: string }>;
}

const userList: UserList | null = null;

// Safely iterate
userList?.users?.forEach((user) => {
  console.log(user.name, user.email?.toLowerCase());
});

// 
// OPTIONAL CHAINING WITH TYPE GUARDS
// 

function processData(data: unknown) {
  // First check with optional chaining
  const value = (data as any)?.nested?.value;

  // Then verify type
  if (typeof value === "string") {
    console.log("Valid string:", value);
  }
}

// 
// PRACTICAL: ERROR HANDLING
// 

interface ApiError {
  response?: {
    status?: number;
    data?: {
      message?: string;
    };
  };
}

function handleError(error: ApiError | null) {
  const statusCode = error?.response?.status ?? 500;
  const message = error?.response?.data?.message ?? "Unknown error";

  console.error(`Error [${statusCode}]: ${message}`);
}

// 
// KEY TAKEAWAYS
// 

/*
SYNTAX:
obj?.prop           // Property access
obj?.prop?.nested   // Chained access
obj?.[index]        // Array access
obj?.method?.()     // Method call
fn?.()              // Function call

RETURNS:
 undefined if the value before ?. is null/undefined
 Otherwise returns the accessed value

BENEFITS:
 Replaces nested null checks
 Prevents runtime errors
 More readable code
 Works with deep nesting
 Combines with nullish coalescing (??)

COMMON PATTERNS:
 obj?.property ?? default
 array?.length ?? 0
 object?.method?.()
 nested?.deeply?.nested?.prop

IMPORTANT:
 Returns undefined, not null
 Short-circuits: if intermediate is null, stops checking
 Use with ?? for default values
 Combine with type guards for type safety

NEXT LEVEL:
 Learn Nullish Coalescing (??)
 Combine in complex property chains
 Use with generics for type-safe access
*/
