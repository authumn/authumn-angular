import { Injectable } from '@angular/core'
import { AuthProvider } from './provider/auth.provider'
import { Observable } from 'rxjs'
import { Store } from '@ngxs/store'
import {
  AuthAuthenticatedAction,
  AuthAuthenticationErrorAction,
  AuthLogoutAction
} from './auth.actions'

@Injectable()
export class AuthService {
  constructor (
    private authProvider: AuthProvider,
    private store: Store
  ) {}
  getToken () {
    return JSON.parse(localStorage.getItem('currentUser'))
  }

  isAuthenticated (): boolean {
    const token = this.getToken()

    return token && !this.isExpired()
  }

  isExpired (): boolean {
    const tokenExpire = Number(localStorage.getItem('tokenExpire'))

    return (tokenExpire - Date.now()) <= 0
  }

  getAuthorizationHeader (): string | null {
    const token = this.getToken()

    if (
      token &&
      token.access_token &&
      token.refresh_token
    ) {
      return `Bearer ${token.access_token}`
    }

    return null
  }

  login (username: string, password: string) {
    this.authProvider.login(username, password)
      .map(user => {
        if (
          user &&
          user.access_token &&
          user.expires_in
        ) {
          localStorage.setItem('currentUser', JSON.stringify(user))
          localStorage.setItem('tokenExpire', String(Date.now() + (user.expires_in * 1000)))
        }

        return user
      })
      .subscribe(
        data => {
          this.store.dispatch(new AuthAuthenticatedAction(true))
        },
        error => {
          this.store.dispatch(new AuthAuthenticationErrorAction({
            message: error.message
          }))
        }
      )
  }

  logout () {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('tokenExpire')

    this.store.dispatch(new AuthLogoutAction())
  }
}
