// TODO: Models should always be generated from the json schema.
export class User {
  _id: string
  username: string
  password: string
  firstName: string
  lastName: string
}

export class UserRegister {
  username: string
  password: string
  firstName?: string
  lastName?: string
}
