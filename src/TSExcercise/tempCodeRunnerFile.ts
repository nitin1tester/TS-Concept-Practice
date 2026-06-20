
const strEight = "aabbcdde";
let strEightArr:string[] = strEight.split('');
let strEightMap = new Map<string,number>();
for(let ch of strEightArr ){
    strEightMap.set(ch,(strEightMap.get(ch)??0)+1);
}
for(let obj of strEightMap){
    if(obj[1]===1){
        console.log(obj[0]);
        break;
    }
}