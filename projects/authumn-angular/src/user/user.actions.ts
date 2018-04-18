import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'

@Injectable()
export class UserActions {
  static LOGIN = '[User] LOGIN'
  static LOGOUT = '[User] LOGOUT'
  static SIGNIN = '[User] SIGNIN'
  static SIGNUP = '[User] SIGNUP'
  static REGISTER = '[User] REGISTER'
  static REGISTER_SUCCESS = '[User] REGISTER SUCCESS'
  static REGISTER_FAILURE = '[User] REGISTER FAILURE'
}

// wanted to do this with schema..
export class LoginCredentials {
  email: string
  password: string
}

export class RegistrationPayload {
  email: string
  password: string
}

export class RegistrationSuccessPayload {
  email: string
}

export class RegistrationError {
  message: string
}

export class UserRegisterAction implements Action {
  readonly type = UserActions.REGISTER
  constructor (public payload: RegistrationPayload) {}
}

export class UserRegisterSuccessAction implements Action {
  readonly type = UserActions.REGISTER_SUCCESS
  constructor (public payload: RegistrationSuccessPayload) {}
}

export class UserRegisterFailureAction implements Action {
  readonly type = UserActions.REGISTER_FAILURE
  constructor (public payload: any) {}
}

export class UserLoginAction implements Action {
  readonly type = UserActions.LOGIN
  constructor (public payload: LoginCredentials) {}
}

export class UserSignUpAction implements Action {
  readonly type = UserActions.SIGNUP
  constructor () {}
}

export class UserSignInAction implements Action {
  readonly type = UserActions.SIGNIN
  constructor () {}
}

export class UserLogoutAction implements Action {
  public type = UserActions.LOGOUT
}

export type Action =
  | UserLoginAction
  | UserLogoutAction
  | UserSignInAction
  | UserSignUpAction
  | UserRegisterAction
  | UserRegisterSuccessAction
  | UserRegisterFailureAction
