import { Injectable, Injector } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'
import { Observable } from 'rxjs/index'
import { AuthService } from './auth.service'
import { AuthConfig } from './auth.config'

/* `any` doesn't work  */
export interface AnyData {}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  authService: AuthService
  constructor (
    private injector: Injector,
    private authConfig: AuthConfig
  ) { }

  isResourceUrl (url: string) {
    return Boolean(this.authConfig.resourceServers.find(server => (
      url.startsWith(server)
    )))
  }

  intercept (
    request: HttpRequest<AnyData>,
    next: HttpHandler
  ): Observable<HttpEvent<AnyData>> {
    this.authService = this.injector.get(AuthService)
    const url = request.url.toLowerCase()

    if (this.isResourceUrl(url)) {
      const authHeader = this.authService.getAuthorizationHeader()

      if (authHeader) {
        const authHeaders = request.headers.set('Authorization', authHeader)

        const authRequest = request.clone({ headers: authHeaders })

        return next.handle(authRequest)
      }
    }

    return next.handle(request)
  }
}

/*
export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}
*/
