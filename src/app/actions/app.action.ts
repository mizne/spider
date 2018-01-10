import { Action } from '@ngrx/store'

import { Blog, FetchBlogsResp } from '../../models/blog.model'

export const FETCH_BLOGS = '[App] Fetch Blogs'
export const FETCH_BLOGS_SUCCESS = '[App] Fetch Blogs Success'
export const FETCH_BLOGS_FAILURE = '[App] Fetch Blogs Failure'

export const FETCH_MORE_BLOGS = '[App] Fetch More Blogs'
export const FETCH_MORE_BLOGS_SUCCESS = '[App] Fetch More Blogs Success'
export const FETCH_MORE_BLOGS_FAILURE = '[App] Fetch More Blogs Failure'

export class FetchBlogsAction implements Action {
  readonly type = FETCH_BLOGS
}
export class FetchBlogsSuccessAction implements Action {
  readonly type = FETCH_BLOGS_SUCCESS
  constructor(public payload: FetchBlogsResp) {}
}
export class FetchBlogsFailureAction implements Action {
  readonly type = FETCH_BLOGS_FAILURE
}

export class FetchMoreBlogsAction implements Action {
  readonly type = FETCH_MORE_BLOGS
}
export class FetchMoreBlogsSuccessAction implements Action {
  readonly type = FETCH_MORE_BLOGS_SUCCESS
  constructor(public payload: FetchBlogsResp) {}
}
export class FetchMoreBlogsFailureAction implements Action {
  readonly type = FETCH_MORE_BLOGS_FAILURE
}

export type Actions =
  | FetchBlogsAction
  | FetchBlogsSuccessAction
  | FetchBlogsFailureAction
  | FetchMoreBlogsAction
  | FetchMoreBlogsSuccessAction
  | FetchMoreBlogsFailureAction
