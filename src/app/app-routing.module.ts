import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesComponent} from "./components/articles/articles.component";
import {ArticlesDetailsComponent} from "./components/articles-details/articles-details.component";

const routes: Routes = [
  {path: '', component: ArticlesComponent},
  {path: ':id', component: ArticlesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
