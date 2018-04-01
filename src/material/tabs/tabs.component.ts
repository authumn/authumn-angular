import { Component } from '@angular/core'

@Component({
  selector: 'authumn-mat-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class MaterialTabsComponent {
  navLinks = [
    {
      label: 'Login',
      path: '/user/login'
    },
    {
      label: 'Register',
      path: '/user/register'
    }
  ]
}
