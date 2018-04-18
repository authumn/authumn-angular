import {Component, OnInit, ViewEncapsulation} from "@angular/core"
import { ActivatedRoute, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { UserLoginAction, UserLogoutAction } from '../user.actions'
import { AuthState } from '../../auth'

import { schema } from '../schemas/schema'
import { login as layout } from '../schemas/layouts/login'
import { UserConfig } from '../user.config'

/**
 * The login component
 */
@Component({
  moduleId: module.id,
  selector: 'authumn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {}
  loading = true

  formActive = true
  formObject = {
    layout,
    schema
  }
  formOptions = {}

  constructor (
    private route: ActivatedRoute,
    private config: UserConfig,
    private router: Router,
    private store: Store<{
      [key: string]: AuthState
    }>
  ) { }

  ngOnInit () {
    this.store.dispatch(new UserLogoutAction())
  }

  login () {
    this.loading = true

    this.store.dispatch(new UserLoginAction({
      email: this.model.email,
      password: this.model.password
    }))
  }

  onSubmit (event) {
    this.login()
  }

  validationErrors (event) {
    console.log('validationErrors', event)
  }

  onChanges (event) {
    console.log('onChanges', event)
  }


  isValid (event) {
    console.log('isValid', event)

    return true
  }
}
