import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorkDiary, WorkDiaryEntry } from '../_tipovi/work-diary';

@Injectable({
  providedIn: 'root'
})
export class WorkDioryService {

  constructor(private http: HttpClient) { }

  public getWorkDiaryByStudentId(id: number) {
    return this.http.get<WorkDiary>("http://localhost:8080/workdiaries/student/" + id);
  }

  public editWorkDiaryEntry(data: WorkDiaryEntry, workDiaryId: number, entryId: number) {
    return this.http.put<WorkDiaryEntry>("http://localhost:8080/workdiaries/" + workDiaryId + "/entries/" + entryId, data, {});
  }

  public submitInput(data: WorkDiaryEntry) {
    return this.http.post<WorkDiaryEntry>("http://localhost:8080/workdiaries/entries", data);
  }

  public approveWorkDiary(status: string, workDiaryId: number) {
    return this.http.put<WorkDiary>("http://localhost:8080/workdiaries/workDiary/" + workDiaryId + "?state=" + status.toUpperCase(), {});
  }

  public getWorkDiaryByStudentAndIntern(studentId: number, internId: number) {
    return this.http.get<WorkDiary>("http://localhost:8080/workdiaries/" + studentId + "/" + internId);
  }

}
