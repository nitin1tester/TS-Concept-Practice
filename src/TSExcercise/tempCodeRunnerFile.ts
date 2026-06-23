const results = [
  "PASS",
  "FAIL",
  "PASS",
  "SKIPPED",
  "FAIL",
  "PASS"
];

let mapTen = new Map<string,number>();
for(let str of results){
    mapTen.set(str,(mapTen.get(str)??0)+1);
}
console.log(mapTen);