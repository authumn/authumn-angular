export const registerSchema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      title: 'Username',
      required: true
    },
    email: {
      type: 'string',
      title: 'Email',
      format: 'email',
      required: true
    },
    password: {
      type: 'string',
      title: 'Password',
      required: true
    },
    password_repeat: {
      type: 'string',
      title: 'Confirm password',
      required: true
    }
  }
}
