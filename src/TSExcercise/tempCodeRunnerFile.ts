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