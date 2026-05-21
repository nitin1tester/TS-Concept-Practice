
import { BROWSER,ENV } from "./033enum.js";

let browser = BROWSER.CHROME;
switch (browser.trim().toLowerCase()) {
    case 'chrome':
        console.log("launch chrome");
        break;

    default: console.log("enter valid browser " );
        break;
}