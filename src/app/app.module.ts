import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { NgZorroAntdModule } from 'ng-zorro-antd'
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
    NgZorroAntdModule.forRoot()
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
