import { Component } from '@angular/core'
import { Store } from '@ngxs/store'
import { UserRegisterAction } from '../user.actions'

import { register as layout } from '../schemas/layouts/register'
import { UserTemplates } from '../api/templates'
import { UserConfig } from '../user.config'
import { registerSchema } from '../schemas/register.schema'

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
    schema: registerSchema
  }
  formOptions = {}
  valid: boolean = false

  constructor (
    public config: UserConfig,
    public userTemplates: UserTemplates,
    private store: Store
  ) {
    if (config.schemas && config.schemas.register) {
      this.formObject.schema = config.schemas.register
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
    if (this.valid) {
      this.register()
    }
  }

  validationErrors (event) {
    console.log('validationErrors', event)
  }

  onChanges (event) {
    console.log('onChanges', event)
  }

  isValid (event) {
    this.valid = event
  }
}
