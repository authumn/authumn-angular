import {
  Component,
  OnInit
} from '@angular/core'
import { login as layout } from '../schemas/layouts/login'
import { ActivatedRoute, Router } from '@angular/router'
import { UserTemplates } from '../api/templates'
import { Store } from '@ngxs/store'
import { UserConfig } from '../user.config'
import { registerSchema } from '../schemas/register.schema'
import { LostPasswordAction } from '../user.actions'
import { lostPassword } from '../schemas/layouts/lostPassword'

@Component({
  selector: 'authumn-lost-password',
  templateUrl: './lost-password.component.html',
  styleUrls: ['./lost-password.component.scss']
})
export class LostPasswordComponent implements OnInit {
  model: any = {}
  loading = true

  formActive = true
  formObject = {
    layout: lostPassword,
    schema: registerSchema
  }
  formOptions = {}

  constructor (
    private route: ActivatedRoute,
    public userTemplates: UserTemplates,
    public config: UserConfig,
    private router: Router,
    private store: Store
  ) {
    if (config.schemas && config.schemas.register) {
      this.formObject.schema = config.schemas.register
    }

    if (config.layout && config.layout.login) {
      this.formObject.layout = config.layout.lostPassword
    }
  }

  ngOnInit () {}

  onSubmit (event) {
    this.loading = true

    this.store.dispatch(new LostPasswordAction({
      email: this.model.email
    }))
  }

  validationErrors (_event) {
  }

  onChanges (_event) {
  }

  isValid (_event) {
    return true
  }

}
