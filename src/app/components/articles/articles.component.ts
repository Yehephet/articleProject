import { Component, OnInit } from '@angular/core';
import {ArticleModel} from "../../models/articleModel";
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: ArticleModel[];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(value => this.articles = value);
  }

}
