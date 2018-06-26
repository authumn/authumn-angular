import { Component } from '@angular/core'
import { AuthConfig, AuthService } from '@authumn/angular-auth'

@Component({
  selector: 'app-authenticated',
  template: `
    <div
      *ngIf="authService.isAuthenticated()"
      class="jumbotron text-light bg-dark">
      <h2>Hello {{authService.getUsername()}},</h2>
      <p>
        You are now logged in!
      </p>
      <p>
        Your userId is: <code>{{authService.getUserId()}}</code>
      </p>

      <p>
        Your access token: <code>{{authService.getToken()}}</code>
      </p>

      <p>
        The contents of your token is:
      </p>

      <p>
        <code>{{getDecodedToken()}}</code>
      </p>

      You should now have access to the following resourceServers:
      <ul
        *ngFor="let resourceServer of authConfig.resourceServers"
      >
        <li><code>{{resourceServer}}</code></li>
      </ul>
    </div>
  ` ,
  styles: [`
  `]
})
export class AuthenticatedComponent {
  constructor (
    public authService: AuthService,
    public authConfig: AuthConfig
  ) {}

  getDecodedToken () {
    return JSON.stringify(this.authService.getDecodedToken(),null, 2)
  }
}
