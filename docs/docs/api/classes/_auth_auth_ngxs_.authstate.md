# \_auth\_auth\_ngxs\_.authstate

[API](../../api-1.md) &gt; ["auth/auth.ngxs"](../modules/_auth_auth_ngxs_.md) &gt; [AuthState](_auth_auth_ngxs_.authstate.md)

## Class: AuthState

### Hierarchy

**AuthState**

### Index

#### Constructors

* [constructor](_auth_auth_ngxs_.authstate.md#constructor)

#### Methods

* [authenticated](_auth_auth_ngxs_.authstate.md#authenticated)
* [authenticationRedirect](_auth_auth_ngxs_.authstate.md#authenticationredirect)
* [login](_auth_auth_ngxs_.authstate.md#login)
* [logout](_auth_auth_ngxs_.authstate.md#logout)
* [selectorAuthReturnUrl](_auth_auth_ngxs_.authstate.md#selectorauthreturnurl)
* [selectorIsAuthenticated](_auth_auth_ngxs_.authstate.md#selectorisauthenticated)

### Constructors

#### constructor

⊕ **new AuthState**\(authConfig: [_AuthConfig_](_auth_auth_config_.authconfig.md), authService: [_AuthService_](_auth_auth_service_.authservice.md)\): [AuthState](_auth_auth_ngxs_.authstate.md)

_Defined in _[_auth/auth.ngxs.ts:24_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.ngxs.ts#L24)

**Parameters:**

| Param | Type |
| --- | --- |
| authConfig | [AuthConfig](_auth_auth_config_.authconfig.md) |
| authService | [AuthService](_auth_auth_service_.authservice.md) |

**Returns:** [AuthState](_auth_auth_ngxs_.authstate.md)

### Methods

#### authenticated

▸ **authenticated**\(**namedParameters: **`object`**, **namedParameters: `object`\): `void`

_Defined in _[_auth/auth.ngxs.ts:53_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.ngxs.ts#L53)

**Parameters:**

| Param | Type |
| --- | --- |
| \_\_namedParameters | `object` |
| \_\_namedParameters | `object` |

**Returns:** `void`

#### authenticationRedirect

▸ **authenticationRedirect**\(**namedParameters: **`object`**, **namedParameters: `object`\): `void`

_Defined in _[_auth/auth.ngxs.ts:41_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.ngxs.ts#L41)

**Parameters:**

| Param | Type |
| --- | --- |
| \_\_namedParameters | `object` |
| \_\_namedParameters | `object` |

**Returns:** `void`

#### login

▸ **login**\(**namedParameters: **`object`**, **namedParameters: `object`\): `void`

_Defined in _[_auth/auth.ngxs.ts:71_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.ngxs.ts#L71)

**Parameters:**

| Param | Type |
| --- | --- |
| \_\_namedParameters | `object` |
| \_\_namedParameters | `object` |

**Returns:** `void`

#### logout

▸ **logout**\(\_\_namedParameters: `object`\): `void`

_Defined in _[_auth/auth.ngxs.ts:89_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.ngxs.ts#L89)

**Parameters:**

| Param | Type |
| --- | --- |
| \_\_namedParameters | `object` |

**Returns:** `void`

#### `<Static>` selectorAuthReturnUrl

▸ **selectorAuthReturnUrl**\(state: [_AuthStateModel_](../interfaces/_auth_auth_ngxs_.authstatemodel.md)\): `string`

_Defined in _[_auth/auth.ngxs.ts:36_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.ngxs.ts#L36)

**Parameters:**

| Param | Type |
| --- | --- |
| state | [AuthStateModel](../interfaces/_auth_auth_ngxs_.authstatemodel.md) |

**Returns:** `string`

#### `<Static>` selectorIsAuthenticated

▸ **selectorIsAuthenticated**\(state: [_AuthStateModel_](../interfaces/_auth_auth_ngxs_.authstatemodel.md)\): `boolean`

_Defined in _[_auth/auth.ngxs.ts:31_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.ngxs.ts#L31)

**Parameters:**

| Param | Type |
| --- | --- |
| state | [AuthStateModel](../interfaces/_auth_auth_ngxs_.authstatemodel.md) |

**Returns:** `boolean`

