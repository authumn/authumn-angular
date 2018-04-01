import {
  NgModule
} from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UserComponent } from './user.component'
import { LostPasswordComponent } from './lost-password/lost-password.component'
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
