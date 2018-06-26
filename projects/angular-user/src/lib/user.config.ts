export class UserConfig {
  loadExternalAssets?: boolean

  schemas?: {
    login: any
    register: any
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
