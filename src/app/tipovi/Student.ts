import { Address } from "./address";
import { Email, PhoneNumber } from "./contacts";
import { CV } from "./cv";

export class Student {

    id!: number;
    birthDate!: Date;
    course!:string;
    cv!:CV;
    cycle!:string;
    faculty!:string;
    firstName!:string;
    index!:string;
    jmbg!:string;
    lastName!:string;
    year!:number;
    address!:Address;
    emails!:Email[];
    numbers!:PhoneNumber[];

    constructor() { }

}