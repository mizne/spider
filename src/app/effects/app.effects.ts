import { Injectable } from '@angular/core'
import { Effect, Actions } from '@ngrx/effects'
import { Observable } from 'rxjs/Observable'

import { Store } from '@ngrx/store'
import { State, getSkipAndLimit } from '../reducers'

import * as fromApp from '../actions/app.action'
import { BlogService } from '../../services/blog.service'

@Injectable()
export class BlogEffects {
  @Effect()
  fetchArticles$ = this.actions$.ofType(fromApp.FETCH_BLOGS).switchMap(() =>
    this.blogService
      .fetchBlogs()
      .map(payload => new fromApp.FetchBlogsSuccessAction(payload))
      .catch(err => Observable.of(new fromApp.FetchBlogsFailureAction()))
  )

  @Effect()
  fetchMoreArticles$ = this.actions$
    .ofType(fromApp.FETCH_MORE_BLOGS)
    .withLatestFrom(this.store.select(getSkipAndLimit), (_, params) => params)
    .switchMap(params => {
      return this.blogService
        .fetchBlogs(params)
        .map(payload => new fromApp.FetchMoreBlogsSuccessAction(payload))
        .catch(err =>
          Observable.of(new fromApp.FetchMoreBlogsFailureAction())
        )
    })

  constructor(
    private actions$: Actions,
    private blogService: BlogService,
    private store: Store<State>
  ) {}
}
