import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core'
import { CommonModule } from '@angular/common'

import { NgxsModule } from '@ngxs/store'

import { UserRoutingModule } from './user-routing.module'
import { UserService } from './services/user.service'
import { UserConfig } from './user.config'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ComponentFactoryComponent } from './api/ComponentFactory.component'
import { UserComponentsModule } from './user.components.module'
import { AuthumnViewDirective } from './api/authumn-view.directive'
import { UserState } from './user.state'
import { HttpClientModule } from '@angular/common/http'
import { AuthModule, AuthService, AuthProvider } from '@authumn/angular-auth'

const components = [
  AuthumnViewDirective,
  ComponentFactoryComponent
]

export const routerUserFeatureModule = NgxsModule.forFeature([
  UserState
])

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule,
    UserComponentsModule,
    UserRoutingModule,
    routerUserFeatureModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  providers: [
    UserService,
    // Not sure why the below are not picked up from AuthModule...
    AuthProvider,
    AuthService
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
        }
      ]
    }
  }
}
