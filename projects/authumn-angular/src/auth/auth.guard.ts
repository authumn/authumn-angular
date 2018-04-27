import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { AuthService } from './auth.service'
import { AuthAuthenticationRedirectAction } from './auth.actions'
import { Store } from '@ngxs/store'
import { AuthConfig } from './auth.config'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (
    private router: Router,
    private authService: AuthService,
    private authConfig: AuthConfig,
    // private store: Store<State>
    private store: Store
  ) { }

  protectedRoute (url: string) {
    if (this.authService.isAuthenticated()) {
      // logged in so return true
      return true
    }

    this.store.dispatch(new AuthAuthenticationRedirectAction({
      returnUrl: url || this.authConfig.routes.return
    }))

    return false
  }

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.protectedRoute(state.url)
  }

  canActivateChild (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.protectedRoute(state.url)
  }
}
