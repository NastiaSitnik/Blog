import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Roles, User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service'
import{FormBuilder,FormGroup} from '@angular/forms'
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: [
  ]
})
export class UserFormComponent implements OnInit {
  user: User = new User(); // данные вводимого пользователя
  form: FormGroup;
  receivedUser: User | undefined; // полученный пользователь
  done: boolean = false;
  token: string | any = localStorage.getItem("jwt");
  helper = new JwtHelperService();
  decodedToken = this.helper.decodeToken(this.token);
  isAdministrator: boolean;
  constructor(public service:UserService) { }

  ngOnInit(): void {

  }   

  public AddUser(user : User)
  {
    if (user.role == null)
      user.role = Roles.User;
    this.service.postUser(user).subscribe((data: any) => { this.receivedUser = data; this.done = true; }, err => { console.log(err); });
  }
  isUserAuthenticated()
  {
    if (this.token) {
      return true;
    }
    else {
      return false;
    }
  }
  isAdmin()
  {
    let decodedRole = this.decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    if (decodedRole == 'Admin')
      this.isAdministrator = true;
    else
      this.isAdministrator = false;

  }
}