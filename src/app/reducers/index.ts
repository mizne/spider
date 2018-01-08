import { createFeatureSelector, createSelector } from '@ngrx/store'
import * as fromApp from './app.reducer'

export interface State {
  app: fromApp.State
}

export const reducers = {
  app: fromApp.reducer
}

export const getAppState = createFeatureSelector<fromApp.State>('app')
export const getArticles = createSelector(getAppState, fromApp.getArticles)
export const getArticleTotalCount = createSelector(
  getAppState,
  fromApp.getArticleTotalCount
)
export const getSkipAndLimit = createSelector(
  getAppState,
  fromApp.getSkipAndLimit
)
export const hasMoreArticle = createSelector(
  getAppState,
  fromApp.hasMoreArticle
)
export const getFetchMoreLoading = createSelector(
  getAppState,
  fromApp.getFetchMoreLoading
)
