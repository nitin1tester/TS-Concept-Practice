/**
 * ================================================================================
 * FILE: 053interfacewithclass.ts - Multiple Interface Implementation
 * ================================================================================
 * 
 * CONCEPT OVERVIEW:
 * Demonstrates implementing multiple interfaces in a single class.
 * Shows interface inheritance chains and polymorphism through interfaces.
 * 
 * KEY CONCEPTS:
 * - I-I (Interface-to-Interface) uses 'extends' for inheritance
 * - C-I (Class-to-Interface) uses 'implements' for implementation
 * - A class can implement multiple interfaces
 * - Interface inheritance creates hierarchies
 * - Upcasting: Child class objects referenced by parent interface type
 * 
 * RELATIONSHIP TYPES:
 * - C-C: Class extends Class (single inheritance)
 * - C-I: Class implements Interface (single or multiple)
 * - I-I: Interface extends Interface (multiple inheritance behavior)
 * 
 * 100% ABSTRACTION:
 * - Interfaces have no implementation (only declarations)
 * - Classes implement "what" interfaces define
 * - Result: Complete separation of interface from implementation
 * ================================================================================
 */

/**
 * INTERFACE HIERARCHY:
 * Demonstrates interface inheritance creating a chain of contracts.
 */

/**
 * BASE INTERFACE: UNHC
 * Top level interface with basic medical requirement.
 */
interface UNHC{
    minFee():void;
}

/**
 * EXTENDED INTERFACE: WHO extends UNHC
 * Inherits minFee() from UNHC, adds covid() method.
 */
interface WHO extends UNHC{
    covid():void;
}

/**
 * US MEDICAL: USMedical extends WHO
 * Inherits minFee() and covid() from WHO
 * Adds: physio, cardio, emergency
 */
interface USMedical extends WHO {
    physio():void;
    cardio():void;
    emergency():void;
}

/**
 * UK MEDICAL: UKMedical extends WHO
 * Inherits minFee() and covid() from WHO
 * Adds: ENT, oncology, emergency
 */
interface UKMedical extends WHO {
    ENT():void;
    oncology():void;
    emergency():void;
}

/**
 * INDIA MEDICAL: IndiaMedical extends WHO
 * Inherits minFee() and covid() from WHO
 * Adds: pedia, dental, emergency
 */
interface IndiaMedical extends WHO{
    pedia():void;
    dental():void;
    emergency():void;
}


/**
 * MULTIPLE INTERFACE IMPLEMENTATION:
 * Single class implements multiple interfaces.
 * 
 * IMPLEMENTATION RULES:
 * - Must implement ALL methods from ALL interfaces
 * - Can add additional methods not in interfaces (medicalTest)
 * - Each method must be implemented fully
 * - Can be referenced by any of the implemented interfaces (upcasting)
 */
class FortisHospital implements UKMedical, UKMedical, IndiaMedical{
    // individual method
    medicalTest():void{
        console.log("Medical test");
    }
    physio(): void {
        console.log("I am physio");
    }
    cardio(): void {
        console.log("I am cardio");
    }
    ENT(): void {
        console.log("I am ENT");
    }
    oncology(): void {
        console.log("I am oncology");
    }
    pedia(): void {
        console.log("I am pedia");
    }
    dental(): void {
        console.log("I am dental");
    }
    emergency(): void {
        console.log("I am emergency");
    }
    covid(): void {
        console.log("I am covid");
    }
    minFee(): void {
        console.log("1 Rs free");
    }
}

/**
 * DIRECT USAGE:
 * Create instance and call all available methods.
 */
let fortis:FortisHospital = new FortisHospital();
fortis.ENT();
fortis.cardio();
fortis.dental();
fortis.emergency();
fortis.medicalTest();
fortis.oncology();
fortis.physio();
fortis.pedia();
fortis.covid();
fortis.minFee();

/**
 * POLYMORPHISM THROUGH UPCASTING:
 * Reference child class object with parent interface type.
 * Can only call methods defined in that interface.
 * 
 * UPCASTING RULES:
 * - Child object can be referenced by any of its interface types
 * - Only methods from that interface are accessible
 * - Promotes loose coupling and flexibility
 */

// TopCasting : child class object can be refer by parent interface ref variable.
let usmedical:USMedical = new FortisHospital();
usmedical.cardio();
usmedical.physio();
usmedical.emergency();
usmedical.covid();

let ukmedical:UKMedical = new FortisHospital();
ukmedical.ENT();
ukmedical.emergency();
ukmedical.oncology();
ukmedical.covid();
ukmedical.minFee();
