[API](../README.md) > ["auth/auth.interceptor"](../modules/_auth_auth_interceptor_.md) > [AuthInterceptor](../classes/_auth_auth_interceptor_.authinterceptor.md)

# Class: AuthInterceptor

## Hierarchy

**AuthInterceptor**

## Implements

* `HttpInterceptor`

## Index

### Constructors

* [constructor](_auth_auth_interceptor_.authinterceptor.md#constructor)

### Properties

* [authService](_auth_auth_interceptor_.authinterceptor.md#authservice)

### Methods

* [intercept](_auth_auth_interceptor_.authinterceptor.md#intercept)
* [isResourceUrl](_auth_auth_interceptor_.authinterceptor.md#isresourceurl)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AuthInterceptor**(injector: *`Injector`*, authConfig: *[AuthConfig](_auth_auth_config_.authconfig.md)*): [AuthInterceptor](_auth_auth_interceptor_.authinterceptor.md)

*Defined in [auth/auth.interceptor.ts:12](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.interceptor.ts#L12)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| injector | `Injector` | 
| authConfig | [AuthConfig](_auth_auth_config_.authconfig.md) | 

**Returns:** [AuthInterceptor](_auth_auth_interceptor_.authinterceptor.md)

___

## Properties

<a id="authservice"></a>

###  authService

**● authService**: *[AuthService](_auth_auth_service_.authservice.md)*

*Defined in [auth/auth.interceptor.ts:12](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.interceptor.ts#L12)*

___

## Methods

<a id="intercept"></a>

###  intercept

▸ **intercept**(request: *`HttpRequest`<[AnyData](../interfaces/_auth_auth_interceptor_.anydata.md)>*, next: *`HttpHandler`*): `Observable`<`HttpEvent`<[AnyData](../interfaces/_auth_auth_interceptor_.anydata.md)>>

*Defined in [auth/auth.interceptor.ts:24](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.interceptor.ts#L24)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| request | `HttpRequest`<[AnyData](../interfaces/_auth_auth_interceptor_.anydata.md)> | 
| next | `HttpHandler` | 

**Returns:** `Observable`<`HttpEvent`<[AnyData](../interfaces/_auth_auth_interceptor_.anydata.md)>>

___
<a id="isresourceurl"></a>

###  isResourceUrl

▸ **isResourceUrl**(url: *`string`*): `boolean`

*Defined in [auth/auth.interceptor.ts:18](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.interceptor.ts#L18)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` | 

**Returns:** `boolean`

___

