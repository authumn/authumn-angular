# Configuration

```typescript
export type Api = {
  loginUrl: string
  registerUrl: string
}

export type Routes = {
  login: string[]
  return: string[]
}

export type ResourceServers = string[]

/**
 * Authentication Configuration
 */
export class AuthConfig {
  /**
   * Url of the authentication server.
   */
  api: Api
  /**
   * List of servers to which the authentication header is to be send.
   */
  resourceServers: ResourceServers
  /**
   * Routes
   */
  routes: Routes
}
```
