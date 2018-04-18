# User Module

This module implements the login flow.

## Components

### Register POST(/user/register)

A user registers by providing an email and their desired password.

The user agrees to the terms of service and optionally signs up for the newsletter.

Once the registration is submitted a registration action is dispatch.

This action will cause a POST request with the content type `application/x-www-form-urlencoded`.

The receiving server is an OAuth2 compatible api. The login flow triggered is of the `password` grant type.

The registration process will register an account at `/api/user/registration` endpoint.

This endpoint is responsible for creating the account and directly sending back a token.

This response, the token is then used to do privileged requests to the other apis.

The response for registration is the same as for login, so registration equals login in this case.

Still to be implemented is the email flow, which will send an email to the user to confirm
the email address and make the registration permanent.

### Login POST(/user/login)

To login a user provides his email and password, if successful a token will be returned in the body of the response.

This token is used to make requests to protected resources.

The login is triggered by dispatching a login action. 


### Logout GET|POST(/user/logout)

When a user visits the logout page a logout action will be dispatch.
And remove the current credential information from state/localstorage.
Effectively signing out the user.


### Lost password POST(user/lost_password) (TODO)

This page can be visited to retrieve a new password.
The user has to enter his email in order to start the new password flow.

A lost password action will be dispatched.

#### Auth credential Management

Once new credentials are received they will be maintained by the authentication system.

There are quite a few things which need to be taken care of:
 - Consuming the response of successful login
 - Adding credentials to the header of each authorized request.
   Also note that calls to external api's should *not* include these credentials.
 - Storing the received credentials somewhere where it will survive page refreshes.
   LocalStorage is not the best place to do this.. 
 - Refresh the received access token.
 - The view layer and controllers should be aware of being authenticated.
   The obious place is to do this in state and make it available to the controllers.
   It's also possible to consult the services directly, but to stay consistent
   everything will be done by dispatches and selections from the store.
 - Guards are used to prevent routing to unauthorized routes, most parts of the system
   are meant to be inaccessible for unauthenticated users. This is important while
   many components will expect credentials and profile information to be present.
   One should not be able to revisit a location when e.g. your login has expired.
 - Interceptors are used to automatically add Authorization headers to outgoing requests.

# Schema

```
email
password
agree
...etc.
```
