# \_auth\_auth\_guard\_.authguard

[API](../../api-1.md) &gt; ["auth/auth.guard"](../modules/_auth_auth_guard_.md) &gt; [AuthGuard](_auth_auth_guard_.authguard.md)

## Class: AuthGuard

### Hierarchy

**AuthGuard**

### Implements

* `CanActivate`

### Index

#### Constructors

* [constructor](_auth_auth_guard_.authguard.md#constructor)

#### Methods

* [canActivate](_auth_auth_guard_.authguard.md#canactivate)
* [canActivateChild](_auth_auth_guard_.authguard.md#canactivatechild)
* [protectedRoute](_auth_auth_guard_.authguard.md#protectedroute)

### Constructors

#### constructor

⊕ **new AuthGuard**\(router: `Router`, authService: [_AuthService_](_auth_auth_service_.authservice.md), authConfig: [_AuthConfig_](_auth_auth_config_.authconfig.md), store: `Store`\): [AuthGuard](_auth_auth_guard_.authguard.md)

_Defined in _[_auth/auth.guard.ts:9_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.guard.ts#L9)

**Parameters:**

| Param | Type |
| --- | --- |
| router | `Router` |
| authService | [AuthService](_auth_auth_service_.authservice.md) |
| authConfig | [AuthConfig](_auth_auth_config_.authconfig.md) |
| store | `Store` |

**Returns:** [AuthGuard](_auth_auth_guard_.authguard.md)

### Methods

#### canActivate

▸ **canActivate**\(route: `ActivatedRouteSnapshot`, state: `RouterStateSnapshot`\): `boolean`

_Defined in _[_auth/auth.guard.ts:31_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.guard.ts#L31)

**Parameters:**

| Param | Type |
| --- | --- |
| route | `ActivatedRouteSnapshot` |
| state | `RouterStateSnapshot` |

**Returns:** `boolean`

#### canActivateChild

▸ **canActivateChild**\(route: `ActivatedRouteSnapshot`, state: `RouterStateSnapshot`\): `boolean`

_Defined in _[_auth/auth.guard.ts:38_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.guard.ts#L38)

**Parameters:**

| Param | Type |
| --- | --- |
| route | `ActivatedRouteSnapshot` |
| state | `RouterStateSnapshot` |

**Returns:** `boolean`

#### protectedRoute

▸ **protectedRoute**\(url: `string`\): `boolean`

_Defined in _[_auth/auth.guard.ts:18_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/auth/auth.guard.ts#L18)

**Parameters:**

| Param | Type |
| --- | --- |
| url | `string` |

**Returns:** `boolean`

