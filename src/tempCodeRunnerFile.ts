
const executionSix = [
  { testName: "Login", browser: "Chrome" },
  { testName: "Login", browser: "Firefox" },
  { testName: "Logout", browser: "Chrome" },
  { testName: "Payment", browser: "Edge" },
  { testName: "Payment", browser: "Chrome" }
];

let mapExeSix = new Map<string,Set<string>>();
let finalResult = new Set<string>();
for(let {testName,browser} of executionSix ){
    let setData = mapExeSix.get(testName)?? new Set<string>();
    mapExeSix.set(testName,setData.add(browser))
    if(setData.size>1){
        finalResult.add(testName)
    }
}

console.log(finalResult);