import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [
  ]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isUserAuthenticated()
  {
    const token: string | any = localStorage.getItem("jwt");
    if (token) {
      return true;
    }
    else {
      return false;
    }
  }
  logOut()
  {
    localStorage.removeItem("jwt");
  }
}
