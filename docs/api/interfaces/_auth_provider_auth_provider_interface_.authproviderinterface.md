[API](../README.md) > ["auth/provider/auth.provider.interface"](../modules/_auth_provider_auth_provider_interface_.md) > [AuthProviderInterface](../interfaces/_auth_provider_auth_provider_interface_.authproviderinterface.md)

# Interface: AuthProviderInterface

## Hierarchy

**AuthProviderInterface**

## Implemented by

* [AuthProvider](../classes/_auth_provider_auth_provider_.authprovider.md)

## Index

### Properties

* [forgotPasswordEmail](_auth_provider_auth_provider_interface_.authproviderinterface.md#forgotpasswordemail)
* [forgotPasswordUser](_auth_provider_auth_provider_interface_.authproviderinterface.md#forgotpassworduser)
* [login](_auth_provider_auth_provider_interface_.authproviderinterface.md#login)
* [logout](_auth_provider_auth_provider_interface_.authproviderinterface.md#logout)
* [register](_auth_provider_auth_provider_interface_.authproviderinterface.md#register)

---

## Properties

<a id="forgotpasswordemail"></a>

### `<Optional>` forgotPasswordEmail

**● forgotPasswordEmail**: *`function`*

*Defined in [auth/provider/auth.provider.interface.ts:6](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/provider/auth.provider.interface.ts#L6)*

#### Type declaration
▸(email: *`any`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| email | `any` | 

**Returns:** `void`

___
<a id="forgotpassworduser"></a>

### `<Optional>` forgotPasswordUser

**● forgotPasswordUser**: *`function`*

*Defined in [auth/provider/auth.provider.interface.ts:7](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/provider/auth.provider.interface.ts#L7)*

#### Type declaration
▸(username: *`any`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| username | `any` | 

**Returns:** `void`

___
<a id="login"></a>

###  login

**● login**: *`function`*

*Defined in [auth/provider/auth.provider.interface.ts:4](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/provider/auth.provider.interface.ts#L4)*

#### Type declaration
▸(username: *`string`*, password: *`string`*): `Observable`<`any`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| username | `string` | 
| password | `string` | 

**Returns:** `Observable`<`any`>

___
<a id="logout"></a>

### `<Optional>` logout

**● logout**: *`function`*

*Defined in [auth/provider/auth.provider.interface.ts:8](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/provider/auth.provider.interface.ts#L8)*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="register"></a>

### `<Optional>` register

**● register**: *`function`*

*Defined in [auth/provider/auth.provider.interface.ts:5](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/provider/auth.provider.interface.ts#L5)*

#### Type declaration
▸(email: *`any`*, password: *`any`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| email | `any` | 
| password | `any` | 

**Returns:** `void`

___

