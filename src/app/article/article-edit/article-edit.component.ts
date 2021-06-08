import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Guid } from 'guid-typescript';
import { Article } from 'src/app/shared/article.model';
import { ArticleService } from 'src/app/shared/article.service';
import { Tag } from 'src/app/shared/tag.model';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, public service: ArticleService) { }

  article: Article = new Article();
  token: string | any = localStorage.getItem("jwt");
  form: FormGroup;
  tagsText: string;
  helper = new JwtHelperService();
  receivedArticle: Article | undefined; // полученный пользователь
  done: boolean = false;
  userId: Guid;
  id: Guid;
  isAdmin: boolean;


isUserRoleAdmin()
  {
    let decodedRole = this.decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    if (decodedRole == 'Admin')
      this.isAdmin = true;
    else
      this.isAdmin = false;

  }

  decodedToken = this.helper.decodeToken(this.token);


  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']
    this.tagsText = "";
    console.log(this.userId);
  }

  editArticle(article: Article)
  {
    this.userId = Guid.parse(this.decodedToken.sub);
    article.userId = this.userId;
    article.id = this.id;
    var str = this.tagsText;
    var splitted = str.split(new RegExp('\#', 'g'));

    let listTmp: Tag[] = [];
    
    splitted.forEach( function(item, index) {
      if (item != undefined && item != null && item != "") {
        let tagTmp: Tag = new Tag();

        tagTmp.text = "#" + item;
        listTmp.push(tagTmp);
        
      }
    });
    
    article.tags = listTmp;

    this.service.EditArticle(article).subscribe((data: any) => {
      this.receivedArticle = data; this.done = true; window.location.reload();
    }, err => { console.log(err); });
  }
}
