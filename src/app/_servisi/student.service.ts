import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  url="http://localhost:3000/student";

  getProfileData(){
    return this.http.get(this.url);
  }

  getPraktikanti(){
    return this.http.get("http://localhost:3000/praktikanti");
  }

  getStudentById(id:string){
    return this.http.post<any>(this.url,id);
  }
}
