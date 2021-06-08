import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service'
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styles: [
  ]
})

export class UserShowComponent implements OnInit {
  
  users: any = [];



  constructor(private formbulider: FormBuilder, public userService: UserService,private http: HttpClient) {}

  ngOnInit(){
    
    this.fetchUsers()
    

  }
  async fetchUsers() {
    let users = this.userService.getUsers();
    
    let dataList = await users.toPromise();

    this.users = dataList;
    
  }  
  
} 
