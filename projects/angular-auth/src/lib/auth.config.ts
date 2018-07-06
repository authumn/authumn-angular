export type Api = {
  loginUrl: string
  registerUrl: string
}

export type Routes = {
  login: string[]
  return: string[]
}

export type ResourceServers = string[]

export class AuthConfig {
  api: Api = {
    loginUrl: '',
    registerUrl: ''
  }

  resourceServers: ResourceServers = []

  routes: Routes = {
    login: ['/user', 'login'],
    return: ['/']
  }
}
