
// 1. Find the Largest Number
const arr = [10, 25, 5, 80, 45]; 
let num =  Math.max(...arr);
console.log(num);
// min
let mi = Math.min(...arr);
console.log(mi);

let arr1:number[] = [2,5,2,56,6,3,4,6,32,2,1,5,65,7,6,75,4,43,3,2,2,1,32,5,7,7,7,2,2];
let map = new Map<number,number>();
for(let num of arr1){
    map.set(num,(map.get(num)??0)+1)
}
console.log(map);

// 1. Remove Duplicates from an Array
const arrOne = [1, 2, 3, 2, 4, 1, 5];
let setOne = new Set(arrOne);
console.log([...setOne]);

// 2. Find Unique Characters in a String

const str = "automation";
let sp:string[] = str.split('')
let setTwo = new Set(sp);
console.log([...setTwo]);

// 3. Check if Array Contains Duplicates

const arrThree = [1, 2, 3, 4,1, 5];
let mapThree = new Map<number,number>();
let flag = true;
for(let num of arrThree){
    let count = 0;
    mapThree.set(num,(mapThree.get(num)??0)+1)
    if(mapThree.get(num)! > 1){
        flag = false;
    }
}
console.log(flag);

