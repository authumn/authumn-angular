import {
  Action,
  Selector,
  State,
  StateContext
} from '@ngxs/store'
import { Navigate } from '@ngxs/router-plugin'

import {
  AuthAuthenticatedAction,
  AuthAuthenticationRedirectAction,
  AuthLogoutAction,
  AuthAuthenticationErrorAction
} from './auth.actions'
import { AuthConfig } from './auth.config'
import { AuthService } from './auth.service'
import { AuthModel } from './models/auth.model'

export interface AuthStateModel {
  id?: string
  isAuthenticated: boolean
  returnUrl: null | string
  username?: string
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
    private authConfig: AuthConfig
  ) {}

  @Selector()
  static selectorIsAuthenticated (state: AuthStateModel) {
    return state.isAuthenticated
  }

  @Selector()
  static selectorAuthReturnUrl (state: AuthStateModel) {
    return state.returnUrl
  }

  @Action(AuthLogoutAction)
  logout (
    { dispatch, patchState }: StateContext<AuthStateModel>
  ) {

    patchState({
      isAuthenticated: false
    })

    dispatch(new AuthAuthenticationRedirectAction({
      returnUrl: ''
    }))
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
  }

  @Action(AuthAuthenticatedAction)
  authenticated (
    { dispatch, getState, patchState }: StateContext<AuthStateModel>,
    { payload: { username, id } }: AuthAuthenticatedAction
  ) {
    const state = getState()

    const returnUrl = AuthState.selectorAuthReturnUrl(state)

    const url = returnUrl ? [returnUrl] : this.authConfig.routes.return

    patchState({
      id,
      isAuthenticated: true,
      username
    })

    dispatch(new Navigate(url))
  }
}
