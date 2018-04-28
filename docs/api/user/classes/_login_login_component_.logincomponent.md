[API](../README.md) > ["login/login.component"](../modules/_login_login_component_.md) > [LoginComponent](../classes/_login_login_component_.logincomponent.md)

# Class: LoginComponent

The login component

## Hierarchy

**LoginComponent**

## Implements

* `OnInit`

## Index

### Constructors

* [constructor](_login_login_component_.logincomponent.md#constructor)

### Properties

* [formActive](_login_login_component_.logincomponent.md#formactive)
* [formOptions](_login_login_component_.logincomponent.md#formoptions)
* [loading](_login_login_component_.logincomponent.md#loading)
* [model](_login_login_component_.logincomponent.md#model)

### Methods

* [isValid](_login_login_component_.logincomponent.md#isvalid)
* [login](_login_login_component_.logincomponent.md#login)
* [ngOnInit](_login_login_component_.logincomponent.md#ngoninit)
* [onChanges](_login_login_component_.logincomponent.md#onchanges)
* [onSubmit](_login_login_component_.logincomponent.md#onsubmit)
* [validationErrors](_login_login_component_.logincomponent.md#validationerrors)

### Object literals

* [formObject](_login_login_component_.logincomponent.md#formobject)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new LoginComponent**(route: *`ActivatedRoute`*, config: *[UserConfig](_user_config_.userconfig.md)*, router: *`Router`*, store: *`Store`*): [LoginComponent](_login_login_component_.logincomponent.md)

*Defined in [login/login.component.ts:27](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/login/login.component.ts#L27)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| route | `ActivatedRoute` | 
| config | [UserConfig](_user_config_.userconfig.md) | 
| router | `Router` | 
| store | `Store` | 

**Returns:** [LoginComponent](_login_login_component_.logincomponent.md)

___

## Properties

<a id="formactive"></a>

###  formActive

**● formActive**: *`boolean`* = true

*Defined in [login/login.component.ts:22](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/login/login.component.ts#L22)*

___
<a id="formoptions"></a>

###  formOptions

**● formOptions**: *`object`*

*Defined in [login/login.component.ts:27](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/login/login.component.ts#L27)*

#### Type declaration

___
<a id="loading"></a>

###  loading

**● loading**: *`boolean`* = true

*Defined in [login/login.component.ts:20](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/login/login.component.ts#L20)*

___
<a id="model"></a>

###  model

**● model**: *`any`*

*Defined in [login/login.component.ts:19](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/login/login.component.ts#L19)*

___

## Methods

<a id="isvalid"></a>

###  isValid

▸ **isValid**(event: *`any`*): `boolean`

*Defined in [login/login.component.ts:61](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/login/login.component.ts#L61)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `any` | 

**Returns:** `boolean`

___
<a id="login"></a>

###  login

▸ **login**(): `void`

*Defined in [login/login.component.ts:40](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/login/login.component.ts#L40)*

**Returns:** `void`

___
<a id="ngoninit"></a>

###  ngOnInit

▸ **ngOnInit**(): `void`

*Defined in [login/login.component.ts:36](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/login/login.component.ts#L36)*

**Returns:** `void`

___
<a id="onchanges"></a>

###  onChanges

▸ **onChanges**(event: *`any`*): `void`

*Defined in [login/login.component.ts:57](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/login/login.component.ts#L57)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `any` | 

**Returns:** `void`

___
<a id="onsubmit"></a>

###  onSubmit

▸ **onSubmit**(event: *`any`*): `void`

*Defined in [login/login.component.ts:49](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/login/login.component.ts#L49)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `any` | 

**Returns:** `void`

___
<a id="validationerrors"></a>

###  validationErrors

▸ **validationErrors**(event: *`any`*): `void`

*Defined in [login/login.component.ts:53](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/login/login.component.ts#L53)*

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

*Defined in [login/login.component.ts:23](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/login/login.component.ts#L23)*

<a id="formobject.layout"></a>

####  layout

**● layout**: *(`object` |`object` |`object`)[]*

*Defined in [login/login.component.ts:24](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/login/login.component.ts#L24)*

___
<a id="formobject.schema"></a>

####  schema

**● schema**: *`object`*

*Defined in [login/login.component.ts:25](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/login/login.component.ts#L25)*

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

