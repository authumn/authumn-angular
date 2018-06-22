export class UserConfig {
  loadExternalAssets?: boolean

  schemas?: {
    user: any
  }

  layout?: {
    register?: any,
    login?: any
    lostPassword?: any
  }

  api: {
    profileUrl: string,
    registerUrl: string
  }
}
