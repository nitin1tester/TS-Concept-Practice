
const executiosThree = [
  { testName: "Login", status: "PASS" },
  { testName: "Login", status: "FAIL" },
  { testName: "Logout", status: "PASS" },
  { testName: "Payment", status: "PASS" },
  { testName: "Payment", status: "FAIL" }
];

let mapFailTestName = new Map<string,Set<string>>();

for(let {testName,status} of executiosThree){
    let setThree = new Set<string>();
    let testSet:Set<string> = (mapFailTestName.get(status) ?? setThree)
    mapFailTestName.set(status, testSet.add(testName) )
}
// console.log(mapFailTestName);
console.log(mapFailTestName.get("FAIL"));