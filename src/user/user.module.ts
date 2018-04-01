import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { FlexLayoutModule } from '@angular/flex-layout'

import {
  Framework,
  FrameworkLibraryService,
  JsonSchemaFormModule, JsonSchemaFormService, MaterialDesignFramework,
  MaterialDesignFrameworkModule, WidgetLibraryService
} from 'angular2-json-schema-form'

import { UserRoutingModule } from './user-routing.module'
import { UserComponent } from './user.component'
import { LoginComponent } from './login/login.component'
import { LostPasswordComponent } from './lost-password/lost-password.component'
import { RegisterComponent } from './register/register.component'
import { UserService } from './services/user.service'
import { TabsComponent } from './shared/tabs/tabs.component'
import { SocialComponent } from './shared/social/social.component'
import { AuthModule } from '../auth/auth.module'
import { UserConfig } from './user.config'
import { MaterialModule } from './material/index'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EffectsModule } from '@ngrx/effects'
import { UserEffects } from './user.effects'
import {StoreModule} from "@ngrx/store";

const components = [
  UserComponent,
  LoginComponent,
  LostPasswordComponent,
  RegisterComponent,
  TabsComponent,
  SocialComponent
]

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    MaterialDesignFrameworkModule,
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
    UserRoutingModule,
    AuthModule,
    // StoreModule.forFeature('user', []),
    EffectsModule.forFeature([
      UserEffects
    ])
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  providers: [
    HttpClient,
    UserService
  ]
})
export class UserModule {
  constructor (@Optional() @SkipSelf() parentModule: AuthModule) {
    if (parentModule) {
      throw new Error(
        'UserModule is already loaded. Import it in the AppModule only')
    }
  }

  public static forRoot (config: UserConfig): ModuleWithProviders {
    return {
      ngModule: UserModule,
      providers: [
        {
          provide: UserConfig,
          useValue: config
        }
      ]
    }
  }
}
