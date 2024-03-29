import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from 'src/app/models/article';
import { Router, ActivatedRoute, Params, RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  public title: string;
  public contador:string;
  public articles: Article[];

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.title = 'Ultimos Articulos';
  }

  ngOnInit() {
    this._articleService.getArticles(true).subscribe(
      response => {
        if(response.articles){
          this.articles = response.articles;
          
        } else {

        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
