export const schema = {
  'type': 'object',
  'properties': {
    'username': {
      'type': 'string',
      'title': 'Username'
    },
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
