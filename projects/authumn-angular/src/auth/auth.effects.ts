import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Store, select } from '@ngrx/store'
import { Actions, Effect } from '@ngrx/effects'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'

import {
  Action as UserAction,
  UserActions,
  UserLogoutAction,
  UserLoginAction
} from '../user/user.actions'

import {
  AuthAction,
  AuthActions,
  AuthAuthenticationRedirectAction,
  AuthAuthenticatedAction, AuthAuthenticationErrorAction
} from './auth.actions'

import { AuthService } from './auth.service'
import { selectorAuthReturnUrl } from './auth.selectors'
import { AuthState } from './auth.state'
import { AuthConfig } from './auth.config'

/**
 * Authentication Effects
 */
@Injectable()
export class AuthEffects {
  constructor (// private actions$: Actions<AuthAction | UserAction>,
               private actions$: Actions<any>, // FIX ME
               private authService: AuthService,
               private store: Store<{
                 [key: string]: AuthState
               }>,
               private authConfig: AuthConfig,
               private router: Router) {
  }

  /**
   * Authentication Redirect Effect.
   *
   * Navigates to the url configured in `authConfig.routes.login`
   *
   * @returns {Observable<AuthAuthenticationRedirectAction>}
   */
  @Effect({ dispatch: false })
  authenticationRedirect (): Observable<AuthAuthenticationRedirectAction> {
    return this.actions$
      .ofType(AuthActions.AUTHENTICATION_REDIRECT)
      .do(() => this.router.navigate(this.authConfig.routes.login))
  }

  /**
   * Authentication Effect.
   *
   * Will run after successful authentication and navigate either to
   * The url stored in state during authentication redirect or
   * the return url configured in `authConfig.routes.return`.
   *
   * @returns {Observable<AuthAuthenticatedAction>}
   */
  @Effect({ dispatch: false })
  authenticated (): Observable<AuthAuthenticatedAction> {
    return this.actions$
      .ofType(AuthActions.AUTHENTICATED)
      .do(() => {
        this.store.select(selectorAuthReturnUrl)
          .subscribe((returnUrl) => {
            const url = returnUrl ? [returnUrl] : this.authConfig.routes.return

            this.router.navigate(url)
          })
      })
  }

  /**
   *  Login effect
   *
   *  Will try to login with the authentication service.
   *
   * @returns {Observable<UserLoginAction>}
   */
  @Effect({ dispatch: false })
  login (): Observable<UserLoginAction> {
    return this.actions$
      .ofType(UserActions.LOGIN)
      .do(({ type, payload: { email, password } }) => {
        this.authService.login(email, password)
          .subscribe(
            data => {
              this.store.dispatch(new AuthAuthenticatedAction(true))
            },
            error => {
              this.store.dispatch(new AuthAuthenticationErrorAction({
                message: error.message
              }))
            })
      })
  }

  /**
   * Logout effect
   *
   * Will logout a user using the authentication service.
   *
   * @returns {Observable<UserLogoutAction>}
   */
  @Effect({ dispatch: false })
  logout (): Observable<UserLogoutAction> {
    return this.actions$
      .ofType(UserActions.LOGOUT)
      .do(() => {
        this.authService.logout()
        this.store.dispatch(new AuthAuthenticationRedirectAction({
          returnUrl: ''
        }))
      })
  }
}
