const runsFifteen = [
  { suite: "Auth" },
  { suite: "Auth" },
  { suite: "Checkout" },
  { suite: "Search" },
  { suite: "Auth" }
];

let mapfifteen = new Map<string, number>();

for (let {suite} of runsFifteen){
    mapfifteen.set(suite,(mapfifteen.get(suite)??0)+1);
}
console.log(mapfifteen);