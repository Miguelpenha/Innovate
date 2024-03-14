declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_GTM_ID: string
        NEXT_PUBLIC_DOMAIN: string
      }
    }
}

export {}