import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mentor } from '../_tipovi/mentor';
import { MentorReport } from '../_tipovi/mentor-report';

@Injectable({
  providedIn: 'root'
})
export class MentorReportService {

  constructor(public http:HttpClient) { }

  public getMentorReport(internshipId:number,studentId:number){
    return this.http.get<MentorReport>("http://localhost:8080/internships/"+internshipId+"/"+studentId+"/report");
  }

  public postMentorReport(internshipId:number,studentId:number,data:any){
    return this.http.put<MentorReport>("http://localhost:8080/internships/"+internshipId+"/"+studentId+"/report",data);
  }

  public getQuestions(){
    return this.http.get<any>("http://localhost:8080/internships/questions");
  }

  public getOneMentor(id:number){
    return this.http.get<Mentor>("http://localhost:8080/mentors/"+id);
  }

  public gerMentorReportByStydentId(studentId:number){
    return this.http.get<MentorReport>("http://localhost:8080/internships/"+studentId+"/latestReport");
  }

}
