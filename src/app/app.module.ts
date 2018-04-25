import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { NgxsModule } from '@ngxs/store'

/*
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
*/

import {
  AuthModule,
  AuthService,
  UserModule
} from '@authumn/angular'

import { AppComponent } from './app.component'
// import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
// import { reducers } from './app.reducers'
import { RouterModule } from '@angular/router'

const routes = []

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    /*
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name: 'Authumn Store DevTools',
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    */
    NgxsModule.forRoot([]),
    AuthModule.forRoot({
      api: {
        loginUrl: 'https://api.chix.io/api/auth/login',
        registerUrl: 'https://api.chix.io/api/user/register'
      },
      routes: {
        return: ['/'],
        login: ['user', 'login']
      },
      resourceServers: [
        'http://api.chix.io'
      ]
    }),
    UserModule.forRoot({
      framework: 'bootstrap-3',
      api: {
        url: 'https://user.chix.io',
        registerUrl: 'https://api.chix.io/api/user/register'
      }
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
