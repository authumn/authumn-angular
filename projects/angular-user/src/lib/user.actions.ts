import { Injectable } from '@angular/core'

@Injectable()
export class UserActions {
  static LOGIN = '[User] LOGIN'
  static LOGOUT = '[User] LOGOUT'
  static SIGNIN = '[User] SIGNIN'
  static SIGNUP = '[User] SIGNUP'
  static REGISTER = '[User] REGISTER'
  static REGISTER_SUCCESS = '[User] REGISTER SUCCESS'
  static REGISTER_FAILURE = '[User] REGISTER FAILURE'
  static LOST_PASSWORD = '[User] LOST PASSWORD'
}

export class LostPasswordPayload {
  email: string
}

export class LoginCredentials {
  username: string
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

export class UserRegisterAction {
  static readonly type = UserActions.REGISTER
  constructor (public payload: RegistrationPayload) {}
}

export class UserRegisterSuccessAction {
  static readonly type = UserActions.REGISTER_SUCCESS
  constructor (public payload: RegistrationSuccessPayload) {}
}

export class UserRegisterFailureAction {
  static readonly type = UserActions.REGISTER_FAILURE
  constructor (public payload: any) {}
}

export class UserLoginAction {
  static readonly type = UserActions.LOGIN
  constructor (public payload: LoginCredentials) {}
}

export class UserSignUpAction {
  static readonly type = UserActions.SIGNUP
}

export class UserSignInAction {
  static readonly type = UserActions.SIGNIN
}

export class UserLogoutAction {
  static readonly type = UserActions.LOGOUT
}

export class LostPasswordAction {
  static readonly type = UserActions.LOST_PASSWORD

  constructor (public payload: LostPasswordPayload) {}
}

export type Action =
  | UserLoginAction
  | UserLogoutAction
  | UserSignInAction
  | UserSignUpAction
  | UserRegisterAction
  | UserRegisterSuccessAction
  | UserRegisterFailureAction
  | LostPasswordAction
