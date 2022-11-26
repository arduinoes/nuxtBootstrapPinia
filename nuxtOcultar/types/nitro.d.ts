// Generated by nitro
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/__nuxt_error': Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>
  }
}
declare global {
  const appendHeader: typeof import('h3')['appendHeader']
  const appendHeaders: typeof import('h3')['appendHeaders']
  const appendResponseHeader: typeof import('h3')['appendResponseHeader']
  const appendResponseHeaders: typeof import('h3')['appendResponseHeaders']
  const assertMethod: typeof import('h3')['assertMethod']
  const cachedEventHandler: typeof import('/Users/arduino/Desktop/nuxt-app-boostrap-pinia/node_modules/nitropack/dist/runtime')['cachedEventHandler']
  const cachedFunction: typeof import('/Users/arduino/Desktop/nuxt-app-boostrap-pinia/node_modules/nitropack/dist/runtime')['cachedFunction']
  const callNodeListener: typeof import('h3')['callNodeListener']
  const createApp: typeof import('h3')['createApp']
  const createAppEventHandler: typeof import('h3')['createAppEventHandler']
  const createError: typeof import('h3')['createError']
  const createEvent: typeof import('h3')['createEvent']
  const createRouter: typeof import('h3')['createRouter']
  const defaultContentType: typeof import('h3')['defaultContentType']
  const defineCachedEventHandler: typeof import('/Users/arduino/Desktop/nuxt-app-boostrap-pinia/node_modules/nitropack/dist/runtime')['defineCachedEventHandler']
  const defineCachedFunction: typeof import('/Users/arduino/Desktop/nuxt-app-boostrap-pinia/node_modules/nitropack/dist/runtime')['defineCachedFunction']
  const defineEventHandler: typeof import('h3')['defineEventHandler']
  const defineLazyEventHandler: typeof import('h3')['defineLazyEventHandler']
  const defineNitroPlugin: typeof import('/Users/arduino/Desktop/nuxt-app-boostrap-pinia/node_modules/nitropack/dist/runtime')['defineNitroPlugin']
  const defineNodeListener: typeof import('h3')['defineNodeListener']
  const defineNodeMiddleware: typeof import('h3')['defineNodeMiddleware']
  const defineRenderHandler: typeof import('/Users/arduino/Desktop/nuxt-app-boostrap-pinia/node_modules/nitropack/dist/runtime')['defineRenderHandler']
  const deleteCookie: typeof import('h3')['deleteCookie']
  const dynamicEventHandler: typeof import('h3')['dynamicEventHandler']
  const eventHandler: typeof import('h3')['eventHandler']
  const fromNodeMiddleware: typeof import('h3')['fromNodeMiddleware']
  const getCookie: typeof import('h3')['getCookie']
  const getHeader: typeof import('h3')['getHeader']
  const getHeaders: typeof import('h3')['getHeaders']
  const getMethod: typeof import('h3')['getMethod']
  const getQuery: typeof import('h3')['getQuery']
  const getRequestHeader: typeof import('h3')['getRequestHeader']
  const getRequestHeaders: typeof import('h3')['getRequestHeaders']
  const getResponseHeader: typeof import('h3')['getResponseHeader']
  const getResponseHeaders: typeof import('h3')['getResponseHeaders']
  const getRouteRules: typeof import('/Users/arduino/Desktop/nuxt-app-boostrap-pinia/node_modules/nitropack/dist/runtime')['getRouteRules']
  const getRouterParam: typeof import('h3')['getRouterParam']
  const getRouterParams: typeof import('h3')['getRouterParams']
  const handleCacheHeaders: typeof import('h3')['handleCacheHeaders']
  const isError: typeof import('h3')['isError']
  const isEvent: typeof import('h3')['isEvent']
  const isEventHandler: typeof import('h3')['isEventHandler']
  const isMethod: typeof import('h3')['isMethod']
  const isStream: typeof import('h3')['isStream']
  const lazyEventHandler: typeof import('h3')['lazyEventHandler']
  const nitroPlugin: typeof import('/Users/arduino/Desktop/nuxt-app-boostrap-pinia/node_modules/nitropack/dist/runtime')['nitroPlugin']
  const parseCookies: typeof import('h3')['parseCookies']
  const promisifyNodeListener: typeof import('h3')['promisifyNodeListener']
  const proxyRequest: typeof import('h3')['proxyRequest']
  const readBody: typeof import('h3')['readBody']
  const readRawBody: typeof import('h3')['readRawBody']
  const send: typeof import('h3')['send']
  const sendError: typeof import('h3')['sendError']
  const sendProxy: typeof import('h3')['sendProxy']
  const sendRedirect: typeof import('h3')['sendRedirect']
  const sendStream: typeof import('h3')['sendStream']
  const setCookie: typeof import('h3')['setCookie']
  const setHeader: typeof import('h3')['setHeader']
  const setHeaders: typeof import('h3')['setHeaders']
  const setResponseHeader: typeof import('h3')['setResponseHeader']
  const setResponseHeaders: typeof import('h3')['setResponseHeaders']
  const toEventHandler: typeof import('h3')['toEventHandler']
  const toNodeListener: typeof import('h3')['toNodeListener']
  const useBase: typeof import('h3')['useBase']
  const useNitroApp: typeof import('/Users/arduino/Desktop/nuxt-app-boostrap-pinia/node_modules/nitropack/dist/runtime')['useNitroApp']
  const useRuntimeConfig: typeof import('/Users/arduino/Desktop/nuxt-app-boostrap-pinia/node_modules/nitropack/dist/runtime')['useRuntimeConfig']
  const useStorage: typeof import('/Users/arduino/Desktop/nuxt-app-boostrap-pinia/node_modules/nitropack/dist/runtime')['useStorage']
  const writeEarlyHints: typeof import('h3')['writeEarlyHints']
}
export {}