import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import { Store } from '@ngrx/store'
import {
  State,
  getArticles,
  getArticleTotalCount,
  hasMoreArticle,
  getFetchMoreLoading,
} from './reducers'
import { ArticleService } from '../services/article.service'
import { DestroyService } from '../services/destroy.service'
import { Article } from '../models/article.model'

import {
  FetchArticlesAction,
  FetchMoreArticlesAction
} from './actions/app.action'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DestroyService]
})
export class AppComponent implements OnInit {
  news$: Observable<Article[]>
  showEnd$: Observable<boolean>
  loading$: Observable<boolean>

  toFetchMoreSub: Subject<void> = new Subject<void>()
  constructor(
    private newsService: ArticleService,
    private destroyService: DestroyService,
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.initDataSource()
    this.initDispatch()
    this.initSubscriber()
  }

  onScroll() {
    this.toFetchMoreSub.next()
  }

  private initDataSource() {
    this.news$ = this.store.select(getArticles)
    this.showEnd$ = this.store.select(hasMoreArticle).skip(1).startWith(true).map(e => !e).do(e => console.log(e))
    this.loading$ = this.store.select(getFetchMoreLoading)
  }

  private initDispatch() {
    this.store.dispatch(new FetchArticlesAction())
  }

  private initSubscriber() {
    this.toFetchMoreSub
      .asObservable()
      .withLatestFrom(
        this.store.select(hasMoreArticle),
        (_, hasMore) => hasMore
      )
      .filter(hasMore => hasMore)
      .takeUntil(this.destroyService)
      .subscribe(() => {
        this.store.dispatch(new FetchMoreArticlesAction())
      })
  }
}
