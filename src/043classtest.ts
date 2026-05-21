/**
 * 
 * >> inheritance:
 * 
 */

class Car {
    start():void{
        console.log("car---start");
    }
    Stop():void{
        console.log("car---stop");
    }
    refuel():void{
        console.log("car---refuel");
    }
}

class BMW extends Car {
    override start(): void { // we need to add override keyword
        console.log("BMW---start");
    }

    autoParking(): void{
        console.log("BMW---AutoParking");
    }
}

let bwm:BMW = new BMW();
bwm.start();
bwm.autoParking();
bwm.Stop();
bwm.refuel();

let car: Car = new Car();

console.log("========================");
// Chile class object can be refered by parest class ref variable.
// Top/Up/Casting (IS-A releation ship)
// every BMW is a car
let car1 : Car = new BMW();

car1.start();
car1.Stop();
car1.refuel();

// downcasting not allowed
//Every Car is not BMW
// let  bmw:BMW = new Car(); // IS-A relation ship failed

