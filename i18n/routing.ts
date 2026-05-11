import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['de', 'en', 'es'],
  defaultLocale: 'de',
  localePrefix: 'as-needed', // / = DE, /en, /es
})

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
