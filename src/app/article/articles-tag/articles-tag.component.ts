import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Article } from 'src/app/shared/article.model';
import { ArticleService } from 'src/app/shared/article.service';

@Component({
  selector: 'app-articles-tag',
  templateUrl: './articles-tag.component.html',
  styleUrls: ['./articles-tag.component.css']
})
export class ArticlesTagComponent implements OnInit {

  articles: Article[] = [];
  id: Guid;
  constructor(private route: ActivatedRoute,public service: ArticleService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getArticlesByTag(this.id).subscribe((data: Article[]) => this.articles = data);
  }
  Reload()
  {
    this.id = this.route.snapshot.params['id'];
    this.service.getArticlesByTag(this.id).subscribe((data: Article[]) => this.articles = data);
  }
}
