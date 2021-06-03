import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Article } from 'src/app/shared/article.model';
import { ArticleService } from 'src/app/shared/article.service';


@Component({
  selector: 'app-article-show',
  templateUrl: './article-show.component.html',
  styleUrls: ['./article-show.component.css']
})
export class ArticleShowComponent implements OnInit {
  readonly baseURL = 'http://localhost:26561/api/Article';
  article: Article;
  id: Guid;
  constructor(private route: ActivatedRoute, private service: ArticleService,private http:HttpClient)
  {
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']
    // debugger
    // this.http.get(this.baseURL + '/' + this.id).subscribe((res:any) => {this.article = res.data})
    // console.log(this.article);
    this.service.getArticle(this.id).subscribe((data:Article) =>this.article = data)
  }

  //  getArticle(id: Guid)
  //  {
  //    this.service.getArticle(id).subscribe((data: Article) => this.article = data);
  //  }
}
