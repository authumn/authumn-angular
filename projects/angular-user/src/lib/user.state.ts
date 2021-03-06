import {ApplicationRef, Injectable} from '@angular/core'
import {Action, Selector, State, StateContext} from '@ngxs/store'

import {Navigate} from '@ngxs/router-plugin'

import {AuthService} from '@authumn/angular-auth'

import {
  UserLoginAction,
  UserRegisterAction,
  UserRegisterFailureAction,
  UserRegisterSuccessAction,
  UserSignInAction,
  UserSignUpAction,
  UserLogoutAction,
} from './user.actions'
import {catchError, map} from 'rxjs/operators'
import {of} from 'rxjs'

import {UserService} from './services/user.service'
import {User} from './models'

export type UserStateModel = any

@State<UserStateModel>({
  name: 'user',
  defaults: {},
})
@Injectable()
export class UserState {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private ref: ApplicationRef
  ) {}

  @Action(UserLoginAction)
  login(
    {dispatch}: StateContext<UserStateModel>,
    {payload: {username, password}}: UserLoginAction
  ) {
    return this.authService.login(username, password)
  }

  @Action(UserLogoutAction)
  logout({dispatch, patchState}: StateContext<UserStateModel>) {
    return this.authService.logout()
  }

  /* Not sure, was this correct?
  @Action(UserLoginAction)
  authenticationRedirect ({ dispatch }: StateContext<UserStateModel>) {
    dispatch(new Navigate(['user', 'login']))
  }
  */

  @Action(UserRegisterAction)
  register({dispatch}: StateContext<UserStateModel>, {payload: registration}) {
    return this.userService.create(registration).pipe(
      map((user: User) => {
        dispatch(
          new UserRegisterSuccessAction({
            email: user.username,
          })
        )
      }),
      catchError(error =>
        of(
          dispatch(
            new UserRegisterFailureAction({
              message: error.message,
            })
          )
        )
      )
    )
  }

  @Action(UserRegisterSuccessAction)
  registerSuccess({dispatch}: StateContext<UserStateModel>) {
    dispatch(new Navigate(['user', 'login']))
  }

  @Action(UserSignUpAction)
  signup({dispatch}: StateContext<UserStateModel>) {
    dispatch(new Navigate(['user', 'register']))
  }

  @Action(UserSignInAction)
  signin({dispatch}: StateContext<UserStateModel>) {
    dispatch(new Navigate(['user', 'login']))
  }
}
