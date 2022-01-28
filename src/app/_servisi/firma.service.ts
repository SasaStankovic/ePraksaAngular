import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirmaService {

  constructor(private http:HttpClient) { }

  getAplikacije11(id:string)
  {
    // return this.http.post<any>("http://localhost:3000/prijave-na-konkurs",id);
    return this.http.get("http://localhost:3000/prijave-na-konkurs-11");
  }

  getAplikacije12(id:string):Observable<Object>
  {
    // return this.http.post<any>("http://localhost:3000/prijave-na-konkurs",id);
    return this.http.get("http://localhost:3000/prijave-na-konkurs-12");
  }

  sendRazlogOdbijanja(razlog:any){
    return this.http.post<any>("http://localhost:3000/odbijenica",razlog);
  }
  
}
