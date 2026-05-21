

// optional param:- using "?"
// optional param must be last like define in printData() >> "age?: number"
 

function printData(name:string, age?: number):void{
    console.log(name);
    console.log(age);
}
printData('Nitin'); // age undefined 
printData("shivansh",1); // age is given value "1"

function launchBrowser(browser:string, headless ? : boolean):boolean{
    if (headless) {
        console.log(`Run test cases in ${browser} in headless`);
        return true;
    }else{
        console.log("run tc in borwser ",browser);
        return true;
    }
}

let isLaunched =  launchBrowser('Chrome',false);
console.log(isLaunched);

// then one optional param
function search(name:string, color:string, price ? : number, seller ? : string):void{
    if(price && seller){
        console.log(name,color,price,seller);
    }else{
        console.log(name,color);
    }
}

search("iphone","white",1500,"cloudEra");
search("macbook","silver");


//functional prototype overloading :- different function with same name but different param.

// design a proto+type: signature
function combination(a:number, b:number): number;
function combination(a:string, b:string): string;
function combination(a:number, b:string): string;
function combination(a:string, b:number): string;

//only One:- with the body
function combination(a:any,b:any):any{
    return a+b;
}

//calling diff signatures
console.log(combination(10,20));
console.log(combination('Nitin','Automation'));
console.log(combination("nitin",10));
