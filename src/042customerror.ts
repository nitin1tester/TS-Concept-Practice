/**
 * Custom Error classes: 
 * inharit Error class & call super() in constructor.
 */

class ElementError extends Error{
    constructor(messsage:string){
        super(messsage);        // call user class constuctor 
    }
};

class BrowserError extends Error{
    constructor(message : string){
        super(message);
    }
};

class Framework extends Error{
    constructor(message : string){
        super(message);
    }
}


let browser = 'nitin';
switch (browser) {
    case "chrome":
        console.log("open chrome");
        break;

    default: throw new BrowserError(`${browser} not found`);
}
console.log("Enter the app url");