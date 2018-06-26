import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule
} from '@angular/common/http'

import { NgxsModule } from '@ngxs/store'

import { AuthGuard } from './auth.guard'
import { AuthService } from './auth.service'
import { AuthConfig } from './auth.config'
import { AuthProvider } from './provider/auth.provider'
import { AuthInterceptor } from './auth.interceptor'
import { AuthState } from './auth.state'

export const authFeatureModule = NgxsModule.forFeature([AuthState])

// @dynamic
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    authFeatureModule
  ],
  providers: [
    HttpClient,
    AuthGuard,
    AuthProvider,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AuthModule {
  constructor (@Optional() @SkipSelf() parentModule: AuthModule) {
    if (parentModule) {
      throw new Error(
        'AuthModule is already loaded. Import it in the AppModule only')
    }
  }
  public static forRoot (config: AuthConfig): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        {
          provide: AuthConfig,
          useValue: config
        }
      ]
    }
  }
}
