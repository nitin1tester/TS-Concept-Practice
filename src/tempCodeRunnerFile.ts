const executionTen = [
  {
    suite: "Auth",
    browser: "Chrome",
    status: "PASS",
    duration: 100
  },
  {
    suite: "Auth",
    browser: "Firefox",
    status: "FAIL",
    duration: 200
  },
  {
    suite: "Auth",
    browser: "Chrome",
    status: "PASS",
    duration: 150
  },
  {
    suite: "Checkout",
    browser: "Chrome",
    status: "PASS",
    duration: 300
  }
];

type finalObj = {
    total:number,
      pass: number,
      fail: number,
      avgDuration: number,
      totalduration:number,
      browsers: Set<string>
}

let mapfix = new Map<string,finalObj>();

for(let {suite,browser,status, duration} of executionTen){
    let finalData = mapfix.get(suite)??{
        total:0,
        pass: 0,
        fail: 0,
        avgDuration: 0,
        totalduration:0,
        browsers: new Set<string>()
    }
    finalData.total++;
    if (status==="PASS") {
        finalData.pass++
    }else{
        finalData.fail++
    }
    finalData.totalduration = finalData.totalduration + duration;
    finalData.avgDuration = finalData.totalduration/finalData.total;
    finalData.browsers.add(browser);
    mapfix.set(suite, finalData)
}
console.log(mapfix);