import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Comment } from './comment.model'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  readonly baseURL = 'http://localhost:26561/api/Comment';

  constructor(private httpClient: HttpClient) { }

  createComment(id:Guid,comment:Comment)
  {
    const body = { text: comment.text, articleId: id };
    return this.httpClient.post(this.baseURL + '/CreateComment/' + id, body);
  }
}
