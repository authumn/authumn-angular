export const loginSchema = {
  type: 'object',
  properties: {
    login: {
      type: 'string',
      title: 'Username or email address',
      required: true
    },
    password: {
      type: 'string',
      title: 'Password',
      required: true
    }
  }
}
