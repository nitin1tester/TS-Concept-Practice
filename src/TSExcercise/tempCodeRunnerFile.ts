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
    return [...setNine]
}

let resNine =  duplicateNum(arrNine);
console.log(resNine);