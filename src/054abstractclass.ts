
/**
 *  Abstract Class:- 
 *  >> cannot create the object of the abstract class.
 *  >> can have abstract method: no method body.
 *  >> can hev non abstract method: have method body. 
 *  >> abd + non abs methods ---> 0-100% abstraction : partial abstraction.
 *  >> need to add abstract keyword.
 */


abstract class Page{
    // we can have constructor in abstract class but will be called by child object.
    constructor() {
        console.log("default page const ..... ");
    }

    abstract title():void;// abstract method declearation
    abstract url():void;

    pageLoading():void{ // non-abstract method 
        console.log("Page loading method");
    }

    footer():void{
        console.log("Page Footer Method");
    }
}

class LoginPage extends Page {

    constructor() {
        super();
        console.log("Login page const ..... ");
    }
    override title(): void {
        console.log("Title method");
    }
    override url(): void {
        console.log("URL method");
    }

    override pageLoading():void{ // non-abstract method 
        console.log("Page loading overriden method");
    }

    doLogin():void{
        console.log("Do Login method");
    }

}

let login:LoginPage = new LoginPage(); 
// Note:-  this will call parent class constractor then login page const...
login.title(); // interface implimented
login.url(); //  interface implimented
login.pageLoading(); // overridden method
login.footer() // method implimented in abstract class
login.doLogin()// individule method of child class.




