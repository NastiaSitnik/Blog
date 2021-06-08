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

  constructor(){}
  ngOnInit(): void {
    
  }


}