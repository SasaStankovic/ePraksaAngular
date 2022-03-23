export class CV {
    porfolioLink!:string;
    skills!:[string];
    languages!:[string];
    hobbies!:[string];
    introduction!:string;
    workExperience!: WorkExperience[];
    projects!:Project[];
}

class WorkExperience{
    period!:string;
    company!:string;
    position!:string;
    description!:string;
}

class Project{
    period!:string;
    name!:string;
    description!:string;
    link!:string;
}