# Actions

The AuthModule will dispatched the following actions:

 * AuthAuthenticationErrorAction
 * AuthAuthenticationRedirectAction
 * AuthAuthenticateAction
 
### AuthAuthenticationErrorAction

Will be dispatched when authentications fails.

When this action is triggered the Auth Module will currently do nothing.

It's therefor up to the integrator to handle this error
within it's notification system.

In order to do so you must listen for this action using ngxs
and present the user with a proper error message.

### AuthAuthenticationRedirectAction

Will be dispatch when the user is not authenticated.

TODO: change this to AuthUnauthorized

### AuthAuthenticatedAction

Is dispatched when the user is successfully authenticated.

When this action is triggered the Auth Module will:

 * set the `auth.isAuthenticated` state to `true`
 * navigates to either the last page visited (`auth.returnUrl`) OR the url defined in `this.authConfig.routes.return`
   which is typically the entry page of your application for logged in users.

---

Besides these AuthModule actions, the authmodule also listens to some actions dispatched by the UserModule:

 * UserLoginAction
 * UserLogoutAction
 
TODO: rename these to AuthLoginAction and AuthUserAction
 
### UserLoginAction

Is dispatch when the user has entered the credentials.
The auth module will try to to login the user using the `auth.service`

Which will result in either a `AuthAuthenticatedAction` or a `AuthAuthenticationErrorAction` being dispatched.
 
### UserLogoutAction

When this action is triggered the Auth Module will:
 * logout the user using the `auth.service`
 * set the `auth.isAuthenticated` state to `false`
 * dispatch an `AuthAuthenticationRedirectAction` with a returnUrl of ``
 
TODO: returnUrl must be configurable.
