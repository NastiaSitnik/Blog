import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserShowComponent } from './user/user-show/user-show.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserService } from './shared/user.service';
import { JwtModule } from '@auth0/angular-jwt'

import { Guid } from "guid-typescript";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';

export function tokenGetter()
{
  return localStorage.getItem("jwt");
}

const itemRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'form', component: UserFormComponent},
    { path: 'show', component: UserShowComponent}
];
@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot(itemRoutes)
    //JwtModule.forRoot({ config: {tokenGetter: tokenGetter, allowedDomains:["localhost:26561"]})
  ],
  declarations: [
    AppComponent,
    UserComponent,
    UserFormComponent,
    UserShowComponent,
    LoginComponent,
    HomeComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
