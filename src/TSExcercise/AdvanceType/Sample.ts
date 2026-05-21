
let arr:number[] = [2,4,2,4,5,6,5,8,9,4,2,4,5,3,5];
function counterNum(arr:number[],num:number) {
    let count:number = 0;
    for (const e of arr) {
        if (e===num) {
            count++;
        }
    }
    return count;
}

for (let index = 1; index < 10; index++) {
    let total = counterNum(arr,index);
    console.log(`Total ${index} count : ${total} `); 
}

console.log("==========================================");

let str:string = "nitin";

function countChar(chr:string,char:string) {
    let strArr:string[] = [...str];
    let counter:number=0;
    for(let e of strArr){
    if (e===char) {
        counter++;
    }
    }
    return counter;
}

let num:number =  countChar(str,"n")
console.log(num);

console.log("==========================================");

let nArr:number[] = [2,4,2,4,5,6,5,8,9,4,2,4,5,3,5];

function removeDuplicateNumber(num:number[]) {
    let x = [...new Set(num)];
    console.log(x);
}

removeDuplicateNumber(nArr);


console.log("==================console methods========================");


let nArr1:number[] = [2,4,2,4,5,6,5,8,9,4,2,4,5,3,5];
let user = {
    name:"nitin",
    age:35,
    city:"pune",
    status:true
}
console.table(user);
for(const e of nArr1){
    // console.count();
    // console.clear();
    // console.assert(true,'this is my message');
    // console.time();
    
}

console.log("==========================================");



