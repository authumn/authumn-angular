[API](../README.md) > ["user-routing.module"](../modules/_user_routing_module_.md)

# External module: "user-routing.module"

## Index

### Classes

* [UserRoutingModule](../classes/_user_routing_module_.userroutingmodule.md)

### Variables

* [routerModuleForChild](_user_routing_module_.md#routermoduleforchild)
* [routes](_user_routing_module_.md#routes)

---

## Variables

<a id="routermoduleforchild"></a>

### `<Const>` routerModuleForChild

**● routerModuleForChild**: *`ModuleWithProviders`* =  RouterModule.forChild(routes)

*Defined in [user-routing.module.ts:34](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/user-routing.module.ts#L34)*

___
<a id="routes"></a>

### `<Const>` routes

**● routes**: *`Routes`* =  [
  {
    path: 'user',
    children: [
      { path: '', component: UserComponent },
      {
        path: 'login',
        component: ComponentFactoryComponent,
        data: {
          template: 'login'
        }
      },
      {
        path: 'lost_password',
        component: LostPasswordComponent
      },
      {
        path: 'register',
        component: ComponentFactoryComponent,
        data: {
          template: 'register'
        }
      }
    ]
  }
]

*Defined in [user-routing.module.ts:7](https://github.com/authumn/authumn-angular/blob/04acefe/projects/authumn-angular/src/user/user-routing.module.ts#L7)*

___

