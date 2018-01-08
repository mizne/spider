import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import {
  FetchArticleParams,
  Article,
  FetchArticlesResp
} from '../models/article.model'

@Injectable()
export class ArticleService {
  private url = 'Article'
  constructor(private http: HttpClient) {}

  fetchArticles(
    params: FetchArticleParams = { skip: 0, limit: 10 }
  ): Observable<FetchArticlesResp> {
    return this.http
      .get(this.url, {
        params: {
          order: '-createdAt',
          limit: String(params.limit),
          skip: String(params.skip),
          count: '1'
        }
      })
      .delay(2e3)
      .map(data => data as FetchArticlesResp)
      .map(data => {
        return {
          count: data.count,
          results: data.results.map(result => {
            return {
              ...result,
              summary:
                result.summary.length > 100
                  ? result.summary.slice(0, 100) + '...'
                  : result.summary
            }
          })
        }
      })
  }

  fetchArticlesCount() {}
}
