/**
 * 5. Library Management System (Composition)

Create:

* Book
* Library

Library should:

* add books
* remove books
* display books

Concepts:

* composition
* array of objects
* class interaction
 */

class Book {
    protected bookTitle : string;
    protected bookAuthor : string;
    protected bookId : number;
    constructor(bookTitle:string, bookAuthor:string, bookId:number) {
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.bookId = bookId;
    }

    displayBook():void{
        console.log(`Book title : ${this.bookTitle}`);
        console.log(`Book author : ${this.bookAuthor}`);
        console.log(`Book ID : ${this.bookId}`);
    }

}

class Library{

    private book:Book[] = [];

    constructor(book:Book) {
        this.book[] = book;
    }

    addBook(book:Book){
        this.book.push(book);
    }

    getBook(id:number){
        return this.book.find(book=>book.displayBook)
    }

}

const testFinal = [
  { suite: 'Auth', status: 'PASS', duration: 100 },
  { suite: 'Auth', status: 'FAIL', duration: 50 },
  { suite: 'Checkout', status: 'PASS', duration: 200 }
];

type statsObj = {
    total:number,
    pass:number,
    fail:number,
    duration:number
}

let mapFinale = new Map<string, statsObj >();

for(let {suite,status,duration} of testFinal){
    let stat = mapFinale.get(suite) ?? {
        total:0,
        pass:0,
        fail:0,
        duration:0
    }
    stat.total++;
    stat.duration= stat.duration + duration;
    if(status==="PASS"){
        stat.pass++;
    }else{
        stat.fail++;
    }
    mapFinale.set(suite, stat );
}
console.log(mapFinale);



// Question 1: Suite Analytics Dashboard

const executions = [
  {
    suite: "Auth",
    testName: "Login",
    status: "PASS",
    browser: "Chrome",
    duration: 120
  },
  {
    suite: "Auth",
    testName: "Login",
    status: "FAIL",
    browser: "Firefox",
    duration: 150
  },
  {
    suite: "Checkout",
    testName: "Payment",
    status: "PASS",
    browser: "Chrome",
    duration: 200
  },
  {
    suite: "Auth",
    testName: "Logout",
    status: "PASS",
    browser: "Chrome",
    duration: 100
  }
];

type exeStatObj = {
    totalTests:number,
    pass:number,
    fail:number,
    totalDuration:number,
    browsers: Set<string>
}

let mapEleven = new Map<string,exeStatObj>(); 

for(let {suite,status,browser,duration} of executions){
    let exeStatData = mapEleven.get(suite) ?? {
        totalTests:0,
        pass:0,
        fail:0,
        totalDuration:0,
        browsers: new Set(),
    }

    exeStatData.totalTests++;
    if(status === "PASS"){
        exeStatData.pass++;
    }else{
        exeStatData.fail++;
    }
    exeStatData.totalDuration = exeStatData.totalDuration + duration;
    exeStatData.browsers.add(browser);
    mapEleven.set(suite,exeStatData);
}
console.log(mapEleven);


// Question 2: Unique Test Names Per Browser

const executionTwo = [
  { browser: "Chrome", testName: "Login" },
  { browser: "Chrome", testName: "Logout" },
  { browser: "Chrome", testName: "Login" },
  { browser: "Firefox", testName: "Login" },
  { browser: "Firefox", testName: "Payment" }
];

let exeMapTwo = new Map<string,Set<string>>();

for(let {browser,testName} of executionTwo){
    let set = new Set<string>();
    let browSet = (exeMapTwo.get(browser) ?? set);
    exeMapTwo.set(browser, browSet.add(testName) )
}
console.log(exeMapTwo);

// Question 3: Find Flaky Tests

const executiosThree = [
  { testName: "Login", status: "PASS" },
  { testName: "Login", status: "FAIL" },
  { testName: "Logout", status: "PASS" },
  { testName: "Payment", status: "PASS" },
  { testName: "Payment", status: "FAIL" }
];

let mapFailTestName = new Map<string,Set<string>>();

for(let {testName,status} of executiosThree){
    let setThree = new Set<string>();
    let testSet:Set<string> = (mapFailTestName.get(status) ?? setThree)
    mapFailTestName.set(status, testSet.add(testName) )
}
// console.log(mapFailTestName);
console.log(mapFailTestName.get("FAIL"));