# \_auth\_auth\_interceptor\_.authinterceptor

[API](../../api-1.md) &gt; ["auth/auth.interceptor"](../modules/_auth_auth_interceptor_.md) &gt; [AuthInterceptor](_auth_auth_interceptor_.authinterceptor.md)

## Class: AuthInterceptor

### Hierarchy

**AuthInterceptor**

### Implements

* `HttpInterceptor`

### Index

#### Constructors

* [constructor](_auth_auth_interceptor_.authinterceptor.md#constructor)

#### Properties

* [authService](_auth_auth_interceptor_.authinterceptor.md#authservice)

#### Methods

* [intercept](_auth_auth_interceptor_.authinterceptor.md#intercept)
* [isResourceUrl](_auth_auth_interceptor_.authinterceptor.md#isresourceurl)

### Constructors

#### constructor

⊕ **new AuthInterceptor**\(injector: `Injector`, authConfig: [_AuthConfig_](_auth_auth_config_.authconfig.md)\): [AuthInterceptor](_auth_auth_interceptor_.authinterceptor.md)

_Defined in _[_auth/auth.interceptor.ts:12_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.interceptor.ts#L12)

**Parameters:**

| Param | Type |
| --- | --- |
| injector | `Injector` |
| authConfig | [AuthConfig](_auth_auth_config_.authconfig.md) |

**Returns:** [AuthInterceptor](_auth_auth_interceptor_.authinterceptor.md)

### Properties

#### authService

**● authService**: [_AuthService_](_auth_auth_service_.authservice.md)

_Defined in _[_auth/auth.interceptor.ts:12_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.interceptor.ts#L12)

### Methods

#### intercept

▸ **intercept**\(request: `HttpRequest`_&lt;_[_AnyData_](../interfaces/_auth_auth_interceptor_.anydata.md)_&gt;_, next: `HttpHandler`\): `Observable`&lt;`HttpEvent`&lt;[AnyData](../interfaces/_auth_auth_interceptor_.anydata.md)&gt;&gt;

_Defined in _[_auth/auth.interceptor.ts:24_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.interceptor.ts#L24)

**Parameters:**

| Param | Type |
| --- | --- |
| request | `HttpRequest`&lt;[AnyData](../interfaces/_auth_auth_interceptor_.anydata.md)&gt; |
| next | `HttpHandler` |

**Returns:** `Observable`&lt;`HttpEvent`&lt;[AnyData](../interfaces/_auth_auth_interceptor_.anydata.md)&gt;&gt;

#### isResourceUrl

▸ **isResourceUrl**\(url: `string`\): `boolean`

_Defined in _[_auth/auth.interceptor.ts:18_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.interceptor.ts#L18)

**Parameters:**

| Param | Type |
| --- | --- |
| url | `string` |

**Returns:** `boolean`

