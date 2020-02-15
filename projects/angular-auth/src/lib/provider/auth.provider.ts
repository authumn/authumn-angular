import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import * as qs from 'qs'

import 'rxjs/add/operator/map'

import { AuthProviderInterface } from './auth.provider.interface'
import { AuthConfig } from '../auth.config'
import { Observable } from 'rxjs'

@Injectable()
export class AuthProvider implements AuthProviderInterface {
  constructor (
    private http: HttpClient,
    private authConfig: AuthConfig
  ) { }

  login (
    username: string,
    password: string
  ): Observable<any> {
    return this.http.post<any>(
      this.authConfig.api.loginUrl,
      qs.stringify({ username, password }),
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        }
      })
  }

  register (
    username: string,
    password: string
  ): Observable<any> {
    return this.http.post<any>(
      this.authConfig.api.registerUrl,
      { username, password })
  }
}
