import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [
  ]
})
export class NavComponent implements OnInit {

  token: string | any = localStorage.getItem("jwt");
  helper = new JwtHelperService();
  decodedToken = this.helper.decodeToken(this.token);
  isAdministrator: boolean;
  name: string;
  surname: string;
  constructor() { }

  ngOnInit(): void {

  }
  isUserAuthenticated()
  {
    const token: string | any = localStorage.getItem("jwt");
    if (token) {
      const token: string | any = localStorage.getItem("jwt");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
      this.name = decodedToken['Name'];
      this.surname = decodedToken['Surname']
      return true;
    }
    else {
      return false;
    }
  }

  isAdmin()
  {
    const token: string | any = localStorage.getItem("jwt");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    let decodedRole = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    if (decodedRole == null)
      return false;
    if (decodedRole == 'Admin')
      return true;
    else
      return false;
  }

  logOut()
  {
    localStorage.removeItem("jwt");
  }
}
