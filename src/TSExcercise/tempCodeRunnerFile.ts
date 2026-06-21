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