import { Component } from '@angular/core'
import { Store } from '@ngxs/store'
import { UserRegisterAction } from '../user.actions'

import { schema } from '../schemas/schema'
import { register as layout } from '../schemas/layouts/register'
import { UserTemplates } from '../api/templates'
import { UserConfig } from '../user.config'

@Component({
  selector: 'authumn-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  model: any = {}
  loading = true
  formActive = true
  formObject = {
    layout,
    schema
  }
  formOptions = {}

  constructor (
    public config: UserConfig,
    public userTemplates: UserTemplates,
    private store: Store
  ) {
    if (config.schemas && config.schemas.user) {
      this.formObject.schema = config.schemas.user
    }

    if (config.layout && config.layout.register) {
      this.formObject.layout = config.layout.register
    }
  }

  register () {
    this.loading = true

    this.store.dispatch(new UserRegisterAction(this.model))
  }

  onSubmit (event) {
    console.log('onSubmit', event, this.model)
    this.register()
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