import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ru', 'ro', 'uk'],
 
  // Used when no locale matches
  defaultLocale: 'ru'
});
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);