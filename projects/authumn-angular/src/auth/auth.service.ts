import { Injectable } from '@angular/core'
import { AuthProvider } from './provider/auth.provider'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AuthService {
  constructor (
    private authProvider: AuthProvider
  ) {}
  getToken () {
    return JSON.parse(localStorage.getItem('currentUser'))
  }

  isAuthenticated () {
    const token = this.getToken()

    return token && !this.isExpired()
  }

  isExpired () {
    const tokenExpire = Number(localStorage.getItem('tokenExpire'))

    return (tokenExpire - Date.now()) <= 0
  }

  getAuthorizationHeader () {
    const token = this.getToken()

    if (
      token &&
      token.access_token &&
      token.refresh_token
    ) {
      return `Bearer ${token.access_token}`
    }

    return false
  }

  login (username: string, password: string) {
    return this.authProvider.login(username, password)
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
  }

  logout () {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('tokenExpire')
  }
}
