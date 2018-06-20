import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { RegisterComponent } from './register/register.component'
import { LostPasswordComponent } from './lost-password/lost-password.component'
import { LoginComponent } from './login/login.component'
import { UserComponent } from './user.component'
import { JsonSchemaFormModule } from 'angular2-json-schema-form'

const components = [
  UserComponent,
  LoginComponent,
  LostPasswordComponent,
  RegisterComponent
]

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    JsonSchemaFormModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class UserComponentsModule {}
