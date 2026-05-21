
// enum is collection on constants
// enum name are used in Capital letter.

export enum BROWSER{
    CHROME = 'chrome',
    FIREFOX = 'firefix',
    SAFARI = 'safari',
    EDGE = 'edge'
} 

enum ENV{
    QA = "QA",
    STAGE = "stage",
    PROD = "prod"
}


console.log(BROWSER.CHROME);
console.log(BROWSER.FIREFOX);
console.log(BROWSER.SAFARI);
console.log(BROWSER.EDGE);

export{ENV}
