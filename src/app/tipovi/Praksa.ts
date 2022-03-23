import { Company } from "./company";
import { Mentor } from "./mentor";

export class Praksa {
    internshipId!:number;
    title!:string;
    companyId!: number;
    courses!:Array<string>;
    cycles!:Array<string>;
    city!:string
    description!:string;
    details!:string;
    endDate!: string|undefined;
    internshipField!:string;
    internshipType!:string;//TODO zamjeniti sa enum tipomn
    link!:string;
    mentorId!:number;
    requiredCV!:boolean;
    requiredLetter!: boolean;
    schedule!:string;
    startDate!:string|undefined;
    submissionDue!:string|undefined;
    workHours!:number;
    years!:number[];
    company!:Company;
    mentor!:Mentor;
    isPublished!:boolean;
    isAccepted!:boolean;
}
