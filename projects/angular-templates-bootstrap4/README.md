# Authumn Bootstrap4 templates

The bootstrap4 templates provides 'UserTemplates' for the @authum/angular-user module.

Usage:

```typescript
import { AuthModule } from '@authumn/angular-auth'
import { UserModule } from '@authumn/angular-user'
import { Bootstrap4TemplatesModule } from '@authumn/angular-templates-bootstrap4'

@NgModule({
  imports: [
    Bootstrap4TemplatesModule,
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
