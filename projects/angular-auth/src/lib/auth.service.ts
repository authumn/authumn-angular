import {Injectable} from '@angular/core'
import jwtDecode from 'jwt-decode'

import {Store} from '@ngxs/store'

import {of, Observable} from 'rxjs'

import {AuthProvider} from './provider/auth.provider'
import {
  AuthAuthenticatedAction,
  AuthAuthenticationErrorAction,
  AuthLogoutAction,
} from './auth.actions'
import {catchError, map} from 'rxjs/operators'

import {AuthModel} from './models/auth.model'
import {TokenModel} from './models/token.model'
import {DecodedModel} from './models/decoded.model'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private authProvider: AuthProvider, private store: Store) {}

  public getToken(): string | null {
    return this.getItem('access_token')
  }

  public getUserId(): string | null {
    const user = this.getUser()

    if (user) {
      return user.id
    }

    return null
  }

  public getUsername(): string | null {
    const user = this.getUser()

    if (user) {
      return user.username
    }

    return null
  }

  public getUser(): AuthModel | null {
    const user = this.getItem('currentUser')

    if (user) {
      return JSON.parse(user)
    }

    return null
  }

  public refresh() {
    const user = this.getUser()

    if (user) {
      this.store.dispatch(new AuthAuthenticatedAction(user))
    }
  }

  public isAuthenticated(): boolean {
    const token = this.getToken()

    if (!token || this.isExpired()) {
      this.clear()

      return false
    }

    return true
  }

  public isExpired(): boolean {
    const tokenExpire = Number(this.getItem('tokenExpire'))

    return tokenExpire - Date.now() <= 0
  }

  public getAuthorizationHeader(): string | null {
    const accessToken = this.getToken()

    if (accessToken) {
      return `Bearer ${accessToken}`
    }

    return null
  }

  public login(username: string, password: string): Observable<any> {
    return this.authProvider.login(username, password).pipe(
      map(({access_token, expires_in}: TokenModel) => {
        const {sub: id, email, username: userName} = this.decode(access_token)

        const user: AuthModel = {id, email, username: userName}

        this.setItem('access_token', access_token)
        this.setItem('currentUser', JSON.stringify(user))
        this.setItem('tokenExpire', String(Date.now() + expires_in * 1000))

        return of(this.store.dispatch(new AuthAuthenticatedAction(user)))
      }),
      catchError(error => {
        return of(
          this.store.dispatch(
            new AuthAuthenticationErrorAction({
              message: error.message,
            })
          )
        )
      })
    )
  }

  public decode(token: string): DecodedModel {
    return jwtDecode(token)
  }

  public getDecodedToken(): DecodedModel {
    const accessToken = this.getToken()

    if (accessToken) {
      return this.decode(accessToken)
    }

    throw Error('Could not decode token.')
  }

  public clear() {
    this.removeItem('accessToken')
    this.removeItem('currentUser')
    this.removeItem('tokenExpire')
  }

  public logout() {
    this.clear()

    this.store.dispatch(new AuthLogoutAction())
  }

  private getItem(key: string) {
    if (localStorage) {
      return localStorage.getItem(key)
    }

    return null
  }

  private setItem(key: string, value: any): void {
    if (localStorage) {
      localStorage.setItem(key, value)
    }
  }

  private removeItem(key: string): void {
    if (localStorage) {
      localStorage.removeItem(key)
    }
  }
}
