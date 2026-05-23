
/**
 * 
 * Create a BankAccount class.

Requirements:
* accountHolderName → private
* balance → private
* Constructor to set values
* Methods:
    * deposit(double amount)
    * withdraw(double amount)
    * getBalance()
Rules:
* Cannot withdraw more than balance
* Cannot deposit negative amount
 * 
 */

class BankAccount{

        private accountHolderName : string;
        private balance : number ;

    constructor(accountHolderName:string,balance:number){
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(amount:number):void{
        if (amount<=0) {
            console.log(`Negative Balance ${amount} can't be deposite`);
        }else{
            this.balance = this.balance + amount;
            console.log(`Available Balance is ${this.balance} `);

        }
    }

    withdraw(amount:number):void{
        if (this.balance<amount) {
            console.log("You don't have sufficent balance please deposite money before withdown");
        }else{
            this.balance = this.balance - amount;
            console.log(`Available Balance is ${this.balance} `);
        }
    }

    getBalance(name:string):number|string{
        if (name === this.accountHolderName) {
            console.log(`Your Balance is ${this.balance}`);
            return this.balance;
        }else{
            let msg = "please enter a valid name";
            console.log(msg);
            return msg;
        }
    }
}

let customer1:BankAccount = new BankAccount("Nitin",10000);
let customer2:BankAccount = new BankAccount("Shivansh",10000000000000);

// customer 1 test
customer1.deposit(5000);
customer1.withdraw(14000);
customer1.getBalance("Nitin");

