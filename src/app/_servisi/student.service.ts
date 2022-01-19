import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpProfilData: HttpClient) { }

  url="http://localhost:3000/student";

  getProfileData(){
    return this.httpProfilData.get(this.url);
  }

  getPraktikanti(){
    return this.httpProfilData.get("http://localhost:3000/praktikanti");
  }
}
