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
import { AuthUser } from './models/auth-user.model'
import { Observable } from 'rxjs/Rx'

export interface AuthStateModel {
  isAuthenticated: boolean
  returnUrl: null | string
  user?: {
    id: string
    login: string
  }
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
  static selectorIsAuthenticated (state: AuthStateModel): boolean {
    return state.isAuthenticated
  }

  @Selector()
  static getUser (state: AuthStateModel): AuthUser | null {
    return state.user || null
  }

  @Selector()
  static selectorAuthReturnUrl (state: AuthStateModel): string {
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
    { payload: { username: login, id } }: AuthAuthenticatedAction
  ) {
    const state = getState()

    const returnUrl = AuthState.selectorAuthReturnUrl(state)

    const url = returnUrl ? [returnUrl] : this.authConfig.routes.return

    patchState({
      isAuthenticated: true,
      user: {
        id,
        login
      }
    })

    dispatch(new Navigate(url))
  }
}
