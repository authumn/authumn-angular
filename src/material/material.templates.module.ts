import { NgModule } from '@angular/core'
import { MaterialLoginComponent } from './login/login.component'
import { MaterialRegisterComponent } from './register/register.component'
import { MaterialTabsComponent } from './tabs/tabs.component'
import { MaterialSocialComponent } from './social/social.component'
import { UserComponentsModule } from '../user/user.components.module'
import { MaterialModule } from '../user/material/index'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

@NgModule({
  // not how I first intended, but should be ok..
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
  entryComponents: [
    MaterialLoginComponent,
    MaterialRegisterComponent
  ]
})
export class MaterialTemplatesModule {}
