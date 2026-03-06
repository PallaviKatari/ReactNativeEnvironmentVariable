declare module "react-native-config" {
  interface Env {
    API_URL: string
    APP_ENV: string
    APP_NAME: string
  }

  const Config: Env
  export default Config
}