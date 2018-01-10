import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import {
  FetchBlogParams,
  Blog,
  FetchBlogsResp
} from '../models/blog.model'

@Injectable()
export class BlogService {
  private static ORDER_FIELD = '-releaseAt'
  private static URL = 'Blog'
  constructor(private http: HttpClient) {}

  fetchBlogs(
    params: FetchBlogParams = { skip: 0, limit: 10 }
  ): Observable<FetchBlogsResp> {
    return this.http
      .get(BlogService.URL, {
        params: {
          order: BlogService.ORDER_FIELD,
          limit: String(params.limit),
          skip: String(params.skip),
          count: '1'
        }
      })
      .map(data => data as FetchBlogsResp)
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
}
