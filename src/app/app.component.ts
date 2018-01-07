import { Component } from '@angular/core'
import { NewsService } from '../services/news.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/startWith'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  news$: Observable<any[]>
  constructor(private newsService: NewsService) {
    this.news$ = this.newsService
      .findAll()
      .map(data => data.results)
      .map(results => {
        return results.map(result => {
          return {
            ...result,
            summary:
              result.summary.length > 40
                ? result.summary.slice(0, 40) + '...'
                : result.summary
          }
        })
      })
      .do(e => {
        console.log(e)
      })
      .startWith([])
  }
  data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ]
}
