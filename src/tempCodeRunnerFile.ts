const defects = [
  {
    defectId: "D1",
    severity: "Critical",
    module: "Auth"
  },
  {
    defectId: "D2",
    severity: "Major",
    module: "Auth"
  },
  {
    defectId: "D3",
    severity: "Critical",
    module: "Checkout"
  }
];

type defectSummery = {
    total:number,
    critical:number,
    major:number
}

let mapDefect = new Map<string,defectSummery>();

for(let {severity,module} of defects){
    let defectData = mapDefect.get(module) ?? {
        total:0,
        critical:0,
        major:0
    } 
    defectData.total++;
    if(severity==="Critical"){
        defectData.critical++
    }else{
        defectData.major++
    }
    mapDefect.set(module,defectData);
}
console.log(mapDefect);