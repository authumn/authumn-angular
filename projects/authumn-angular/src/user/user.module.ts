import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { UserRoutingModule } from './user-routing.module'
import { UserService } from './services/user.service'
// import { AuthModule } from '../auth/auth.module'
import { UserConfig } from './user.config'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { UserTemplates } from './api/templates'
import { createUserTemplates } from './api/createUserTemplates'
import { ComponentFactoryComponent } from './api/ComponentFactory.component'
import { MaterialTemplatesModule } from '../material/material.templates.module'
import { UserComponentsModule } from './user.components.module'
import { AuthumnViewDirective } from './api/authumn-view.directive'
import { Bootstrap3TemplatesModule } from '../bootstrap-3/bootstrap3.templates.module'
import { NgxsModule } from '@ngxs/store'
import { UserState } from './user.ngxs'
debugger
const components = [
  AuthumnViewDirective,
  ComponentFactoryComponent
]

export type TemplateSet = {
  register: any, // (Component)
  login: any
}

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialTemplatesModule,
    Bootstrap3TemplatesModule,
    UserComponentsModule,
    UserRoutingModule,
    NgxsModule.forFeature([
      UserState
    ])
    // StoreModule.forFeature('user', []),
    // EffectsModule.forFeature([
    //   UserEffects
    // ])
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  providers: [
    HttpClient,
    UserService,
    UserTemplates
  ]
})
export class UserModule {
  constructor (@Optional() @SkipSelf() parentModule: UserModule) {
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
        },
        {
          provide: UserTemplates,
          // Also Here, this should not be determined dynamically.
          useFactory: createUserTemplates(
             config.framework,
            config.components || {}
          )
        }
      ]
    }
  }
}
