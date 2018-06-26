import { Component } from '@angular/core'
import { AuthService } from '@authumn/angular-auth'

@Component({
  selector: 'app-authenticated',
  template: `
    <div class="well">
      <h1>Hello {{authService.getUsername()}},</h1>
      <p>
        You are now logged in.
      </p>
      <h3>UserId:</h3>
      <em>
        Your userId is: {{authService.getUserId()}}.
      </em>
      
      <h3>Access Token:</h3>
      <em>
        {{authService.getToken()}}.
      </em>
    </div>
  ` ,
  styles: [`
  `]
})
export class AuthenticatedComponent {
  constructor (public authService: AuthService) {}
}
