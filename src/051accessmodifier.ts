/**
 * public -- Same class, Child class , Outside of class
 * private -- Same class only 
 * protacted -- Same class, Child class
 * 
 * 
 */


class User {
    public testing():void{
        console.log("I am testing");
    }

    private coding():void{
        console.log("I am coding");
    }

    public doCoding():void{
        this.coding();
    }

    protected managemnent():void{
        console.log("I am management");
    }
}

class Employee extends User {
    public working(){
        console.log("I am working");
        this.managemnent();
        this.testing();
        this.doCoding();
        let e1:Employee = new Employee();
    }
}

// outside of class
// let user = new User();
// user.testing();


let e1:Employee = new Employee();