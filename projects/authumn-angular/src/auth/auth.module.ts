import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AuthGuard } from './auth.guard'
import { AuthService } from './auth.service'
import { AuthConfig } from './auth.config'
import { AuthProvider } from './provider/auth.provider'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from './auth.interceptor'
import { AuthState } from './auth.ngxs'

import { NgxsModule } from '@ngxs/store'

/**
 * @dynamic
 */
@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([
      AuthState
    ])
  ],
  providers: [
    AuthProvider
  ]
})
export class AuthRootModule {}

@NgModule({})
export class AuthModule {
  constructor (@Optional() @SkipSelf() parentModule: AuthModule) {
    if (parentModule) {
      throw new Error(
        'AuthModule is already loaded. Import it in the AppModule only')
    }
  }
  public static forRoot (config: AuthConfig): ModuleWithProviders {
    return {
      ngModule: AuthRootModule,
      providers: [
        AuthService,
        AuthGuard,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        },
        {
          provide: AuthConfig,
          useValue: config
        }
      ]
    }
  }
}
