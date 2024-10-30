interface ImportMetaEnv {
  readonly VITE_KAKAO_MAP_API: string
  readonly VITE_CLIENT_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface Window {
  kakao: any
}

declare module '*.png' {
  const content: string
  export default content
}
