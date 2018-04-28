[API](../README.md) > ["auth.guard"](../modules/_auth_guard_.md) > [AuthGuard](../classes/_auth_guard_.authguard.md)

# Class: AuthGuard

## Hierarchy

**AuthGuard**

## Implements

* `CanActivate`

## Index

### Constructors

* [constructor](_auth_guard_.authguard.md#constructor)

### Methods

* [canActivate](_auth_guard_.authguard.md#canactivate)
* [canActivateChild](_auth_guard_.authguard.md#canactivatechild)
* [protectedRoute](_auth_guard_.authguard.md#protectedroute)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AuthGuard**(router: *`Router`*, authService: *[AuthService](_auth_service_.authservice.md)*, authConfig: *[AuthConfig](_auth_config_.authconfig.md)*, store: *`Store`*): [AuthGuard](_auth_guard_.authguard.md)

*Defined in [auth.guard.ts:9](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/auth/auth.guard.ts#L9)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| router | `Router` | 
| authService | [AuthService](_auth_service_.authservice.md) | 
| authConfig | [AuthConfig](_auth_config_.authconfig.md) | 
| store | `Store` | 

**Returns:** [AuthGuard](_auth_guard_.authguard.md)

___

## Methods

<a id="canactivate"></a>

###  canActivate

▸ **canActivate**(route: *`ActivatedRouteSnapshot`*, state: *`RouterStateSnapshot`*): `boolean`

*Defined in [auth.guard.ts:31](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/auth/auth.guard.ts#L31)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| route | `ActivatedRouteSnapshot` | 
| state | `RouterStateSnapshot` | 

**Returns:** `boolean`

___
<a id="canactivatechild"></a>

###  canActivateChild

▸ **canActivateChild**(route: *`ActivatedRouteSnapshot`*, state: *`RouterStateSnapshot`*): `boolean`

*Defined in [auth.guard.ts:38](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/auth/auth.guard.ts#L38)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| route | `ActivatedRouteSnapshot` | 
| state | `RouterStateSnapshot` | 

**Returns:** `boolean`

___
<a id="protectedroute"></a>

###  protectedRoute

▸ **protectedRoute**(url: *`string`*): `boolean`

*Defined in [auth.guard.ts:18](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/auth/auth.guard.ts#L18)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` | 

**Returns:** `boolean`

___

