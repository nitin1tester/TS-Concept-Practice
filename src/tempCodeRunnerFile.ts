const test10 = [
  { suite: 'Auth' },
  { suite: 'Checkout' },
   { suite: 'Checkout' },
    { suite: 'Checkout' },
     { suite: 'Checkout' },
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