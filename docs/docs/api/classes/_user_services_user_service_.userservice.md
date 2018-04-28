# \_user\_services\_user\_service\_.userservice

[API](../../api-1.md) &gt; ["user/services/user.service"](../modules/_user_services_user_service_.md) &gt; [UserService](_user_services_user_service_.userservice.md)

## Class: UserService

### Hierarchy

**UserService**

### Index

#### Constructors

* [constructor](_user_services_user_service_.userservice.md#constructor)

#### Methods

* [create](_user_services_user_service_.userservice.md#create)
* [delete](_user_services_user_service_.userservice.md#delete)
* [getAll](_user_services_user_service_.userservice.md#getall)
* [getById](_user_services_user_service_.userservice.md#getbyid)
* [update](_user_services_user_service_.userservice.md#update)

### Constructors

#### constructor

⊕ **new UserService**\(http: `HttpClient`, userConfig: [_UserConfig_](_user_user_config_.userconfig.md)\): [UserService](_user_services_user_service_.userservice.md)

_Defined in _[_user/services/user.service.ts:10_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/services/user.service.ts#L10)

**Parameters:**

| Param | Type |
| --- | --- |
| http | `HttpClient` |
| userConfig | [UserConfig](_user_user_config_.userconfig.md) |

**Returns:** [UserService](_user_services_user_service_.userservice.md)

### Methods

#### create

▸ **create**\(user: [_RegistrationPayload_](_user_user_actions_.registrationpayload.md)\): `Observable`&lt;`Object`&gt;

_Defined in _[_user/services/user.service.ts:24_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/services/user.service.ts#L24)

**Parameters:**

| Param | Type |
| --- | --- |
| user | [RegistrationPayload](_user_user_actions_.registrationpayload.md) |

**Returns:** `Observable`&lt;`Object`&gt;

#### delete

▸ **delete**\(\_id: `string`\): `Observable`&lt;`Object`&gt;

_Defined in _[_user/services/user.service.ts:32_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/services/user.service.ts#L32)

**Parameters:**

| Param | Type |
| --- | --- |
| \_id | `string` |

**Returns:** `Observable`&lt;`Object`&gt;

#### getAll

▸ **getAll**\(\): `Observable`&lt;[User](_user_models_user_.user.md)\[\]&gt;

_Defined in _[_user/services/user.service.ts:16_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/services/user.service.ts#L16)

**Returns:** `Observable`&lt;[User](_user_models_user_.user.md)\[\]&gt;

#### getById

▸ **getById**\(id: `any`\): `Observable`&lt;[User](_user_models_user_.user.md)&gt;

_Defined in _[_user/services/user.service.ts:20_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/services/user.service.ts#L20)

**Parameters:**

| Param | Type |
| --- | --- |
| id | `any` |

**Returns:** `Observable`&lt;[User](_user_models_user_.user.md)&gt;

#### update

▸ **update**\(user: [_User_](_user_models_user_.user.md)\): `Observable`&lt;`Object`&gt;

_Defined in _[_user/services/user.service.ts:28_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/services/user.service.ts#L28)

**Parameters:**

| Param | Type |
| --- | --- |
| user | [User](_user_models_user_.user.md) |

**Returns:** `Observable`&lt;`Object`&gt;

