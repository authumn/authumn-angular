[API](../README.md) > ["auth/auth.service"](../modules/_auth_auth_service_.md) > [AuthService](../classes/_auth_auth_service_.authservice.md)

# Class: AuthService

## Hierarchy

**AuthService**

## Index

### Constructors

* [constructor](_auth_auth_service_.authservice.md#constructor)

### Methods

* [getAuthorizationHeader](_auth_auth_service_.authservice.md#getauthorizationheader)
* [getToken](_auth_auth_service_.authservice.md#gettoken)
* [isAuthenticated](_auth_auth_service_.authservice.md#isauthenticated)
* [isExpired](_auth_auth_service_.authservice.md#isexpired)
* [login](_auth_auth_service_.authservice.md#login)
* [logout](_auth_auth_service_.authservice.md#logout)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AuthService**(authProvider: *[AuthProvider](_auth_provider_auth_provider_.authprovider.md)*): [AuthService](_auth_auth_service_.authservice.md)

*Defined in [auth/auth.service.ts:6](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.service.ts#L6)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| authProvider | [AuthProvider](_auth_provider_auth_provider_.authprovider.md) | 

**Returns:** [AuthService](_auth_auth_service_.authservice.md)

___

## Methods

<a id="getauthorizationheader"></a>

###  getAuthorizationHeader

▸ **getAuthorizationHeader**(): `string` |`false`

*Defined in [auth/auth.service.ts:26](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.service.ts#L26)*

**Returns:** `string` |
`false`

___
<a id="gettoken"></a>

###  getToken

▸ **getToken**(): `any`

*Defined in [auth/auth.service.ts:10](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.service.ts#L10)*

**Returns:** `any`

___
<a id="isauthenticated"></a>

###  isAuthenticated

▸ **isAuthenticated**(): `boolean`

*Defined in [auth/auth.service.ts:14](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.service.ts#L14)*

**Returns:** `boolean`

___
<a id="isexpired"></a>

###  isExpired

▸ **isExpired**(): `boolean`

*Defined in [auth/auth.service.ts:20](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.service.ts#L20)*

**Returns:** `boolean`

___
<a id="login"></a>

###  login

▸ **login**(username: *`string`*, password: *`string`*): `Observable`<`any`>

*Defined in [auth/auth.service.ts:40](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.service.ts#L40)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| username | `string` | 
| password | `string` | 

**Returns:** `Observable`<`any`>

___
<a id="logout"></a>

###  logout

▸ **logout**(): `void`

*Defined in [auth/auth.service.ts:56](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.service.ts#L56)*

**Returns:** `void`

___

