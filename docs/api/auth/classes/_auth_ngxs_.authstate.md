[API](../README.md) > ["auth.ngxs"](../modules/_auth_ngxs_.md) > [AuthState](../classes/_auth_ngxs_.authstate.md)

# Class: AuthState

## Hierarchy

**AuthState**

## Index

### Constructors

* [constructor](_auth_ngxs_.authstate.md#constructor)

### Methods

* [authenticated](_auth_ngxs_.authstate.md#authenticated)
* [authenticationRedirect](_auth_ngxs_.authstate.md#authenticationredirect)
* [login](_auth_ngxs_.authstate.md#login)
* [logout](_auth_ngxs_.authstate.md#logout)
* [selectorAuthReturnUrl](_auth_ngxs_.authstate.md#selectorauthreturnurl)
* [selectorIsAuthenticated](_auth_ngxs_.authstate.md#selectorisauthenticated)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AuthState**(authConfig: *[AuthConfig](_auth_config_.authconfig.md)*, authService: *[AuthService](_auth_service_.authservice.md)*): [AuthState](_auth_ngxs_.authstate.md)

*Defined in [auth.ngxs.ts:24](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/auth/auth.ngxs.ts#L24)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| authConfig | [AuthConfig](_auth_config_.authconfig.md) | 
| authService | [AuthService](_auth_service_.authservice.md) | 

**Returns:** [AuthState](_auth_ngxs_.authstate.md)

___

## Methods

<a id="authenticated"></a>

###  authenticated

▸ **authenticated**(__namedParameters: *`object`*, __namedParameters: *`object`*): `void`

*Defined in [auth.ngxs.ts:53](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/auth/auth.ngxs.ts#L53)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` | 
| __namedParameters | `object` | 

**Returns:** `void`

___
<a id="authenticationredirect"></a>

###  authenticationRedirect

▸ **authenticationRedirect**(__namedParameters: *`object`*, __namedParameters: *`object`*): `void`

*Defined in [auth.ngxs.ts:41](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/auth/auth.ngxs.ts#L41)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` | 
| __namedParameters | `object` | 

**Returns:** `void`

___
<a id="login"></a>

###  login

▸ **login**(__namedParameters: *`object`*, __namedParameters: *`object`*): `void`

*Defined in [auth.ngxs.ts:71](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/auth/auth.ngxs.ts#L71)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` | 
| __namedParameters | `object` | 

**Returns:** `void`

___
<a id="logout"></a>

###  logout

▸ **logout**(__namedParameters: *`object`*): `void`

*Defined in [auth.ngxs.ts:89](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/auth/auth.ngxs.ts#L89)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` | 

**Returns:** `void`

___
<a id="selectorauthreturnurl"></a>

### `<Static>` selectorAuthReturnUrl

▸ **selectorAuthReturnUrl**(state: *[AuthStateModel](../interfaces/_auth_ngxs_.authstatemodel.md)*): `string`

*Defined in [auth.ngxs.ts:36](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/auth/auth.ngxs.ts#L36)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | [AuthStateModel](../interfaces/_auth_ngxs_.authstatemodel.md) | 

**Returns:** `string`

___
<a id="selectorisauthenticated"></a>

### `<Static>` selectorIsAuthenticated

▸ **selectorIsAuthenticated**(state: *[AuthStateModel](../interfaces/_auth_ngxs_.authstatemodel.md)*): `boolean`

*Defined in [auth.ngxs.ts:31](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/auth/auth.ngxs.ts#L31)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | [AuthStateModel](../interfaces/_auth_ngxs_.authstatemodel.md) | 

**Returns:** `boolean`

___

