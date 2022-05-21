import { Component, OnInit } from '@angular/core';
import {ArticleModel} from "../../models/articleModel";
import {ArticleService} from "../../services/article.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-articles-details',
  templateUrl: './articles-details.component.html',
  styleUrls: ['./articles-details.component.scss']
})
export class ArticlesDetailsComponent implements OnInit {

  fullArticle: ArticleModel;

  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.articleService.getArticleById(params['id']).subscribe(value => this.fullArticle = value);
    })
  }

  backToHomePage() {
    history.back();
  }

}
