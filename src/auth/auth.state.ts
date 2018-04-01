export type AuthState = {
  isAuthenticated: boolean
  returnUrl: null | string
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  returnUrl: null
}
