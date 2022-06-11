import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mentor } from '../_tipovi/mentor';

@Injectable({
  providedIn: 'root'
})
export class FirmaService {

  constructor(private http:HttpClient) { }

  getMentors(id:number){
    return this.http.get<Mentor[]>("http://localhost:8080/mentors/company/"+id);
  }
  
}
