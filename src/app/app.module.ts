import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { NgZorroAntdModule } from 'ng-zorro-antd'

import { InfiniteScrollModule } from 'ngx-infinite-scroll'

import { NewsService } from '../services/news.service'
import { MomentPipe } from '../pipes/moment.pipe'


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    MomentPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
