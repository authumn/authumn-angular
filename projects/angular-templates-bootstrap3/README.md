# Authumn Bootstrap3 templates

The bootstrap3 templates provides 'UserTemplates' for the @authum/angular-user module.

Usage:

```typescript
import { AuthModule } from '@authumn/angular-auth'
import { UserModule } from '@authumn/angular-user'
import { Bootstrap3TemplatesModule } from '@authumn/angular-templates-bootstrap3'

@NgModule({
  imports: [
    Bootstrap3TemplatesModule,
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
