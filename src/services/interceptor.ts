import { Injectable } from '@angular/core'
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpHeaders
} from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

const APP_ID = 'WkWMWlkKSkJEYawE2Tozvdax-gzGzoHsz'
const APP_KEY = 'B1v8Wfhh5TfcSXrCfbvo9qFq'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private url = 'https://wkwmwlkk.api.lncld.net/1.1/classes/'

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(
        req.clone({
          url: /http/.test(req.url) ? req.url : `${this.url}${req.url}`,
          headers: new HttpHeaders({
            'X-LC-Id': APP_ID,
            'X-LC-Key': APP_KEY
          })
        })
      )
  }
}

