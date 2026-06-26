const executions = [
  { browser: "Chrome" },
  { browser: "Firefox" },
  { browser: "Chrome" },
  { browser: "Edge" },
  { browser: "Chrome" }
];

let mapThirteen = new Map<string,number>();

for(let {browser} of executions){
    mapThirteen.set(browser,(mapThirteen.get(browser)??0)+1);
}
console.log(mapThirteen);