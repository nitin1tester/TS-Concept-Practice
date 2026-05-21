// in JS and TS Error Handling and Exception Handling both are same.

/**
 * 
 * 1 
 * 2 -- error -- terminated
 * handling the error -- try -catch block finally
 * no handling -- thew new Error
 * 3 
 * 4
 * 
 * >> Multiple try blocked not allowed.
 * >> we can write try block without catch block but in this case we have to write finilly block.
 */


function div (a:number, b:number) :number {
    if (b===0) {
        throw new Error("Can't be devided by zero");
    } 
    return a/b;
}

let result =  div(10,0); 
console.log(result);

// json to JS Object
function parsing() {

    try{
    let result =  JSON.parse('{"name":"Nitin"}');
    console.log(result); 
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("I am finally block i will be run");
    }
}
parsing();
console.log("Done");

// 

function m1():never {
    throw new Error("this is my error");  
}

m1(); 