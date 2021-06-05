import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { CommentService } from 'src/app/shared/comment.service';
import { Comment } from 'src/app/shared/comment.model';
import { Article } from 'src/app/shared/article.model';
import { ArticleService } from 'src/app/shared/article.service';

@Component({
  selector: 'app-article-comments-edit',
  templateUrl: './article-comments-edit.component.html',
  styleUrls: ['./article-comments-edit.component.css']
})
export class ArticleCommentsEditComponent implements OnInit {

  article: Article;
  commentId: Guid;
  comment: Comment = new Comment();
  form: FormGroup;
  receivedComment: Comment | undefined; // полученный пользователь
  done: boolean = false;
  constructor(private route: ActivatedRoute,private service: ArticleService, public commentService: CommentService) { }

  ngOnInit(): void {
    this.commentId = this.route.snapshot.params['comment.id'];
    
    this.service.getArticle(this.comment.articleId).subscribe((data:Article) =>this.article = data)
  }

  public UpdateComment(comment: Comment)
  {
    this.commentService.updateComment(this.commentId,comment).subscribe((data: any) => { this.receivedComment = data; this.done = true; this.ngOnInit(); this.comment.text = ""}, err => { console.log(err); })
  }
  
  onEdit()
  {

  }
}
