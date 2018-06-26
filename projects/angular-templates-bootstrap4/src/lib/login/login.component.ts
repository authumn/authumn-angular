import { Component } from '@angular/core'

@Component({
  selector: 'authumn-bs4-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class Bootstrap4LoginComponent {
  profileImage = '//ssl.gstatic.com/accounts/ui/avatar_2x.png'
  introText = 'Sign in to access your account'
  socialButtons = []
}
