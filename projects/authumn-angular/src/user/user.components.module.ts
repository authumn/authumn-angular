import { NgModule } from '@angular/core'
import { RegisterComponent } from './register/register.component'
import { LostPasswordComponent } from './lost-password/lost-password.component'
import { LoginComponent } from './login/login.component'
import { UserComponent } from './user.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from './material/index'
import {
  JsonSchemaFormModule,
  MaterialDesignFrameworkModule,
  Bootstrap3FrameworkModule, JsonSchemaFormService, FrameworkLibraryService, WidgetLibraryService, Framework,
  MaterialDesignFramework
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
    // Bootstrap3FrameworkModule,
    /*
    JsonSchemaFormModule.forRoot(
      MaterialDesignFrameworkModule,
      Bootstrap3FrameworkModule
    )
    */
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

    {
      ngModule: JsonSchemaFormModule,
      providers: [
        JsonSchemaFormService,
        FrameworkLibraryService,
        WidgetLibraryService,
        // this is a problem, only one will be used
        // but it's only known at runtime which one.
        // which also seems like an ugly solution.
        // because if the framework is only known
        // at runtime you will always have to include both.
        // ...loadFrameworks
        // so what I propose is to be able to include.
        // MaterialDesignFramework from somewhere.
        // ChoosenFramework.framework = MaterialDesignFramework
        // in which case it will work..
        // this must be passed on however, all the way up
        // from wherever authumn-angular is called.
        // which almost calls for two different entry points for
        // bootstrap-3 and material.
        // @authumn/angular/bootstrap-3
        // @authumn/angular/material
        {
          provide: Framework,
          useClass: MaterialDesignFramework,
          multi: true
        }
      ]
    }
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class UserComponentsModule {}
