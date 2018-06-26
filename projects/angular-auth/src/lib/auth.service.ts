import { Injectable } from '@angular/core'
import jwtDecode from 'jwt-decode'

import { Store } from '@ngxs/store'

import { Observable, of } from 'rxjs'

import { AuthProvider } from './provider/auth.provider'
import {
  AuthAuthenticatedAction,
  AuthAuthenticationErrorAction,
  AuthLogoutAction
} from './auth.actions'
import { catchError, map, tap } from 'rxjs/operators'

import { AuthModel } from './models/auth.model'
import { TokenModel } from './models/token.model'

@Injectable()
export class AuthService {
  constructor (
    private authProvider: AuthProvider,
    private store: Store
  ) {}
  public getToken (): string | null {
    return this.getItem('access_token')
  }

  public getUserId (): string | null {
    const user = this.getItem('currentUser')

    if (user) {
      return JSON.parse(user).id
    }

    return null
  }

  public getUsername (): string | null {
    const user = this.getItem('currentUser')

    if (user) {
      return JSON.parse(user).username
    }

    return null
  }

  public isAuthenticated (): boolean {
    const token = this.getToken()

    if (!token || this.isExpired()) {
      this.clear()

      return false
    }

    return true
  }

  public isExpired (): boolean {
    const tokenExpire = Number(this.getItem('tokenExpire'))

    return (tokenExpire - Date.now()) <= 0
  }

  public getAuthorizationHeader (): string | null {
    const accessToken = this.getToken()

    if (accessToken) {
      return `Bearer ${accessToken}`
    }

    return null
  }

  public login (username: string, password: string) {
    return this.authProvider.login(username, password)
      .pipe(
        map(({ access_token, expires_in }: TokenModel) => {
          const { sub: id, email, username } = jwtDecode(access_token)

          const user: AuthModel = { id, email, username }

          this.setItem('access_token', access_token)
          this.setItem('currentUser', JSON.stringify(user))
          this.setItem('tokenExpire', String(Date.now() + (expires_in * 1000)))

          return of(this.store.dispatch(new AuthAuthenticatedAction(user)))
        }),
        catchError((error) => {
          return of(new AuthAuthenticationErrorAction({
            message: error.message
          }))
        })
      )
  }

  public clear () {
    this.removeItem('accessToken')
    this.removeItem('currentUser')
    this.removeItem('tokenExpire')
  }

  public logout () {
    this.clear()

    this.store.dispatch(new AuthLogoutAction())
  }

  private getItem (key: string) {
    if (localStorage) {
      return localStorage.getItem(key)
    }

    return null
  }

  private setItem (key: string, value: any): void {
    if (localStorage) {
      localStorage.setItem(key, value)
    }
  }

  private removeItem (key): void {
    if (localStorage) {
      localStorage.removeItem(key)
    }
  }
}
