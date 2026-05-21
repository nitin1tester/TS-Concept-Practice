
function launchBrowser(name:string) : boolean{
    switch (name.trim().toLowerCase()) {
        case 'chrome':
            console.log(`${name} is launched`);
            return true;
        case 'firefox':
            console.log(`${name} is launched`);
            return true;
        case 'safari':
            console.log(`${name} is launched`);
            return true;
    
        default: console.log(`${name} is not a valid browser`);
            return false;
    }
};

launchBrowser('fireFox');
launchBrowser('ie');


// Return promise 
function getNumber() : Promise<number>{
    return Promise.resolve(100);
};

getNumber().then((result)=>{
    console.log(result);
});


function getTrainerName():Promise<string>{
    return Promise.resolve("Nitin");
}
getTrainerName().then((result)=>{
    console.log(result);
})


// 
type userType = {name:string,age:number} ;
function getUserData() : Promise<userType>{
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        let user={
            name:"shivansh",
            age:1
        };
        resolve(user);
     },3000);   
    })
};

// // this will return promise
// let myOne =  getUserData().then((myUser)=>{
//     // console.log(myUser);
//     return myUser;
// })

// call Using Async function

async function getMyUserData() {
    let myUsr = await getUserData();
    console.log(myUsr.name);
    console.log(myUsr);
    return myUsr;
}
getMyUserData();


// PW example

// pw internal method
function click(element : string):Promise<void>{
    console.log('Click on',element);
    return Promise.resolve();
};

// our genric Elementutils
async function doClick(element:string):Promise<void> {
    await click(element);
};

// in test
doClick("loginBtn");
