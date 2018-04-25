export class AuthActions {
  static AUTHENTICATED = '[Auth] AUTHENTICATED'
  static AUTHENTICATION_REDIRECT = '[Auth] AUTHENTICATION REDIRECT'
  static ERROR = '[Auth] ERROR'
}

export type RedirectPayload = {
  returnUrl: string | string[]
}

export type ErrorPayload = {
  message: string
}

/**
 * Action dispatched when authentication fails.
 */
export class AuthAuthenticationErrorAction {
  static readonly type = AuthActions.ERROR
  constructor (public payload: ErrorPayload) { }
}

/**
 * Redirect Action dispatched when the user is not authentication.
 */
export class AuthAuthenticationRedirectAction {
  static readonly type = AuthActions.AUTHENTICATION_REDIRECT
  constructor (public payload: RedirectPayload) { }
}

/**
 * Action dispatched after successful authentication.
 */
export class AuthAuthenticatedAction {
  static readonly type = AuthActions.AUTHENTICATED
  constructor (public payload: boolean) { }
}

export type AuthAction =
  | AuthAuthenticatedAction
  | AuthAuthenticationErrorAction
  | AuthAuthenticationRedirectAction
