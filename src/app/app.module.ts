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
import { HttpClientModule } from '@angular/common/http'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsRouterPluginModule } from '@ngxs/router-plugin'

const routes = []

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
