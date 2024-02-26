import { getCookie } from 'cookies-next'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const hasLogged = !!getCookie('token', { cookies })

  const REDIRECT_ROUTE_LOGGED = new URL(
    '/middleware-example/protected-route',
    request.nextUrl,
  )
  const REDIRECT_ROUTE_PUBLIC = new URL(
    '/middleware-example/home',
    request.nextUrl,
  )

  if (hasLogged) {
    if (path === '/middleware-example/home') {
      return NextResponse.redirect(REDIRECT_ROUTE_LOGGED)
    } else {
      return NextResponse.next()
    }
  } else {
    if (path === '/middleware-example/protected-route') {
      return NextResponse.redirect(REDIRECT_ROUTE_PUBLIC)
    } else {
      return NextResponse.next()
    }
  }
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
}
