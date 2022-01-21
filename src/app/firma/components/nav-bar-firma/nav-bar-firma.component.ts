import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-firma',
  templateUrl: './nav-bar-firma.component.html',
  styleUrls: ['./nav-bar-firma.component.scss']
})
export class NavBarFirmaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public profilDropdown() {

    var x = document.getElementById("dropdown-content-klasa-ID");
    var btn = document.getElementById("dropbtn-ID");

    if (x?.style.display === "block") {
      x.style.display = "none"

      if (btn !== null)
        btn.style.borderRadius = "30px";
    }

    else {
      if (x !== null) {
        x.style.display = "block";
        if (btn !== null)
          btn.style.borderRadius = "20px 20px 0 0";
      }
    }
  }

  profilDropdown2(){
    var x = document.getElementById("dropdown-content-klasa-ID2");
    var btn = document.getElementById("dropbtn-ID2");

    if (x?.style.display === "block") {
      x.style.display = "none"

      if (btn !== null)
        btn.style.borderRadius = "30px";
    }

    else {
      if (x !== null) {
        x.style.display = "block";
        if (btn !== null)
          btn.style.borderRadius = "20px 20px 0 0";
      }
    }
  }

  public myFunction() // za otvaranje nav-menija na 3 crtice
  {
    var x = document.getElementById("myTopnav");
    if (x?.className === "topnav") {
      x.className += " responsive";
    } else {
      if (x !== null)
        x.className = "topnav";
    }
  }
  public logOut() {
    localStorage.removeItem('user');
    this.router.navigate(['welcome']);
  }

  @HostListener('window:mouseup', ['$event'])
  mouseUp(event:any) { 
    let dugme1 = document.getElementById("dropbtn-ID");
    let dugme2 = document.getElementById("dropbtn-ID2");

    let x1 = document.getElementById("dropdown-content-klasa-ID");
    let x2 = document.getElementById("dropdown-content-klasa-ID2");

    if (!dugme1?.contains(event.target)) {
      if(x1!==null)
      {
        x1.style.display = 'none';
        if(dugme1 !==null)
          dugme1.style.borderRadius="25px";
      }
    }

    if (!dugme2?.contains(event.target)) {
      if(x2!==null)
      {
        x2.style.display = 'none';
        if(dugme2 !==null)
          dugme2.style.borderRadius="25px";
      }
    }
  }

}
