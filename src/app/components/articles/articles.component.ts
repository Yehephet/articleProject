import { Component, OnInit } from '@angular/core';
import {ArticleModel} from "../../models/articleModel";
import {ArticleService} from "../../services/article.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: ArticleModel[] = [];
  article = new FormControl('');
  dateToFormat = new Date();

  searchArticlesForm: FormGroup = new FormGroup({
    article: this.article
  })

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {

    this.articleService.getArticles().subscribe(value => this.articles = value);
    this.searchArticlesForm.valueChanges.subscribe(() => {
      this.searchArticle();
    })
  }

  searchArticle() {
    this.articleService.findArticlesByNameAndContent(
      this.searchArticlesForm.value.article,
      this.searchArticlesForm.value.article)
      .subscribe(value => this.articles = value);
  }

}
