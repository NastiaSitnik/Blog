import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Article } from 'src/app/shared/article.model';
import { ArticleService } from 'src/app/shared/article.service';
import { Comment } from 'src/app/shared/comment.model';
import { CommentService } from 'src/app/shared/comment.service'


@Component({
  selector: 'app-article-show',
  templateUrl: './article-show.component.html',
  styleUrls: ['./article-show.component.css']
})
export class ArticleShowComponent implements OnInit {
  readonly baseURL = 'http://localhost:26561/api/Article';
  article: Article;
  id: Guid;
  comment: Comment = new Comment();
  form: FormGroup;
  receivedComment: Comment | undefined; // полученный пользователь
  done: boolean = false;
  constructor(private route: ActivatedRoute, private service: ArticleService,private http:HttpClient,public commentService : CommentService)
  {
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']
    // debugger
    // this.http.get(this.baseURL + '/' + this.id).subscribe((res:any) => {this.article = res.data})
    // console.log(this.article);
    this.service.getArticle(this.id).subscribe((data:Article) =>this.article = data)
  }
  public AddComment(comment: Comment)
  {
    this.commentService.createComment(this.id, comment).subscribe((data: any) => { this.receivedComment = data; this.done = true; this.ngOnInit(); this.comment.text = ""}, err => { console.log(err); })
  }
  
  //  getArticle(id: Guid)
  //  {
  //    this.service.getArticle(id).subscribe((data: Article) => this.article = data);
  //  }
}
