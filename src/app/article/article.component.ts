import { Comment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Article } from '../shared/article.model';
import { ArticleService } from '../shared/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  //article: Article;
  //articles: Article[] = [];
  // constructor(public service: ArticleService) { }
  constructor(){}
  ngOnInit(): void {
    //this.service.getArticles().subscribe((data: Article[]) => this.articles = data);
  }

  // getArticle(id: Guid)
  // {
  //   this.service.getArticle(id).subscribe((data: Article) => this.article = data);
  // }

}