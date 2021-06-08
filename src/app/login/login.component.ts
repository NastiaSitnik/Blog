import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Router } from "@angular/router"
import {NgForm} from '@angular/forms'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;
  constructor(private router:Router,private http:HttpClient) { }

  login(form: NgForm): Observable<any>{
    const credntials = {
      email: form.value.email,
      password:form.value.password
    }
    return this.http.post('http://localhost:26561/api/Auth/login',credntials)
  }
  reboot()
  {
    window.location.reload();
  }
  l(form: NgForm)
  {
    this.login(form).subscribe(responce => {
      const token = (<any>responce).access_token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.router.navigate(["/"]);
    },err => {this.invalidLogin = true})
  }
  ngOnInit(): void {
  }
}
