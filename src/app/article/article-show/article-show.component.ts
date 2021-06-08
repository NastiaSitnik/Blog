import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
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
  commentId: Guid;
  token: string | any = localStorage.getItem("jwt");
  helper = new JwtHelperService();
  decodedToken = this.helper.decodeToken(this.token);
  comment: Comment = new Comment();
  userId: Guid;
  form: FormGroup;
  receivedComment: Comment | undefined;
  done: boolean = false;
  d: boolean = false;
  isAdmin: boolean;
  constructor(private route: ActivatedRoute, private service: ArticleService,private http:HttpClient,public commentService : CommentService)
  {
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']
  
    this.service.getArticle(this.id).subscribe((data: Article) => this.article = data)
    this.isUserRoleAdmin();
  }

  public AddComment(comment: Comment)
  {
    this.userId = Guid.parse(this.decodedToken.sub);
    comment.userId = this.userId;
    this.commentService.createComment(this.id, comment).subscribe((data: any) => { this.receivedComment = data; this.done = true; this.ngOnInit(); this.comment.text = ""}, err => { console.log(err); })
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

isUserArticle(article:Article)
{
    this.userId = Guid.parse(this.decodedToken.sub);
    if (article.userId == this.userId)
      return true;
    else
      return false;
  }

  isUserComment(comment:Comment)
  {
    this.userId = Guid.parse(this.decodedToken.sub);
    if (comment.userId == this.userId)
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
  onEdit(id:Guid)
  {
    this.comment.id = id;
    this.userId = Guid.parse(this.decodedToken.sub);
    this.comment.userId = this.userId;
    this.commentService.updateComment(this.comment.id, this.comment).subscribe((data: any) => { this.receivedComment = data; this.done = true; this.service.getArticle(this.id).subscribe((data: Article) => this.article = data); this.comment.text = "" }, err => { console.log(err); })

  }

  onArticle()
  {  
  }

}
