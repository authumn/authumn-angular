# \_user\_login\_login\_component\_.logincomponent

[API](../../api-1.md) &gt; ["user/login/login.component"](../modules/_user_login_login_component_.md) &gt; [LoginComponent](_user_login_login_component_.logincomponent.md)

## Class: LoginComponent

The login component

### Hierarchy

**LoginComponent**

### Implements

* `OnInit`

### Index

#### Constructors

* [constructor](_user_login_login_component_.logincomponent.md#constructor)

#### Properties

* [formActive](_user_login_login_component_.logincomponent.md#formactive)
* [formOptions](_user_login_login_component_.logincomponent.md#formoptions)
* [loading](_user_login_login_component_.logincomponent.md#loading)
* [model](_user_login_login_component_.logincomponent.md#model)

#### Methods

* [isValid](_user_login_login_component_.logincomponent.md#isvalid)
* [login](_user_login_login_component_.logincomponent.md#login)
* [ngOnInit](_user_login_login_component_.logincomponent.md#ngoninit)
* [onChanges](_user_login_login_component_.logincomponent.md#onchanges)
* [onSubmit](_user_login_login_component_.logincomponent.md#onsubmit)
* [validationErrors](_user_login_login_component_.logincomponent.md#validationerrors)

#### Object literals

* [formObject](_user_login_login_component_.logincomponent.md#formobject)

### Constructors

#### constructor

⊕ **new LoginComponent**\(route: `ActivatedRoute`, config: [_UserConfig_](_user_user_config_.userconfig.md), router: `Router`, store: `Store`\): [LoginComponent](_user_login_login_component_.logincomponent.md)

_Defined in _[_user/login/login.component.ts:27_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L27)

**Parameters:**

| Param | Type |
| --- | --- |
| route | `ActivatedRoute` |
| config | [UserConfig](_user_user_config_.userconfig.md) |
| router | `Router` |
| store | `Store` |

**Returns:** [LoginComponent](_user_login_login_component_.logincomponent.md)

### Properties

#### formActive

**● formActive**: `boolean` = true

_Defined in _[_user/login/login.component.ts:22_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L22)

#### formOptions

**● formOptions**: `object`

_Defined in _[_user/login/login.component.ts:27_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L27)

**Type declaration**

#### loading

**● loading**: `boolean` = true

_Defined in _[_user/login/login.component.ts:20_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L20)

#### model

**● model**: `any`

_Defined in _[_user/login/login.component.ts:19_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L19)

### Methods

#### isValid

▸ **isValid**\(event: `any`\): `boolean`

_Defined in _[_user/login/login.component.ts:61_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L61)

**Parameters:**

| Param | Type |
| --- | --- |
| event | `any` |

**Returns:** `boolean`

#### login

▸ **login**\(\): `void`

_Defined in _[_user/login/login.component.ts:40_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L40)

**Returns:** `void`

#### ngOnInit

▸ **ngOnInit**\(\): `void`

_Defined in _[_user/login/login.component.ts:36_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L36)

**Returns:** `void`

#### onChanges

▸ **onChanges**\(event: `any`\): `void`

_Defined in _[_user/login/login.component.ts:57_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L57)

**Parameters:**

| Param | Type |
| --- | --- |
| event | `any` |

**Returns:** `void`

#### onSubmit

▸ **onSubmit**\(event: `any`\): `void`

_Defined in _[_user/login/login.component.ts:49_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L49)

**Parameters:**

| Param | Type |
| --- | --- |
| event | `any` |

**Returns:** `void`

#### validationErrors

▸ **validationErrors**\(event: `any`\): `void`

_Defined in _[_user/login/login.component.ts:53_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L53)

**Parameters:**

| Param | Type |
| --- | --- |
| event | `any` |

**Returns:** `void`

### Object literals

#### formObject

**formObject**: `object`

_Defined in _[_user/login/login.component.ts:23_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L23)

**layout**

**● layout**: _\(_`object`_ \|_`object`_ \|_`object`_\)\[\]_

_Defined in _[_user/login/login.component.ts:24_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L24)

**schema**

**● schema**: `object`

_Defined in _[_user/login/login.component.ts:25_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L25)

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

