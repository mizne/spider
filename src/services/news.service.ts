import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

const APP_ID = 'n2WB91RtFeJWLLDJA6KPdXSe-gzGzoHsz'
const APP_KEY = 'oIIWpUWlszGyQ8lI2sJOIThe'

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    return this.http.get('https://n2wb91rt.api.lncld.net/1.1/classes/Post', {
      headers: {
        'X-LC-Id': APP_ID,
        'X-LC-Key': APP_KEY
      },
      params: {
        order: '-createdAt'
      }
    })
  }
}
