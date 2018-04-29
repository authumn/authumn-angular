# Templates

All forms in the user module are rendered using [Angular2 Schema Form](https://github.com/dschnelldavis/angular2-json-schema-form)
It supports rendering for several css frameworks.

Authumn Angular supports the following frameworks:
 - bootstrap-3
 - material-design 
 
In order to support a good and decent out-of-the-box experience for Authumn Angular,
there are standard components available for registration/login etc.

While the ways of displaying login and registration fields are versatile, some common components can be identified:

 - login form `<authumn-login />`
 - registration form `<authumn-registration />`
 - social buttons `<authumn-social />`
 
In general you will not use these components directly, but always
embed them within a custom form or one of the prefab templates available.

None of the components receive any attributes which is intended.
Any configuration which can be applied should be done in the forRoot() configuration of the UserModule.

### Login Form

The bare login form element is defined as:

`<authumn-login></authumn-login>`

### Registration Form

The bare registration form element is defined as:

`<authumn-registration></authumn-registration>`

