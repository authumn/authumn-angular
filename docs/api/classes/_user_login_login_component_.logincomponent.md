[API](../README.md) > ["user/login/login.component"](../modules/_user_login_login_component_.md) > [LoginComponent](../classes/_user_login_login_component_.logincomponent.md)

# Class: LoginComponent

The login component

## Hierarchy

**LoginComponent**

## Implements

* `OnInit`

## Index

### Constructors

* [constructor](_user_login_login_component_.logincomponent.md#constructor)

### Properties

* [formActive](_user_login_login_component_.logincomponent.md#formactive)
* [formOptions](_user_login_login_component_.logincomponent.md#formoptions)
* [loading](_user_login_login_component_.logincomponent.md#loading)
* [model](_user_login_login_component_.logincomponent.md#model)

### Methods

* [isValid](_user_login_login_component_.logincomponent.md#isvalid)
* [login](_user_login_login_component_.logincomponent.md#login)
* [ngOnInit](_user_login_login_component_.logincomponent.md#ngoninit)
* [onChanges](_user_login_login_component_.logincomponent.md#onchanges)
* [onSubmit](_user_login_login_component_.logincomponent.md#onsubmit)
* [validationErrors](_user_login_login_component_.logincomponent.md#validationerrors)

### Object literals

* [formObject](_user_login_login_component_.logincomponent.md#formobject)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new LoginComponent**(route: *`ActivatedRoute`*, config: *[UserConfig](_user_user_config_.userconfig.md)*, router: *`Router`*, store: *`Store`*): [LoginComponent](_user_login_login_component_.logincomponent.md)

*Defined in [user/login/login.component.ts:27](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L27)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| route | `ActivatedRoute` | 
| config | [UserConfig](_user_user_config_.userconfig.md) | 
| router | `Router` | 
| store | `Store` | 

**Returns:** [LoginComponent](_user_login_login_component_.logincomponent.md)

___

## Properties

<a id="formactive"></a>

###  formActive

**● formActive**: *`boolean`* = true

*Defined in [user/login/login.component.ts:22](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L22)*

___
<a id="formoptions"></a>

###  formOptions

**● formOptions**: *`object`*

*Defined in [user/login/login.component.ts:27](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L27)*

#### Type declaration

___
<a id="loading"></a>

###  loading

**● loading**: *`boolean`* = true

*Defined in [user/login/login.component.ts:20](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L20)*

___
<a id="model"></a>

###  model

**● model**: *`any`*

*Defined in [user/login/login.component.ts:19](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L19)*

___

## Methods

<a id="isvalid"></a>

###  isValid

▸ **isValid**(event: *`any`*): `boolean`

*Defined in [user/login/login.component.ts:61](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L61)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `any` | 

**Returns:** `boolean`

___
<a id="login"></a>

###  login

▸ **login**(): `void`

*Defined in [user/login/login.component.ts:40](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L40)*

**Returns:** `void`

___
<a id="ngoninit"></a>

###  ngOnInit

▸ **ngOnInit**(): `void`

*Defined in [user/login/login.component.ts:36](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L36)*

**Returns:** `void`

___
<a id="onchanges"></a>

###  onChanges

▸ **onChanges**(event: *`any`*): `void`

*Defined in [user/login/login.component.ts:57](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L57)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `any` | 

**Returns:** `void`

___
<a id="onsubmit"></a>

###  onSubmit

▸ **onSubmit**(event: *`any`*): `void`

*Defined in [user/login/login.component.ts:49](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L49)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `any` | 

**Returns:** `void`

___
<a id="validationerrors"></a>

###  validationErrors

▸ **validationErrors**(event: *`any`*): `void`

*Defined in [user/login/login.component.ts:53](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L53)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `any` | 

**Returns:** `void`

___

## Object literals

<a id="formobject"></a>

###  formObject

**formObject**: *`object`*

*Defined in [user/login/login.component.ts:23](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L23)*

<a id="formobject.layout"></a>

####  layout

**● layout**: *(`object` |`object` |`object`)[]*

*Defined in [user/login/login.component.ts:24](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L24)*

___
<a id="formobject.schema"></a>

####  schema

**● schema**: *`object`*

*Defined in [user/login/login.component.ts:25](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/login/login.component.ts#L25)*

#### Type declaration

 type: `string`

 properties: `object`

 email: `object`

 format: `string`

 title: `string`

 type: `string`

 password: `object`

 title: `string`

 type: `string`

 password_repeat: `object`

 title: `string`

 type: `string`

___

___

