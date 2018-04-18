export const schema = {
  'type': 'object',
  'properties': {
    'email': {
      'type': 'string',
      'title': 'Email',
      'format': 'email'
    },
    'password': {
      'type': 'string',
      'title': 'Password'
    },
    'password_repeat': {
      'type': 'string',
      'title': 'Repeat Password'
    }
  }
}
