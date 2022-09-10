import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { NavMeniItem } from '../_tipovi/NavMeniItem';

@Injectable({
  providedIn: 'root'
})
export class NavMeniService {

  private defaultNavMeni: NavMeniItem = {
    profilePath: "",
    items: [{ name: "Prijava", navigate: "prijava" }],
    loggedIn: false
  };

  private itemsSubject$: BehaviorSubject<NavMeniItem> = new BehaviorSubject(this.defaultNavMeni);
  items$: Observable<NavMeniItem> = this.itemsSubject$.asObservable();

  constructor() {
    const previousNavMeni = localStorage.getItem("navMeni");
    if (previousNavMeni) this.itemsSubject$.next(JSON.parse(previousNavMeni));
  }

  setItems(navMeniItem: NavMeniItem): void {
    this.itemsSubject$.next(navMeniItem);
    localStorage.setItem("navMeni", JSON.stringify(navMeniItem));
  }

  resetNavMeni(): void {
    this.itemsSubject$.next(this.defaultNavMeni);
    localStorage.removeItem("navMeni");
  }
}
