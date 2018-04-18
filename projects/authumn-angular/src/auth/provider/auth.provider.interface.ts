import { Observable } from 'rxjs/Observable'

export interface AuthProviderInterface {
  login: (username: string, password: string) => Observable<any>
  register?: (email, password) => void
  forgotPasswordEmail?: (email) => void
  forgotPasswordUser?: (username) => void
  logout?: () => void
}
