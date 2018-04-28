[API](../README.md) > ["services/user.service"](../modules/_services_user_service_.md) > [UserService](../classes/_services_user_service_.userservice.md)

# Class: UserService

## Hierarchy

**UserService**

## Index

### Constructors

* [constructor](_services_user_service_.userservice.md#constructor)

### Methods

* [create](_services_user_service_.userservice.md#create)
* [delete](_services_user_service_.userservice.md#delete)
* [getAll](_services_user_service_.userservice.md#getall)
* [getById](_services_user_service_.userservice.md#getbyid)
* [update](_services_user_service_.userservice.md#update)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new UserService**(http: *`HttpClient`*, userConfig: *[UserConfig](_user_config_.userconfig.md)*): [UserService](_services_user_service_.userservice.md)

*Defined in [services/user.service.ts:10](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/services/user.service.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| http | `HttpClient` | 
| userConfig | [UserConfig](_user_config_.userconfig.md) | 

**Returns:** [UserService](_services_user_service_.userservice.md)

___

## Methods

<a id="create"></a>

###  create

▸ **create**(user: *[RegistrationPayload](_user_actions_.registrationpayload.md)*): `Observable`<`Object`>

*Defined in [services/user.service.ts:24](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/services/user.service.ts#L24)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| user | [RegistrationPayload](_user_actions_.registrationpayload.md) | 

**Returns:** `Observable`<`Object`>

___
<a id="delete"></a>

###  delete

▸ **delete**(_id: *`string`*): `Observable`<`Object`>

*Defined in [services/user.service.ts:32](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/services/user.service.ts#L32)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| _id | `string` | 

**Returns:** `Observable`<`Object`>

___
<a id="getall"></a>

###  getAll

▸ **getAll**(): `Observable`<[User](_models_user_.user.md)[]>

*Defined in [services/user.service.ts:16](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/services/user.service.ts#L16)*

**Returns:** `Observable`<[User](_models_user_.user.md)[]>

___
<a id="getbyid"></a>

###  getById

▸ **getById**(id: *`any`*): `Observable`<[User](_models_user_.user.md)>

*Defined in [services/user.service.ts:20](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/services/user.service.ts#L20)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `any` | 

**Returns:** `Observable`<[User](_models_user_.user.md)>

___
<a id="update"></a>

###  update

▸ **update**(user: *[User](_models_user_.user.md)*): `Observable`<`Object`>

*Defined in [services/user.service.ts:28](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/services/user.service.ts#L28)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| user | [User](_models_user_.user.md) | 

**Returns:** `Observable`<`Object`>

___

