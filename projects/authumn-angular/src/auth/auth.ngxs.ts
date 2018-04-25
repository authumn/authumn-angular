import { ApplicationRef } from '@angular/core'
import { Action, Selector, State, StateContext } from '@ngxs/store'
import {
  AuthAuthenticatedAction,
  AuthAuthenticationRedirectAction,
  AuthAuthenticationErrorAction,
  RedirectPayload
} from './auth.actions'
import { Navigate } from '@ngxs/router-plugin'
import { AuthConfig } from './auth.config'
import { UserLoginAction, UserLogoutAction } from '../user'
import { AuthService } from './auth.service'

export interface AuthStateModel {
  isAuthenticated: boolean
  returnUrl: null | string
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    isAuthenticated: false,
    returnUrl: null
  }
})
export class AuthState {
  constructor (
    private authConfig: AuthConfig,
    private authService: AuthService,
    private ref: ApplicationRef
  ) {}

  @Selector()
  static selectorIsAuthenticated (state: AuthStateModel) {
    return state.isAuthenticated
  }

  @Selector()
  static selectorAuthReturnUrl (state: AuthStateModel) {
    return state.returnUrl
  }

  @Action(AuthAuthenticationRedirectAction)
  authenticationRedirect (
    { dispatch, patchState }: StateContext<AuthStateModel>,
    { payload }
  ) {
    patchState({
      returnUrl: payload.returnUrl
    })

    dispatch(new Navigate(this.authConfig.routes.login))

    this.ref.tick()
  }

  @Action(AuthAuthenticatedAction)
  authenticated (
    { dispatch, getState, patchState }: StateContext<AuthStateModel>,
    { payload: isAuthenticated }
  ) {
    const state = getState()

    const returnUrl = AuthState.selectorAuthReturnUrl(state)

    const url = returnUrl ? [returnUrl] : this.authConfig.routes.return

    patchState({
      isAuthenticated
    })

    dispatch(new Navigate(url))

    this.ref.tick()
  }

  @Action(UserLoginAction)
  login (
    { dispatch }: StateContext<AuthStateModel>,
    { payload: { email, password } }: UserLoginAction
  ) {
    this.authService.login(email, password)
      .subscribe(
        data => {
          dispatch(new AuthAuthenticatedAction(true))
        },
        error => {
          dispatch(new AuthAuthenticationErrorAction({
            message: error.message
          }))
        }
      )
  }

  @Action(UserLogoutAction)
  logout (
    { dispatch, patchState }: StateContext<AuthStateModel>
  ) {
    this.authService.logout()

    patchState({
      isAuthenticated: false
    })

    dispatch(new AuthAuthenticationRedirectAction({
      returnUrl: ''
    }))
  }
}
