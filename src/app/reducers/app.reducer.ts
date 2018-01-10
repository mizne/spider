import * as fromApp from '../actions/app.action'
import { Blog } from '../../models/blog.model'
import { uniqWith, prop, eqBy } from 'ramda'

const eqByUrl = eqBy(prop('url'))
const uniqWithUrl = uniqWith(eqByUrl)

export interface State {
  articles: Blog[]
  articleTotalCount: number

  fetchMoreLoading: boolean
}

const initialState: State = {
  articles: [],
  articleTotalCount: 0,

  fetchMoreLoading: false
}

export function reducer(
  state: State = initialState,
  action: fromApp.Actions
): State {
  switch (action.type) {
    case fromApp.FETCH_BLOGS_SUCCESS:
      return {
        ...state,
        articles: action.payload.results,
        articleTotalCount: action.payload.count
      }
    case fromApp.FETCH_MORE_BLOGS:
      return {
        ...state,
        fetchMoreLoading: true
      }
    case fromApp.FETCH_MORE_BLOGS_SUCCESS:
      return {
        ...state,
        articles: uniqWithUrl(
          state.articles.concat(action.payload.results)
        ) as Blog[],
        articleTotalCount: action.payload.count,
        fetchMoreLoading: false
      }
    case fromApp.FETCH_MORE_BLOGS_FAILURE:
      return {
        ...state,
        fetchMoreLoading: false
      }
    default:
      return state
  }
}

export const getArticles = (state: State) => state.articles
export const getArticleTotalCount = (state: State) => state.articleTotalCount
export const getSkipAndLimit = (state: State) => ({
  skip: state.articles.length,
  limit: 10
})
export const hasMoreArticle = (state: State) =>
  state.articleTotalCount > state.articles.length
export const getFetchMoreLoading = (state: State) => state.fetchMoreLoading
