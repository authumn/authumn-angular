import { NgModule } from '@angular/core'
import { RegisterComponent } from './register/register.component'
import { LostPasswordComponent } from './lost-password/lost-password.component'
import { LoginComponent } from './login/login.component'
import { UserComponent } from './user.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from './material/index'
import {
  Framework,
  FrameworkLibraryService,
  JsonSchemaFormModule,
  JsonSchemaFormService,
  MaterialDesignFramework,
  MaterialDesignFrameworkModule,
  Bootstrap3Framework,
  Bootstrap3FrameworkModule,
  WidgetLibraryService
} from 'angular2-json-schema-form'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

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
    MaterialModule,
    MaterialDesignFrameworkModule,
    Bootstrap3FrameworkModule,
    JsonSchemaFormModule.forRoot(
      MaterialDesignFrameworkModule,
      Bootstrap3FrameworkModule
    )
    /* Using patch version temporarily..
    // https://github.com/dschnelldavis/angular2-json-schema-form/issues/189
    {
      ngModule: JsonSchemaFormModule,
      providers: [
        JsonSchemaFormService,
        FrameworkLibraryService,
        WidgetLibraryService,
        {
          provide: Framework,
          useClass: MaterialDesignFramework,
          multi: true
        }
      ]
    },
    */
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class UserComponentsModule {}
