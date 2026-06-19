import { test } from "@mobilewright/test";


let arr1 = [1,2,3,4,3,6,2,7,98,6,2,4,6,5,6,7,8,9];
let set1 = new Set(arr1);
// console.log(arr1);
// console.log(set1);
// let uniqueArray = [...set1];
// console.log(uniqueArray);
set1.add(25);
console.log(set1);
set1.delete(98);
console.log(set1);
// set1.clear();
// console.log(set1);
let flag:boolean = set1.has(26);
console.log(flag);



/**
 * Map
 */


let myMap = new Map();
myMap.set('username','Nitin');
myMap.set('lastname','Rastogi');
myMap.set('age',35);
myMap.set('status',true);
//print map
console.log(myMap);
// map size
console.log(myMap.size);
// delete one value where key is lastname
myMap.delete('lastname');
console.log(myMap);
// has key 
console.log(myMap.has('age'));
console.log(myMap.has('test'));
// 
console.log(myMap.values());
console.log(myMap.keys());
myMap.clear();
console.log(myMap);

/**
 * Maps and array
 */

/**
 * Question 1 do it using Map
 */

let result = [
    {suite:'Auth',duration:120},
    {suite:'Checkout',duration:300},
    {suite:'Auth',duration:80},
] 
let objMap = new Map<string,number>();
for(let {suite,duration} of result){
    objMap.set( suite , (objMap.get(suite) ?? 0) + duration);
}
console.log(objMap);

/**
 * Question 2
 * 
 */

let baseLine = [
    {id: 'TC1', status:'pass'},
    {id: 'TC2', status:'pass'},
]

let actual = [
    {id: 'TC1', status:'pass'},
    {id: 'TC2', status:'fail'},
]



const tests = [
  { suite: 'Auth' },
  { suite: 'Checkout' },
  { suite: 'Auth' },
  { suite: 'Search' },
  { suite: 'Auth' }
];

let mapOne = new Map<string,number>();
for(let {suite} of tests){
    mapOne.set(suite,(mapOne.get(suite)??0)+1);
} 
console.log(mapOne);


const test2 = [
  { suite: 'Auth', duration: 100 },
  { suite: 'Checkout', duration: 200 },
  { suite: 'Auth', duration: 50 }
];

let mapTwo = new Map<string,number>();
for(let {suite,duration} of test2){
    mapTwo.set( suite  , (mapTwo.get(suite) ?? 0) + duration)
}
console.log(mapTwo);

const test3 = [
  { status: 'PASS' },
  { status: 'FAIL' },
  { status: 'PASS' },
  { status: 'PASS' }
];

let mapThree = new Map();

for(let {status} of test3){
    mapThree.set(status , (mapThree.get(status) ?? 0)+1 )
}
console.log(mapThree);

const test4 = [
  { suite: 'Auth', duration: 300 },
  { suite: 'Auth', duration: 250 },
  { suite: 'Auth', duration: 150 }
];

let mapFour = new Map();

for(let {suite,duration} of test4){
    mapFour.set(suite, (mapFour.get(suite)??0) < duration ? duration :  mapFour.get(suite))
}
console.log(mapFour);

const test5 = [
  { suite: 'Auth', test: 'Login' },
  { suite: 'Auth', test: 'Logout' },
  { suite: 'Checkout', test: 'Payment' },
  { suite: 'Auth', test: 'Logout' },
];
let mapFive = new Map<string,string[]>();

for(let {suite,test} of test5){
    let arr = (mapFive.get(suite) ?? [])
    let setOne = new Set(arr);
    setOne.add(test)
    mapFive.set(suite,[...setOne])
}
console.log(mapFive);

const test6 = [
  { status: 'FAIL', duration: 100 },
  { status: 'PASS', duration: 50 },
  { status: 'FAIL', duration: 200 }
];

let mapSix = new Map<string,number>();

for(let {status,duration} of test6){
    mapSix.set(status , (mapSix.get(status) ?? 0) + duration)
}
console.log(mapSix.get('FAIL'));

const runs = [
  { browser: 'Chrome' },
  { browser: 'Firefox' },
  { browser: 'Chrome' },
  { browser: 'Edge' }
];

let mapSeven = new Map<string,number>();

for(let {browser} of runs ){
    mapSeven.set(browser, (mapSeven.get(browser) ?? 0) + 1 )
}
console.log(mapSeven);

const test8 = [
  'login',
  'logout',
  'login',
  'payment',
  'logout'
];

let mapEight = new Map<string,number>();
let setTwo = new Set();
for(let str of test8 ){
    mapEight.set(str, (mapEight.get(str) ?? 0) + 1 );
    if((mapEight.get(str)??0) > 1){
        setTwo.add(str);
    }
}
console.log([...setTwo]);

