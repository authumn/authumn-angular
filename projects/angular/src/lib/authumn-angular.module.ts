import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core'

import {
  AuthConfig,
  AuthModule
} from '@authumn/angular-auth'
import {
  UserConfig,
  UserModule
} from '@authumn/angular-user'

export type AuthumnAngularConfig = AuthConfig & UserConfig

@NgModule({
  imports: [
    AuthModule,
    UserModule
  ]
})
export class AuthumnAngularModule {
  constructor (@Optional() @SkipSelf() parentModule: AuthumnAngularModule) {
    if (parentModule) {
      throw new Error(
        'AuthumnAngularModule is already loaded. Import it in the AppModule only')
    }
  }
  public static forRoot (config: AuthumnAngularConfig): ModuleWithProviders {
    return {
      ngModule: AuthumnAngularModule,
      providers: [
        {
          provide: AuthConfig,
          useValue: {
            api: {
              loginUrl: config.api.loginUrl,
              registerUrl: config.api.registerUrl
            },
            resourceServers: config.resourceServers,
            routes: config.routes
          }
        },
        {
          provide: UserConfig,
          useValue: {
            schemas: config.schemas,
            layout: config.layout,
            api: {
              profileUrl: config.api.profileUrl,
              registerUrl: config.api.registerUrl
            }
          }
        }
      ]
    }
  }
}
