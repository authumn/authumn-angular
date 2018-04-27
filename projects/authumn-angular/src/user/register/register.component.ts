import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from '../services/user.service'
// import { Store } from '@ngrx/store'
import { Store } from '@ngxs/store'
import { UserRegisterAction } from '../user.actions'
// import { State } from '../../lib.state'

import { schema } from '../schemas/schema'
import { register as layout } from '../schemas/layouts/register'

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
    // private store: Store<State>
    private store: Store
  ) { }

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
