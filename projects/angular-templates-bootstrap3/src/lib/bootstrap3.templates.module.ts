import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import {
  UserComponentsModule,
  UserTemplates
} from '@authumn/angular-user'

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
  providers: [
    {
      provide: UserTemplates,
      useValue: {
        formFramework: 'bootstrap-3',
        login: Bootstrap3LoginComponent,
        register: Bootstrap3RegisterComponent
      }
    }
  ],
  entryComponents: [
    Bootstrap3LoginComponent,
    Bootstrap3RegisterComponent
  ]
})
export class Bootstrap3TemplatesModule {}
// provide configuration with yet another forRoot() method?
