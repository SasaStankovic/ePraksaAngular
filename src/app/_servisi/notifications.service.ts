import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http:HttpClient) { }

  public getNotifications(userId:number){
    return this.http.get<any>("http://localhost:8080/notifications/user/"+userId);
  }

  public pathchNotification(notifyId:number){
    return this.http.patch("http://localhost:8080/notifications/"+notifyId,{});
  }

}
