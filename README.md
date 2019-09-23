# Authumn Angular

This package provides a client side login flow for interacting with an api protected by the Authumn Authentication service.

Prior to using this package make sure you have configured the backend correctly.

The package provides forms for the following frontend libraries:
  - Angular Material
  - Bootstrap3
  - Bootstrap4

  State Management is done using ngxs.

### Setup

The following provides an example module which sets up Authumn Angular for your frontend project.

The example is using bootstrap4, which can be switched out for bootstrap3 or material.

```typescript
 import { ModuleWithProviders, NgModule } from '@angular/core'
 import { AuthumnAngularModule } from '@authumn/angular'
 import { Bootstrap4TemplatesModule } from '@authumn/angular-templates-bootstrap4'
 import {
    Bootstrap4Framework,
    Bootstrap4FrameworkModule,
    JsonSchemaFormModule
} from 'angular2-json-schema-form'

 // Not strictly required.
 // import 'hammerjs'

 export const authumnModule = AuthumnAngularModule.forRoot({
   api: {
     loginUrl: 'https://api.chix.io/v1/auth/login',
     profileUrl: 'https://api.chix.io/v1/user',
     registerUrl: 'https://api.chix.io/v1/user/register'
   },
   routes: {
     return: ['/projects'],
     login: ['user', 'login']
   },
   resourceServers: [
     'https://api.chix.io/v1'
   ]
 })

 export const jsonSchemaFormModuleForRoot: ModuleWithProviders = JsonSchemaFormModule.forRoot(
   Bootstrap4Framework
 )

 // @dynamic
 @NgModule({
   imports: [
     Bootstrap4FrameworkModule,
     Bootstrap4TemplatesModule,
     jsonSchemaFormModuleForRoot,
     authumnModule,
   ]
 })
 export class XAuthModule {}
 ```

### Backend

Although authumn angular is meant as a generic oauth solution, a backend
implementation is available at https://github.com/authumn/authumn-gateway
