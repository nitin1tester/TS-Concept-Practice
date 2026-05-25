
abstract class  Shape{
    abstract calculateArea():number;
}

class Circle extends Shape {
    protected redius:number;
    constructor(redius:number){
        super();
        this.redius = redius;
    }

    calculateArea():number {
        let result = 3.13*this.redius*this.redius;
        console.log(`Area of circle is ${result}`);    
        return result;
    }

}

class Reatangle extends Shape {
    protected length : number;
    protected width : number;

    constructor(length:number,width:number) {
        super();
        this.length = length;
        this.width = width;
    }

    calculateArea(): number {
        let result = this.length * this.width;
        console.log(`Area of rectangle is ${result}`);
        return result;
    }
}
 
class Triangle extends Shape{
    protected height: number;
    protected base: number;

    constructor(height:number,base:number) {
        super();
        this.base = base;
        this.height = height;
    }

    calculateArea(): number {
        let result = this.base * this.height;
        console.log(`Area of triangle is ${result}`);
        return result;
    }
}

let circleArea = new Circle(5);
circleArea.calculateArea()

let reacArea = new Reatangle(3,5);
reacArea.calculateArea();

let triArea= new Triangle(4,6);
triArea.calculateArea();


