import { AuthModel } from './models/auth.model'

export class AuthActions {
  static AUTHENTICATED = '[Auth] AUTHENTICATED'
  static AUTHENTICATION_REDIRECT = '[Auth] AUTHENTICATION REDIRECT'
  static LOGOUT = '[Auth] LOGOUT'
  static ERROR = '[Auth] ERROR'
}

export interface RedirectPayload {
  returnUrl: string | string[]
}

export interface ErrorPayload {
  message: string
}

export class AuthAuthenticationErrorAction {
  static readonly type = AuthActions.ERROR
  constructor (public payload: ErrorPayload) { }
}

export class AuthAuthenticationRedirectAction {
  static readonly type = AuthActions.AUTHENTICATION_REDIRECT
  constructor (public payload: RedirectPayload) { }
}

export class AuthAuthenticatedAction {
  static readonly type = AuthActions.AUTHENTICATED
  constructor (public payload: AuthModel) { }
}

export class AuthLogoutAction {
  static readonly type = AuthActions.LOGOUT
}

export type AuthAction =
  | AuthAuthenticatedAction
  | AuthAuthenticationErrorAction
  | AuthAuthenticationRedirectAction
  | AuthLogoutAction
