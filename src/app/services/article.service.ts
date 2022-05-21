import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ArticleModel} from "../models/articleModel";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private url = 'https://api.spaceflightnewsapi.net/v3/'

  constructor(private httpClient: HttpClient) {}

  getArticles():Observable<ArticleModel[]> {
    return this.httpClient.get<ArticleModel[]>(this.url + 'blogs?_limit=75');
  }

  getArticleById(id: string):Observable<ArticleModel> {
    return this.httpClient.get<ArticleModel>(this.url + 'blogs/' + id  + '/?_limit=25');
  }

  findArticlesByNameAndContent(title: string, summary: string):Observable<ArticleModel[]> {
    return this.httpClient.get<ArticleModel[]>(this.url + 'blogs?_limit=75')
      .pipe(map(articles =>
        articles.filter(article => article.title.includes(title) || article.summary.includes(summary))));
  }

}
