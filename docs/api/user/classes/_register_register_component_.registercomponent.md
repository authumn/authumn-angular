[API](../README.md) > ["register/register.component"](../modules/_register_register_component_.md) > [RegisterComponent](../classes/_register_register_component_.registercomponent.md)

# Class: RegisterComponent

## Hierarchy

**RegisterComponent**

## Index

### Constructors

* [constructor](_register_register_component_.registercomponent.md#constructor)

### Properties

* [config](_register_register_component_.registercomponent.md#config)
* [formActive](_register_register_component_.registercomponent.md#formactive)
* [formOptions](_register_register_component_.registercomponent.md#formoptions)
* [loading](_register_register_component_.registercomponent.md#loading)
* [model](_register_register_component_.registercomponent.md#model)

### Methods

* [isValid](_register_register_component_.registercomponent.md#isvalid)
* [onChanges](_register_register_component_.registercomponent.md#onchanges)
* [onSubmit](_register_register_component_.registercomponent.md#onsubmit)
* [register](_register_register_component_.registercomponent.md#register)
* [validationErrors](_register_register_component_.registercomponent.md#validationerrors)

### Object literals

* [formObject](_register_register_component_.registercomponent.md#formobject)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RegisterComponent**(config: *`AuthConfig`*, store: *`Store`*): [RegisterComponent](_register_register_component_.registercomponent.md)

*Defined in [register/register.component.ts:22](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/register/register.component.ts#L22)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| config | `AuthConfig` | 
| store | `Store` | 

**Returns:** [RegisterComponent](_register_register_component_.registercomponent.md)

___

## Properties

<a id="config"></a>

###  config

**● config**: *`AuthConfig`*

*Defined in [register/register.component.ts:25](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/register/register.component.ts#L25)*

___
<a id="formactive"></a>

###  formActive

**● formActive**: *`boolean`* = true

*Defined in [register/register.component.ts:17](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/register/register.component.ts#L17)*

___
<a id="formoptions"></a>

###  formOptions

**● formOptions**: *`object`*

*Defined in [register/register.component.ts:22](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/register/register.component.ts#L22)*

#### Type declaration

___
<a id="loading"></a>

###  loading

**● loading**: *`boolean`* = true

*Defined in [register/register.component.ts:16](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/register/register.component.ts#L16)*

___
<a id="model"></a>

###  model

**● model**: *`any`*

*Defined in [register/register.component.ts:15](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/register/register.component.ts#L15)*

___

## Methods

<a id="isvalid"></a>

###  isValid

▸ **isValid**(event: *`any`*): `boolean`

*Defined in [register/register.component.ts:48](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/register/register.component.ts#L48)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `any` | 

**Returns:** `boolean`

___
<a id="onchanges"></a>

###  onChanges

▸ **onChanges**(event: *`any`*): `void`

*Defined in [register/register.component.ts:44](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/register/register.component.ts#L44)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `any` | 

**Returns:** `void`

___
<a id="onsubmit"></a>

###  onSubmit

▸ **onSubmit**(event: *`any`*): `void`

*Defined in [register/register.component.ts:35](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/register/register.component.ts#L35)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `any` | 

**Returns:** `void`

___
<a id="register"></a>

###  register

▸ **register**(): `void`

*Defined in [register/register.component.ts:29](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/register/register.component.ts#L29)*

**Returns:** `void`

___
<a id="validationerrors"></a>

###  validationErrors

▸ **validationErrors**(event: *`any`*): `void`

*Defined in [register/register.component.ts:40](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/register/register.component.ts#L40)*

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

*Defined in [register/register.component.ts:18](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/register/register.component.ts#L18)*

<a id="formobject.layout"></a>

####  layout

**● layout**: *(`object` |`object` |`object`)[]*

*Defined in [register/register.component.ts:19](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/register/register.component.ts#L19)*

___
<a id="formobject.schema"></a>

####  schema

**● schema**: *`object`*

*Defined in [register/register.component.ts:20](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/register/register.component.ts#L20)*

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

