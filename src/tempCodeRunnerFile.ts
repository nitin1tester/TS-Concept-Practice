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