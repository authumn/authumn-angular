import { ApplicationRef } from '@angular/core'
import { Action, Selector, State, StateContext } from '@ngxs/store'
import { Navigate } from '@ngxs/router-plugin'
import {
  RegistrationSuccessPayload,
  UserLoginAction,
  UserRegisterAction,
  UserRegisterFailureAction,
  UserRegisterSuccessAction,
  UserSignInAction,
  UserSignUpAction
} from './user.actions'
import { catchError, map } from 'rxjs/operators'
import { of } from 'rxjs'
import { UserService } from './services/user.service'
import { Observable } from 'rxjs'

export interface UserStateModel {}

@State<UserStateModel>({
  name: 'user',
  defaults: {}
})
export class UserState {
  constructor (
    private userService: UserService,
    private ref: ApplicationRef
  ) {}

  @Action(UserLoginAction)
  authenticationRedirect ({ dispatch }: StateContext<UserStateModel>) {
    dispatch(new Navigate(['user', 'login']))

    // this.ref.tick()
  }

  @Action(UserRegisterAction)
  register (
    { dispatch }: StateContext<UserStateModel>,
    { payload: registration }
  ) {
    return this.userService
      .create(registration)
      .pipe(
        map((user: RegistrationSuccessPayload) => {
          dispatch(new UserRegisterSuccessAction(user))
        }),
        catchError(error =>
          of(
            dispatch(
              new UserRegisterFailureAction({
                message: error.message
              })
            )
          )
        )
      )
  }

  @Action(UserRegisterSuccessAction)
  registerSuccess (
    { dispatch }: StateContext<UserStateModel>
  ) {
    dispatch(new Navigate(['user', 'login']))

    // this.ref.tick()
  }

  @Action(UserSignUpAction)
  signup (
    { dispatch }: StateContext<UserStateModel>
  ) {
    dispatch(new Navigate(['user', 'register']))

    // this.ref.tick()
  }

  @Action(UserSignInAction)
  signin (
    { dispatch }: StateContext<UserStateModel>
  ) {
    dispatch(new Navigate(['user', 'login']))

    // this.ref.tick()
  }
}
