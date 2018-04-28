# \_auth\_auth\_actions\_

[API](../../api-1.md) &gt; ["auth/auth.actions"](_auth_auth_actions_.md)

## External module: "auth/auth.actions"

### Index

#### Classes

* [AuthActions](../classes/_auth_auth_actions_.authactions.md)
* [AuthAuthenticatedAction](../classes/_auth_auth_actions_.authauthenticatedaction.md)
* [AuthAuthenticationErrorAction](../classes/_auth_auth_actions_.authauthenticationerroraction.md)
* [AuthAuthenticationRedirectAction](../classes/_auth_auth_actions_.authauthenticationredirectaction.md)

#### Type aliases

* [AuthAction](_auth_auth_actions_.md#authaction)
* [ErrorPayload](_auth_auth_actions_.md#errorpayload)
* [RedirectPayload](_auth_auth_actions_.md#redirectpayload)

### Type aliases

#### AuthAction

**ΤAuthAction**: [_AuthAuthenticatedAction_](../classes/_auth_auth_actions_.authauthenticatedaction.md)_ \| _[_AuthAuthenticationErrorAction_](../classes/_auth_auth_actions_.authauthenticationerroraction.md)_ \| _[_AuthAuthenticationRedirectAction_](../classes/_auth_auth_actions_.authauthenticationredirectaction.md)_ _

_Defined in _[_auth/auth.actions.ts:39_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.actions.ts#L39)

#### ErrorPayload

**ΤErrorPayload**: `object`

_Defined in _[_auth/auth.actions.ts:11_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.actions.ts#L11)

**Type declaration**

message: `string`

#### RedirectPayload

**ΤRedirectPayload**: `object`

_Defined in _[_auth/auth.actions.ts:7_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.actions.ts#L7)

**Type declaration**

returnUrl: `string` \| `string`\[\]

