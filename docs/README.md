# @authumn/angular

## Installation

To install this library, run:

```bash
$ npm install @authumn/angular --save
```

App must setup ngrx module.


#### Token based authentication

The auth module will send at least `email` and `password` to the authentication server.

This information is send using the Content-type `application/x-www-form-urlencoded`.

The server is expected to authenticate this request and send back a JSON response containing at least the following data:

```text
{
 "access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2NoaXguaW8iLCJzdWIiOiI1YWE1MTU0OWRmNGJlYzAwMGY0YmMxMTgiLCJhdWQiOiJjbGllbnRfaWQiLCJzY29wZXMiOltdLCJlbWFpbCI6InJoYWxmZkB5YWhvby5jb20iLCJleHAiOjE1MjcxNDYxODksImlhdCI6MTUyMTAyNjE4OSwianRpIjoiM2NiMGE2NDgtMjNlYy00NWQ5LTk5ZGMtN2U3NTI3MTVlMzE0In0.pQEsbpAIPX450USc62_NjTaOo1dt3P_csIbFjRHCv4c",
 "expires_in":3599
}
```

The access token will be used in any further request to any of the endpoints targeted at the `resourceServers` defined earlier in the configuration.

The access token will automatically appear in the header like so:

```text
Authorization: Bearer <access_token>
```

Any other requests will be left untouched and will not contain this authorization header.

### Setup

The auth module requires ngrx to have been setup. You do not have to configure any routes and effects yourself as this is done by the auth module.

The auth module will claim the `auth` property within your ngrx store to provide the authenticated information. Currently this is just a flag whether you are authenticated or not.

Usage:

```typescript
import {
  AuthModule,
  AuthService
} from '@authumn/angular'

@NgModule({
  ...,
  imports: [
    ...,
    ...<general ngrx store setup>,
    AuthModule.forRoot({
      api: {
        loginUrl: 'https://api.chix.io/api/auth/login',
        registerUrl: 'https://api.chix.io/api/user/register'
      },
      routes: {
        return: ['/'],
        login: ['user', 'login']
      },
      resourceServers: [
        'http://api.chix.io'
      ]
    })
  ]
})
export class AppModule { }
```

### AuthGuard

The `AuthGuard` can be used to protect your routes, e.g.:

```typescript
import { AuthGuard } from '@authumn/angular'

export const routes: Routes = [
  {
    path: '',
    component: MyComponent,
    canActivate: [
      AuthGuard
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
```

Whenever the user tries to access a protected route they will be redirected to the login form. The action being dispatched is `AuthAuthenticationRedirectAction`

## UserModule

The user module tries to be be a generic solution to login and registration and contains the user facing part of authumn.

It makes use of json schema to create the forms. These schema's are designed to be extendable, which means you can request for additional information during login and registration and it will be send along to the server as well.

This information is then validated based on these schemas. The fields `username` and `password` are always expected to be present.

Usage of the UserModule is not required to make use of the AuthModule.

## Usage

```text
import {
  UserModule
} from '@authumn/angular

@NgModule({
  imports: [
    UserModule.forRoot({
      api: {
        url: 'https://user.chix.io',
        registerUrl: 'https://api.chix.io/api/user/register'
      }
    })
  ]
})
export class AppModule { }
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

