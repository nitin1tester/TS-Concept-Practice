const arrEleven = [1, 2, 3, 2, 1, 2, 2, 4];

let mapEleven = new Map<number,number>();
let max = 0;
let largeKey = 0
for(let num of arrEleven){
    mapEleven.set(num,(mapEleven.get(num)??0)+1);
    if(mapEleven.get(num)!>max){
        max=mapEleven.get(num)!;
        largeKey = num;
    }
}
console.log(largeKey);