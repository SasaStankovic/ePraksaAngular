import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../_tipovi/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getPraktikanti(){
    return this.http.get("http://localhost:8080/student/practicants");
  }

  getStudentById(id:number){
    return this.http.get<Student>("http://localhost:8080/student/"+id);
  }
}
