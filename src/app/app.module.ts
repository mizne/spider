import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { BlogService } from '../services/blog.service'
import { TokenInterceptor } from '../services/interceptor'
import { MomentPipe } from '../pipes/moment.pipe'

import { AppComponent } from './app.component'
import { LoadingComponent } from './components/loading.component'
import { reducers } from './reducers/index'
import { BlogEffects } from './effects/app.effects'

@NgModule({
  declarations: [AppComponent, MomentPipe, LoadingComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgZorroAntdModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([BlogEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 42
    })
  ],
  providers: [
    BlogService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
