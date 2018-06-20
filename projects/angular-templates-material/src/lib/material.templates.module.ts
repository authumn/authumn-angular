import { NgModule } from '@angular/core'

import {
  UserComponentsModule,
  UserTemplates
} from '@authumn/angular-user'

import { MaterialLoginComponent } from './login/login.component'
import { MaterialRegisterComponent } from './register/register.component'
import { MaterialTabsComponent } from './tabs/tabs.component'
import { MaterialSocialComponent } from './social/social.component'
import { MaterialModule } from './material.module'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    UserComponentsModule
  ],
  declarations: [
    MaterialLoginComponent,
    MaterialRegisterComponent,
    MaterialTabsComponent,
    MaterialSocialComponent
  ],
  exports: [
    MaterialLoginComponent,
    MaterialRegisterComponent,
    MaterialTabsComponent,
    MaterialSocialComponent
  ],
  providers: [
    {
      provide: UserTemplates,
      useValue: {
        formFramework: 'material-design',
        register: MaterialRegisterComponent,
        login: MaterialLoginComponent
      }
    }
  ],
  entryComponents: [
    MaterialLoginComponent,
    MaterialRegisterComponent
  ]
})
export class MaterialTemplatesModule {}
// meest logische is ze te providen met een token
