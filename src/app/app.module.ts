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
import { JwtModule } from '@auth0/angular-jwt';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Guid } from "guid-typescript";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { AuthGuard } from './guards/auth-guard.service';
import { NavComponent } from './nav/nav.component';
import { ArticleComponent } from './article/article.component';
import { TagComponent } from './tag/tag.component';
import { TagService } from './shared/tag.service';
import { CommentService } from './shared/comment.service';
import { ArticleService } from './shared/article.service';
import { ArticlesShowComponent } from './article/articles-show/articles-show.component';
import { ArticleShowComponent } from './article/article-show/article-show.component';
import { ArticlesTagComponent } from './article/articles-tag/articles-tag.component';
import { ArticleCreateComponent } from './article/article-create/article-create.component';
import { ErrorComponent } from './error/error.component';
import { ArticleEditComponent } from './article/article-edit/article-edit.component';

export function tokenGetter()
{
  return localStorage.getItem("jwt");
}

const itemRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'form', component: UserFormComponent},
    { path: 'show', component: UserShowComponent,canActivate: [AuthGuard]},
    { path: '', component: ArticlesShowComponent },
    { path: 'article/:id', component: ArticleShowComponent },
   { path:  'tag/:id', component: ArticlesTagComponent },
  { path: 'create', component: ArticleCreateComponent },
  { path: 'edit/:id', component: ArticleEditComponent },
  {path:'nav',component: NavComponent},
  {path:'**',component:ErrorComponent}
];
@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, ReactiveFormsModule, RouterModule.forRoot(itemRoutes),
    
    JwtModule.forRoot({config:{tokenGetter:tokenGetter,allowedDomains:["localhost:26561"]}})
  ],
  declarations: [
    AppComponent,
    UserComponent,
    UserFormComponent,
    UserShowComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    ArticleComponent,
    TagComponent,
    ArticlesShowComponent,
    ArticleShowComponent,
    ArticlesTagComponent,
    ArticleCreateComponent,
    ErrorComponent,
    ArticleEditComponent
  ],
  providers: [UserService,TagService,CommentService,ArticleService,JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
