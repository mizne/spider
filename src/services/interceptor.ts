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

const APP_ID = 'n2WB91RtFeJWLLDJA6KPdXSe-gzGzoHsz'
const APP_KEY = 'oIIWpUWlszGyQ8lI2sJOIThe'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private url = 'https://n2wb91rt.api.lncld.net/1.1/classes/'

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

