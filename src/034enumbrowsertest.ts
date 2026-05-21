/**
 * ================================================================================
 * FILE: 034enumbrowsertest.ts - Enum Usage in Practice
 * ================================================================================
 * 
 * CONCEPT OVERVIEW:
 * Demonstrates practical usage of imported enums in control flow.
 * Shows how enums prevent typos and invalid values at compile time.
 * 
 * KEY LEARNING:
 * - Enums can be imported from other modules
 * - String enums support standard string operations (.trim(), .toLowerCase())
 * - Enums make switch statements type-safe
 * - Prevents magic strings in code
 * ================================================================================
 */

import { BROWSER,ENV } from "./033enum.js";

/**
 * USING IMPORTED ENUM:
 * Get an enum value and use it in switch statement.
 * Type-safe: Can only use valid BROWSER enum values.
 */
let browser = BROWSER.CHROME;
switch (browser.trim().toLowerCase()) {
    case 'chrome':
        console.log("launch chrome");
        break;

    default: console.log("enter valid browser " );
        break;
}