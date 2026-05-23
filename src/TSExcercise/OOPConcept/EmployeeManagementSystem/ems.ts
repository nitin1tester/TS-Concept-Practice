/**
 * 1. Employee Management System (Encapsulation)

Create an Employee class.

Requirements:

* private:
    * employeeName
    * salary
* methods:
    * increaseSalary(percent)
    * getSalary()
* Rules:
    * salary cannot be negative
    * increment percent must be > 0

Concepts:

* encapsulation
* validation
* constructor
 */

class Employee{
    private employeeName;
    private salary;

    constructor(employeeName:string, salary:number) {
        this.employeeName=employeeName;
        if (salary<0) {
            console.log('please pass a valid salary');
        }else{
            this.salary = salary;
        }
        this.salary = salary;
    }

    increaseSalary(percent:number){
        if (percent<0) {
            console.log("Increment can't be negative");
        }else{
            this.salary = (this.salary + (this.salary*(percent/100)));
            console.log(`Congrats!!!! Now you salary is ${this.salary}`);
        }
    };

    getSalary():number{
        console.log(`Your salary is ${this.salary}`);
        return this.salary
    }
}

let user1 = new Employee('Shradda',1000);
let user2 = new Employee('Shivansh',50000);

user1.getSalary();
user1.increaseSalary(10);
user1.getSalary();