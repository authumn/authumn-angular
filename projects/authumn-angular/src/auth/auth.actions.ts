import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'

@Injectable()
export class AuthActions {
  static AUTHENTICATED = '[Auth] AUTHENTICATED'
  static AUTHENTICATION_REDIRECT = '[Auth] AUTHENTICATION REDIRECT'
  static ERROR = '[Auth] ERROR'
}

export type RedirectPayload = {
  returnUrl: string
}

export type ErrorPayload = {
  message: string
}

/**
 * Action dispatched when authentication fails.
 */
export class AuthAuthenticationErrorAction implements Action {
  readonly type = AuthActions.ERROR
  constructor (public payload: ErrorPayload) { }
}

/**
 * Redirect Action dispatched when the user is not authentication.
 */
export class AuthAuthenticationRedirectAction implements Action {
  readonly type = AuthActions.AUTHENTICATION_REDIRECT
  constructor (public payload: RedirectPayload) { }
}

/**
 * Action dispatched after successful authentication.
 */
export class AuthAuthenticatedAction implements Action {
  readonly type = AuthActions.AUTHENTICATED
  constructor (public payload: boolean) { }
}

export type AuthAction =
  | AuthAuthenticatedAction
  | AuthAuthenticationErrorAction
  | AuthAuthenticationRedirectAction
