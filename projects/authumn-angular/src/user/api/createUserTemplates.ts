import { UserTemplates } from './templates'
import { TemplateSet } from '../user.module'
import { defaultComponents } from './defaultComponents'

export function createUserTemplates (
  framework = 'material-design',
  extendedComponents: TemplateSet
) {
  const components: TemplateSet = {
    ...defaultComponents[framework],
    ...extendedComponents
  }

  return () => {
    const userTemplates = new UserTemplates()

    userTemplates.register = components.register
    userTemplates.login = components.login

    return userTemplates
  }
}
