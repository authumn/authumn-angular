import { BrowserModule } from '@angular/platform-browser'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'
import 'hammerjs'

import { AppComponent } from './app.component'
import { environment } from '../environments/environment'
import { RouterModule } from '@angular/router'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsRouterPluginModule } from '@ngxs/router-plugin'
import { HttpClientModule } from '@angular/common/http'
import {
  Bootstrap3Framework,
  Bootstrap3FrameworkModule,
  JsonSchemaFormModule
} from 'angular2-json-schema-form'
import { AuthumnAngularModule } from '@authumn/angular'
import { Bootstrap3TemplatesModule } from '@authumn/angular-templates-bootstrap3'

export const jsonSchemaFormModuleForRoot: ModuleWithProviders = JsonSchemaFormModule.forRoot(
  Bootstrap3Framework
)

const routes = []

const authumnModule = AuthumnAngularModule.forRoot({
  api: {
    loginUrl: 'https://api.chix.io/v1/auth/login',
    profileUrl: 'https://api.chix.io/v1/user',
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
    Bootstrap3TemplatesModule,
    Bootstrap3FrameworkModule,
    jsonSchemaFormModuleForRoot,
    authumnModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
