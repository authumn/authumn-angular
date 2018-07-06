import { Observable } from 'rxjs/index'

export interface AuthProviderInterface {
  login: (username: string, password: string) => Observable<any>
  register?: (email: string, password: string) => void
  forgotPasswordEmail?: (email: string) => void
  forgotPasswordUser?: (username: string) => void
  logout?: () => void
}
