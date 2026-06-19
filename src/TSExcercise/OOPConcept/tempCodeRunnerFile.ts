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