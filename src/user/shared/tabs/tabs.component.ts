import { Component } from '@angular/core'

@Component({
  selector: 'authumn-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
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
