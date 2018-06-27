import { Component, OnInit } from '@angular/core'
import {
  AuthConfig,
  AuthService,
  AuthState,
  AuthUser
} from '@authumn/angular-auth'
import { Observable } from 'rxjs/Rx'
import { Select } from '@ngxs/store'

@Component({
  selector: 'app-authenticated',
  template: `
    <div
      *ngIf="(user$ | async) as user"
      class="jumbotron text-light bg-dark">
      <h2>Hello {{user.login}},</h2>
      <p>
        You are now logged in!
      </p>
      <p>
        authService.getUsername(): <code>{{authService.getUsername()}}</code>
        user$.login: <code>{{user.login}}</code>
      </p>
      <p>
        authService.getUserId(): <code>{{authService.getUserId()}}</code>
        user$.id: <code>{{user.id}}</code>
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
export class AuthenticatedComponent implements OnInit {
  constructor (
    public authService: AuthService,
    public authConfig: AuthConfig
  ) {}

  @Select(AuthState.getUser) user$: Observable<AuthUser>

  ngOnInit () {
    // Re-authenticate using the token
    this.authService.refresh()
  }

  getDecodedToken () {
    return JSON.stringify(this.authService.getDecodedToken(),null, 2)
  }
}
