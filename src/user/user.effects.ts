import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable'
import { Action } from '@ngrx/store'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Effect, Actions, ofType } from '@ngrx/effects'
import {
  RegistrationSuccessPayload,
  UserActions,
  UserRegisterAction,
  UserRegisterFailureAction,
  UserRegisterSuccessAction
} from './user.actions'
import { UserService } from './services/user.service'
import { Store } from '@ngrx/store'
import { State } from '../lib.state'
import {
  catchError,
  exhaustMap,
  map,
  tap
} from 'rxjs/operators'
import { UserRegister } from './models'
import { of } from 'rxjs/observable/of'

@Injectable()
export class UserEffects {
  @Effect({ dispatch: false })
  login$ = this.actions$
    .ofType(UserActions.LOGIN)
    .do(() => this.router.navigate(['user', 'login']))

  @Effect()
  register$ = this.actions$.pipe(
    ofType(UserActions.REGISTER),
    map((action: UserRegisterAction) => action.payload),
    exhaustMap((registration: any) => {
      return this.userService
        .create(registration)
        .pipe(
          map((user: RegistrationSuccessPayload) => new UserRegisterSuccessAction(user)),
          catchError(error => of(new UserRegisterFailureAction(error)))
        )
    })
  )

  @Effect({ dispatch: false })
  registerSuccess$ = this.actions$.pipe(
    ofType(UserActions.REGISTER_SUCCESS),
    tap(() => this.router.navigate(['/login']))
  )

  @Effect({ dispatch: false })
  signup$ = this.actions$
    .ofType(UserActions.SIGNUP)
    .do(() => this.router.navigate(['user', 'register']))

  @Effect({ dispatch: false })
  signin$ = this.actions$
    .ofType(UserActions.SIGNIN)
    .do(() => this.router.navigate(['user', 'login']))

  constructor (
    private actions$: Actions,
    private router: Router,
    private userService: UserService,
    private store: Store<State>
  ) { }
}
