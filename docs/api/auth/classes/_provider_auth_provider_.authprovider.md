[API](../README.md) > ["provider/auth.provider"](../modules/_provider_auth_provider_.md) > [AuthProvider](../classes/_provider_auth_provider_.authprovider.md)

# Class: AuthProvider

## Hierarchy

**AuthProvider**

## Implements

* [AuthProviderInterface](../interfaces/_provider_auth_provider_interface_.authproviderinterface.md)

## Index

### Constructors

* [constructor](_provider_auth_provider_.authprovider.md#constructor)

### Methods

* [login](_provider_auth_provider_.authprovider.md#login)
* [logout](_provider_auth_provider_.authprovider.md#logout)
* [register](_provider_auth_provider_.authprovider.md#register)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AuthProvider**(http: *`HttpClient`*, authConfig: *[AuthConfig](_auth_config_.authconfig.md)*): [AuthProvider](_provider_auth_provider_.authprovider.md)

*Defined in [provider/auth.provider.ts:11](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/auth/provider/auth.provider.ts#L11)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| http | `HttpClient` | 
| authConfig | [AuthConfig](_auth_config_.authconfig.md) | 

**Returns:** [AuthProvider](_provider_auth_provider_.authprovider.md)

___

## Methods

<a id="login"></a>

###  login

▸ **login**(username: *`string`*, password: *`string`*): `Observable`<`any`>

*Defined in [provider/auth.provider.ts:17](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/auth/provider/auth.provider.ts#L17)*

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

*Defined in [provider/auth.provider.ts:65](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/auth/provider/auth.provider.ts#L65)*

**Returns:** `void`

___
<a id="register"></a>

###  register

▸ **register**(username: *`string`*, password: *`string`*): `Observable`<`any`>

*Defined in [provider/auth.provider.ts:43](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/auth/provider/auth.provider.ts#L43)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| username | `string` | 
| password | `string` | 

**Returns:** `Observable`<`any`>

___

