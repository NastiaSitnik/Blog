import jwt_decode from "jwt-decode";
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Guid } from "guid-typescript";
import { FormGroup } from "@angular/forms";
import { Article } from "src/app/shared/article.model";
import { ArticleService } from "src/app/shared/article.service";
import { Tag } from "src/app/shared/tag.model";

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {

  constructor(public service:ArticleService) { }
  
  article: Article = new Article();

  token: string | any = localStorage.getItem("jwt");

  form: FormGroup;

  tagsText: string;

  helper = new JwtHelperService();

  receivedArticle: Article | undefined; // полученный пользователь

  done: boolean = false;

  userId: Guid;



  decodedToken = this.helper.decodeToken(this.token);
  // getDecodedAccessToken(token: string): any {
  //   try{
  //       return jwt_decode(token);
  //   }
  //   catch(Error){
  //       return null;
  //   }
  // }

  ngOnInit(): void {
    this.tagsText = "";
//     var str = "Apples#are#round#and#apples#are#juicy."; 
// var splitted = str.split("#"); 
//console.log(splitted)
    // console.log(typeof (Guid.parse(this.decodedToken.sub)));
    console.log(this.userId);
  }
  public AddArticlee(article:Article)
  {
    this.userId = Guid.parse(this.decodedToken.sub);
    article.userId = this.userId;
    var str = this.tagsText;
    // this.article.tags = [];
    //var splitted = str.split("#");
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
    let yyy = this.service.AddArticle(article);
    

    let uuu = yyy.subscribe((data: any) => {
      this.receivedArticle = data; this.done = true; window.location.reload();
    }, err => { console.log(err); })
    
    

  }
}