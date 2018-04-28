# \_user\_user\_routing\_module\_

[API](../../api-1.md) &gt; ["user/user-routing.module"](_user_user_routing_module_.md)

## External module: "user/user-routing.module"

### Index

#### Classes

* [UserRoutingModule](../classes/_user_user_routing_module_.userroutingmodule.md)

#### Variables

* [routerModuleForChild](_user_user_routing_module_.md#routermoduleforchild)
* [routes](_user_user_routing_module_.md#routes)

### Variables

#### `<Const>` routerModuleForChild

**● routerModuleForChild**: `ModuleWithProviders` = RouterModule.forChild\(routes\)

_Defined in _[_user/user-routing.module.ts:34_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/user-routing.module.ts#L34)

#### `<Const>` routes

**● routes**: [_Routes_](_auth_auth_config_.md#routes) = \[ { path: 'user', children: \[ { path: '', component: UserComponent }, { path: 'login', component: ComponentFactoryComponent, data: { template: 'login' } }, { path: 'lost\_password', component: LostPasswordComponent }, { path: 'register', component: ComponentFactoryComponent, data: { template: 'register' } } \] } \]

_Defined in _[_user/user-routing.module.ts:7_](https://github.com/authumn/authumn-angular/blob/93ce399/projects/authumn-angular/src/user/user-routing.module.ts#L7)

