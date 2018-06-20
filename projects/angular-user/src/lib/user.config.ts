export class UserConfig {
  loadExternalAssets?: boolean

  schemas?: {
    user: any
  }

  layout?: {
    register?: any,
    login?: any
  }

  api: {
    profileUrl: string,
    registerUrl: string
  }
}
