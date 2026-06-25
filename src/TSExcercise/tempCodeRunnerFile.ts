const employees = [
  { name: "Nitin", dept: "QA" },
  { name: "Rahul", dept: "Dev" },
  { name: "Amit", dept: "QA" },
  { name: "Nitin", dept: "QA" },
  { name: "Priya", dept: "Dev" }
];

let mapTwle = new Map<string, string[]>()

for (let {name,dept} of employees){
    let myArr = mapTwle.get(dept)??[];
    myArr.push(name);
    mapTwle.set(dept,myArr)
}
console.log(mapTwle);