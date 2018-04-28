# \_auth\_provider\_auth\_provider\_interface\_.authproviderinterface

[API](../../api-1.md) &gt; ["auth/provider/auth.provider.interface"](../modules/_auth_provider_auth_provider_interface_.md) &gt; [AuthProviderInterface](_auth_provider_auth_provider_interface_.authproviderinterface.md)

## Interface: AuthProviderInterface

### Hierarchy

**AuthProviderInterface**

### Implemented by

* [AuthProvider](../classes/_auth_provider_auth_provider_.authprovider.md)

### Index

#### Properties

* [forgotPasswordEmail](_auth_provider_auth_provider_interface_.authproviderinterface.md#forgotpasswordemail)
* [forgotPasswordUser](_auth_provider_auth_provider_interface_.authproviderinterface.md#forgotpassworduser)
* [login](_auth_provider_auth_provider_interface_.authproviderinterface.md#login)
* [logout](_auth_provider_auth_provider_interface_.authproviderinterface.md#logout)
* [register](_auth_provider_auth_provider_interface_.authproviderinterface.md#register)

### Properties

#### `<Optional>` forgotPasswordEmail

**● forgotPasswordEmail**: `function`

_Defined in _[_auth/provider/auth.provider.interface.ts:6_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/provider/auth.provider.interface.ts#L6)

**Type declaration**

▸\(email: `any`\): `void`

**Parameters:**

| Param | Type |
| --- | --- |
| email | `any` |

**Returns:** `void`

#### `<Optional>` forgotPasswordUser

**● forgotPasswordUser**: `function`

_Defined in _[_auth/provider/auth.provider.interface.ts:7_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/provider/auth.provider.interface.ts#L7)

**Type declaration**

▸\(username: `any`\): `void`

**Parameters:**

| Param | Type |
| --- | --- |
| username | `any` |

**Returns:** `void`

#### login

**● login**: `function`

_Defined in _[_auth/provider/auth.provider.interface.ts:4_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/provider/auth.provider.interface.ts#L4)

**Type declaration**

▸\(username: `string`, password: `string`\): `Observable`&lt;`any`&gt;

**Parameters:**

| Param | Type |
| --- | --- |
| username | `string` |
| password | `string` |

**Returns:** `Observable`&lt;`any`&gt;

#### `<Optional>` logout

**● logout**: `function`

_Defined in _[_auth/provider/auth.provider.interface.ts:8_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/provider/auth.provider.interface.ts#L8)

**Type declaration**

▸\(\): `void`

**Returns:** `void`

#### `<Optional>` register

**● register**: `function`

_Defined in _[_auth/provider/auth.provider.interface.ts:5_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/provider/auth.provider.interface.ts#L5)

**Type declaration**

▸\(email: `any`, password: `any`\): `void`

**Parameters:**

| Param | Type |
| --- | --- |
| email | `any` |
| password | `any` |

**Returns:** `void`

