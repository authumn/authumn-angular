import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import {
  UserComponentsModule,
  UserTemplates
} from '@authumn/angular-user'

import { Bootstrap4LoginComponent } from './login/login.component'
import { Bootstrap4RegisterComponent } from './register/register.component'
import { Bootstrap4SocialComponent } from './social/social.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserComponentsModule
  ],
  declarations: [
    Bootstrap4LoginComponent,
    Bootstrap4RegisterComponent,
    Bootstrap4SocialComponent
  ],
  exports: [
    Bootstrap4LoginComponent,
    Bootstrap4RegisterComponent,
    Bootstrap4SocialComponent
  ],
  providers: [
    {
      provide: UserTemplates,
      useValue: {
        formFramework: 'bootstrap-4',
        login: Bootstrap4LoginComponent,
        register: Bootstrap4RegisterComponent,
        social: Bootstrap4RegisterComponent
      }
    }
  ],
  entryComponents: [
    Bootstrap4LoginComponent,
    Bootstrap4RegisterComponent
  ]
})
export class Bootstrap4TemplatesModule {}
// provide configuration with yet another forRoot() method?
