import { Action } from '@ngrx/store'

import { Article, FetchArticlesResp } from '../../models/article.model'

export const FETCH_ARTICLES = '[App] Fetch Articles'
export const FETCH_ARTICLES_SUCCESS = '[App] Fetch Articles Success'
export const FETCH_ARTICLES_FAILURE = '[App] Fetch Articles Failure'

export const FETCH_MORE_ARTICLES = '[App] Fetch More Aticles'
export const FETCH_MORE_ARTICLES_SUCCESS = '[App] Fetch More Articles Success'
export const FETCH_MORE_ARTICLES_FAILURE = '[App] Fetch More Articles Failure'

export class FetchArticlesAction implements Action {
  readonly type = FETCH_ARTICLES
}
export class FetchArticlesSuccessAction implements Action {
  readonly type = FETCH_ARTICLES_SUCCESS
  constructor(public payload: FetchArticlesResp) {}
}
export class FetchArticlesFailureAction implements Action {
  readonly type = FETCH_ARTICLES_FAILURE
}

export class FetchMoreArticlesAction implements Action {
  readonly type = FETCH_MORE_ARTICLES
}
export class FetchMoreArticlesSuccessAction implements Action {
  readonly type = FETCH_MORE_ARTICLES_SUCCESS
  constructor(public payload: FetchArticlesResp) {}
}
export class FetchMoreArticlesFailureAction implements Action {
  readonly type = FETCH_MORE_ARTICLES_FAILURE
}

export type Actions =
  | FetchArticlesAction
  | FetchArticlesSuccessAction
  | FetchArticlesFailureAction
  | FetchMoreArticlesAction
  | FetchMoreArticlesSuccessAction
  | FetchMoreArticlesFailureAction
