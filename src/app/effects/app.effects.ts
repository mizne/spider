import { Injectable } from '@angular/core'
import { Effect, Actions } from '@ngrx/effects'
import { Observable } from 'rxjs/Observable'

import { Store } from '@ngrx/store'
import { State, getSkipAndLimit } from '../reducers'

import * as fromApp from '../actions/app.action'
import { ArticleService } from '../../services/article.service'

@Injectable()
export class ArticleEffects {
  @Effect()
  fetchArticles$ = this.actions$.ofType(fromApp.FETCH_ARTICLES).switchMap(() =>
    this.articleService
      .fetchArticles()
      .map(payload => new fromApp.FetchArticlesSuccessAction(payload))
      .catch(err => Observable.of(new fromApp.FetchArticlesFailureAction()))
  )

  @Effect()
  fetchMoreArticles$ = this.actions$
    .ofType(fromApp.FETCH_MORE_ARTICLES)
    .withLatestFrom(this.store.select(getSkipAndLimit), (_, params) => params)
    .switchMap(params => {
      return this.articleService
        .fetchArticles(params)
        .map(payload => new fromApp.FetchMoreArticlesSuccessAction(payload))
        .catch(err =>
          Observable.of(new fromApp.FetchMoreArticlesFailureAction())
        )
    })

  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
    private store: Store<State>
  ) {}
}
