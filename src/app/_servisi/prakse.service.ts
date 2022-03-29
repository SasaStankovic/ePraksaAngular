import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Praksa } from '../tipovi/Praksa';
import { Student } from '../tipovi/Student';

@Injectable({
  providedIn: 'root'
})
export class PrakseService {

  defaultHeaders: HttpHeaders = new HttpHeaders();

  constructor(private httpPrakse: HttpClient) { 
    this.defaultHeaders.set('Accept','application/json');
    this.defaultHeaders.set('Content-Type','application/json');
    this.defaultHeaders.set('Authorization','Bearer '+localStorage.getItem('token'));
  }

  getPrakse(){
   return this.httpPrakse.get("http://localhost:8080/internships");
  }

  getZahtjeviZaPrakse(){
    return this.httpPrakse.get("http://localhost:8080/internships?isPublished=false&type=STRUCNA");
  }

  postInternShip(obj:any)
  {
    return this.httpPrakse.post<any>("http://localhost:8080/internships", obj,{

    });
  }

  accetpInternship(id:string){
    return this.httpPrakse.put("http://localhost:8080/internships/"+id+"/acceptance/true",{});
  }

  getInternshipByMentorId(id:number){
    return this.httpPrakse.get<Praksa[]>("http://localhost:8080/internships?mentorId="+id);
  }

  getInternshipById(id:number){
    return this.httpPrakse.get<Praksa>("http://localhost:8080/internships/"+id);
  }
  
  getStudentsOnInternship(id:number){
    return this.httpPrakse.get<Student[]>("http://localhost:8080/internships/"+id+"/students");
  }

  submitApplication(application:any){
    return this.httpPrakse.post<any>("http://localhost:8080/applications",application);
  }

  startInternship(id:number){
    return this.httpPrakse.put("http://localhost:8080/internships/"+id+"/activate",{});
  }

  closeInternship(id:number){
    return this.httpPrakse.put("http://localhost:8080/internships/"+id+"/true",{});
  }

  getInternshipByCompany(companyId:number,isPublished:boolean){
    return this.httpPrakse.get<Praksa[]>("http://localhost:8080/internships?companyId="+companyId+"&isPublished="+isPublished);
  }

}
