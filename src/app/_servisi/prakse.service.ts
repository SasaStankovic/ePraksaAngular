import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
   return this.httpPrakse.get("http://localhost:3000/prakse");
  }

  getZahtjeviZaPrakse(){
    return this.httpPrakse.get("http://localhost:3000/zahtjevi-za-prakse");
  }

  postInternShip(obj:any)
  {
    return this.httpPrakse.post<any>("http://localhost:8080/internships", obj,{

    });
  }

  approveInternship(){
    
  }
  
}
