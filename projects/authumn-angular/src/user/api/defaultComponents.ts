import { MaterialLoginComponent, MaterialRegisterComponent } from '../../material/index'
import { Bootstrap3LoginComponent, Bootstrap3RegisterComponent } from '../../bootstrap-3/index'

export const defaultComponents = {
  'material-design': {
    register: MaterialRegisterComponent,
    login: MaterialLoginComponent
  },
  'bootstrap-3': {
    register: Bootstrap3RegisterComponent,
    login: Bootstrap3LoginComponent
  }
}
