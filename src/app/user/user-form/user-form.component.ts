import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service'
import{FormBuilder,FormGroup} from '@angular/forms'


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
  constructor(public service:UserService) { }

  ngOnInit(): void {
    
  }   

  public AddUser(user : User)
  {
    this.service.postUser(user).subscribe((data: any) => { this.receivedUser = data; this.done = true; }, err => { console.log(err); });
  }
}