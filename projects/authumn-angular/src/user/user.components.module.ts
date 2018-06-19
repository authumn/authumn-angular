import { NgModule, ModuleWithProviders } from '@angular/core'
import { RegisterComponent } from './register/register.component'
import { LostPasswordComponent } from './lost-password/lost-password.component'
import { LoginComponent } from './login/login.component'
import { UserComponent } from './user.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from './material/index'
import {
  JsonSchemaFormModule,
  MaterialDesignFramework,
  MaterialDesignFrameworkModule
} from 'angular2-json-schema-form'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

const components = [
  UserComponent,
  LoginComponent,
  LostPasswordComponent,
  RegisterComponent
]

export const jsonSchemaFormModuleForRoot = JsonSchemaFormModule.forRoot(
  MaterialDesignFramework
)

// @dynamic
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    MaterialDesignFrameworkModule,
    jsonSchemaFormModuleForRoot
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class UserComponentsModule {}
