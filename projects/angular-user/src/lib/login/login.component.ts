import {
  Component,
  OnInit
} from '@angular/core'
import {
  ActivatedRoute,
  Router
} from '@angular/router'
import { Store } from '@ngxs/store'
import {
  UserLoginAction,
  UserLogoutAction
} from '../user.actions'

import { login as layout } from '../schemas/layouts/login'
import { UserConfig } from '../user.config'
import { UserTemplates } from '../api/templates'
import { loginSchema } from '../schemas/login.schema'

/**
 * The login component
 */
@Component({
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
    schema: loginSchema
  }
  formOptions = {}

  valid: boolean = false

  constructor (
    public userTemplates: UserTemplates,
    public config: UserConfig,
    private store: Store
  ) {
    if (config.schemas && config.schemas.login) {
      this.formObject.schema = config.schemas.login
    }

    if (config.layout && config.layout.login) {
      this.formObject.layout = config.layout.login
    }
  }

  ngOnInit () {
    this.store.dispatch(new UserLogoutAction())
  }

  login () {
    this.loading = true

    this.store.dispatch(new UserLoginAction({
      username: this.model.username,
      password: this.model.password
    }))
  }

  onSubmit (_event) {
    if (this.valid) {
      this.login()
    }
  }

  validationErrors (_event) {}

  onChanges (_event) {}

  isValid (event: boolean) {
    this.valid = event
  }
}
