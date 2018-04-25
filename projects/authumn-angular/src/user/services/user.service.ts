import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/index'

import { User } from '../models/index'
import { UserConfig } from '../user.config'
import { RegistrationPayload } from '../user.actions'

@Injectable()
export class UserService {
  constructor (
    private http: HttpClient,
    private userConfig: UserConfig
  ) { }

  getAll (): Observable<User[]> {
    return this.http.get<User[]>(this.userConfig.api.url + '/user')
  }

  getById (id): Observable<User> {
    return this.http.get<User>(this.userConfig.api.url + '/user/' + id)
  }

  create (user: RegistrationPayload) {
    return this.http.post(this.userConfig.api.registerUrl, user)
  }

  update (user: User) {
    return this.http.put(this.userConfig.api.url + '/user/' + user._id, user)
  }

  delete (_id: string) {
    return this.http.delete(this.userConfig.api.url + '/user/' + _id)
  }
}
