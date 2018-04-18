import { AuthAction, AuthActions, RedirectPayload } from './auth.actions'
import { UserActions } from '../user/user.actions'
import { initialAuthState, AuthState } from './auth.state'

export function reducers (state = initialAuthState , action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActions.AUTHENTICATION_REDIRECT:
      return {
        ...state,
        returnUrl: (action.payload as RedirectPayload).returnUrl
      }
    case AuthActions.AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload as boolean
      }

    case UserActions.LOGOUT:
      return {
        ...state,
        isAuthenticated: false
      }

    default:
      return state
  }
}
