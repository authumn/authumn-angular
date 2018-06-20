import { Observable } from 'rxjs/index'

export interface AuthProviderInterface {
  login: (username: string, password: string) => Observable<any>
  register?: (email, password) => void
  forgotPasswordEmail?: (email) => void
  forgotPasswordUser?: (username) => void
  logout?: () => void
}
