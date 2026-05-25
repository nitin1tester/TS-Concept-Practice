
/**
 * 2. Vehicle System (Inheritance)

Create:

* parent class → Vehicle
* child classes:
    * Car
    * Bike

Requirements:

* common properties:
    * brand
    * speed
* common method:
    * startEngine()
* child-specific methods:
    * Car → openTrunk()
    * Bike → wheelie()

Concepts:

* inheritance
* extends
* super()
 */


class Vehicle {
    protected brand:string;
    protected speed:number;
    constructor(brand:string,speed:number) {
        this.brand = brand;
        this.speed = speed;
    }

    startEngine(){
        console.log("start Vehicle engine" + this.speed);
    }
}

class Car extends Vehicle {

    constructor(brand:string, speed:number) {
        super(brand,speed);
    }
    startEngine():void{
        console.log("start Car engine");
    }

    openTrunk() : void{
        console.log("Open Trunk");
    }
}

class Bike extends Vehicle {
    constructor(brand:string,speed:number) {
        super(brand,speed)
    }
    startEngine() : void{
        console.log("start Bike engine");
    }
    wheelie(): void{
        console.log('Do wheelie');
    }

}

let vehicle:Vehicle = new Vehicle("honda",100);
vehicle.startEngine();

let car:Car = new Car("Tata",200);
car.startEngine();
car.openTrunk();

let vcar:Vehicle = new Car("Hundia",250);
vcar.startEngine();

let bike:Bike = new Bike("yahama",150);
bike.startEngine();
bike.wheelie();

let vbike:Vehicle = new Bike("suzuki",120);
vbike.startEngine();








