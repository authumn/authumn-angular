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

import { schema } from '../schemas/schema'
import { login as layout } from '../schemas/layouts/login'
import { UserConfig } from '../user.config'
import { UserTemplates } from '../api/templates'

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
    schema
  }
  formOptions = {}

  constructor (
    private route: ActivatedRoute,
    public userTemplates: UserTemplates,
    public config: UserConfig,
    private router: Router,
    private store: Store
  ) {
    if (config.schemas && config.schemas.user) {
      this.formObject.schema = config.schemas.user
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
