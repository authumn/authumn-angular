import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { AuthEffects } from './auth.effects'
import { AuthGuard } from './auth.guard'
import { reducers } from './auth.reducer'
import { AuthService } from './auth.service'
import { AuthConfig } from './auth.config'
import { AuthProvider } from './provider/auth.provider'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AuthInterceptor } from './auth.interceptor'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      AuthEffects
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
