import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application } from '../tipovi/application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  constructor(private http:HttpClient) { }

  public getApplicationsByStudentId(id:number){ 
    return this.http.get<Application[]>("http://localhost:8080/applications/student/"+id);
  }

  public getApplicationsByCompanyId(id:number){
    return this.http.get<Application[]>("http://localhost:8080/applications/"+id+"?state=PENDING");
  }

  public putApplication(internshipId:number,studentId:number, status:string,data:any = {}){
    return this.http.put<any>("http://localhost:8080/applications/"+internshipId+"/"+studentId+"/"+status.toUpperCase(),data);
  }
}
