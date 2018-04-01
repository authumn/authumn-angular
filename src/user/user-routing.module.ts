import { NgModule } from '@angular/core'
import { Routes, RouterModule, Route } from '@angular/router'
import { UserComponent } from './user.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { LostPasswordComponent } from './lost-password/lost-password.component'

export const routes: Routes = [
  {
    path: 'user',
    children: [
      { path: '', component: UserComponent },
      { path: 'login', component: LoginComponent },
      { path: 'lost_password', component: LostPasswordComponent },
      { path: 'register', component: RegisterComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
