
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
    mapThree.set(num,(mapThree.get(num)??0)+1)
    if(mapThree.get(num)! > 1){
        flag = false;
    }
}
console.log(flag);

//4. Find Common Elements Between Two Arrays
const arr2 = [1, 2, 3, 4];
const arr3 = [3, 4, 5, 6];
let arrComb:number[] = arr2.concat(arr3);
let mapFour = new Map<number,number>();
let setFour = new Set<number>();
for(let num of arrComb){
    mapFour.set(num,(mapFour.get(num)??0)+1)
    if(mapFour.get(num)!>1){
        setFour.add(num)
    }
}
console.log([...setFour]);

// 5. Find Distinct Browsers Used in Test Runs
const runs = [
  { browser: "Chrome" },
  { browser: "Firefox" },
  { browser: "Chrome" },
  { browser: "Edge" }
];
let setFive = new Set<string>();
for(let {browser} of runs){
    setFive.add(browser);
}
console.log([...setFive]);

// 6. Count Occurrences of Numbers

const arrSix = [1, 2, 1, 3, 2, 1, 4];
let mapSix = new Map<number,number>();
for(let num of arrSix){
    mapSix.set(num,(mapSix.get(num)??0)+1);
}
console.log(mapSix);

// 7. Count Occurrences of Characters

const strS = "playwright";
let strSev = function countOccurrences(strSeven:string):Map<String,number>{
let splitStrSeven:string[] = strSeven.split('');
let mapSeven = new Map<string,number>();
for(let ch of splitStrSeven){
    mapSeven.set(ch,(mapSeven.get(ch)??0)+1);
}
return mapSeven;
}
console.log(strSev(strS));

// 8. Find First Non-Repeated Character

const strE = "aafbbcdde";
let nonRepeatedChar = (strEight:string) : string =>{
let resultEight:string = ""
let strEightArr:string[] = strEight.split('');
let strEightMap = new Map<string,number>();
for(let ch of strEightArr ){
    strEightMap.set(ch,(strEightMap.get(ch)??0)+1);
}
for(let obj of strEightMap){
    if(obj[1]===1){
        resultEight = obj[0];
        break;
    }
}
return resultEight;
}
let outputEight = nonRepeatedChar(strE);
console.log(outputEight);

// 9. Find Duplicate Elements

const arrNine = [1, 2, 3, 2, 4, 1, 5];

let duplicateNum = (arr:number[]):number[] => {
    let mapNine = new Map<number,number>();
    let setNine = new Set<number>(); 
    for(let num of arr){
        mapNine.set(num,(mapNine.get(num)??0)+1);
        if(mapNine.get(num)!>1){
            setNine.add(num);
        }
    }
    return [...setNine];
    
}
let resNine =  duplicateNum(arrNine);
console.log(resNine);

// 