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
