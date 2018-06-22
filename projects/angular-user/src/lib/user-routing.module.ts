import {
  NgModule,
  ModuleWithProviders
} from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { UserComponent } from './user.component'
import { ComponentFactoryComponent } from './api/ComponentFactory.component'

export const routes: Routes = [
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
        component: ComponentFactoryComponent
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

export const routerModuleForChild: ModuleWithProviders = RouterModule.forChild(routes)

@NgModule({
  imports: [
    routerModuleForChild
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
