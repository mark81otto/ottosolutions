import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Match all paths except api, _next, _vercel and files (any path with a dot like favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
