export class WorkDiary {
    id!:number;
    createdAt!:string;
    deletedDate!:string;
    lastModifiedDate!:string;
    status!:string;
}

export class WorkDiaryEntry{
    entryId!:number;
    date!:string;
    day!:number;
    timeFrom!:string; //format hh:mm
    timeTo!:string; //format hh:mm
    input!:string; //opis obaveza studenta
}
