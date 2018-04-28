# \_user\_register\_register\_component\_.registercomponent

[API](../../api-1.md) &gt; ["user/register/register.component"](../modules/_user_register_register_component_.md) &gt; [RegisterComponent](_user_register_register_component_.registercomponent.md)

## Class: RegisterComponent

### Hierarchy

**RegisterComponent**

### Index

#### Constructors

* [constructor](_user_register_register_component_.registercomponent.md#constructor)

#### Properties

* [config](_user_register_register_component_.registercomponent.md#config)
* [formActive](_user_register_register_component_.registercomponent.md#formactive)
* [formOptions](_user_register_register_component_.registercomponent.md#formoptions)
* [loading](_user_register_register_component_.registercomponent.md#loading)
* [model](_user_register_register_component_.registercomponent.md#model)

#### Methods

* [isValid](_user_register_register_component_.registercomponent.md#isvalid)
* [onChanges](_user_register_register_component_.registercomponent.md#onchanges)
* [onSubmit](_user_register_register_component_.registercomponent.md#onsubmit)
* [register](_user_register_register_component_.registercomponent.md#register)
* [validationErrors](_user_register_register_component_.registercomponent.md#validationerrors)

#### Object literals

* [formObject](_user_register_register_component_.registercomponent.md#formobject)

### Constructors

#### constructor

⊕ **new RegisterComponent**\(config: [_AuthConfig_](_auth_auth_config_.authconfig.md), store: `Store`\): [RegisterComponent](_user_register_register_component_.registercomponent.md)

_Defined in _[_user/register/register.component.ts:22_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L22)

**Parameters:**

| Param | Type |
| --- | --- |
| config | [AuthConfig](_auth_auth_config_.authconfig.md) |
| store | `Store` |

**Returns:** [RegisterComponent](_user_register_register_component_.registercomponent.md)

### Properties

#### config

**● config**: [_AuthConfig_](_auth_auth_config_.authconfig.md)

_Defined in _[_user/register/register.component.ts:25_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L25)

#### formActive

**● formActive**: `boolean` = true

_Defined in _[_user/register/register.component.ts:17_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L17)

#### formOptions

**● formOptions**: `object`

_Defined in _[_user/register/register.component.ts:22_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L22)

**Type declaration**

#### loading

**● loading**: `boolean` = true

_Defined in _[_user/register/register.component.ts:16_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L16)

#### model

**● model**: `any`

_Defined in _[_user/register/register.component.ts:15_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L15)

### Methods

#### isValid

▸ **isValid**\(event: `any`\): `boolean`

_Defined in _[_user/register/register.component.ts:48_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L48)

**Parameters:**

| Param | Type |
| --- | --- |
| event | `any` |

**Returns:** `boolean`

#### onChanges

▸ **onChanges**\(event: `any`\): `void`

_Defined in _[_user/register/register.component.ts:44_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L44)

**Parameters:**

| Param | Type |
| --- | --- |
| event | `any` |

**Returns:** `void`

#### onSubmit

▸ **onSubmit**\(event: `any`\): `void`

_Defined in _[_user/register/register.component.ts:35_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L35)

**Parameters:**

| Param | Type |
| --- | --- |
| event | `any` |

**Returns:** `void`

#### register

▸ **register**\(\): `void`

_Defined in _[_user/register/register.component.ts:29_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L29)

**Returns:** `void`

#### validationErrors

▸ **validationErrors**\(event: `any`\): `void`

_Defined in _[_user/register/register.component.ts:40_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L40)

**Parameters:**

| Param | Type |
| --- | --- |
| event | `any` |

**Returns:** `void`

### Object literals

#### formObject

**formObject**: `object`

_Defined in _[_user/register/register.component.ts:18_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L18)

**layout**

**● layout**: _\(_`object`_ \|_`object`_ \|_`object`_\)\[\]_

_Defined in _[_user/register/register.component.ts:19_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L19)

**schema**

**● schema**: `object`

_Defined in _[_user/register/register.component.ts:20_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L20)

**Type declaration**

type: `string`

properties: `object`

email: `object`

format: `string`

title: `string`

type: `string`

password: `object`

title: `string`

type: `string`

password\_repeat: `object`

title: `string`

type: `string`

