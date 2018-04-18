import { NgModule } from '@angular/core'
import { UserComponentsModule } from '../user/user.components.module'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { Bootstrap3LoginComponent } from './login/login.component'
import { Bootstrap3RegisterComponent } from './register/register.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserComponentsModule
  ],
  declarations: [
    Bootstrap3LoginComponent,
    Bootstrap3RegisterComponent
  ],
  exports: [
    Bootstrap3LoginComponent,
    Bootstrap3RegisterComponent
  ],
  entryComponents: [
    Bootstrap3LoginComponent,
    Bootstrap3RegisterComponent
  ]
})
export class Bootstrap3TemplatesModule {}
