import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Praksa } from '../_tipovi/Praksa';
import { Student } from '../_tipovi/Student';
import { BehaviorSubject } from 'rxjs';
import { InternshipStatus } from '../_tipovi/internshipStatus';
import { InternshipType } from '../_tipovi/internship-type';

@Injectable({
  providedIn: 'root'
})
export class PrakseService {

  static rootEndpint = "http://localhost:8080/internships"

  private internshipSource = new BehaviorSubject(new Praksa());
  currentInternshipStatus = this.internshipSource.asObservable();


  defaultHeaders: HttpHeaders = new HttpHeaders();

  constructor(private httpPrakse: HttpClient) {
    this.defaultHeaders.set('Accept', 'application/json');
    this.defaultHeaders.set('Content-Type', 'application/json');
    this.defaultHeaders.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }

  getInternshipsByIdAndStatus(comapnyId: number, status: string) {
    return this.httpPrakse.get<Praksa[]>(PrakseService.rootEndpint + '?companyId=' + comapnyId + '&status=' + status.toUpperCase());
  }

  setInternship(data: Praksa) {
    this.internshipSource.next(data);
  }

  getPrakse() {
    return this.httpPrakse.get<Praksa[]>("http://localhost:8080/internships?status=PUBLISHED");
  }

  getPrakseByStatusAndType(status: InternshipStatus, type: InternshipType) {
    return this.httpPrakse.get<Praksa[]>("http://localhost:8080/internships?status=" + status + "&type=" + type);
  }

  getInternshipRequests() {
    return this.httpPrakse.get<Praksa[]>(PrakseService.rootEndpint + "?status=PENDING&type=STRUCNA");
  }


  postInternShip(obj: any) {
    return this.httpPrakse.post<any>("http://localhost:8080/internships", obj, {});
  }

  accetpInternship(id: number, status = true, data: any = {}) {
    return this.httpPrakse.put(PrakseService.rootEndpint + '/' + id + "/accept/" + status, data);
  }

  getInternshipByMentorId(id: number, status: InternshipStatus) {
    return this.httpPrakse.get<Praksa[]>(PrakseService.rootEndpint + "?mentorId=" + id + '&status=' + status);
  }

  getInternshipById(id: number) {
    return this.httpPrakse.get<Praksa>("http://localhost:8080/internships/" + id);
  }

  getStudentsOnInternship(id: number) {
    return this.httpPrakse.get<Student[]>("http://localhost:8080/internships/" + id + "/students");
  }

  submitApplication(application: any) {
    return this.httpPrakse.post<any>("http://localhost:8080/applications", application);
  }

  startInternship(id: number) {
    return this.httpPrakse.put("http://localhost:8080/internships/" + id + "/activate", {});
  }

  closeInternship(id: number) {
    return this.httpPrakse.put("http://localhost:8080/internships/" + id + "/finish", {});
  }

  editInternship(id: number, data: Praksa) {
    return this.httpPrakse.put<Praksa>("http://localhost:8080/internships/10", data);
  }

}
