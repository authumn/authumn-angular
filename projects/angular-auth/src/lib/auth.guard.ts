import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router'

import { Store } from '@ngxs/store'

import { AuthService } from './auth.service'
import { AuthAuthenticationRedirectAction } from './auth.actions'
import { AuthConfig } from './auth.config'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (
    private authService: AuthService,
    private authConfig: AuthConfig,
    private store: Store
  ) { }

  protectedRoute (url: string) {
    if (this.authService.isAuthenticated()) {
      return true
    }

    this.store.dispatch(new AuthAuthenticationRedirectAction({
      returnUrl: url || this.authConfig.routes.return
    }))

    return false
  }

  canActivate (
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.protectedRoute(state.url)
  }

  canActivateChild (
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.protectedRoute(state.url)
  }
}
