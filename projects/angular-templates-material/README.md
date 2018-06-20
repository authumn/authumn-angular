# Authumn Material templates

The Authumn material templates module provides 'UserTemplates' for the @authum/angular-user module.

Usage:

```typescript
import { AuthModule } from '@authumn/angular-auth'
import { UserModule } from '@authumn/angular-user'
import { MaterialTemplatesModule } from '@authumn/angular-templates-material'

@NgModule({
  imports: [
    MaterialTemplatesModule,
    AuthModule.forRoot({
      ...
    }),
    UserModule.forRoot({
      ...
    })
  ]

})
export class AppModule {}
```
