# @authumn/angular

## Installation

To install this library, run:

```bash
$ npm install @authumn/angular --save
```

## Usage

```typescript
import { BrowserModule } from '@angular/platform-browser'
import { APP_BOOTSTRAP_LISTENER, ComponentRef, NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'

import { environment } from '../environments/environment'
import { routes } from './routes'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { AppComponent } from './core/containers/app'
import { AuthModule, UserModule } from '@authumn/angular'
import { AuthInterceptor } from '@authumn/angular'

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    RouterModule.forRoot(
      routes,
      {
        useHash: false
      }
    ),

    StoreModule.forRoot(
      ...
    ),

    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    }),

    StoreDevtoolsModule.instrument({
      name: 'Chix DevTools',
      logOnly: environment.production
    }),

    EffectsModule.forRoot(
      []
    ),

    AuthModule.forRoot({
      api: {
        loginUrl: 'http://localhost:5001/token/login',
        registerUrl: 'http://localhost:5000/user/register'
      },
      routes: {
        return: ['/'],
        login: ['user', 'login']
      },
      resourceServers: [
        'http://localhost:5002'
      ]
    }),

    UserModule.forRoot({
      framework: 'bootstrap-3',
      api: {
        url: 'http://localhost:5000',
        registerUrl: 'http://localhost:5000/user/register'
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Rob Halff](mailto:rob.halff@gmail.com)
