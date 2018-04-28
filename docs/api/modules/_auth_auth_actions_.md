[API](../README.md) > ["auth/auth.actions"](../modules/_auth_auth_actions_.md)

# External module: "auth/auth.actions"

## Index

### Classes

* [AuthActions](../classes/_auth_auth_actions_.authactions.md)
* [AuthAuthenticatedAction](../classes/_auth_auth_actions_.authauthenticatedaction.md)
* [AuthAuthenticationErrorAction](../classes/_auth_auth_actions_.authauthenticationerroraction.md)
* [AuthAuthenticationRedirectAction](../classes/_auth_auth_actions_.authauthenticationredirectaction.md)

### Type aliases

* [AuthAction](_auth_auth_actions_.md#authaction)
* [ErrorPayload](_auth_auth_actions_.md#errorpayload)
* [RedirectPayload](_auth_auth_actions_.md#redirectpayload)

---

## Type aliases

<a id="authaction"></a>

###  AuthAction

**ΤAuthAction**: *[AuthAuthenticatedAction](../classes/_auth_auth_actions_.authauthenticatedaction.md) |
[AuthAuthenticationErrorAction](../classes/_auth_auth_actions_.authauthenticationerroraction.md) |
[AuthAuthenticationRedirectAction](../classes/_auth_auth_actions_.authauthenticationredirectaction.md)
*

*Defined in [auth/auth.actions.ts:39](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.actions.ts#L39)*

___
<a id="errorpayload"></a>

###  ErrorPayload

**ΤErrorPayload**: *`object`*

*Defined in [auth/auth.actions.ts:11](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.actions.ts#L11)*

#### Type declaration

 message: `string`

___
<a id="redirectpayload"></a>

###  RedirectPayload

**ΤRedirectPayload**: *`object`*

*Defined in [auth/auth.actions.ts:7](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.actions.ts#L7)*

#### Type declaration

 returnUrl: `string` |
`string`[]

___

