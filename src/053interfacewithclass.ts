/**
 * interface using class
 *  100% abstraction using interface. as there is no implimentation in interface.
 * 
 * C-C---> extends
 * C-I---> implements
 * I-I---> extends.
 */

interface UNHC{
    minFee():void;
}

interface WHO extends UNHC{
    covid():void;
}

interface USMedical extends WHO {
    physio():void;
    cardio():void;
    emergency():void;
}

interface UKMedical extends WHO {
    ENT():void;
    oncology():void;
    emergency():void;
}

interface IndiaMedical extends WHO{
    pedia():void;
    dental():void;
    emergency():void;
}


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
