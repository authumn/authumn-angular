import { AuthProviderInterface } from './auth.provider.interface'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import * as qs from 'qs'

import { AuthConfig } from '../auth.config'

@Injectable()
export class AuthProvider implements AuthProviderInterface {
  constructor (
    private http: HttpClient,
    private authConfig: AuthConfig
  ) { }

  login (
    username: string,
    password: string
  ) {
    return this.http.post<any>(
      this.authConfig.api.loginUrl, // + '/auth/login',
      qs.stringify({ username, password }),
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        }
      })
      .map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(
            'currentUser',
            JSON.stringify(user)
          )
        }

        return user
      })
  }

  register (
    username: string,
    password: string
  ) {
    return this.http.post<any>(
      this.authConfig.api.registerUrl, // + '/user/register',
      { username: username, password: password })
      .map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(
            'currentUser',
            JSON.stringify(user)
          )
        }

        return user
      })
  }

  // remove user from local storage to log user out
  logout () {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('tokenExpire')
  }
}
