import { Comment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
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
  constructor(public service: ArticleService) { }

  ngOnInit(): void {
    this.service.getArticles().subscribe((data: Article[]) => this.articles = data);
    //console.log(this.articles[0] + "sfsdfdsfds");
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
