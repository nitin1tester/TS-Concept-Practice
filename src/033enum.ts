
/**
 * ================================================================================
 * FILE: 033enum.ts - Enumerations
 * ================================================================================
 * 
 * CONCEPT OVERVIEW:
 * Enums are a collection of named constants. They provide a way to define a fixed
 * set of values that a variable can hold, improving code readability and type safety.
 * 
 * KEY CONCEPTS:
 * - Enum values are predefined constants (string or numeric)
 * - Enum names follow UPPERCASE_WITH_UNDERSCORES convention
 * - Prevents invalid values and typos
 * - Makes code self-documenting
 * - Can be exported for use in other modules
 * 
 * BENEFITS:
 * 1. Type Safety: Can only use defined enum values
 * 2. Readability: Clear intent with meaningful names
 * 3. Maintainability: Centralized value definitions
 * 4. IDE Support: Autocomplete and refactoring tools
 * ================================================================================
 */

/**
 * ENUM DEFINITION WITH STRING VALUES:
 * Defines a fixed set of browser options.
 * String enums are more readable than numeric enums.
 * Can be exported for use in other modules.
 */
export enum BROWSER{
    CHROME = 'chrome',
    FIREFOX = 'firefix',
    SAFARI = 'safari',
    EDGE = 'edge'
} 

/**
 * ENUM FOR ENVIRONMENT CONFIGURATION:
 * Demonstrates multiple enum use cases in the same file.
 * Common pattern for QA testing frameworks.
 */
enum ENV{
    QA = "QA",
    STAGE = "stage",
    PROD = "prod"
}


/**
 * ACCESSING ENUM VALUES:
 * Use dot notation to access enum constants.
 * Values are the actual strings, not the enum names.
 */
console.log(BROWSER.CHROME);
console.log(BROWSER.FIREFOX);
console.log(BROWSER.SAFARI);
console.log(BROWSER.EDGE);

export{ENV}
