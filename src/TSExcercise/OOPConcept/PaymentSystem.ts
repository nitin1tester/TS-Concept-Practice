/**
 * 3. Payment System (Polymorphism)
Create:
* parent class/interface → Payment
* child classes:
    * UPIPayment
    * CardPayment
    * CashPayment

Each should implement:
 */

interface Payment{
    pay(amount:number):void;
}

class UPIPayment implements Payment {
    protected amount:number;
    constructor(amount:number) {
        this.amount = amount;
    }
    pay(amount:number){
        console.log(`Amount paid ${amount} by UPI `);
    }
}

class CardPayment implements Payment {
    protected amount:number;
    constructor(amount:number) {
        this.amount=amount;
    }
    pay(amount:number){
        console.log(`Amount paid ${amount} by Card`);
    }

}
class CashPayment implements Payment {
    protected amount:number;
    constructor(amount:number) {
        this.amount = amount
    }
    pay(amount: number) {
        console.log(`Amount paid ${amount} by cash`);
    }
}

let payUPI:Payment = new UPIPayment(5000);

payUPI.pay(500);

let payCard:Payment = new CardPayment(200);

payCard.pay(50);

let payCash:Payment = new CashPayment(3000);

payCash.pay(259);


