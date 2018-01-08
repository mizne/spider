import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { FetchNewsParams, News } from '../models/news.model'

const APP_ID = 'n2WB91RtFeJWLLDJA6KPdXSe-gzGzoHsz'
const APP_KEY = 'oIIWpUWlszGyQ8lI2sJOIThe'

@Injectable()
export class NewsService {
  private url = 'https://n2wb91rt.api.lncld.net/1.1/classes/Post'
  constructor(private http: HttpClient) {}

  fetchNews(
    params: FetchNewsParams = { pageIndex: 1, pageSize: 10 }
  ): Observable<News[]> {
    const skip = String(params.pageSize * (params.pageIndex - 1))
    const limit = String(params.pageSize)
    return this.http
      .get(this.url, {
        headers: {
          'X-LC-Id': APP_ID,
          'X-LC-Key': APP_KEY
        },
        params: {
          order: '-createdAt',
          limit,
          skip
        }
      })
      .map(data => (data as any).results as News[])
      .map(results => {
        return results
          .map(result => {
            return {
              ...result,
              summary:
                result.summary.length > 100
                  ? result.summary.slice(0, 100) + '...'
                  : result.summary
            }
          })
      }) as Observable<News[]>
  }
}
