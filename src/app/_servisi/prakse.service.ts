import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrakseService {

  constructor(private httpPrakse: HttpClient) { }

  getPrakse(){
   return this.httpPrakse.get("http://localhost:3000/prakse");
  }

  getZahtjeviZaPrakse(){
    return this.httpPrakse.get("http://localhost:3000/zahtjevi-za-prakse");
  }

  postInternShip(obj:any)
  {
    return this.httpPrakse.post<any>("http://localhost:3000/zahtjevZaPraksu", obj);
  }

  approveInternship(){
    
  }
  
}
