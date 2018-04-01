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
import { AuthModule } from '../auth/auth.module'
import { UserConfig } from './user.config'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EffectsModule } from '@ngrx/effects'
import { UserEffects } from './user.effects'
import { UserTemplates } from './api/templates'
import { MaterialLoginComponent, MaterialRegisterComponent } from '../material/index'
import { ComponentFactoryComponent } from './api/ComponentFactory.component'
import { MaterialTemplatesModule } from '../material/material.templates.module'
import { UserComponentsModule } from './user.components.module'
import { AuthumnViewDirective } from './api/authumn-view.directive'

const components = [
  AuthumnViewDirective,
  ComponentFactoryComponent
]

export type TemplateSet = {
  register: any, // (Component)
  login: any
}

const defaultComponents = {
  material: {
    register: MaterialRegisterComponent,
    login: MaterialLoginComponent
  }
}

export function userTemplateFactory(
  framework = 'material',
  extendedComponents: TemplateSet
) {
  const components = {
    ...defaultComponents[framework],
    ...extendedComponents
  }

  debugger;

  // could just provide a value I guess.
  return () => {
    const userTemplates = new UserTemplates()

    userTemplates.register = components.register
    userTemplates.login = components.login

    return userTemplates
  }
}

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialTemplatesModule,
    UserComponentsModule,
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
    UserService,
    UserTemplates
  ]
})
export class UserModule {
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
          useFactory: userTemplateFactory(
            'material',
            config.components || {}
          )
        }
      ]
    }
  }
  constructor (@Optional() @SkipSelf() parentModule: AuthModule) {
    if (parentModule) {
      throw new Error(
        'UserModule is already loaded. Import it in the AppModule only')
    }
  }
}
