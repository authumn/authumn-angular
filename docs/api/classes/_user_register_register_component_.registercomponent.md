[API](../README.md) > ["user/register/register.component"](../modules/_user_register_register_component_.md) > [RegisterComponent](../classes/_user_register_register_component_.registercomponent.md)

# Class: RegisterComponent

## Hierarchy

**RegisterComponent**

## Index

### Constructors

* [constructor](_user_register_register_component_.registercomponent.md#constructor)

### Properties

* [config](_user_register_register_component_.registercomponent.md#config)
* [formActive](_user_register_register_component_.registercomponent.md#formactive)
* [formOptions](_user_register_register_component_.registercomponent.md#formoptions)
* [loading](_user_register_register_component_.registercomponent.md#loading)
* [model](_user_register_register_component_.registercomponent.md#model)

### Methods

* [isValid](_user_register_register_component_.registercomponent.md#isvalid)
* [onChanges](_user_register_register_component_.registercomponent.md#onchanges)
* [onSubmit](_user_register_register_component_.registercomponent.md#onsubmit)
* [register](_user_register_register_component_.registercomponent.md#register)
* [validationErrors](_user_register_register_component_.registercomponent.md#validationerrors)

### Object literals

* [formObject](_user_register_register_component_.registercomponent.md#formobject)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RegisterComponent**(config: *[AuthConfig](_auth_auth_config_.authconfig.md)*, store: *`Store`*): [RegisterComponent](_user_register_register_component_.registercomponent.md)

*Defined in [user/register/register.component.ts:22](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L22)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| config | [AuthConfig](_auth_auth_config_.authconfig.md) | 
| store | `Store` | 

**Returns:** [RegisterComponent](_user_register_register_component_.registercomponent.md)

___

## Properties

<a id="config"></a>

###  config

**● config**: *[AuthConfig](_auth_auth_config_.authconfig.md)*

*Defined in [user/register/register.component.ts:25](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L25)*

___
<a id="formactive"></a>

###  formActive

**● formActive**: *`boolean`* = true

*Defined in [user/register/register.component.ts:17](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L17)*

___
<a id="formoptions"></a>

###  formOptions

**● formOptions**: *`object`*

*Defined in [user/register/register.component.ts:22](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L22)*

#### Type declaration

___
<a id="loading"></a>

###  loading

**● loading**: *`boolean`* = true

*Defined in [user/register/register.component.ts:16](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L16)*

___
<a id="model"></a>

###  model

**● model**: *`any`*

*Defined in [user/register/register.component.ts:15](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L15)*

___

## Methods

<a id="isvalid"></a>

###  isValid

▸ **isValid**(event: *`any`*): `boolean`

*Defined in [user/register/register.component.ts:48](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L48)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `any` | 

**Returns:** `boolean`

___
<a id="onchanges"></a>

###  onChanges

▸ **onChanges**(event: *`any`*): `void`

*Defined in [user/register/register.component.ts:44](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L44)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `any` | 

**Returns:** `void`

___
<a id="onsubmit"></a>

###  onSubmit

▸ **onSubmit**(event: *`any`*): `void`

*Defined in [user/register/register.component.ts:35](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L35)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `any` | 

**Returns:** `void`

___
<a id="register"></a>

###  register

▸ **register**(): `void`

*Defined in [user/register/register.component.ts:29](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L29)*

**Returns:** `void`

___
<a id="validationerrors"></a>

###  validationErrors

▸ **validationErrors**(event: *`any`*): `void`

*Defined in [user/register/register.component.ts:40](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L40)*

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

*Defined in [user/register/register.component.ts:18](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L18)*

<a id="formobject.layout"></a>

####  layout

**● layout**: *(`object` |`object` |`object`)[]*

*Defined in [user/register/register.component.ts:19](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L19)*

___
<a id="formobject.schema"></a>

####  schema

**● schema**: *`object`*

*Defined in [user/register/register.component.ts:20](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/register/register.component.ts#L20)*

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

