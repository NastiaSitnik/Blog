import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './article.model'
import { HttpClient } from '@angular/common/http'
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  readonly baseURL = 'http://localhost:26561/api/Article';
  list: Article[];
  constructor(private httpClient: HttpClient) { }

  getArticles(): Observable<Article[]>
  {
    let articles = this.httpClient.get<Article[]>(this.baseURL);
    return articles;
  }
  getArticle(articleId: Guid):Observable<Article>
  {
    //const url = '${this.baseURL}/${articleId}';
    return this.httpClient.get<Article>(this.baseURL + '/' + articleId);
  }
}
