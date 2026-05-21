
// primitive data types: 
//let varName: type = value;

let num : number = 10;
console.log(num); 
console.log(typeof num);

let str : string = "nitin";
console.log(str);


let isActive : boolean = true;
console.log(isActive);

let user : null = null;
let user2 = null; // no need to write type here
let user3 = undefined; // no need to write type here

let bnum : bigint = 100n;
console.log(bnum);

let testValue: any; 
testValue = 100;
testValue = "nitin";
console.log(testValue);
console.log(typeof testValue);

let value: unknown = 'hello'; // new type in TS which is not available in JS (any and unknon is same only)
console.log(value);
console.log(typeof value);

// void:- no return form function
function test() : void{
    console.log("hello testing");
}

// with some return 
function getPiValue() :number {
    return 3.14;
}

// with param & return
function addNumber(n1:number,n2:number):number{
    return n1+n2;
}
let sum =  addNumber(2,4);
console.log(sum);

// // never(data type) :- a value which will never happen... error (only in TS)
// function throwElementError(locator : string) : never {
//     throw new Error(locator+"Element is not found...");
// }
// throwElementError("loginbtn");

// union type:- 
let id: string | number| boolean | string ;
id = 100;
id = "nitin";
console.log(typeof id);

// Array:- not fixed size.

let arr : number[] = [1,2,3,4,5,6];
console.log(arr);

let names : string[] = ["nitin",'shraddha', `shivansh`];
console.log(names);

let device : unknown[] = [1,2,3,'Nitin'];

let mixdata : Array<any> = ["apple", 1 , true];

let mixdata2 : Array<string|number|boolean> = ["apple", 1 , true];


// tuple :- fixed length arrray with specific types

let myUser : [string, number] = ["nitin",100];
console.log(myUser);

let person : [string, string, number, boolean ] = ['Nitin','QA',45, true];
console.log(person);

// object
// in JS
// let userObj = {
//     name : "Nitin",
//     age : 35,
//     salary: 45.5,
//     isActive: true,
//     city: 'Bangalore'
// }
// console.log(userObj);

// in TS (but its lengthy way)
// let newUser : { name:string, age:number, isActive:boolean, city: string } = {
//     name: "Nitin",
//     age:50,
//     isActive: true,
//     city:"pune"
// };


// readonly to make property final & we can't update a readonly property. 
// we can't delete readonly field.
type userType = {readonly name:string, age:number, isActive:boolean, city:string}

let usrObj : userType ={
    name: "Nitin",
    age:50,
    isActive: true,
    city:"pune"
} 
console.log(usrObj);


// Define custom type 
type orderIdType = string | number;

let orderId : orderIdType = 1234;
orderId = "abc123";
console.log(orderId);







