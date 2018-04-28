# \_auth\_provider\_auth\_provider\_.authprovider

[API](../../api-1.md) &gt; ["auth/provider/auth.provider"](../modules/_auth_provider_auth_provider_.md) &gt; [AuthProvider](_auth_provider_auth_provider_.authprovider.md)

## Class: AuthProvider

### Hierarchy

**AuthProvider**

### Implements

* [AuthProviderInterface](../interfaces/_auth_provider_auth_provider_interface_.authproviderinterface.md)

### Index

#### Constructors

* [constructor](_auth_provider_auth_provider_.authprovider.md#constructor)

#### Methods

* [login](_auth_provider_auth_provider_.authprovider.md#login)
* [logout](_auth_provider_auth_provider_.authprovider.md#logout)
* [register](_auth_provider_auth_provider_.authprovider.md#register)

### Constructors

#### constructor

⊕ **new AuthProvider**\(http: `HttpClient`, authConfig: [_AuthConfig_](_auth_auth_config_.authconfig.md)\): [AuthProvider](_auth_provider_auth_provider_.authprovider.md)

_Defined in _[_auth/provider/auth.provider.ts:11_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/provider/auth.provider.ts#L11)

**Parameters:**

| Param | Type |
| --- | --- |
| http | `HttpClient` |
| authConfig | [AuthConfig](_auth_auth_config_.authconfig.md) |

**Returns:** [AuthProvider](_auth_provider_auth_provider_.authprovider.md)

### Methods

#### login

▸ **login**\(username: `string`, password: `string`\): `Observable`&lt;`any`&gt;

_Defined in _[_auth/provider/auth.provider.ts:17_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/provider/auth.provider.ts#L17)

**Parameters:**

| Param | Type |
| --- | --- |
| username | `string` |
| password | `string` |

**Returns:** `Observable`&lt;`any`&gt;

#### logout

▸ **logout**\(\): `void`

_Defined in _[_auth/provider/auth.provider.ts:65_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/provider/auth.provider.ts#L65)

**Returns:** `void`

#### register

▸ **register**\(username: `string`, password: `string`\): `Observable`&lt;`any`&gt;

_Defined in _[_auth/provider/auth.provider.ts:43_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/provider/auth.provider.ts#L43)

**Parameters:**

| Param | Type |
| --- | --- |
| username | `string` |
| password | `string` |

**Returns:** `Observable`&lt;`any`&gt;