const test9 = [
  { suite: 'Auth', duration: 100 },
  { suite: 'Auth', duration: 200 },
  { suite: 'Checkout', duration: 300 }
];
let mapSum = new Map<string,number>();
let mapCount = new Map<string,number>();

for(let {suite,duration} of test9){
    mapSum.set(suite, (mapSum.get(suite) ?? 0) + duration);
    mapCount.set(suite, (mapCount.get(suite) ?? 0) + 1 );
}
// console.log(mapCount);
// console.log(mapSum);
let mapAvg = new Map<string,number>();
for(let suite of mapSum.keys()){
    
    mapAvg.set(suite , (mapSum.get(suite)! /mapCount.get(suite)!)  )
}
console.log(mapAvg);


const test10 = [
  { suite: 'Auth' },
  { suite: 'Checkout' },
  { suite: 'Auth' },
  { suite: 'Auth' }
];

let mapten = new Map<string,number>();
let setTen = new Set();
let max = 0;
let val = null;
for(let {suite} of test10){
    mapten.set(suite, (mapten.get(suite) ?? 0) + 1);
}
for(let suite of mapten){    
    if (suite[1]>max){
        max = suite[1];
        val = suite[0];
    }
}
console.log(val);


const testFinal = [
  { suite: 'Auth', status: 'PASS', duration: 100 },
  { suite: 'Auth', status: 'FAIL', duration: 50 },
  { suite: 'Checkout', status: 'PASS', duration: 200 }
];

type statsObj = {
    total:number,
    pass:number,
    fail:number,
    duration:number
}

let mapFinale = new Map<string, statsObj >();

for(let {suite,status,duration} of testFinal){
    let stat = mapFinale.get(suite) ?? {
        total:0,
        pass:0,
        fail:0,
        duration:0
    }
    stat.total++;
    stat.duration= stat.duration + duration;
    if(status==="PASS"){
        stat.pass++;
    }else{
        stat.fail++;
    }
    mapFinale.set(suite, stat );
}
console.log(mapFinale);



// Question 1: Suite Analytics Dashboard

const executions = [
  {
    suite: "Auth",
    testName: "Login",
    status: "PASS",
    browser: "Chrome",
    duration: 120
  },
  {
    suite: "Auth",
    testName: "Login",
    status: "FAIL",
    browser: "Firefox",
    duration: 150
  },
  {
    suite: "Checkout",
    testName: "Payment",
    status: "PASS",
    browser: "Chrome",
    duration: 200
  },
  {
    suite: "Auth",
    testName: "Logout",
    status: "PASS",
    browser: "Chrome",
    duration: 100
  }
];

type exeStatObj = {
    totalTests:number,
    pass:number,
    fail:number,
    totalDuration:number,
    browsers: Set<string>
}

let mapEleven = new Map<string,exeStatObj>(); 

for(let {suite,status,browser,duration} of executions){
    let exeStatData = mapEleven.get(suite) ?? {
        totalTests:0,
        pass:0,
        fail:0,
        totalDuration:0,
        browsers: new Set(),
    }

    exeStatData.totalTests++;
    if(status === "PASS"){
        exeStatData.pass++;
    }else{
        exeStatData.fail++;
    }
    exeStatData.totalDuration = exeStatData.totalDuration + duration;
    exeStatData.browsers.add(browser);
    mapEleven.set(suite,exeStatData);
}
console.log(mapEleven);


// Question 2: Unique Test Names Per Browser

const executionTwo = [
  { browser: "Chrome", testName: "Login" },
  { browser: "Chrome", testName: "Logout" },
  { browser: "Chrome", testName: "Login" },
  { browser: "Firefox", testName: "Login" },
  { browser: "Firefox", testName: "Payment" }
];

let exeMapTwo = new Map<string,Set<string>>();

for(let {browser,testName} of executionTwo){
    let set = new Set<string>();
    let browSet = (exeMapTwo.get(browser) ?? set);
    exeMapTwo.set(browser, browSet.add(testName) )
}
console.log(exeMapTwo);

// Question 3: Find Flaky Tests

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

// Question 4: Browser Performance Report

const executionsFour = [
  { browser: "Chrome", duration: 100 },
  { browser: "Chrome", duration: 200 },
  { browser: "Firefox", duration: 300 },
  { browser: "Firefox", duration: 100 }
];

type performObj = {
    totalRuns:number,
    totalDuration:number,
    avgDuration:number
}

let mapExeFour = new Map<string,performObj>();

for(let {browser,duration} of executionsFour){
    let exeData = mapExeFour.get(browser) ?? {
        totalDuration:0,
        totalRuns:0,
        avgDuration:0
    }
    exeData.totalRuns++;
    exeData.totalDuration = exeData.totalDuration + duration;
    exeData.avgDuration = exeData.totalDuration/exeData.totalRuns
    mapExeFour.set(browser,exeData);
}
console.log(mapExeFour);

//Question 5: Build Defect Summary

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

// Question 6: Detect Cross-Browser Tests

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




