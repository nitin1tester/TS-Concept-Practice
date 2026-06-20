
const strSeven = "playwright";
let splitStrSeven:string[] = strSeven.split('');
let mapSeven = new Map<string,number>();
for(let ch of splitStrSeven){
    mapSeven.set(ch,(mapSeven.get(ch)??0)+1);
}
console.log(mapSeven);