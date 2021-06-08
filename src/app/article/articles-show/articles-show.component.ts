import { Comment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Guid } from 'guid-typescript';
import { Article } from 'src/app/shared/article.model';
import { ArticleService } from 'src/app/shared/article.service';


@Component({
  selector: 'app-articles-show',
  templateUrl: './articles-show.component.html',
  styleUrls: ['./articles-show.component.css']
})
export class ArticlesShowComponent implements OnInit {

  articles: Article[] = [];
  userId: Guid;
  roleUser: string;
  token: string | any = localStorage.getItem("jwt");
  helper = new JwtHelperService();
  decodedToken = this.helper.decodeToken(this.token);
  isAdmin: boolean;
  constructor(public service: ArticleService) { }

  ngOnInit(): void {
    this.service.getArticles().subscribe((data: Article[]) => this.articles = data);
    this.isUserRoleAdmin();
  }
  isUserRoleAdmin()
  {
    let decodedRole = this.decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    if (decodedRole == 'Admin')
      this.isAdmin = true;
    else
      this.isAdmin = false;

    
  }
  isAccess(article:Article)
  {
    this.userId = Guid.parse(this.decodedToken.sub);
    if (article.userId == this.userId)
      return true;
    else
      return false;
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
  
}
