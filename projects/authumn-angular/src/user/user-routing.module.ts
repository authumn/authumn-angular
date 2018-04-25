import {
  ANALYZE_FOR_ENTRY_COMPONENTS,
  NgModule
} from '@angular/core'
import { Routes, RouterModule, ROUTES } from '@angular/router'
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
  // imports: [RouterModule.forChild(routes)],
  // @see: https://github.com/dherges/ng-packagr/issues/778
  imports: [
    {
      ngModule: RouterModule,
      providers: [
        {
          provide: ANALYZE_FOR_ENTRY_COMPONENTS,
          multi: true,
          useValue: routes
        },
        {
          provide: ROUTES,
          multi: true,
          useValue: routes
        }
      ]
    }
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
