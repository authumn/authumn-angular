export class UserConfig {
  framework: 'bootstrap-3' | 'material-design'
  components?: any
  loadExternalAssets?: boolean
  api: {
    url: string,
    registerUrl: string
  }
}
