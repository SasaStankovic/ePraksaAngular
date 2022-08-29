import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { NavMeniItem } from '../_tipovi/NavMeniItem';

@Injectable({
  providedIn: 'root'
})
export class NavMeniService {

  private defaultNavMeni: NavMeniItem = {
    profilePath: "",
    items: [{ name: "Prijavi se", navigate: "prijava" }],
    loggedIn: false
  };

  private itemsSubject$: BehaviorSubject<NavMeniItem> = new BehaviorSubject(this.defaultNavMeni);
  items$: Observable<NavMeniItem> = this.itemsSubject$.asObservable();

  setItems(navMeniItem: NavMeniItem): void {
    this.itemsSubject$.next(navMeniItem);
  }

  resetNavMeni(): void {
    this.itemsSubject$.next(this.defaultNavMeni);
  }
}
