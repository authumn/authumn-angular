# \_auth\_auth\_service\_.authservice

[API](../../api-1.md) &gt; ["auth/auth.service"](../modules/_auth_auth_service_.md) &gt; [AuthService](_auth_auth_service_.authservice.md)

## Class: AuthService

### Hierarchy

**AuthService**

### Index

#### Constructors

* [constructor](_auth_auth_service_.authservice.md#constructor)

#### Methods

* [getAuthorizationHeader](_auth_auth_service_.authservice.md#getauthorizationheader)
* [getToken](_auth_auth_service_.authservice.md#gettoken)
* [isAuthenticated](_auth_auth_service_.authservice.md#isauthenticated)
* [isExpired](_auth_auth_service_.authservice.md#isexpired)
* [login](_auth_auth_service_.authservice.md#login)
* [logout](_auth_auth_service_.authservice.md#logout)

### Constructors

#### constructor

⊕ **new AuthService**\(authProvider: [_AuthProvider_](_auth_provider_auth_provider_.authprovider.md)\): [AuthService](_auth_auth_service_.authservice.md)

_Defined in _[_auth/auth.service.ts:6_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.service.ts#L6)

**Parameters:**

| Param | Type |
| --- | --- |
| authProvider | [AuthProvider](_auth_provider_auth_provider_.authprovider.md) |

**Returns:** [AuthService](_auth_auth_service_.authservice.md)

### Methods

#### getAuthorizationHeader

▸ **getAuthorizationHeader**\(\): `string` \|`false`

_Defined in _[_auth/auth.service.ts:26_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.service.ts#L26)

**Returns:** `string` \| `false`

#### getToken

▸ **getToken**\(\): `any`

_Defined in _[_auth/auth.service.ts:10_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.service.ts#L10)

**Returns:** `any`

#### isAuthenticated

▸ **isAuthenticated**\(\): `boolean`

_Defined in _[_auth/auth.service.ts:14_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.service.ts#L14)

**Returns:** `boolean`

#### isExpired

▸ **isExpired**\(\): `boolean`

_Defined in _[_auth/auth.service.ts:20_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.service.ts#L20)

**Returns:** `boolean`

#### login

▸ **login**\(username: `string`, password: `string`\): `Observable`&lt;`any`&gt;

_Defined in _[_auth/auth.service.ts:40_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.service.ts#L40)

**Parameters:**

| Param | Type |
| --- | --- |
| username | `string` |
| password | `string` |

**Returns:** `Observable`&lt;`any`&gt;

#### logout

▸ **logout**\(\): `void`

_Defined in _[_auth/auth.service.ts:56_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.service.ts#L56)

**Returns:** `void`

