export class Praksa {
    companyId!: number;
    courses!:Array<string>;
    cycles!:Array<string>;
    description!:string;
    details!:string;
    endDate!: string;
    internshipField!:string;
    internshipType!:string;//TODO zamjeniti sa enum tipomn
    link!:string;
    mentorId!:number;
    requiredCV!:boolean;
    requiredLetter!: boolean;
    schedule!:string;
    startDate!:string;
    submissionDue!:string;
    workHours!:number;
    year!:number;
}
