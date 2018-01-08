import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/takeUntil'

import { NewsService } from '../services/news.service'
import { DestroyService } from '../services/destroy.service'
import { News } from '../models/news.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DestroyService]
})
export class AppComponent implements OnInit {
  news$: Observable<any[]>
  news: News[] = []
  constructor(
    private newsService: NewsService,
    private destroyService: DestroyService
  ) {}

  ngOnInit() {
    this.fetchNews()
  }

  onScroll() {
    console.log('scrolled!')
    this.fetchMoreNews()
  }

  private fetchNews() {
    this.newsService
      .fetchNews()
      .takeUntil(this.destroyService)
      .subscribe(news => {
        this.news = news
      })
  }

  private fetchMoreNews() {}
}
