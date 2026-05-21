/**
 * interface : prototype for the objects and classes
 * can not create the object of interface
 * only method declaration: no method body, no buss logic
 */

// interface with objects: define the shape of object/ blue print of the class.

interface User{
    name:string;
    age:number;
    salary?:number;// Optional 
    city?:string; // optional field
    readonly companyName:string; // we can change final in nature.
    coding():void;
    calcSal():number;
}


let u1:User={
    name:"Shivansh",
    age:20,
    // salary: 50.00,// optional var are not mandatory to impliment
    companyName:'TRC',

    coding():void{
        console.log(`${this.name} is coding`);
    },
    calcSal():number{
        return 100;
    }
}

console.log(u1);
u1.coding();
console.log(u1.calcSal());