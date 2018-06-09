import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'
import 'hammerjs'
import {
  AuthModule,
  AuthService,
  UserModule
} from '../../projects/authumn-angular/src/public_api'

import { AppComponent } from './app.component'
import { environment } from '../environments/environment'
import { RouterModule } from '@angular/router'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsRouterPluginModule } from '@ngxs/router-plugin'
import { HttpClientModule } from '@angular/common/http'

const routes = []

const authModule = AuthModule.forRoot({
  api: {
    loginUrl: 'https://api.chix.io/v1/auth/login',
    registerUrl: 'https://api.chix.io/v1/user/register'
  },
  routes: {
    return: ['/'],
    login: ['user', 'login']
  },
  resourceServers: [
    'https://api.chix.io/v1'
  ]
})

const userModule = UserModule.forRoot({
  framework: 'bootstrap-3',
  api: {
    url: 'https://api.chix.io/v1/user',
    registerUrl: 'https://api.chix.io/v1/user/register'
  }
})

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([]),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    userModule,
    authModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
