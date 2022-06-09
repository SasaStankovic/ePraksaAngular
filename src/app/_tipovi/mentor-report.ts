export class MentorReport {
   reportId!:number;
   opinionJSON!:{
      mentor:string,
      numberOfDays:number,
      numberOfHours:number,
      obligations:[{descriptionOfTheObligation:string}],
      periodOfInternshipFrom:string,
      periodOfInternshipUntil:string,
   };
   questionnaireJSON!:{
         input:[answer:string, id:number, question:string],
         mentorsComment:string,
   };
}