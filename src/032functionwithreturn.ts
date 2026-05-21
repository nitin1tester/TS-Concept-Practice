
/**
 * ================================================================================
 * FILE: 032functionwithreturn.ts - Function Return Types & Async Operations
 * ================================================================================
 * 
 * CONCEPT OVERVIEW:
 * This file demonstrates various function return types including:
 * 1. Synchronous returns (boolean, specific types)
 * 2. Promises for asynchronous operations
 * 3. Async/await pattern for cleaner async code
 * 
 * KEY CONCEPTS:
 * - Return types are declared with : type syntax
 * - Promises wrap asynchronous operations
 * - Async/await provides synchronous-looking code for async operations
 * - Type safety applies to async operations too
 * ================================================================================
 */

/**
 * SYNCHRONOUS FUNCTION WITH BOOLEAN RETURN:
 * Function returns immediately with a boolean value.
 * Uses switch statement for control flow.
 */
function launchBrowser(name:string) : boolean{
    switch (name.trim().toLowerCase()) {
        case 'chrome':
            console.log(`${name} is launched`);
            return true;
        case 'firefox':
            console.log(`${name} is launched`);
            return true;
        case 'safari':
            console.log(`${name} is launched`);
            return true;
    
        default: console.log(`${name} is not a valid browser`);
            return false;
    }
};

launchBrowser('fireFox');
launchBrowser('ie');


/**
 * PROMISES FOR ASYNCHRONOUS OPERATIONS:
 * Promise<T> is a wrapper for async operations that eventually return type T.
 * 
 * Promise States:
 * - Pending: Operation is in progress
 * - Resolved: Operation completed successfully with a value
 * - Rejected: Operation failed with an error
 */

// Return promise 
function getNumber() : Promise<number>{
    return Promise.resolve(100);
};

getNumber().then((result)=>{
    console.log(result);
});


/**
 * PROMISE WITH STRING RETURN TYPE:
 * Returns a Promise that resolves to a string value.
 */
function getTrainerName():Promise<string>{
    return Promise.resolve("Nitin");
}
getTrainerName().then((result)=>{
    console.log(result);
})


/**
 * PROMISE WITH CUSTOM TYPE:
 * Returns a Promise that resolves to a custom user object type.
 * Uses setTimeout to simulate async operation (like API call).
 */

// 
type userType = {name:string,age:number} ;
function getUserData() : Promise<userType>{
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        let user={
            name:"shivansh",
            age:1
        };
        resolve(user);
     },3000);   
    })
};

// // this will return promise
// let myOne =  getUserData().then((myUser)=>{
//     // console.log(myUser);
//     return myUser;
// })

/**
 * ASYNC/AWAIT PATTERN:
 * Provides cleaner syntax for working with Promises.
 * 
 * HOW IT WORKS:
 * - 'async' keyword: Makes function return a Promise and allows 'await'
 * - 'await' keyword: Pauses execution until Promise resolves
 * - Looks synchronous but executes asynchronously
 * 
 * BENEFIT: More readable than chaining .then() calls
 */

// call Using Async function

async function getMyUserData() {
    let myUsr = await getUserData();
    console.log(myUsr.name);
    console.log(myUsr);
    return myUsr;
}
getMyUserData();


/**
 * REAL-WORLD EXAMPLE: Playwright-like Pattern
 * Demonstrates how browser automation libraries structure async code.
 */

// pw internal method
function click(element : string):Promise<void>{
    console.log('Click on',element);
    return Promise.resolve();
};

// our genric Elementutils
async function doClick(element:string):Promise<void> {
    await click(element);
};

// in test
doClick("loginBtn");
